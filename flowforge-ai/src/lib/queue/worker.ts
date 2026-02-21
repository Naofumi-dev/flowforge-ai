import { Worker, Queue } from 'bullmq';
import IORedis from 'ioredis';
import { WorkflowEngine } from '../engine';
import { Workflow } from '../models/Workflow';
import connectToDatabase from '../mongoose';

const redisUrl = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

const connection = new IORedis(redisUrl, {
    maxRetriesPerRequest: null,
});

export const workflowQueue = new Queue('workflow-execution', { connection: connection as any });

export const workflowWorker = new Worker(
    'workflow-execution',
    async (job) => {
        try {
            await connectToDatabase();
            const { workflowId, triggerEvent } = job.data;

            const workflowData = await Workflow.findById(workflowId);
            if (!workflowData) {
                throw new Error(`Workflow ${workflowId} not found`);
            }

            const engine = new WorkflowEngine(workflowData, triggerEvent);
            await engine.run();

            return { success: true };
        } catch (error: any) {
            console.error('Worker failed to execute workflow:', error);
            throw error;
        }
    },
    { connection: connection as any, concurrency: 5 } // Scalable background execution
);

workflowWorker.on('completed', (job) => {
    console.log(`Job ${job.id} completed workflow execution!`);
});

workflowWorker.on('failed', (job, err) => {
    console.error(`Job ${job?.id} failed with error ${err.message}`);
});

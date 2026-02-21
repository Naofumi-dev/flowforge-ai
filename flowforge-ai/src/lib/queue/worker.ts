import { Worker, Queue } from 'bullmq';
import IORedis from 'ioredis';
import { WorkflowEngine } from '../engine';
import { Workflow } from '../models/Workflow';
import connectToDatabase from '../mongoose';

export let workflowQueue: Queue | null = null;
export let workflowWorker: Worker | null = null;

if (process.env.REDIS_URL) {
    try {
        const connection = new IORedis(process.env.REDIS_URL, {
            maxRetriesPerRequest: null,
            lazyConnect: true, // prevent immediate connection failing build logs
        });

        // Eagerly connect but don't crash
        connection.connect().catch(e => console.warn('Redis connection failed, BullMQ disabled', e.message));

        workflowQueue = new Queue('workflow-execution', { connection: connection as any });

        workflowWorker = new Worker(
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
            { connection: connection as any, concurrency: 5 }
        );

        workflowWorker.on('completed', (job) => {
            console.log(`Job ${job.id} completed workflow execution!`);
        });

        workflowWorker.on('failed', (job, err) => {
            console.error(`Job ${job?.id} failed with error ${err.message}`);
        });
    } catch (e) {
        console.warn('Failed to initialize Redis Queue:', e);
    }
}

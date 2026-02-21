import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import { Workflow } from '@/lib/models/Workflow';
import { WorkflowEngine } from '@/lib/engine';
import { workflowQueue } from '@/lib/queue/worker';

export async function POST(req: Request, props: { params: Promise<{ id: string }> }) {
    try {
        const params = await props.params;
        await connectToDatabase();
        const workflow = await Workflow.findById(params.id);
        if (!workflow) return NextResponse.json({ error: 'Not Found' }, { status: 404 });

        // Try queuing to BullMQ in production, otherwise run inline for serverless setups
        if (process.env.REDIS_URL) {
            await workflowQueue.add('execute-flow', { workflowId: workflow._id, triggerEvent: { testRun: true } });
            return NextResponse.json({ success: true, message: 'Workflow queued for execution in BullMQ!' });
        } else {
            // Fallback to synchronous/inline for immediate test-run without Redis
            const engine = new WorkflowEngine(workflow);
            engine.run().catch(console.error);
            return NextResponse.json({ success: true, message: 'Workflow executing asynchronously (No Redis detected).' });
        }
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import { Workflow } from '@/lib/models/Workflow';

export async function GET() {
    try {
        await connectToDatabase();
        const workflows = await Workflow.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ workflows });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectToDatabase();
        const body = await req.json();
        const workflow = new Workflow({
            name: body.name || 'Untitled Workflow',
            nodes: body.nodes || [],
            edges: body.edges || [],
        });
        await workflow.save();
        return NextResponse.json(workflow, { status: 201 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

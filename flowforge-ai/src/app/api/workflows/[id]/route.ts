import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongoose';
import { Workflow } from '@/lib/models/Workflow';

export async function GET(req: Request, props: { params: Promise<{ id: string }> }) {
    try {
        const params = await props.params;
        await connectToDatabase();
        const workflow = await Workflow.findById(params.id);
        if (!workflow) return NextResponse.json({ error: 'Not Found' }, { status: 404 });
        return NextResponse.json(workflow);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function PUT(req: Request, props: { params: Promise<{ id: string }> }) {
    try {
        const params = await props.params;
        await connectToDatabase();
        const body = await req.json();
        const workflow = await Workflow.findByIdAndUpdate(params.id, body, { new: true });
        return NextResponse.json(workflow);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
    try {
        const params = await props.params;
        await connectToDatabase();
        await Workflow.findByIdAndDelete(params.id);
        return NextResponse.json({ success: true });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

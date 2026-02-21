import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import connectToDatabase from '@/lib/mongoose';
import { Workflow } from '@/lib/models/Workflow';
import { WorkflowEngine } from '@/lib/engine';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_fake', {
    apiVersion: '2023-10-16' as any,
});

export async function POST(req: Request) {
    try {
        const rawBody = await req.text();
        const sig = req.headers.get('stripe-signature') as string;

        let event;
        try {
            if (process.env.STRIPE_WEBHOOK_SECRET) {
                event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
            } else {
                event = JSON.parse(rawBody); // For local testing simulation without actual signature
            }
        } catch (err: any) {
            console.error(err);
            return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
        }

        if (event.type === 'customer.created' || event.type === 'checkout.session.completed') {
            await connectToDatabase();

            const obj = event.data.object as any;
            const stripeData = { email: obj.email || 'customer@example.com', name: obj.name || obj.customer_details?.name || 'New Customer', description: 'Triggered from Stripe Webhook' };

            // Find active workflows with Stripe triggers
            const workflows = await Workflow.find({ isActive: true });
            for (const w of workflows) {
                const hasStripeTrigger = w.nodes.some((n: any) => n.data.label.includes('Stripe'));
                if (hasStripeTrigger) {
                    const engine = new WorkflowEngine(w, stripeData);
                    engine.run().catch(console.error);
                }
            }
        }

        return NextResponse.json({ received: true });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

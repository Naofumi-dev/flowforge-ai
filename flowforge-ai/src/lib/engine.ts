import OpenAI from 'openai';
import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import { ExecutionLog } from './models/ExecutionLog';

export class WorkflowEngine {
    workflow: any;
    triggerEvent: any;
    logId?: string;

    constructor(workflow: any, triggerEvent?: any) {
        this.workflow = workflow;
        this.triggerEvent = triggerEvent;
    }

    async run() {
        console.log(`Starting Workflow Execution: ${this.workflow._id}`);

        // Create Log
        const log = new ExecutionLog({
            workflowId: this.workflow._id,
            triggerEvent: this.triggerEvent || { testMode: true },
            status: 'running',
        });
        await log.save();
        this.logId = log._id.toString();

        const { nodes, edges } = this.workflow;

        // Find trigger node
        const triggerNodes = nodes.filter((n: any) => n.type === 'triggerNode');
        if (triggerNodes.length === 0) {
            await this.endRun('failed', 'No trigger node found');
            return;
        }

        const startNode = triggerNodes[0];

        const results: Record<string, any> = { [startNode.id]: this.triggerEvent || { email: 'demo@flowforge.ai', name: 'Demo User' } };
        const queue = [startNode.id];
        const visited = new Set<string>();

        try {
            while (queue.length > 0) {
                const currentId = queue.shift()!;
                if (visited.has(currentId)) continue;
                visited.add(currentId);

                const node = nodes.find((n: any) => n.id === currentId);
                if (!node) continue;

                if (node.type === 'actionNode') {
                    // Find parent node result to pass as input
                    const incomingEdges = edges.filter((e: any) => e.target === currentId);
                    const parentResult = incomingEdges.length > 0 ? results[incomingEdges[0].source] : null;

                    // Execute Action
                    const result = await this.executeAction(node, parentResult);
                    results[node.id] = result;
                }

                // Find next nodes
                const outboundEdges = edges.filter((e: any) => e.source === currentId);
                for (const edge of outboundEdges) {
                    queue.push(edge.target);
                }
            }

            await this.endRun('completed', undefined, results);
        } catch (e: any) {
            console.error(e);
            await this.endRun('failed', e.message, results);
        }
    }

    private async executeAction(node: any, inputData: any) {
        console.log(`Executing Node: ${node.data.label}`, { inputData });

        if (node.data.label.includes('Send Email')) {
            return await this.sendEmail(inputData?.email || 'test@example.com', { name: inputData?.name || 'Customer' });
        }

        if (node.data.label.includes('Analyze Profile')) {
            const bio = inputData?.description || inputData?.name || 'New signup on platform';
            return await this.analyzeProfile(bio);
        }

        return { success: true };
    }

    private async sendEmail(to: string, data: any) {
        if (!process.env.SMTP_USER) return { simulated: true, sentTo: to, note: "Configure SMTP_USER for actual delivery" };

        const templateSource = "Hello {{name}}, welcome to FlowForge AI! Start orchestrating workflows today.";
        const template = Handlebars.compile(templateSource);

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 587,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            }
        });

        await transporter.sendMail({
            from: '"FlowForge AI" <noreply@flowforge.ai>',
            to,
            subject: 'Welcome to FlowForge AI',
            text: template(data)
        });

        return { sent: true, to };
    }

    private async analyzeProfile(text: string) {
        if (!process.env.OPENAI_API_KEY) return { simulated: true, sentiment: 'positive', summary: "Simulated analysis complete." };

        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "system", content: "Analyze the user profile context and provide brief insights on automation potential (3 bullet points max)." }, { role: "user", content: text }]
        });

        return { insights: completion.choices[0].message.content };
    }

    private async endRun(status: string, error?: string, results?: any) {
        await ExecutionLog.findByIdAndUpdate(this.logId, {
            status,
            error,
            completedAt: new Date(),
            results
        });
        console.log(`Workflow ended with status: ${status}. Errors: ${error || 'None'}`);
    }
}

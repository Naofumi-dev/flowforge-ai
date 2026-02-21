import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IWorkflow extends Document {
    name: string;
    description?: string;
    ownerId: string;
    nodes: any[];
    edges: any[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const WorkflowSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        ownerId: { type: String, required: true, default: 'anonymous_user' }, // default for testing
        nodes: { type: Schema.Types.Mixed, default: [] },
        edges: { type: Schema.Types.Mixed, default: [] },
        isActive: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export const Workflow: Model<IWorkflow> = mongoose.models.Workflow || mongoose.model<IWorkflow>('Workflow', WorkflowSchema);

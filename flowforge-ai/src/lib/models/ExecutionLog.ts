import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IExecutionLog extends Document {
    workflowId: mongoose.Types.ObjectId;
    triggerEvent: any;
    status: 'pending' | 'running' | 'completed' | 'failed';
    currentNodeId?: string;
    results: Record<string, any>;
    error?: string;
    startedAt: Date;
    completedAt?: Date;
}

const ExecutionLogSchema: Schema = new Schema(
    {
        workflowId: { type: Schema.Types.ObjectId, ref: 'Workflow', required: true },
        triggerEvent: { type: Schema.Types.Mixed },
        status: { type: String, enum: ['pending', 'running', 'completed', 'failed'], default: 'pending' },
        currentNodeId: { type: String },
        results: { type: Schema.Types.Mixed, default: {} },
        error: { type: String },
        startedAt: { type: Date, default: Date.now },
        completedAt: { type: Date },
    }
);

export const ExecutionLog: Model<IExecutionLog> = mongoose.models.ExecutionLog || mongoose.model<IExecutionLog>('ExecutionLog', ExecutionLogSchema);

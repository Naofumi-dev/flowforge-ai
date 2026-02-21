import { Handle, Position, NodeProps } from '@xyflow/react';

export type CustomNodeData = {
    label: string;
    icon?: string;
    description?: string;
    status?: string;
    onSettingsClick?: () => void;
    [key: string]: any;
};

export function TriggerNode({ data, selected }: any) {
    return (
        <div className={`w-64 glass rounded-xl shadow-2xl border-y border-r border-y-white/5 border-r-white/5 border-l-4 border-l-orange-500 p-4 text-white transition-all cursor-grab ${selected ? 'ring-2 ring-orange-500' : ''}`}>
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-orange-500">{data.icon || 'webhook'}</span>
                    <h4 className="font-bold text-sm">{data.label}</h4>
                </div>
                <button className="material-symbols-outlined text-slate-400 text-lg hover:text-white" onClick={data.onSettingsClick}>more_vert</button>
            </div>
            <p className="text-xs text-slate-300 italic mb-4">{data.description || 'Starts the flow'}</p>

            <div className="flex justify-end relative">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Output</span>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="!w-4 !h-4 !rounded-full !border-2 !border-white !bg-emerald-500 !shadow-sm !-right-[8px]"
            />
        </div>
    );
}

export function ActionNode({ data, selected }: any) {
    return (
        <div className={`w-64 glass rounded-xl shadow-2xl border-2 border-emerald-500 p-5 ring-4 ring-emerald-500/10 text-white transition-all cursor-grab ${selected ? 'ring-emerald-500/40' : ''}`}>
            <Handle
                type="target"
                position={Position.Left}
                className="!w-4 !h-4 !rounded-full !border-2 !border-white !bg-emerald-500 !shadow-sm !-left-[8px]"
            />

            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined fill-1 text-emerald-500">{data.icon || 'auto_awesome'}</span>
                    <h4 className="font-bold text-sm">{data.label}</h4>
                </div>
                <div className="flex items-center gap-1">
                    {data.status === 'success' && <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>}
                    {data.status === 'error' && <span className="material-symbols-outlined text-red-500 text-lg">error</span>}
                    {data.status === 'running' && <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>}
                    <button className="material-symbols-outlined text-slate-400 text-lg hover:text-white ml-2" onClick={data.onSettingsClick}>settings</button>
                </div>
            </div>

            <div className="space-y-3">
                <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                    <p className="text-xs text-slate-300">{data.description || 'Action operation'}</p>
                </div>
            </div>

            <div className="flex justify-between mt-6 relative">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Input</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Output</span>
            </div>

            <Handle
                type="source"
                position={Position.Right}
                className="!w-4 !h-4 !rounded-full !border-2 !border-white !bg-emerald-500 !shadow-sm !-right-[8px]"
            />
        </div>
    );
}

export const nodeTypes = {
    triggerNode: TriggerNode,
    actionNode: ActionNode,
};

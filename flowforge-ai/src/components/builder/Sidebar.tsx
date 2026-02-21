import React from 'react';

export default function Sidebar() {
    const onDragStart = (event: React.DragEvent, nodeType: string, label: string, description: string, icon: string) => {
        event.dataTransfer.setData('application/reactflow', JSON.stringify({ type: nodeType, label, description, icon }));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="w-72 glass border-r border-primary/10 z-10 hidden md:flex flex-col bg-background-dark/50">
            <div className="p-4 border-b border-primary/10">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-sm">search</span>
                    <input className="w-full pl-9 pr-4 py-2 bg-white/5 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary text-white" placeholder="Search nodes..." type="text" />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Triggers</h3>
                    <div className="space-y-2">
                        <div
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 shadow-sm cursor-grab hover:bg-white/10 transition-colors"
                            onDragStart={(e) => onDragStart(e, 'triggerNode', 'Stripe: New User', 'Listens for customer.created', 'payments')}
                            draggable
                        >
                            <span className="material-symbols-outlined text-orange-500">payments</span>
                            <span className="text-sm font-medium text-white">Stripe Webhook</span>
                        </div>
                        <div
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 shadow-sm cursor-grab hover:bg-white/10 transition-colors"
                            onDragStart={(e) => onDragStart(e, 'triggerNode', 'General Webhook', 'Generic HTTP Trigger', 'webhook')}
                            draggable
                        >
                            <span className="material-symbols-outlined text-orange-500">webhook</span>
                            <span className="text-sm font-medium text-white">Webhook</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">AI Actions</h3>
                    <div className="space-y-2">
                        <div
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 shadow-sm cursor-grab hover:bg-white/10 transition-colors"
                            onDragStart={(e) => onDragStart(e, 'actionNode', 'Analyze Profile', 'Extract data with OpenAI', 'psychology')}
                            draggable
                        >
                            <span className="material-symbols-outlined text-emerald-500">psychology</span>
                            <span className="text-sm font-medium text-white">AI Analyzer</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Comms</h3>
                    <div className="space-y-2">
                        <div
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 shadow-sm cursor-grab hover:bg-white/10 transition-colors"
                            onDragStart={(e) => onDragStart(e, 'actionNode', 'Send Welcome Email', 'Nodemailer/SendGrid template', 'mail')}
                            draggable
                        >
                            <span className="material-symbols-outlined text-blue-500">mail</span>
                            <span className="text-sm font-medium text-white">Send Email</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

import { Puzzle, ArrowRight, CheckCircle2 } from "lucide-react";

export default function IntegrationsPage() {
    const integrations = [
        { name: "OpenAI GPT-4", desc: "Native LLM logic and embedding nodes", connected: true, color: "bg-emerald-500/20 text-emerald-400" },
        { name: "Stripe", desc: "Automate billing, subscriptions & invoices", connected: true, color: "bg-indigo-500/20 text-indigo-400" },
        { name: "Twilio", desc: "SMS and Voice workflow triggers", connected: false, color: "bg-red-500/20 text-red-400" },
        { name: "Google Workspace", desc: "Drive, Docs, and Gmail webhooks", connected: false, color: "bg-blue-500/20 text-blue-400" },
        { name: "Slack", desc: "Realtime messaging & alerts", connected: false, color: "bg-purple-500/20 text-purple-400" },
        { name: "HubSpot", desc: "Sync CRM leads via AI mapping", connected: false, color: "bg-orange-500/20 text-orange-400" }
    ];

    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-white">App Integrations</h1>
                <p className="text-slate-400 mt-1">Connect your workspace with 50+ enterprise applications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrations.map((app, i) => (
                    <div key={i} className={`glass p-6 rounded-2xl border-2 transition-all group ${app.connected ? 'border-primary/40 shadow-sm shadow-primary/10' : 'border-white/5 hover:border-white/20'}`}>
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${app.color}`}>
                                <Puzzle size={24} />
                            </div>
                            {app.connected ? (
                                <span className="flex items-center gap-1 text-xs font-bold text-green-400 bg-green-500/20 px-2 py-1 rounded-full"><CheckCircle2 size={12} /> Active</span>
                            ) : (
                                <span className="text-xs font-bold text-slate-400 bg-white/5 px-2 py-1 rounded-full">Available</span>
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-white">{app.name}</h3>
                        <p className="text-sm text-slate-400 mt-2 mb-6 h-10">{app.desc}</p>
                        <button className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all focus:ring-2 focus:ring-offset-1 focus:ring-primary ${app.connected ? 'bg-white/5 text-slate-300 hover:bg-white/10' : 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg'}`}>
                            {app.connected ? 'Manage Settings' : 'Connect Account'}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

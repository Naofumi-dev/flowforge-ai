import { Activity, Users, CheckCircle, Zap } from "lucide-react";

export default function DashboardPage() {
    return (
        <>
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-white">Welcome back, Admin</h1>
                <p className="text-slate-400 mt-1">Here is the overview of your intelligent workflows today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { title: "Active Agents", value: "24", icon: <Users className="text-blue-500" /> },
                    { title: "Total Runs", value: "14,092", icon: <Zap className="text-yellow-500" /> },
                    { title: "Success Rate", value: "99.8%", icon: <CheckCircle className="text-green-500" /> },
                    { title: "API Usage", value: "45%", icon: <Activity className="text-primary" /> },
                ].map((stat, i) => (
                    <div key={i} className="glass p-6 rounded-2xl shadow-sm border border-white/5 hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-slate-400">{stat.title}</h3>
                            <div className="p-2 bg-background-dark rounded-lg shadow-inner">{stat.icon}</div>
                        </div>
                        <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass p-6 rounded-2xl border border-white/5 flex flex-col shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white">Workflow Performance</h2>
                        <select className="bg-background-dark border border-white/10 text-slate-300 text-sm rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    <div className="flex-1 flex items-center justify-center min-h-[300px] bg-background-dark/30 rounded-xl border border-dashed border-white/10 relative overflow-hidden group">
                        {/* Fake visual chart placeholder */}
                        <div className="absolute bottom-0 w-full h-full flex items-end gap-2 px-6 pt-10 pb-4 opacity-50">
                            {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-primary/40 to-primary rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="relative z-10 bg-background-dark/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/5 text-slate-300 font-medium">
                            Charts powered by DB Metrics
                        </div>
                    </div>
                </div>

                <div className="glass p-6 rounded-2xl border border-white/5 shadow-sm">
                    <h2 className="text-xl font-bold mb-6 text-white">Recent Activity Logs</h2>
                    <div className="space-y-4">
                        {[
                            { title: "Lead Scoring AI", msg: "Processed 45 new leads securely.", code: 200, time: "2 mins ago" },
                            { title: "Content Gen Agent", msg: "Generated 3 blog posts.", code: 200, time: "45 mins ago" },
                            { title: "Invoice Parser", msg: "OCR failed on document #992.", code: 500, time: "2 hours ago" },
                            { title: "Stripe Sync", msg: "Synced 104 new customers.", code: 200, time: "5 hours ago" }
                        ].map((log, i) => (
                            <div key={i} className="flex items-start gap-4 p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-white/10">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${log.code === 200 ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                                    {log.code === 200 ? <CheckCircle size={16} className="text-green-500" /> : <div className="w-2 h-2 rounded-full bg-red-500" />}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">{log.title}</p>
                                    <p className="text-xs text-slate-400 line-clamp-1">{log.msg}</p>
                                    <p className="text-[10px] text-slate-500 mt-1 font-medium">{log.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

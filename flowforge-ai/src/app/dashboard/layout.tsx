import Link from "next/link";
import { Activity, LayoutDashboard, Puzzle, Settings, LogOut, Code, Zap } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-background-dark text-slate-200">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 glass border-r border-white/5 flex flex-col pt-6 z-10 sticky top-0 md:h-screen shadow-lg">
                <div className="flex items-center gap-2 px-6 mb-10">
                    <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center text-white border border-primary/20 shadow-lg">
                        <span className="material-symbols-outlined text-xl">auto_fix_high</span>
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-white leading-none">FlowForge <br /><span className="text-primary text-sm font-bold">AI</span></span>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
                        <LayoutDashboard size={18} className="group-hover:text-primary transition-colors" /> Dashboard
                    </Link>
                    <Link href="/builder" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-primary shadow-md hover:bg-primary/90 transition-all group border border-primary/20">
                        <Zap size={18} className="text-white fill-white/20" /> New Workflow
                    </Link>
                    <Link href="/dashboard/integrations" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
                        <Puzzle size={18} className="group-hover:text-primary transition-colors" /> Integrations
                    </Link>
                    <Link href="/dashboard/analytics" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
                        <Activity size={18} className="group-hover:text-primary transition-colors" /> Analytics
                    </Link>
                    <div className="pt-6 pb-2 px-4">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">System</p>
                    </div>
                    <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
                        <Settings size={18} className="group-hover:text-primary transition-colors" /> Settings
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
                        <Code size={18} className="group-hover:text-primary transition-colors" /> Developer API
                    </Link>
                </nav>

                <div className="p-4 mt-auto border-t border-white/5">
                    <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-500/10 transition-all group">
                        <LogOut size={18} /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 w-full flex flex-col overflow-y-auto bg-background-dark/50">
                <header className="sticky top-0 z-10 glass border-b border-white/5 shadow-sm p-4 flex justify-between items-center px-8">
                    <h2 className="text-lg font-bold text-white">Workspace</h2>
                    <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-full bg-card-dark border-2 border-primary/30 shadow flex items-center justify-center overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User Avatar" />
                        </div>
                    </div>
                </header>
                <div className="flex-1 p-6 lg:p-10 w-full max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

import { Settings as SettingsIcon, Shield, Bell, Key, CreditCard, ChevronRight } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-white">Workspace Settings</h1>
                <p className="text-slate-400 mt-1">Manage billing, teamwork, and enterprise security.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 space-y-2 relative">
                    <div className="sticky top-0 p-4 glass rounded-2xl border border-white/5 space-y-1">
                        <button className="flex items-center justify-between w-full px-4 py-3 bg-primary/20 text-white font-bold rounded-xl border border-primary/30"><span className="flex items-center gap-2"><SettingsIcon size={18} /> Profile</span> <ChevronRight size={16} /></button>
                        <button className="flex items-center justify-between w-full px-4 py-3 text-slate-400 font-semibold hover:text-white hover:bg-white/5 rounded-xl transition-all"><span className="flex items-center gap-2"><Shield size={18} /> Security (SSO)</span></button>
                        <button className="flex items-center justify-between w-full px-4 py-3 text-slate-400 font-semibold hover:text-white hover:bg-white/5 rounded-xl transition-all"><span className="flex items-center gap-2"><CreditCard size={18} /> Billing Stripe</span></button>
                        <button className="flex items-center justify-between w-full px-4 py-3 text-slate-400 font-semibold hover:text-white hover:bg-white/5 rounded-xl transition-all"><span className="flex items-center gap-2"><Key size={18} /> API Keys</span></button>
                        <button className="flex items-center justify-between w-full px-4 py-3 text-slate-400 font-semibold hover:text-white hover:bg-white/5 rounded-xl transition-all"><span className="flex items-center gap-2"><Bell size={18} /> Webhook Alerts</span></button>
                    </div>
                </div>

                <div className="md:col-span-8">
                    <div className="glass p-8 rounded-3xl border border-white/5 shadow-sm relative overflow-hidden bg-card-dark">
                        <div className="absolute top-0 right-0 w-32 h-32 orb-gradient rounded-full -mr-16 -mt-16 pointer-events-none opacity-50"></div>

                        <h2 className="text-xl font-bold text-white mb-6 relative z-10">Personal Information</h2>
                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-300">First Name</label>
                                    <input type="text" defaultValue="Admin" className="w-full bg-background-dark/80 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-300">Last Name</label>
                                    <input type="text" defaultValue="User" className="w-full bg-background-dark/80 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300">Email Address (Readonly)</label>
                                <input type="email" readOnly defaultValue="admin@flowforge.ai" className="w-full bg-background-dark/40 border border-white/5 text-slate-500 rounded-xl px-4 py-3 focus:outline-none font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300">Organization Name</label>
                                <input type="text" defaultValue="Acme Corp" className="w-full bg-background-dark/80 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium" />
                            </div>

                            <div className="pt-4 border-t border-white/10 flex justify-end">
                                <button type="button" className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-primary/20">Save Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

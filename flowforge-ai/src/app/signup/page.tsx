import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-background-dark flex items-center justify-center p-4 relative overflow-hidden hero-mesh">
            {/* Decorative background orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] orb-gradient rounded-full opacity-40 mix-blend-screen" style={{ background: "radial-gradient(circle, #fbbf24, #ef4444)" }}></div>
            <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] orb-gradient rounded-full opacity-30 mix-blend-screen" style={{ background: "radial-gradient(circle, #3b82f6, #9f1fef)" }}></div>

            <div className="w-full max-w-lg glass bg-card-dark p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative z-10 my-8">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-primary rounded-xl p-2.5 flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-3xl">add_circle</span>
                    </div>
                    <h1 className="text-2xl font-extrabold text-white tracking-tight">Create your account</h1>
                    <p className="text-slate-400 text-sm mt-2 text-center max-w-xs">Start automating your infrastructure with autonomous agents in seconds.</p>
                </div>

                <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300 ml-1">First name</label>
                            <input type="text" placeholder="Jane" className="w-full bg-background-dark/80 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-500 font-medium transition-all" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300 ml-1">Last name</label>
                            <input type="text" placeholder="Doe" className="w-full bg-background-dark/80 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-500 font-medium transition-all" required />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300 ml-1">Work Email</label>
                        <div className="relative">
                            <input type="email" placeholder="jane@company.com" className="w-full bg-background-dark/80 border border-white/10 rounded-xl px-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-500 font-medium transition-all" required />
                            <span className="material-symbols-outlined absolute left-4 top-3.5 text-slate-500">mail</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300 ml-1">Password</label>
                        <div className="relative">
                            <input type="password" placeholder="Create a strong password" className="w-full bg-background-dark/80 border border-white/10 rounded-xl px-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-500 font-medium transition-all" required />
                            <span className="material-symbols-outlined absolute left-4 top-3.5 text-slate-500">lock</span>
                        </div>
                        <p className="text-[11px] text-slate-500 ml-2 mt-1 font-medium">Must be at least 8 characters containing a number and symbol.</p>
                    </div>

                    <button type="button" className="w-full bg-white text-primary font-extrabold text-lg py-3.5 rounded-xl shadow-lg hover:-translate-y-0.5 hover:shadow-xl focus:ring-4 focus:ring-slate-200 transition-all flex justify-center items-center gap-2">
                        Get Started Free <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </form>

                <p className="mt-8 text-center text-sm font-medium text-slate-400 border-t border-white/10 pt-8">
                    Already have an account? <Link href="/login" className="text-white font-bold hover:underline">Sign in instead</Link>
                </p>
            </div>
        </div>
    );
}

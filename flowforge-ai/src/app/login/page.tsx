import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-background-dark flex items-center justify-center p-4 relative overflow-hidden hero-mesh">
            {/* Decorative background orbs */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 orb-gradient rounded-full opacity-50"></div>
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 orb-gradient rounded-full opacity-40 mix-blend-screen" style={{ background: "radial-gradient(circle, #50C878, #008F53)" }}></div>

            <div className="w-full max-w-md glass bg-card-dark p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-primary rounded-xl p-2.5 flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-3xl">auto_fix_high</span>
                    </div>
                    <h1 className="text-2xl font-extrabold text-white tracking-tight">Welcome back</h1>
                    <p className="text-slate-400 text-sm mt-2 text-center">Enter your details to access your AI orchestration dashboard.</p>
                </div>

                <form className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-300 ml-1">Email address</label>
                        <div className="relative">
                            <input type="email" placeholder="admin@flowforge.ai" className="w-full bg-background-dark/80 border border-white/10 rounded-xl px-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-500 font-medium transition-all" required />
                            <span className="material-symbols-outlined absolute left-4 top-3.5 text-slate-500">mail</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between ml-1 leading-none">
                            <label className="text-sm font-bold text-slate-300">Password</label>
                            <Link href="#" className="text-xs font-bold text-primary hover:text-primary/80">Forgot?</Link>
                        </div>
                        <div className="relative">
                            <input type="password" placeholder="••••••••" className="w-full bg-background-dark/80 border border-white/10 rounded-xl px-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-500 font-medium transition-all" required />
                            <span className="material-symbols-outlined absolute left-4 top-3.5 text-slate-500">lock</span>
                        </div>
                    </div>

                    <button type="button" className="w-full bg-primary text-white font-extrabold text-lg py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-primary/40 focus:ring-4 focus:ring-primary/20 transition-all">
                        Sign In
                    </button>
                </form>

                <div className="my-6 flex items-center gap-4">
                    <div className="flex-1 h-px bg-white/10"></div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Or log in with</span>
                    <div className="flex-1 h-px bg-white/10"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 bg-background-dark border border-white/10 py-3 rounded-xl font-bold text-sm text-slate-300 hover:bg-white/5 transition-colors shadow-sm">
                        <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" className="w-5 h-5" alt="Google" />
                        Google
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-[#24292F] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#24292F]/80 transition-colors shadow-sm border border-white/5">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="w-5 h-5 invert" alt="GitHub" />
                        GitHub
                    </button>
                </div>

                <p className="mt-8 text-center text-sm font-medium text-slate-400">
                    Don't have an account? <Link href="/signup" className="text-primary font-bold hover:underline">Sign up for free</Link>
                </p>
            </div>
        </div>
    );
}

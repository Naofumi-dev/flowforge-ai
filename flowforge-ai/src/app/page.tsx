import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-[100] w-full glass border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl">auto_fix_high</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                FlowForge <span className="text-primary">AI</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#">Home</Link>
              <Link className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#platform">Platform</Link>
              <Link className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#solutions">Solutions</Link>
              <Link className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="/dashboard">Dashboard</Link>
              <Link className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="/builder">Workflow Builder</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
                Get Started
              </Link>
              <button className="md:hidden text-slate-200">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative overflow-hidden hero-mesh pt-16 pb-24 lg:pt-32 lg:pb-40">
        {/* Floating Orb Visuals */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 orb-gradient rounded-full"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 orb-gradient rounded-full" style={{ background: "radial-gradient(circle, #50C878, #008F53)", opacity: 0.3 }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-sm">bolt</span>
              Next-Gen Automation
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Turn workflows into <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">smart AI</span> automations
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Boost productivity by 10x with seamless orchestration. Our platform bridges the gap between simple tasks and enterprise-scale AI coordination.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/builder" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/25 hover:-translate-y-0.5 transition-all text-center">
                Start Building Free
              </Link>
              <button className="w-full sm:w-auto glass text-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                Watch Demo
              </button>
            </div>
            <p className="mt-8 text-sm font-medium text-slate-400 italic">
              From simple automations to enterprise orchestration.
            </p>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 lg:mt-24 relative">
            <div className="glass p-2 rounded-2xl shadow-2xl border border-white/50">
              <div className="rounded-xl overflow-hidden bg-slate-900 aspect-video relative group">
                <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Abstract futuristic digital interface with glowing nodes and data connections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWzLY5WVlCkZLsc8tcTQt0GZcC6z9KcQLP7BkgECEZvSJmJHu72ioGMxIt1ID-aDmX0QoniC5e8W54k4bEnOoebRSGmEQMr7VbWqwQmOrazJRlXrep4gMzgWbBKEJVa58wQR-P-sAdhk2427q2G7N_xtbuV7bypq0OENGGMuOQu-nPifx8g7LimRx1GhqY9UwLmsE7xBAeazP3Qpp-xoMSXQOAYCFMGVpSO_9H-3VzzNZK3DWAfSYvj8FbtNH0Ds5tQ5o3WKMpRAY" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-4xl">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Labels */}
            <div className="hidden lg:block absolute -top-8 -left-8 glass p-4 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: "4s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Workflow Status</p>
                  <p className="text-sm font-bold text-white">Optimization Complete</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -bottom-6 -right-10 glass p-4 rounded-xl shadow-xl animate-bounce" style={{ animationDuration: "3s", animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Productivity</p>
                  <p className="text-sm font-bold text-white">+420% Increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-background-dark/50 border-t border-white/5" id="platform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Enterprise-grade features for modern teams</h2>
              <p className="text-slate-400">Scale your operations without the complexity. Our modular nodes and intelligent routing handle the heavy lifting.</p>
            </div>
            <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all" href="#">
              View all features <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-card-dark border border-white/5 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-background-dark rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">psychology</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Nodes</h3>
              <p className="text-slate-400 leading-relaxed">
                Intelligent triggers that understand context and intent, not just keyword matching.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-card-dark border border-white/5 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-background-dark rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">dynamic_feed</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Auto-Scaling</h3>
              <p className="text-slate-400 leading-relaxed">
                Architecture that grows with your data needs, ensuring zero downtime during peak loads.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-card-dark border border-white/5 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5">
              <div className="w-14 h-14 bg-background-dark rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">verified_user</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
              <p className="text-slate-400 leading-relaxed">
                Enterprise-grade encryption and SOC2 compliance built into every part of the stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" id="solutions">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #fff, transparent)" }}></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Ready to transform your business?</h2>
          <p className="text-primary/10 text-xl font-medium mb-10 text-white/80 max-w-2xl mx-auto">
            Join 500+ enterprises already building the future of automated work with FlowForge AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto bg-white text-primary px-10 py-4 rounded-xl text-lg font-extrabold hover:bg-slate-50 transition-colors">
              Get Started Free
            </Link>
            <button className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-4 rounded-xl text-lg font-extrabold hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-dark text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary rounded-lg p-1 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-xl">auto_fix_high</span>
                </div>
                <span className="text-xl font-extrabold tracking-tight text-white">FlowForge AI</span>
              </div>
              <p className="text-slate-400 max-w-xs mb-6">
                The ultimate AI orchestration platform for modern enterprise teams. Forge your flow today.
              </p>
              <div className="flex gap-4">
                <Link className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-primary hover:text-primary transition-all" href="#">
                  <span className="material-symbols-outlined text-xl">share</span>
                </Link>
                <Link className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:border-primary hover:text-primary transition-all" href="#">
                  <span className="material-symbols-outlined text-xl">forum</span>
                </Link>
              </div>
            </div>

            {/* Quick Links Blocks */}
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><Link className="hover:text-primary transition-colors" href="#">Features</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Integrations</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Cloud Nodes</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm">
                <li><Link className="hover:text-primary transition-colors" href="#">Marketing</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Operations</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Development</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm">
                <li><Link className="hover:text-primary transition-colors" href="#">Documentation</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">API Reference</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Community</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Terms of Service</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 FlowForge AI Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Systems Operational</span>
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

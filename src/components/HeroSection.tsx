import React from 'react';
import { ArrowRight, Bot, Zap, Shield, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-300">Live on Cronos x402 Hackathon</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white/60">
                AI-Powered Payment
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Orchestration
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 fill-mode-forwards">
              Enable autonomous AI agents to discover, negotiate, and execute payments seamlessly across the Cronos ecosystem using the x402 protocol.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300 fill-mode-forwards">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
                Start Building
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                <Bot className="w-5 h-5 text-slate-400" />
                View Demo
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500 animate-in fade-in duration-1000 delay-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Audited Smart Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Sub-second Settlement</span>
              </div>
            </div>
          </div>

          {/* Visual Content - Abstract Representation of AI Agent Payment */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative animate-float">
            <div className="relative aspect-square backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl glass-card overflow-hidden">
              {/* Decorative floating elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

              {/* Mock UI/Code */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">agent_runtime.py</span>
                </div>

                <div className="space-y-3 font-mono text-sm leading-relaxed">
                  <p className="text-purple-400">
                    <span className="text-slate-500"># Autonomous Payment Request</span><br />
                    <span className="text-pink-400">async def</span> <span className="text-yellow-300">execute_payment</span>(amount, token):
                  </p>

                  <div className="pl-4 space-y-2 border-l-2 border-white/5">
                    <p className="text-slate-300">
                      <span className="text-blue-400">agent</span> = <span className="text-green-400">Paygent</span>.connect()
                    </p>
                    <p className="text-slate-300">
                      quote = <span className="text-pink-400">await</span> agent.get_quote(<span className="text-orange-300">"x402"</span>)
                    </p>
                    <p className="text-slate-300">
                      <span className="text-pink-400">if</span> quote.is_valid():
                    </p>
                    <div className="pl-4 space-y-1">
                      <div className="flex items-center gap-2 bg-green-900/20 border border-green-500/30 rounded px-2 py-1 w-fit">
                        <Sparkles className="w-3 h-3 text-green-400" />
                        <span className="text-green-300">tx_hash = agent.pay(quote)</span>
                      </div>
                      <p className="text-slate-500"># Payment settled in ~200ms</p>
                    </div>
                  </div>

                  <p className="text-slate-400 pt-2">
                    <span className="text-blue-400">print</span>(f<span className="text-orange-300">"Access Granted: {'{tx_hash}'}"</span>)
                  </p>
                </div>

                {/* Status Overlay */}
                <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-green-500/30 flex items-center gap-4 shadow-xl">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Status</div>
                    <div className="text-sm font-semibold text-white">Payment Verified</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating connecting nodes */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-card border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl animate-float delay-700">
              <img src="/imgs/logo.svg" className="w-12 h-12 opacity-80" alt="Icon" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-card border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl animate-float delay-1000">
              <span className="text-2xl font-bold text-white">402</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { ArrowRight, TrendingUp, Cpu, PieChart, Search } from 'lucide-react';

const UseCaseCard = ({ icon: Icon, title, role, description, flow, isReversed }: { icon: any, title: string, role: string, description: string, flow: string[], isReversed?: boolean }) => (
  <div className={`flex flex-col lg:flex-row items-center gap-12 py-16 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
    <div className="flex-1 space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center border border-white/10">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      <div>
        <div className="text-primary font-mono text-sm mb-2">{role}</div>
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
      </div>

      <div className="bg-secondary/20 rounded-2xl p-6 border border-white/5">
        <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Agent Workflow</h4>
        <div className="space-y-4">
          {flow.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-mono text-primary border border-primary/30">
                  {idx + 1}
                </div>
                {idx !== flow.length - 1 && <div className="w-px h-full bg-white/10 my-1" />}
              </div>
              <p className="text-sm text-slate-300 pt-0.5">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex-1 w-full relative">
      {/* Abstract Visual Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-secondary/40 to-secondary/10 rounded-3xl border border-white/10 overflow-hidden relative group">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />

        {/* Mock UI Element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl max-w-sm w-full mx-6 transform group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-white font-medium">{title} active</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-white/10 rounded w-3/4 animate-pulse" />
              <div className="h-2 bg-white/10 rounded w-1/2 animate-pulse delay-75" />
              <div className="h-2 bg-white/10 rounded w-5/6 animate-pulse delay-150" />
            </div>
            <div className="mt-4 flex justify-end">
              <span className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Executing
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const UseCasesSection = () => {
  const cases = [
    {
      icon: TrendingUp,
      title: "Automated Trading Agent",
      role: "DeFi Trader",
      description: "Deploy an autonomous agent that monitors price discrepancies and executes profitable arbitrage trades across Cronos DEXs without supervision.",
      flow: [
        "Agent subscribes to Crypto.com Market Data MCP",
        "Monitors price feeds on VVS Finance",
        "Detects arbitrage opportunity > 0.5%",
        "Executes swap & logs profit"
      ]
    },
    {
      icon: Cpu,
      title: "AI-Powered API Marketplace",
      role: "ML Developer",
      description: "Monetize ML model inference APIs per-call without traditional payment gateways, invoices, or API keys.",
      flow: [
        "Developer registers service in Paygent Registry",
        "Agent discovers service via MCP catalog",
        "Agent pays per request via x402",
        "Developer receives instant USDC settlement"
      ],
      isReversed: true
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      role: "Institutional Investor",
      description: "Manage diversified Cronos portfolios with sophisticated risk controls, auto-rebalancing, and hedging strategies.",
      flow: [
        "Agent subscribes to premium research feeds",
        "Analyzes market conditions via MCP",
        "Executes rebalancing on VVS Finance",
        "Adjusts hedging positions on Moonlander"
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Built for the <span className="text-primary">Agent Economy</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            From automated trading to API monetization, Paygent powers the next generation of autonomous financial operations.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((useCase, idx) => (
            <UseCaseCard key={idx} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};
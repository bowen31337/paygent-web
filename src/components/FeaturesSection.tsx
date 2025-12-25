import React from 'react';
import { Box, Code2, Globe2, BarChart3, ArrowRight, Zap, Database, Lock } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, benefits }: { icon: any, title: string, description: string, benefits: string[] }) => (
  <div className="group relative p-8 rounded-3xl bg-secondary/30 border border-white/5 hover:bg-secondary/50 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary group-hover:text-blue-400 transition-colors" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3 mb-6">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary" />
            {benefit}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        Learn more <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </div>
);

export const FeaturesSection = () => {
  const features = [
    {
      icon: Code2,
      title: "Agent Payment Runtime",
      description: "Natural language payment capabilities powered by deepagents + Crypto.com AI Agent SDK.",
      benefits: [
        "Natural language commands",
        "Automatic wallet management",
        "Budget controls & planning"
      ]
    },
    {
      icon: Zap,
      title: "x402 Orchestration",
      description: "Seamless HTTP 402 payment flow handling with automated retry and settlement logic.",
      benefits: [
        "HTTP 402 handling",
        "Cronos x402 Facilitator",
        "Real-time ~200ms settlement"
      ]
    },
    {
      icon: Database,
      title: "Service Registry",
      description: "MCP-compatible marketplace for AI agents to discover x402-enabled services nearby.",
      benefits: [
        "MCP-compatible catalog",
        "Dynamic pricing discovery",
        "Reputation & quality metrics"
      ]
    },
    {
      icon: BarChart3,
      title: "DeFi Integration Suite",
      description: "Direct connections to Cronos DeFi protocols via specialized subagents for trading.",
      benefits: [
        "VVS Finance Swaps",
        "Moonlander Perpetuals",
        "Delphi Prediction Markets"
      ]
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-background overflow-hidden ">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
            Core Platform Capabilities
          </h2>
          <p className="text-lg text-slate-400">
            A comprehensive infrastructure layer where AI agents can autonomously manage complex financial workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
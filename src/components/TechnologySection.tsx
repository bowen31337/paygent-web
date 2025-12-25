import React, { useState } from 'react';
import { Terminal, Cpu, Network, Shield, Copy, Check } from 'lucide-react';

export const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState('agent');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeExamples = {
    agent: {
      lang: 'python',
      filename: 'agent_logic.py',
      code: `from paygent import PaygentAgent
from langchain.agents import tool

# Initialize AI Agent with Paygent Wallet
agent = PaygentAgent(
    api_key="pay_live_...",
    model="gpt-4-turbo", 
    system_prompt="You are a DeFi trading assistant."
)

@tool
def analyze_and_invest(amount: float):
    """Analyzes yields and invests via x402 payment"""
    
    # query market data via MCP
    yields = agent.mcp.query("crypto-market-data", "get_yields")
    
    if yields['vvs_finance'] > 5.0:
        # seamless x402 payment for gas/fees
        tx = agent.pay(
            amount=amount,
            token="USDC",
            recipient="0xVVS_Pool..."
        )
        return f"Invested {amount} USDC. Tx: {tx.hash}"
        
agent.run("Invest 100 USDC in the best yield pool")`
    },
    registry: {
      lang: 'json',
      filename: 'service_registry.json',
      code: `{
  "service_id": "crypto-market-data-premium",
  "name": "Crypto.com Premium Market Data",
  "description": "Real-time prices and order books",
  "pricing": {
    "model": "pay-per-call",
    "amount": "0.001",
    "token": "USDC",
    "network": "cronos-evm"
  },
  "endpoints": [
    "https://api.crypto.com/v1/market/prices",
    "https://api.crypto.com/v1/market/depth"
  ],
  "mcp_compatible": true
}`
    }
  };

  return (
    <section id="technology" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="flex-1">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Developer-First <br />
              <span className="text-primary">Agent Infrastructure</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Built on <strong>deepagents</strong> and the <strong>Crypto.com AI Agent SDK</strong>.
              Paygent provides the missing payment primitive for autonomous systems.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Python & TypeScript SDKs</h3>
                  <p className="text-slate-400 text-sm">Native libraries for LangChain, AutoGPT, and custom agent runtimes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Network className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">MCP Compatibility</h3>
                  <p className="text-slate-400 text-sm">Standardized Model Context Protocol support for plug-and-play tool use.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">EIP-712 Security</h3>
                  <p className="text-slate-400 text-sm">Cryptographically secure signatures for every autonomous action.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-[#0f172a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('agent')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeTab === 'agent' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Agent Logic
                  </button>
                  <button
                    onClick={() => setActiveTab('registry')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeTab === 'registry' ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'}`}
                  >
                    Service Registry
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-mono">{codeExamples[activeTab as keyof typeof codeExamples].filename}</span>
                  <button onClick={handleCopy} className="text-slate-400 hover:text-white transition-colors">
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                  <code className="text-slate-300">
                    {codeExamples[activeTab as keyof typeof codeExamples].code.split('\n').map((line, i) => (
                      <div key={i} className="table-row">
                        <span className="table-cell text-slate-600 select-none pr-4 text-right w-8">{i + 1}</span>
                        <span
                          className="table-cell"
                          dangerouslySetInnerHTML={{
                            __html: line
                              .replace(/(from|import|def|class|return|if|else|await|async)/g, '<span class="text-purple-400">$1</span>')
                              .replace(/(print|pay|run|query|construct|paygent)/g, '<span class="text-blue-400">$1</span>')
                              .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
                              .replace(/(#.*)/g, '<span class="text-slate-500 italic">$1</span>')
                          }}
                        />
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
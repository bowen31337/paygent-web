import React from 'react';
import { Github, Twitter, Linkedin, MessageSquare, Bot } from 'lucide-react';

export const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-white">Paygent</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              The AI-powered payment orchestration platform for the agent economy.
              Built for the Cronos x402 Hackathon.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: MessageSquare, href: "https://discord.com" }
              ].map((Social, idx) => (
                <a key={idx} href={Social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all text-slate-400">
                  <Social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Paygent Agents</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">x402 Protocol</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Service Registry</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">DeFi Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Developers</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Python SDK</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">MCP Server</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hackathon</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Ecosystem</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Cronos Labs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Crypto.com</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">VVS Finance</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Moonlander</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 Paygent. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
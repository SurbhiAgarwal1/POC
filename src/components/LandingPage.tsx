'use client';

import React from 'react';
import { 
  FileText, 
  Code, 
  Edit, 
  PlusCircle, 
  ExternalLink,
  ArrowRight,
  Sparkles,
  Terminal
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (tabId: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 4-Column Grid: Left 3 columns = Content, Right 1 column = Docs Actions Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
        
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Breadcrumb/Section Category */}
          <div className="text-slate-400 text-sm font-medium tracking-wide">
            Ecosystem
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              OpenTelemetry Ecosystem
            </h1>
            <p className="text-lg text-slate-400 font-normal leading-relaxed max-w-3xl">
              OpenTelemetry&apos;s thriving ecosystem of components, examples, integrations and vendors.
            </p>
          </div>

          {/* Thin Horizontal Divider */}
          <hr className="border-[#2c2e35]" />

          {/* Exact Document Links & Descriptions */}
          <div className="space-y-10 pt-4">
            
            {/* 1. OpenTelemetry Demo */}
            <div className="group space-y-2">
              <div className="flex items-center gap-3">
                <a 
                  href="#demo"
                  onClick={(e) => {
                    e.preventDefault();
                    // Scrolls smoothly to the demo metadata block
                    document.getElementById('demo-block')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xl font-bold text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors flex items-center gap-1.5"
                >
                  OpenTelemetry Demo
                </a>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Featured Setup
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                The OpenTelemetry Demo is a microservice-based distributed system intended to illustrate the implementation of OpenTelemetry in a near real-world environment.
              </p>
            </div>

            {/* 2. Registry */}
            <div className="group space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <button 
                  onClick={() => onNavigate('ia-section')}
                  className="text-xl font-bold text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors flex items-center gap-1.5 text-left"
                >
                  Registry
                </button>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> Interactive IA Registry Explorer
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                Find libraries, plugins, integrations, and other useful tools for using and extending OpenTelemetry. Click this section to browse our dense information architecture research and configuration registries.
              </p>
            </div>

            {/* 3. Adopters */}
            <div className="group space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <button 
                  onClick={() => onNavigate('research-section')}
                  className="text-xl font-bold text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors flex items-center gap-1.5 text-left"
                >
                  Adopters
                </button>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  User Personas & SRE Research
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                Organizations that use OpenTelemetry. Click this section to read our detailed developer interviews, behavioral matrices, and qualitative UX personas.
              </p>
            </div>

            {/* 4. Third-party distributions */}
            <div className="group space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <button 
                  onClick={() => onNavigate('competitive-section')}
                  className="text-xl font-bold text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors flex items-center gap-1.5 text-left"
                >
                  Third-party distributions
                </button>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Stripe & AWS Benchmark Audits
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                List of open source OpenTelemetry distributions maintained by third parties. Click this section to explore competitive audits on discoverability, density, and configuration setups.
              </p>
            </div>

            {/* 5. Integrations */}
            <div className="group space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <button 
                  onClick={() => onNavigate('mockups-section')}
                  className="text-xl font-bold text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors flex items-center gap-1.5 text-left"
                >
                  Integrations
                </button>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  High-Fidelity Framer Wireframes
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                Libraries, services, and apps with first-party support for OpenTelemetry. Click this section to view our proposed design solutions, wireframes, and progressive disclosure blueprints.
              </p>
            </div>

          </div>

          {/* Interactive Showcase: OTel Demo Block */}
          <div id="demo-block" className="pt-12">
            <div className="rounded-xl border border-slate-800 bg-[#17181c] p-6 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
                <Terminal className="w-4 h-4" /> Live Demo Architecture Simulation
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-200">Featured Study: The 14-Microservice Distributed Demo</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our UX audits revealed that standard developers use the OpenTelemetry Demo repository to learn best-practice setups. However, they frequently struggle with finding active environment variables (`OTEL_EXPORTER_OTLP_ENDPOINT`). 
                </p>
                <div className="p-4 rounded-lg bg-slate-950 font-mono text-xs text-cyan-300/90 border border-slate-800/80 space-y-1">
                  <div><span className="text-slate-500"># Start OTel demo microservices</span></div>
                  <div>docker compose up -d</div>
                  <div className="text-slate-500 pt-2"># Ports exposed for monitoring:</div>
                  <div>- frontend: http://localhost:8080</div>
                  <div>- jaeger-ui: http://localhost:16686</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Sidebar: Document Actions (Matching Screenshot) */}
        <div className="space-y-6 lg:border-l lg:border-[#2c2e35] lg:pl-8 py-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Document Actions
          </div>
          <ul className="space-y-3.5 text-xs">
            <li>
              <a 
                href="https://github.com/SurbhiAgarwal1/POC/blob/main/docs/proposal_details.md" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors group cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                <span>View Markdown</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/SurbhiAgarwal1/POC/blob/main/src/app/page.tsx" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors group cursor-pointer"
              >
                <Code className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                <span>View page source</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/SurbhiAgarwal1/POC/edit/main/docs/proposal_details.md" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors group cursor-pointer"
              >
                <Edit className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                <span>Edit this page</span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/SurbhiAgarwal1/POC/issues/new" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors group cursor-pointer"
              >
                <PlusCircle className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                <span>Create documentation issue</span>
              </a>
            </li>
          </ul>

          <div className="pt-6 border-t border-[#2c2e35] space-y-4">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Prototype Scope
            </div>
            <div className="rounded-lg bg-slate-950 p-3.5 border border-slate-900 text-[11px] text-slate-400 leading-normal space-y-2">
              <p>
                This environment acts as an interactive developer workspace.
              </p>
              <button 
                onClick={() => onNavigate('ia-section')}
                className="text-cyan-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                Go to Registry <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

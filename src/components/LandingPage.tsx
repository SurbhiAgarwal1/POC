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
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      
      {/* 1. Official OpenTelemetry Announcement Notice Banner (Matching User's Screenshot) */}
      <div className="bg-[#16243b] border border-[#2c2e35] p-5 rounded text-center text-xs text-slate-300 space-y-2">
        <div>
          Observability Summit NA 2026, May 21–22, Minneapolis.{' '}
          <a href="https://observabilitysummit.io" target="_blank" rel="noreferrer" className="text-[#38bdf8] hover:underline font-bold">
            Register
          </a>{' '}
          now or view the{' '}
          <a href="https://observabilitysummit.io/schedule" target="_blank" rel="noreferrer" className="text-[#38bdf8] hover:underline font-bold">
            schedule
          </a>!
        </div>
        <div className="text-[11px] text-slate-400 font-mono">
          KubeCon + CloudNativeCon India 2026, 18-19 June, Mumbai.{' '}
          Come{' '}
          <a href="https://kubecon.io" target="_blank" rel="noreferrer" className="text-[#38bdf8] hover:underline font-bold">
            collaborate, learn, and share
          </a>{' '}
          with the Cloud Native community!
        </div>
      </div>

      {/* 2. Official Slate-Blue Stats Banner (Matching User's Screenshot) */}
      <div className="bg-[#5260a5] rounded p-8 text-center grid grid-cols-2 md:grid-cols-4 gap-6 text-white shadow-sm">
        <div className="space-y-1">
          <div className="text-3xl font-extrabold tracking-tight font-sans">12+</div>
          <div className="text-[11px] font-bold text-slate-200 uppercase tracking-widest font-mono">Languages</div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-extrabold tracking-tight font-sans">200+</div>
          <div className="text-[11px] font-bold text-slate-200 uppercase tracking-widest font-mono">Collector Components</div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-extrabold tracking-tight font-sans">1005+</div>
          <div className="text-[11px] font-bold text-slate-200 uppercase tracking-widest font-mono">Integrations</div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-extrabold tracking-tight font-sans">102+</div>
          <div className="text-[11px] font-bold text-slate-200 uppercase tracking-widest font-mono">Vendors</div>
        </div>
      </div>

      {/* 3. "Trusted by Industry Leaders" Logo Grid & Action Button (Matching User's Screenshot) */}
      <div className="bg-[#1e1f24] rounded border border-[#2c2e35] p-8 text-center space-y-8">
        <h2 className="text-lg font-bold text-slate-100 font-sans tracking-wide">Trusted by Industry Leaders</h2>
        
        {/* Adopter Logos Matching Screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-6 items-center justify-items-center opacity-90">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center text-slate-400 font-mono text-[9px] uppercase font-bold">ALB</div>
            <span className="text-[10px] text-slate-450 font-sans underline cursor-pointer hover:text-slate-200">Alibaba logo</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center text-slate-400 font-mono text-[9px] uppercase font-bold">EBY</div>
            <span className="text-[10px] text-slate-450 font-sans underline cursor-pointer hover:text-slate-200">eBay logo</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center text-slate-400 font-mono text-[9px] uppercase font-bold">GIT</div>
            <span className="text-[10px] text-slate-450 font-sans underline cursor-pointer hover:text-slate-200">GitHub logo</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center text-slate-400 font-mono text-[9px] uppercase font-bold">HRK</div>
            <span className="text-[10px] text-slate-450 font-sans underline cursor-pointer hover:text-slate-200">Heroku logo</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center text-slate-400 font-mono text-[9px] uppercase font-bold">MCD</div>
            <span className="text-[10px] text-slate-450 font-sans underline cursor-pointer hover:text-slate-200">Mercado Libre logo</span>
          </div>
          
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center text-slate-400 font-mono text-[9px] uppercase font-bold">SHP</div>
            <span className="text-[10px] text-slate-450 font-sans underline cursor-pointer hover:text-slate-200">Shopify logo</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center text-slate-400 font-mono text-[9px] uppercase font-bold">SKY</div>
            <span className="text-[10px] text-slate-450 font-sans underline cursor-pointer hover:text-slate-200">Skyscanner logo</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center text-slate-400 font-mono text-[9px] uppercase font-bold">UIP</div>
            <span className="text-[10px] text-slate-450 font-sans underline cursor-pointer hover:text-slate-200">UiPath logo</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center text-slate-400 font-mono text-[9px] uppercase font-bold">VTX</div>
            <span className="text-[10px] text-slate-450 font-sans underline cursor-pointer hover:text-slate-200">VTEX logo</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 bg-white/5 rounded border border-white/10 flex items-center justify-center text-slate-400 font-mono text-[9px] uppercase font-bold">ZLD</div>
            <span className="text-[10px] text-slate-450 font-sans underline cursor-pointer hover:text-slate-200">Zalando logo</span>
          </div>
        </div>

        {/* Adopter Redirect Action */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate('research-section')}
            className="bg-[#5260a5] hover:bg-[#475569] text-white px-5 py-2.5 rounded font-bold text-xs tracking-wider transition-colors cursor-pointer border-none outline-none inline-flex items-center gap-1"
          >
            View all adopters →
          </button>
        </div>
      </div>

      {/* 4. Column Layout: Left = Descriptions, Right = Document Actions Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start pt-4">
        
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-8">
          
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
              OpenTelemetry Ecosystem
            </h1>
            <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-3xl">
              OpenTelemetry&apos;s thriving ecosystem of components, examples, integrations and vendors.
            </p>
          </div>

          <hr className="border-[#2c2e35]" />

          {/* Exact Document Links & Descriptions */}
          <div className="space-y-8 pt-2">
            
            {/* 1. OpenTelemetry Demo */}
            <div className="group space-y-1">
              <div className="flex items-center gap-3">
                <a 
                  href="#demo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('demo-block')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-base font-bold text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors flex items-center gap-1.5"
                >
                  OpenTelemetry Demo
                </a>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Featured Setup
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-4xl">
                The OpenTelemetry Demo is a microservice-based distributed system intended to illustrate the implementation of OpenTelemetry in a near real-world environment.
              </p>
            </div>

            {/* 2. Registry */}
            <div className="group space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <button 
                  onClick={() => onNavigate('ia-section')}
                  className="text-base font-bold text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors flex items-center gap-1.5 text-left cursor-pointer bg-transparent border-none p-0"
                >
                  Registry
                </button>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> Interactive IA Registry Explorer
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-4xl">
                Find libraries, plugins, integrations, and other useful tools for using and extending OpenTelemetry. Click this section to browse our dense information architecture research and configuration registries.
              </p>
            </div>

            {/* 3. Adopters */}
            <div className="group space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <button 
                  onClick={() => onNavigate('research-section')}
                  className="text-base font-bold text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors flex items-center gap-1.5 text-left cursor-pointer bg-transparent border-none p-0"
                >
                  Adopters
                </button>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  User Personas & SRE Research
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-4xl">
                Organizations that use OpenTelemetry. Click this section to read our detailed developer interviews, behavioral matrices, and qualitative UX personas.
              </p>
            </div>

            {/* 4. Third-party distributions */}
            <div className="group space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <button 
                  onClick={() => onNavigate('competitive-section')}
                  className="text-base font-bold text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors flex items-center gap-1.5 text-left cursor-pointer bg-transparent border-none p-0"
                >
                  Third-party distributions
                </button>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Stripe & AWS Benchmark Audits
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-4xl">
                List of open source OpenTelemetry distributions maintained by third parties. Click this section to explore competitive audits on discoverability, density, and configuration setups.
              </p>
            </div>

            {/* 5. Integrations */}
            <div className="group space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <button 
                  onClick={() => onNavigate('mockups-section')}
                  className="text-base font-bold text-[#38bdf8] hover:text-[#7dd3fc] hover:underline transition-colors flex items-center gap-1.5 text-left cursor-pointer bg-transparent border-none p-0"
                >
                  Integrations
                </button>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  High-Fidelity Framer Wireframes
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-4xl">
                Libraries, services, and apps with first-party support for OpenTelemetry. Click this section to view our proposed design solutions, wireframes, and progressive disclosure blueprints.
              </p>
            </div>

          </div>

          {/* Interactive Showcase: OTel Demo Block */}
          <div id="demo-block" className="pt-8">
            <div className="rounded border border-[#2c2e35] bg-[#1e1f24] p-6 space-y-4">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs uppercase tracking-wider">
                <Terminal className="w-4 h-4" /> Live Demo Architecture Simulation
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-200">Featured Study: The 14-Microservice Distributed Demo</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our UX audits revealed that standard developers use the OpenTelemetry Demo repository to learn best-practice setups. However, they frequently struggle with finding active environment variables (`OTEL_EXPORTER_OTLP_ENDPOINT`). 
                </p>
                <div className="p-4 rounded bg-[#17181c] font-mono text-xs text-[#039acc] border border-[#2c2e35] space-y-1">
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
            <div className="rounded bg-[#17181c] p-3.5 border border-[#2c2e35] text-[11px] text-slate-400 leading-normal space-y-2">
              <p>
                This environment acts as an interactive developer workspace.
              </p>
              <button 
                onClick={() => onNavigate('ia-section')}
                className="text-[#039acc] font-semibold hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
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

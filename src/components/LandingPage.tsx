'use client';

import React from 'react';
import { 
  GitBranch, 
  Search, 
  HelpCircle, 
  Sliders, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Activity, 
  Compass, 
  Database,
  BarChart3
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (tabId: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-30 pointer-events-none" />

        <div className="relative text-center space-y-6 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/40 text-xs text-cyan-300 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            CNCF / OpenTelemetry Sandbox UX Case Study
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-slate-100 via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            How Developers Discover and Configure Telemetry Info
          </h1>

          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive UX Research & Information Architecture blueprint designed to optimize discoverability, configure zero-code agents, reduce developer friction, and empower AI-assisted telemetry instrumentation pipelines.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('ia-section')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/10 text-xs cursor-pointer"
            >
              Explore Information Architecture
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('research-section')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 font-medium hover:bg-slate-800 transition-colors text-xs cursor-pointer"
            >
              Read User Personas
            </button>
          </div>
        </div>
      </section>

      {/* Telemetry Visual Flow Simulation */}
      <section className="px-4 max-w-5xl mx-auto">
        <div className="rounded-xl border border-slate-800/80 bg-slate-950/80 glassmorphism p-6 relative overflow-hidden glow-panel-cyan">
          <div className="absolute top-2 right-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-[9px] font-mono text-cyan-400 border border-cyan-500/20">
            Active Trace Simulation
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Ecosystem telemetry flow mapping</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* App Node */}
              <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40 text-center space-y-2">
                <Terminal className="w-5 h-5 text-cyan-400 mx-auto" />
                <div className="text-xs font-bold text-slate-200">Application SDK</div>
                <div className="text-[10px] text-slate-500 font-mono">Traces / Metrics / Logs</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-slate-600 animate-pulse">
                <ArrowRight className="w-6 h-6 text-cyan-500/50" />
              </div>

              {/* OTel Agent */}
              <div className="p-4 rounded-lg border border-cyan-500/20 bg-cyan-950/20 text-center space-y-2 relative">
                <div className="absolute inset-0 bg-cyan-500/5 rounded-lg animate-pulse-glow" />
                <Activity className="w-5 h-5 text-cyan-300 mx-auto" />
                <div className="text-xs font-bold text-cyan-300">Java/Node Agent</div>
                <div className="text-[10px] text-cyan-400/80 font-mono">Bytecode Interceptor</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-slate-600 animate-pulse">
                <ArrowRight className="w-6 h-6 text-cyan-500/50" />
              </div>

              {/* OTel Collector */}
              <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/40 text-center space-y-2">
                <Database className="w-5 h-5 text-blue-400 mx-auto" />
                <div className="text-xs font-bold text-slate-200">OTel Collector</div>
                <div className="text-[10px] text-slate-500 font-mono">Filter / Exporter Pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX Research Core Metrics (Stats) */}
      <section className="px-4 max-w-5xl mx-auto space-y-4">
        <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Research Synthesis Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
            <div className="text-2xl font-black text-cyan-400">72%</div>
            <div className="text-xs font-bold text-slate-300">Google + GitHub Dependent</div>
            <p className="text-[11px] text-slate-500 leading-normal">
              72% of surveyed developers bypass official documentation first, using GitHub search or Google queries to locate copy-paste OTel setups.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
            <div className="text-2xl font-black text-blue-400">4.2 hrs</div>
            <div className="text-xs font-bold text-slate-300">Average Onboarding Friction</div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Average time spent by standard application developers debugging initial configuration variables and dependency version mismatches.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
            <div className="text-2xl font-black text-teal-400">90%+</div>
            <div className="text-xs font-bold text-slate-300">Desire for Density</div>
            <p className="text-[11px] text-slate-500 leading-normal">
              Experienced engineers strongly request high-density semantic tables outlining exact telemetry attributes upfront instead of vague prose.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/40 space-y-2">
            <div className="text-2xl font-black text-purple-400">65%</div>
            <div className="text-xs font-bold text-slate-300">AI Prompt Hallucinations</div>
            <p className="text-[11px] text-slate-500 leading-normal">
              AI assistants frequently generate obsolete or mixed v0.x environment configurations due to absence of consolidated, machine-readable indices.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem & Research Objectives Split */}
      <section className="px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Problem Statement Card */}
        <div className="p-6 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-2 w-fit rounded-lg bg-red-500/10 text-red-400 border border-red-500/25">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">The Problem Statement</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              OpenTelemetry is incredibly powerful, but its information space is highly fragmented. Developers are hit with technical overload: they struggle to easily answer simple questions like, 
              <span className="text-cyan-400 block my-1 font-mono italic text-[11px]">&ldquo;What attributes will my Spring Boot SQL span collect, and how do I disable the telemetry fields I do not need?&rdquo;</span>
              Documentation is buried across multiple independent Git repositories, resulting in deep, progressive failure, configuration fatigue, and friction that slows down ecosystem adoption.
            </p>
          </div>
          <div className="pt-6 border-t border-slate-800/60 mt-6 flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>Status: Critical Friction</span>
            <span>Focus: Discoverability</span>
          </div>
        </div>

        {/* Why Information Density Matters Card */}
        <div className="p-6 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-950 to-slate-900 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-2 w-fit rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">Our IA Recommendations</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 text-xs font-mono">1.</span>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-300">Standardized Metadata Summary Panel:</strong> Ensure every plugin lists downloads, runtime versions, and active maintainer status in a uniform sidebar.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 text-xs font-mono">2.</span>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-300">Progressive Disclosure Layering:</strong> Disclose core copy-paste setup CLI code instantly; defer semantic attribute tables to secondary expandable sections.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 text-xs font-mono">3.</span>
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-300">AI-Ready Knowledge Grids:</strong> Structure schema data as machine-readable indices to prevent AI hallucination and ground telemetry query LLM pipelines.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-800/60 mt-6 flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>Method: Card Sorting</span>
            <span>Target: CNCF Mentors</span>
          </div>
        </div>
      </section>

      {/* User Discovery Journey Map preview */}
      <section className="px-4 max-w-5xl mx-auto space-y-4">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">The Current Developer Discovery Journey</h2>
            <h3 className="text-lg font-bold text-slate-200">From Curiosity to Configuration</h3>
          </div>
          <button 
            onClick={() => onNavigate('research-section')}
            className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold cursor-pointer"
          >
            Detailed Personas & Journey Maps
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Horizontal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/30 space-y-2 relative">
            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">Step 01</div>
            <h4 className="text-xs font-bold text-slate-200">The Discovery Phase</h4>
            <p className="text-[11px] text-slate-500 leading-normal">
              App developer is tasked with adding metrics to a fastify Node server. They hit Google or search ChatGPT.
            </p>
            <div className="text-[10px] text-slate-400 font-mono bg-red-950/40 border border-red-900/30 px-2 py-0.5 rounded w-fit">
              Friction: Outdated AI code
            </div>
          </div>

          <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/30 space-y-2">
            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">Step 02</div>
            <h4 className="text-xs font-bold text-slate-200">The Context Mining</h4>
            <p className="text-[11px] text-slate-500 leading-normal">
              Struggles to identify the differences between official `@opentelemetry/sdk-node` and unofficial third-party wrappers.
            </p>
            <div className="text-[10px] text-slate-400 font-mono bg-amber-950/40 border border-amber-900/30 px-2 py-0.5 rounded w-fit">
              Friction: Scrambled package names
            </div>
          </div>

          <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/30 space-y-2">
            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">Step 03</div>
            <h4 className="text-xs font-bold text-slate-200">Bytecode & Setup</h4>
            <p className="text-[11px] text-slate-500 leading-normal">
              Copies env setups. Realizes standard semantic variables are missing or require custom Collector pipeline processors to route.
            </p>
            <div className="text-[10px] text-slate-400 font-mono bg-amber-950/40 border border-amber-900/30 px-2 py-0.5 rounded w-fit">
              Friction: Missing env examples
            </div>
          </div>

          <div className="p-4 rounded-lg border border-slate-800 bg-slate-900/30 space-y-2">
            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">Step 04</div>
            <h4 className="text-xs font-bold text-slate-200">Audit & Validation</h4>
            <p className="text-[11px] text-slate-500 leading-normal">
              Finally gets data in Grafana, only to realize the trace context spans contain unscrubbed customer passwords or PII.
            </p>
            <div className="text-[10px] text-slate-400 font-mono bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded w-fit">
              Result: Post-hoc code patches
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer banner */}
      <section className="px-4 max-w-5xl mx-auto">
        <div className="rounded-xl bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-500/20 p-8 text-center space-y-4">
          <Sparkles className="w-8 h-8 text-cyan-400 mx-auto animate-pulse" />
          <h3 className="text-lg font-bold text-slate-100">Ready to examine the research synthesis?</h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Click into the User Research dashboard to analyze detailed interview transcripts, SRE behavioral matrices, and explore solutions that fix the Developer Experience gap.
          </p>
          <button
            onClick={() => onNavigate('research-section')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors text-xs cursor-pointer"
          >
            Review User Research Dashboard
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

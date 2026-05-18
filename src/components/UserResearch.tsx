'use client';

import React, { useState } from 'react';
import { personas, Persona } from '@/data/mockData';
import { 
  Users, 
  Target, 
  AlertCircle, 
  Wrench, 
  BrainCircuit, 
  ArrowUpRight, 
  MessageSquare,
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';

export default function UserResearch() {
  const [selectedPersona, setSelectedPersona] = useState<Persona>(personas[0]);
  const [activeAffinityCategory, setActiveAffinityCategory] = useState<string>('all');

  const affinityNotes = [
    { text: "Had to hunt through 4 different github repos just to find what env vars disables tomcat tracing.", category: "fragmentation", author: "Dev Interview #4" },
    { text: "My LLM generated code that used deprecated API fields from v0.24. Now my Jaeger charts show empty spans.", category: "ai-fatigue", author: "Prompting Dev" },
    { text: "The difference between @opentelemetry/api and @opentelemetry/sdk-node is never clearly explained in tutorials.", category: "fragmentation", author: "Dev Interview #12" },
    { text: "SRE demands we send 15 different customer attributes, but our legal team says that violates PII standard rules.", category: "governance", author: "Platform Architect" },
    { text: "We spend 3 days checking package dependency ranges because a minor release broke our typescript compilation.", category: "versioning", author: "Dev Interview #9" },
    { text: "Zero-code instrumentation is magical until it breaks. Then you are left reading deep java agent bytecode logs.", category: "governance", author: "SRE Lead" }
  ];

  const filteredAffinity = activeAffinityCategory === 'all' 
    ? affinityNotes 
    : affinityNotes.filter(n => n.category === activeAffinityCategory);

  return (
    <div className="space-y-12 pb-20">
      {/* Intro Header */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/40 text-xs text-cyan-300 font-mono">
          <Users className="w-3.5 h-3.5" />
          DX User Research Cohorts
        </div>
        <h1 className="text-2xl font-bold text-slate-100">User Personas & Synthesis</h1>
        <p className="text-xs text-slate-400 max-w-2xl">
          Based on 24 in-depth qualitative developer interviews, 110 survey responses, and active GitHub Issue analysis. We identified 4 key roles that consume OpenTelemetry instrumentation data.
        </p>
      </section>

      {/* Personas Interactive Portal */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Persona Selectors Column */}
        <div className="space-y-3 lg:col-span-1">
          <h3 className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-2">Select Research Cohort</h3>
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setSelectedPersona(persona)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                selectedPersona.id === persona.id
                  ? 'border-cyan-500/30 bg-cyan-950/20 shadow-md shadow-cyan-500/5 glow-panel-cyan'
                  : 'border-slate-800 bg-slate-950/20 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                    selectedPersona.id === persona.id ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {persona.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 group-hover:text-slate-100 transition-colors">
                      {persona.name}
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      {persona.role}
                    </p>
                  </div>
                </div>
              </div>
              <ArrowUpRight className={`w-4 h-4 transition-transform ${
                selectedPersona.id === persona.id ? 'text-cyan-400 translate-x-0.5 -translate-y-0.5' : 'text-slate-600'
              }`} />
            </button>
          ))}
        </div>

        {/* Selected Persona Detail Panel */}
        <div className="lg:col-span-2 p-6 rounded-xl border border-slate-800 bg-slate-950/70 glassmorphism space-y-6 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl opacity-40 pointer-events-none" />

          {/* Role Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-900 pb-4">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                {selectedPersona.name}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-slate-800 text-slate-400 uppercase">
                  {selectedPersona.experience}
                </span>
              </h2>
              <p className="text-xs font-mono text-cyan-400">{selectedPersona.role}</p>
            </div>
            
            {/* Literacy Indicator */}
            <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-lg">
              <span className="text-[10px] font-mono text-slate-400">Observability Literacy:</span>
              <div className="w-16 bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-cyan-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${selectedPersona.observabilityLiteracy}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-cyan-300 font-bold">
                {selectedPersona.observabilityLiteracy}/100
              </span>
            </div>
          </div>

          {/* Quote Card */}
          <div className="p-4 rounded-lg bg-cyan-950/10 border-l-2 border-cyan-400 flex gap-3 italic">
            <MessageSquare className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs text-cyan-200 leading-relaxed font-medium">
              &ldquo;{selectedPersona.quote}&rdquo;
            </p>
          </div>

          {/* Profile Text */}
          <div className="space-y-1">
            <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">Cohort Profile</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {selectedPersona.description}
            </p>
          </div>

          {/* Goals & Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Goals */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Target className="w-4 h-4 text-emerald-400" />
                Primary Core Goals
              </div>
              <ul className="space-y-1.5">
                {selectedPersona.goals.map((goal, index) => (
                  <li key={index} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-emerald-400 font-mono mt-0.5">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pain Points */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <AlertCircle className="w-4 h-4 text-red-400" />
                DX Frustrations & Pain Points
              </div>
              <ul className="space-y-1.5">
                {selectedPersona.painPoints.map((pain, index) => (
                  <li key={index} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-red-400 font-mono mt-0.5">•</span>
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack & Mental Model Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-900 text-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-bold">
                <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                Favorite Development Tools
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedPersona.tools.map((tool, idx) => (
                  <span key={idx} className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800/80 text-[10px] text-slate-400 font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-bold">
                <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
                UX Mental Model
              </div>
              <p className="text-[11px] text-slate-400 italic">
                &ldquo;{selectedPersona.mentalModel}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Affinity Mapping Block */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Research Synthesis Synthesis</h2>
          <h3 className="text-lg font-bold text-slate-100">Interactive Affinity Map Clusters</h3>
          <p className="text-xs text-slate-400">
            Qualitative developer quotes and observations gathered during testing, grouped by information architecture failures.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2">
          {['all', 'fragmentation', 'ai-fatigue', 'versioning', 'governance'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveAffinityCategory(cat)}
              className={`px-3 py-1 rounded-full text-[10px] font-mono border transition-all cursor-pointer ${
                activeAffinityCategory === cat
                  ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300'
                  : 'border-slate-800 bg-slate-950/20 text-slate-500 hover:border-slate-700'
              }`}
            >
              {cat === 'all' ? 'All Sticky Notes' : `${cat.toUpperCase()}`}
            </button>
          ))}
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredAffinity.map((note, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border space-y-3 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${
                note.category === 'fragmentation' ? 'border-cyan-900/30 bg-cyan-950/5' :
                note.category === 'ai-fatigue' ? 'border-purple-900/30 bg-purple-950/5' :
                note.category === 'versioning' ? 'border-amber-900/30 bg-amber-950/5' :
                'border-emerald-900/30 bg-emerald-950/5'
              }`}
            >
              <div className="flex items-center justify-between text-[9px] font-mono">
                <span className={`px-2 py-0.5 rounded ${
                  note.category === 'fragmentation' ? 'bg-cyan-500/10 text-cyan-400' :
                  note.category === 'ai-fatigue' ? 'bg-purple-500/10 text-purple-400' :
                  note.category === 'versioning' ? 'bg-amber-500/10 text-amber-400' :
                  'bg-emerald-500/10 text-emerald-400'
                }`}>
                  {note.category.toUpperCase()}
                </span>
                <span className="text-slate-500">{note.author}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                &ldquo;{note.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Behavioral Patterns Journey Map */}
      <section className="p-6 rounded-xl border border-slate-800 bg-slate-950/40 space-y-6">
        <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Cognitive UX Insights Map</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
          <div className="space-y-2 p-4 rounded-lg bg-slate-900/30 border border-slate-900">
            <h4 className="font-bold text-slate-200 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Progressive Disclosure Gap
            </h4>
            <p className="text-slate-400">
              Developers require <strong className="text-slate-300">instant zero-code agent setups</strong> first. Displaying 150 standard telemetry database metrics on page load triggers cognitive overload, prompting developers to copy scripts blindly.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-lg bg-slate-900/30 border border-slate-900">
            <h4 className="font-bold text-slate-200 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-purple-400" />
              The Singleton Illusion
            </h4>
            <p className="text-slate-400">
              Application developers in JavaScript expect libraries to encapsulate their dependencies cleanly. The OpenTelemetry API singleton model violates this expectation, causing painful version collision issues in npm lockfiles.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-lg bg-slate-900/30 border border-slate-900">
            <h4 className="font-bold text-slate-200 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-400" />
              Silent Failure Auditing
            </h4>
            <p className="text-slate-400">
              When tracing fails to compile or export, standard tracers fail silently to prevent application crashes. However, this leaves engineers in a complete black hole, unable to diagnose whether tracer configurations or networking is broken.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

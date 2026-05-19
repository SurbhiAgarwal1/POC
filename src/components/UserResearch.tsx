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
  
  // Interactive simulator states for developer dashboard mockup
  const [consoleService, setConsoleService] = useState<string>('orders-service');
  const [spike, setSpike] = useState<boolean>(false);

  const handleLoadSpike = () => {
    setSpike(true);
    setTimeout(() => setSpike(false), 2000);
  };

  const affinityNotes = [
    { text: "Had to hunt through 4 different github repos just to find what env vars disables tomcat tracing.", category: "fragmentation", author: "Dev Interview #4" },
    { text: "Outdated blogs suggest deprecated SDK dependency fields from v0.24. Now my Jaeger charts show empty spans.", category: "documentation-drift", author: "Application Dev" },
    { text: "The difference between @opentelemetry/api and @opentelemetry/sdk-node is never clearly explained in tutorials.", category: "fragmentation", author: "Dev Interview #12" },
    { text: "SRE demands we send 15 different customer attributes, but our legal team says that violates PII standard rules.", category: "governance", author: "Platform Architect" },
    { text: "We spend 3 days checking package dependency ranges because a minor release broke our typescript compilation.", category: "versioning", author: "Dev Interview #9" },
    { text: "Zero-code instrumentation is magical until it breaks. Then you are left reading deep java agent bytecode logs.", category: "governance", author: "SRE Lead" }
  ];

  const filteredAffinity = activeAffinityCategory === 'all' 
    ? affinityNotes 
    : affinityNotes.filter(n => n.category === activeAffinityCategory);

  return (
    <div className="space-y-8 pb-20">
      
      {/* Intro Header */}
      <section className="space-y-2 border-b border-[#2c2e35] pb-6">
        <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-mono">
          Research Synthesis
        </div>
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
          User Personas & Cohort Synthesis
        </h1>
        <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
          Based on 24 in-depth qualitative developer interviews, 110 survey responses, and active GitHub Issue analyses, we synthesized key developer roles that configure and consume OpenTelemetry.
        </p>
      </section>

      {/* Personas Interactive Portal */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Persona Selectors Column */}
        <div className="space-y-2 lg:col-span-1">
          <div className="text-[10px] font-mono text-slate-500 uppercase font-bold mb-2">Select Research Cohort</div>
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setSelectedPersona(persona)}
              className={`w-full text-left p-3.5 rounded border transition-all cursor-pointer flex items-center justify-between group ${
                selectedPersona.id === persona.id
                  ? 'border-[#039acc] bg-[#1e1f24]'
                  : 'border-[#2c2e35] bg-[#17181c] hover:border-slate-650 hover:bg-[#1e1f24]/50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded flex items-center justify-center text-xs font-mono font-bold ${
                  selectedPersona.id === persona.id ? 'bg-[#039acc] text-[#17181c]' : 'bg-[#1e1f24] text-slate-400 border border-[#2c2e35]'
                }`}>
                  {persona.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">
                    {persona.name}
                  </h4>
                  <p className="text-[10px] text-slate-500">
                    {persona.role}
                  </p>
                </div>
              </div>
              <ArrowUpRight className={`w-4 h-4 transition-colors ${
                selectedPersona.id === persona.id ? 'text-[#039acc]' : 'text-slate-600'
              }`} />
            </button>
          ))}
        </div>

        {/* Selected Persona Detail Panel */}
        <div className="lg:col-span-2 p-6 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-6">
          
          {/* Role Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2c2e35] pb-4">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                {selectedPersona.name}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#2c2e35] text-slate-400 uppercase">
                  {selectedPersona.experience}
                </span>
              </h2>
              <p className="text-xs font-mono text-slate-400">{selectedPersona.role}</p>
            </div>
            
            {/* Literacy Indicator */}
            <div className="flex items-center gap-3 bg-[#17181c] border border-[#2c2e35] px-3 py-1.5 rounded text-xs">
              <span className="text-[10px] font-mono text-slate-500">Observability Literacy:</span>
              <div className="w-16 bg-[#1e1f24] h-2 rounded border border-[#2c2e35] overflow-hidden">
                <div 
                  className="bg-[#039acc] h-full rounded-full transition-all duration-350" 
                  style={{ width: `${selectedPersona.observabilityLiteracy}%` }}
                />
              </div>
              <span className="text-[10px] font-mono text-slate-300 font-bold">
                {selectedPersona.observabilityLiteracy}/100
              </span>
            </div>
          </div>

          {/* Quote Card */}
          <div className="p-4 rounded border border-[#2c2e35] bg-[#17181c]/50 flex gap-3 italic">
            <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              &ldquo;{selectedPersona.quote}&rdquo;
            </p>
          </div>

          {/* Profile Text */}
          <div className="space-y-1">
            <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">Cohort Profile</h4>
            <p className="text-xs text-slate-350 leading-relaxed">
              {selectedPersona.description}
            </p>
          </div>

          {/* Goals & Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Goals */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <Target className="w-4 h-4 text-emerald-500" />
                Primary Core Goals
              </div>
              <ul className="space-y-1.5">
                {selectedPersona.goals.map((goal, index) => (
                  <li key={index} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-emerald-500 font-mono mt-0.5">•</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pain Points */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                <AlertCircle className="w-4 h-4 text-red-500" />
                DX Frustrations & Pain Points
              </div>
              <ul className="space-y-1.5">
                {selectedPersona.painPoints.map((pain, index) => (
                  <li key={index} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-red-500 font-mono mt-0.5">•</span>
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack & Mental Model Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#2c2e35] text-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-bold">
                <Wrench className="w-3.5 h-3.5 text-slate-400" />
                Favorite Development Tools
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedPersona.tools.map((tool, idx) => (
                  <span key={idx} className="bg-[#17181c] px-2 py-0.5 rounded border border-[#2c2e35] text-[10px] text-slate-400 font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-bold">
                <BrainCircuit className="w-3.5 h-3.5 text-slate-400" />
                UX Mental Model
              </div>
              <p className="text-[11px] text-slate-400 italic leading-relaxed">
                &ldquo;{selectedPersona.mentalModel}&rdquo;
              </p>
            </div>
          </div>

          {/* Interactive Live Ecosystem User Interface Mockup Dashboard */}
          <div className="border-t border-[#2c2e35] pt-6 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold tracking-wider">Ecosystem Explorer Live Console</span>
                <span className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Collector Active
                </span>
              </div>
              <h4 className="text-xs font-bold text-slate-200">Interactive Telemetry Dashboard Mockup</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                A live functional prototype of the new OpenTelemetry user console interface. Toggle services, trace metrics, and inject mock loads directly below.
              </p>
            </div>

            {/* Console Control & Visualizer Frame */}
            <div className="rounded border border-[#2c2e35] bg-[#17181c] overflow-hidden">
              
              {/* Header Bar */}
              <div className="bg-[#1a1b20] border-b border-[#2c2e35] px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#039acc]" />
                  <span className="text-[10px] font-mono font-bold text-slate-400">collector-v1.25.0</span>
                </div>
                <div className="flex gap-2">
                  {['orders-service', 'payments-service', 'billing-service'].map((svc) => (
                    <button
                      key={svc}
                      onClick={() => setConsoleService(svc)}
                      className={`px-2 py-0.5 rounded text-[9px] font-mono border transition-all cursor-pointer ${
                        consoleService === svc 
                          ? 'border-[#039acc] bg-[#1e1f24] text-[#38bdf8] font-bold' 
                          : 'border-transparent text-slate-550 hover:text-slate-350'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Console Body Grid */}
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Stats Counters */}
                <div className="md:col-span-1 space-y-3">
                  <div className="p-3 rounded border border-[#2c2e35] bg-[#1a1b20]/60 space-y-1">
                    <span className="text-[9px] font-mono text-slate-500 uppercase">Traces Transmitted</span>
                    <div className="text-lg font-extrabold text-slate-200 font-mono">
                      {consoleService === 'orders-service' ? '1,248,390' : consoleService === 'payments-service' ? '820,491' : '304,115'}
                    </div>
                    <span className="text-[9px] font-mono text-emerald-450 flex items-center gap-0.5">
                      <span>↑ 4.2%</span> <span className="text-slate-600">vs last hour</span>
                    </span>
                  </div>

                  <div className="p-3 rounded border border-[#2c2e35] bg-[#1a1b20]/60 space-y-1">
                    <span className="text-[9px] font-mono text-slate-500 uppercase">Average Latency</span>
                    <div className="text-lg font-extrabold text-[#38bdf8] font-mono">
                      {consoleService === 'orders-service' ? '124 ms' : consoleService === 'payments-service' ? '410 ms' : '88 ms'}
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 font-sans">P99 percentile bounds</span>
                  </div>
                </div>

                {/* Live Latency Distribution Chart */}
                <div className="md:col-span-2 p-3.5 rounded border border-[#2c2e35] bg-[#1a1b20]/30 flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[9px] font-mono text-slate-500 uppercase">Latency Distribution (Real-Time)</span>
                    <button
                      onClick={handleLoadSpike}
                      className="px-2 py-0.5 rounded bg-[#039acc] hover:bg-[#0288b8] text-slate-900 font-bold text-[9px] font-mono transition-all cursor-pointer border-none outline-none"
                    >
                      ⚡ Inject Load Spike
                    </button>
                  </div>

                  {/* Horizontal Bar Chart representation */}
                  <div className="space-y-2 py-1 flex-1 flex flex-col justify-center">
                    {[
                      { range: '0-50ms', pct: consoleService === 'orders-service' ? (spike ? 15 : 40) : (spike ? 10 : 25) },
                      { range: '50-100ms', pct: consoleService === 'orders-service' ? (spike ? 20 : 35) : (spike ? 15 : 30) },
                      { range: '100-250ms', pct: consoleService === 'orders-service' ? (spike ? 45 : 18) : (spike ? 40 : 25) },
                      { range: '250ms+', pct: consoleService === 'orders-service' ? (spike ? 20 : 7) : (spike ? 35 : 20) },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[10px] font-mono">
                        <span className="w-14 text-slate-500 text-right">{row.range}</span>
                        <div className="flex-1 bg-[#1e1f24] border border-[#2c2e35] h-3.5 rounded overflow-hidden">
                          <div 
                            className="bg-[#38bdf8] h-full rounded transition-all duration-500"
                            style={{ width: `${row.pct}%` }}
                          />
                        </div>
                        <span className="w-8 text-slate-350 font-bold">{row.pct}%</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[9px] font-mono text-slate-600 text-center">
                    Active trace aggregation window: 1 minute (grounded semantic spec compliant)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Affinity Mapping Block */}
      <section className="space-y-4">
        <div className="space-y-1 border-b border-[#2c2e35] pb-4">
          <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Observation Clusters</div>
          <h3 className="text-lg font-bold text-slate-100">Affinity Mapping Clusters</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Developer quotes and raw qualitative observations synthesized during research testing, categorized by structural UX issues.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2">
          {['all', 'fragmentation', 'documentation-drift', 'versioning', 'governance'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveAffinityCategory(cat)}
              className={`px-3 py-1 rounded text-[10px] font-mono border transition-all cursor-pointer ${
                activeAffinityCategory === cat
                  ? 'border-[#039acc] bg-[#1e1f24] text-slate-200'
                  : 'border-[#2c2e35] bg-[#17181c] text-slate-400 hover:border-slate-650'
              }`}
            >
              {cat === 'all' ? 'All Notes' : `${cat.toUpperCase()}`}
            </button>
          ))}
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredAffinity.map((note, idx) => (
            <div
              key={idx}
              className="p-4 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between text-[9px] font-mono">
                <span className={`px-2 py-0.5 rounded border ${
                  note.category === 'fragmentation' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' :
                  note.category === 'documentation-drift' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                  note.category === 'versioning' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
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
      <section className="p-6 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-6">
        <div className="text-[10px] font-mono text-slate-500 uppercase font-bold border-b border-[#2c2e35] pb-3">Cognitive UX Insights Map</div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
          <div className="space-y-2 p-4 rounded bg-[#17181c] border border-[#2c2e35]">
            <h4 className="font-bold text-slate-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-slate-400" />
              Progressive Disclosure Gap
            </h4>
            <p className="text-slate-400">
              Developers require <strong className="text-slate-300">instant zero-code agent setups</strong> first. Displaying 150 standard telemetry database metrics on page load triggers cognitive overload, prompting developers to copy scripts blindly.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded bg-[#17181c] border border-[#2c2e35]">
            <h4 className="font-bold text-slate-200 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-slate-400" />
              The Singleton Illusion
            </h4>
            <p className="text-slate-400">
              Application developers in JavaScript expect libraries to encapsulate their dependencies cleanly. The OpenTelemetry API singleton model violates this expectation, causing painful version collision issues in npm lockfiles.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded bg-[#17181c] border border-[#2c2e35]">
            <h4 className="font-bold text-slate-200 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-slate-400" />
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

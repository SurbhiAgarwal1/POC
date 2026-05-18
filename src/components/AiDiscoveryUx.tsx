'use client';

import React, { useState } from 'react';
import { aiScenarios, AiScenarios } from '@/data/mockData';
import { Sparkles, Terminal, ShieldCheck, CheckCircle2, ChevronRight, ArrowRight, MessageSquare, BookOpen, AlertCircle } from 'lucide-react';

export default function AiDiscoveryUx() {
  const [selectedScenario, setSelectedScenario] = useState<AiScenarios>(aiScenarios[0]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handlePromptSelect = (scenario: AiScenarios) => {
    setIsTyping(true);
    // Simulate slight loading latency for generative feel
    setTimeout(() => {
      setSelectedScenario(scenario);
      setIsTyping(false);
    }, 400);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/40 text-xs text-cyan-300 font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          AI-Augmented Telemetry Discovery
        </div>
        <h1 className="text-2xl font-bold text-slate-100">AI / LLM-Aware Telemetry Discovery</h1>
        <p className="text-xs text-slate-400 max-w-2xl">
          Generative AI is changing how developers configure tools. Examine how we build a high-trust grounding system to combat LLM hallucinations and secure telemetry schemas.
        </p>
      </section>

      {/* Suggested Prompts Block */}
      <section className="space-y-3">
        <h3 className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Suggested Developer Prompts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {aiScenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => handlePromptSelect(scenario)}
              className={`p-3.5 rounded-lg border text-left text-xs transition-all cursor-pointer flex flex-col justify-between items-start gap-3 h-full group ${
                selectedScenario.prompt === scenario.prompt 
                  ? 'border-cyan-500 bg-cyan-950/15 glow-panel-cyan' 
                  : 'border-slate-800 bg-slate-950/20 hover:border-slate-700 hover:bg-slate-900/40'
              }`}
            >
              <span className="font-semibold text-slate-300 leading-normal group-hover:text-slate-100 transition-colors">
                &ldquo;{scenario.prompt}&rdquo;
              </span>
              <div className="flex items-center justify-between w-full text-[9px] font-mono text-slate-500">
                <span>Scenario 0{index + 1}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Main Conversation Assistant Frame */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Chat Workspace */}
        <div className="lg:col-span-8 p-6 rounded-xl border border-slate-800 bg-slate-950/70 glassmorphism space-y-6 relative">
          
          {/* Assistant Header */}
          <div className="flex items-center justify-between border-b border-slate-900 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-200">OTel Semantic Copilot</h3>
                <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Grounded in Semantic Specs v1.25.0
                </span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-slate-500">
              Session ID: <span className="text-slate-400">otel-ai-512</span>
            </div>
          </div>

          {/* Interactive Chat Output */}
          <div className="space-y-6 min-h-[300px] flex flex-col justify-end">
            
            {/* User Prompt */}
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-cyan-950/40 border border-cyan-800/30 p-3 rounded-xl rounded-tr-none text-xs text-cyan-200 max-w-[85%] font-medium">
                {selectedScenario.prompt}
              </div>
              <div className="w-7 h-7 rounded-full bg-slate-800 font-mono text-[9px] font-bold flex items-center justify-center text-slate-400 shrink-0">
                USER
              </div>
            </div>

            {/* Assistant Answer */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-cyan-500 text-slate-950 font-mono text-[9px] font-bold flex items-center justify-center shrink-0">
                AI
              </div>
              
              <div className="space-y-4 max-w-[85%] w-full">
                
                {/* Loader / Text block */}
                {isTyping ? (
                  <div className="flex gap-1.5 items-center py-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl rounded-tl-none text-xs text-slate-300 leading-relaxed font-medium">
                      {selectedScenario.assistantSummary}
                    </div>

                    {/* Grounded Code Block */}
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wide">Grounded Setup Code</div>
                      <div className="relative border border-slate-900 bg-slate-900/60 p-4 rounded-lg font-mono text-[11px] text-slate-300">
                        <div className="absolute top-2 right-2 text-[9px] bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-slate-400 uppercase">
                          Source Code
                        </div>
                        <pre className="overflow-x-auto whitespace-pre-wrap">{selectedScenario.generatedCode}</pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Trust & Grounding Audit Panel */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Trust Score Card */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-4">
            <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">Trust & Grounding Audit</h4>
            
            <div className="flex items-center gap-3">
              <div className="text-3xl font-black text-emerald-400 font-mono">
                {selectedScenario.confidenceScore}%
              </div>
              <div className="space-y-0.5 text-xs">
                <div className="font-bold text-slate-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  Grounding Verified
                </div>
                <div className="text-[10px] text-slate-500">Hallucination risk: Minimal</div>
              </div>
            </div>

            {/* Progress gauge */}
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-950">
              <div 
                className="bg-emerald-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${selectedScenario.confidenceScore}%` }}
              />
            </div>
          </div>

          {/* Sources Citations */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/40 space-y-4">
            <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              Verified CNCF Sources
            </h4>

            <div className="space-y-2">
              {selectedScenario.sources.map((source, idx) => (
                <div key={idx} className="p-2.5 rounded border border-slate-900 bg-slate-950/60 text-xs hover:border-slate-800 transition-colors">
                  <div className="font-semibold text-slate-300 truncate mb-1">
                    {source.title}
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span className="text-emerald-400/90 font-bold">{source.confidence}% confidence</span>
                    <a href={source.url} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-0.5">
                      Spec Link
                      <ArrowRight className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hallucination Risk Alert */}
          <div className="p-4 rounded-xl border border-amber-950/20 bg-amber-950/5 text-xs text-slate-400 leading-normal flex gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">LLM Developer Note:</strong> Without consolidated OTel registry indexes, LLMs frequently mix deprecated alpha schemas with v1 APIs. This grounding matrix forces models to verify attributes against the core spec.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

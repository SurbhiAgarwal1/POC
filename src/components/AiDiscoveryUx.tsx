'use client';

import React, { useState } from 'react';
import { aiScenarios, AiScenarios } from '@/data/mockData';
import { Sparkles, Terminal, ShieldCheck, CheckCircle2, ChevronRight, ArrowRight, MessageSquare, BookOpen, AlertCircle, Search, HelpCircle } from 'lucide-react';

export default function AiDiscoveryUx() {
  const [selectedScenario, setSelectedScenario] = useState<AiScenarios>(aiScenarios[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handlePromptSelect = (scenario: AiScenarios) => {
    setIsTyping(true);
    // Simulate slight loading latency for a high-trust verification experience
    setTimeout(() => {
      setSelectedScenario(scenario);
      setIsTyping(false);
    }, 300);
  };

  // Filter scenarios if user searches
  const filteredScenarios = aiScenarios.filter(s => 
    s.prompt.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.assistantSummary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-20">
      
      {/* Page Header */}
      <section className="space-y-2 border-b border-[#2c2e35] pb-6">
        <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-mono">
          Assisted Discovery
        </div>
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight flex items-center gap-2.5">
          Semantic Spec Copilot & Config Explainer
        </h1>
        <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
          Combat LLM hallucinations and configuration drift. Our semantic assistant leverages direct spec grounding to generate type-safe, validated environment parameters with verifiable citations.
        </p>
      </section>

      {/* Main Console Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Query Editor & Scenario Indices */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Query Bar */}
          <div className="p-4 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-3">
            <h3 className="text-[10px] font-mono text-slate-450 uppercase font-bold">Semantic Search</h3>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Ask or search spec attributes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#17181c] border border-[#2c2e35] text-xs text-slate-200 rounded pl-9 pr-4 py-2 focus:outline-none focus:border-[#039acc]"
              />
            </div>
          </div>

          {/* Scenario Buttons */}
          <div className="space-y-2">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Standard Grounded Scenarios</div>
            
            {filteredScenarios.length > 0 ? (
              filteredScenarios.map((scenario, index) => (
                <button
                  key={index}
                  onClick={() => handlePromptSelect(scenario)}
                  className={`w-full p-3.5 rounded border text-left text-xs transition-all cursor-pointer flex justify-between items-center gap-3 ${
                    selectedScenario.prompt === scenario.prompt 
                      ? 'border-[#039acc] bg-[#1e1f24]' 
                      : 'border-[#2c2e35] bg-[#17181c] hover:border-slate-650 hover:bg-[#1e1f24]/50'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="font-semibold text-slate-300 block leading-relaxed">
                      {scenario.prompt}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Scenario 0{index + 1}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                </button>
              ))
            ) : (
              <div className="text-center py-8 border border-dashed border-[#2c2e35] rounded text-slate-500 text-xs">
                No scenarios match your search query.
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Grounded Explainer Workspace (Stripe / GitHub docs layout) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="p-6 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-6">
            
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2c2e35] pb-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-[#17181c] border border-[#2c2e35] flex items-center justify-center text-slate-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Grounded Explainer</h4>
                  <p className="text-[9px] font-mono text-emerald-400">Validated against Semantic Specs v1.25.0</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono text-slate-500">Hallucination Audit:</span>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                  SECURE
                </span>
              </div>
            </div>

            {/* Explainer Body */}
            {isTyping ? (
              <div className="min-h-[220px] flex flex-col items-center justify-center space-y-3">
                <div className="flex gap-1.5 items-center py-2">
                  <span className="w-2 h-2 bg-[#039acc] rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-[#039acc] rounded-full animate-bounce [animation-delay:0.1s]" />
                  <span className="w-2 h-2 bg-[#039acc] rounded-full animate-bounce [animation-delay:0.2s]" />
                </div>
                <p className="text-[11px] font-mono text-slate-500">Retrieving Semantic Mappings...</p>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Grounded Summary text */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">Technical Synthesis</h5>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {selectedScenario.assistantSummary}
                  </p>
                </div>

                {/* Generated Configuration block */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">Validated Code Template</h5>
                  <div className="relative border border-[#2c2e35] bg-[#17181c] p-4 rounded font-mono text-xs text-slate-350 leading-relaxed">
                    <div className="absolute top-2 right-2 text-[9px] bg-[#1e1f24] border border-[#2c2e35] px-1.5 py-0.5 rounded text-slate-500 uppercase font-mono">
                      Configuration
                    </div>
                    <pre className="overflow-x-auto whitespace-pre-wrap">{selectedScenario.generatedCode}</pre>
                  </div>
                </div>

                {/* Spec citations */}
                <div className="space-y-3 border-t border-[#2c2e35] pt-4">
                  <h5 className="text-[10px] font-mono text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                    Verified CNCF Specifications Citations
                  </h5>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedScenario.sources.map((source, idx) => (
                      <div key={idx} className="p-2.5 rounded border border-[#2c2e35] bg-[#17181c]/70 text-xs flex flex-col justify-between gap-2">
                        <span className="font-semibold text-slate-300 leading-tight">
                          {source.title}
                        </span>
                        <div className="flex justify-between items-center text-[10px] font-mono">
                          <span className="text-emerald-400">{source.confidence}% confidence</span>
                          <a href={source.url} target="_blank" rel="noreferrer" className="text-[#039acc] hover:underline flex items-center gap-0.5">
                            Spec Link
                            <ArrowRight className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Hallucination Risk Alert */}
          <div className="p-4 rounded border border-amber-500/10 bg-amber-500/5 text-xs text-slate-400 leading-relaxed flex gap-3">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">LLM Hallucination Safe-Guard:</strong> Without unified OTel index explorer tools, AI generators frequently write deprecated spring agents or wrong env suffixes. This grounded portal enforces type matching directly against active specs registries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

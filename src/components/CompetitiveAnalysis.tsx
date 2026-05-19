'use client';

import React, { useState } from 'react';
import { competitorAnalyses, CompetitorAnalysis } from '@/data/mockData';
import { Award, ShieldAlert, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Eye, Star } from 'lucide-react';

export default function CompetitiveAnalysis() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<CompetitorAnalysis>(competitorAnalyses[0]);

  return (
    <div className="space-y-8 pb-20">
      
      {/* Intro Header */}
      <section className="space-y-2 border-b border-[#2c2e35] pb-6">
        <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-mono">
          Industry Benchmarking
        </div>
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
          Competitive Landscape & Benchmarking Audit
        </h1>
        <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
          An in-depth competitive analysis of industry-standard package registries and documentation networks to study how modern platforms handle progressive disclosure, attribute indexing, and configuration schemas.
        </p>
      </section>

      {/* Comparison Grid Table */}
      <section className="overflow-x-auto rounded border border-[#2c2e35] bg-[#17181c]">
        <table className="w-full text-left text-xs border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-[#2c2e35] bg-[#1e1f24] text-slate-400 font-mono uppercase tracking-wider text-[10px]">
              <th className="p-4">Platform</th>
              <th className="p-4">Focus / Class</th>
              <th className="p-4 text-center">Progressive Disclosure</th>
              <th className="p-4 text-center">Search Relevance</th>
              <th className="p-4 text-center">Version Control UX</th>
              <th className="p-4">Ecosystem Strategy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2c2e35]">
            {competitorAnalyses.map((comp) => (
              <tr 
                key={comp.name}
                onClick={() => setSelectedCompetitor(comp)}
                className={`hover:bg-[#1e1f24]/55 transition-colors cursor-pointer ${
                  selectedCompetitor.name === comp.name ? 'bg-[#1e1f24]' : ''
                }`}
              >
                <td className="p-4 font-bold text-slate-200 flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#1e1f24] text-[10px] font-mono flex items-center justify-center text-slate-400 border border-[#2c2e35]">
                    {comp.logo}
                  </div>
                  {comp.name}
                </td>
                <td className="p-4 text-slate-400 font-mono text-[11px]">
                  {comp.type}
                </td>
                {/* Custom Ratings Display */}
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${
                          i < comp.progressiveDisclosureRating ? 'bg-[#039acc]' : 'bg-[#2c2e35]'
                        }`} 
                      />
                    ))}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${
                          i < comp.searchRelevanceRating ? 'bg-[#039acc]' : 'bg-[#2c2e35]'
                        }`} 
                      />
                    ))}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${
                          i < comp.versioningUxRating ? 'bg-[#039acc]' : 'bg-[#2c2e35]'
                        }`} 
                      />
                    ))}
                  </div>
                </td>
                <td className="p-4 text-slate-400 text-[11px] truncate max-w-[200px]">
                  {comp.discoveryPattern}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Selected Competitor Strengths & Actionable Takeaway */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* Strengths & Weaknesses Column */}
        <div className="md:col-span-2 p-6 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#17181c] border border-[#2c2e35] text-slate-400 flex items-center justify-center font-mono font-bold text-sm">
              {selectedCompetitor.logo}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Benchmarking Details: {selectedCompetitor.name}</h3>
              <p className="text-[10px] font-mono text-slate-500">{selectedCompetitor.type}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Strengths */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-mono text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                UX Design Strengths
              </h4>
              <ul className="space-y-2">
                {selectedCompetitor.strengths.map((str, idx) => (
                  <li key={idx} className="text-xs text-slate-350 flex items-start gap-2 bg-[#17181c] p-2.5 rounded border border-[#2c2e35]/60">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-mono text-red-400 uppercase tracking-wide flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                UX Failures / Limitations
              </h4>
              <ul className="space-y-2">
                {selectedCompetitor.weaknesses.map((weak, idx) => (
                  <li key={idx} className="text-xs text-slate-355 flex items-start gap-2 bg-[#17181c] p-2.5 rounded border border-[#2c2e35]/60">
                    <span className="text-red-400 font-bold">•</span>
                    <span>{weak}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Actionable Takeaways Column */}
        <div className="p-6 rounded border border-[#2c2e35] bg-[#1e1f24] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-2 w-fit rounded bg-[#17181c] border border-[#2c2e35] text-slate-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-mono text-slate-500 uppercase tracking-wide">Actionable Takeaway</h3>
            <p className="text-xs text-slate-200 leading-relaxed font-bold">
              How OTel Ecosystem Explorer adopts these patterns:
            </p>
            <p className="text-xs text-slate-400 leading-relaxed italic bg-[#17181c] p-4 rounded border border-[#2c2e35]">
              &ldquo;{selectedCompetitor.takeaway}&rdquo;
            </p>
          </div>

          <div className="pt-4 border-t border-[#2c2e35] mt-6 flex items-center justify-between text-[9px] font-mono text-slate-500">
            <span>Learn Rate: High</span>
            <span>Target: DX Design</span>
          </div>
        </div>
      </section>

      {/* Synthesis Summary */}
      <section className="p-6 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-4">
        <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Consolidated Core Pattern</div>
        <h3 className="text-xs font-mono text-slate-300 uppercase tracking-wider">The Golden Path Framework</h3>
        <p className="text-xs text-slate-450 leading-relaxed">
          Our benchmark reveals that successful developer sites utilize a <strong className="text-slate-300">dual-onboarding layout</strong>. 
          For beginners, they show simple, copy-paste snippets with progress indicators. For power users, they provide search inputs targeting deep metadata schema trees directly on the landing dashboard page. We have integrated these paradigms directly in our recommended OpenTelemetry Information Architecture.
        </p>
      </section>
    </div>
  );
}

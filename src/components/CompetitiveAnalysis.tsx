'use client';

import React, { useState } from 'react';
import { competitorAnalyses, CompetitorAnalysis } from '@/data/mockData';
import { Award, ShieldAlert, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Eye, Star } from 'lucide-react';

export default function CompetitiveAnalysis() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<CompetitorAnalysis>(competitorAnalyses[0]);

  return (
    <div className="space-y-12 pb-20">
      {/* Intro Header */}
      <section className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/40 text-xs text-cyan-300 font-mono">
          <Award className="w-3.5 h-3.5" />
          Competitor Benchmarking Matrices
        </div>
        <h1 className="text-2xl font-bold text-slate-100">Competitive Landscape & Benchmarking</h1>
        <p className="text-xs text-slate-400 max-w-2xl">
          An in-depth analysis of industry-standard packages, documentation, and registries to learn how modern developer tools solve progressive disclosure and dense technical data structures.
        </p>
      </section>

      {/* Comparison Grid Table */}
      <section className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
        <table className="w-full text-left text-xs border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 font-mono uppercase tracking-wider text-[10px]">
              <th className="p-4">Platform</th>
              <th className="p-4">Focus / Class</th>
              <th className="p-4 text-center">Progressive Disclosure</th>
              <th className="p-4 text-center">Search Relevance</th>
              <th className="p-4 text-center">Version Control UX</th>
              <th className="p-4">Ecosystem Strategy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-900">
            {competitorAnalyses.map((comp) => (
              <tr 
                key={comp.name}
                onClick={() => setSelectedCompetitor(comp)}
                className={`hover:bg-slate-900/30 transition-colors cursor-pointer ${
                  selectedCompetitor.name === comp.name ? 'bg-cyan-950/10' : ''
                }`}
              >
                <td className="p-4 font-bold text-slate-200 flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-slate-800 text-[10px] font-mono flex items-center justify-center text-slate-300 border border-slate-700">
                    {comp.logo}
                  </div>
                  {comp.name}
                </td>
                <td className="p-4 text-slate-400 font-mono text-[11px]">
                  {comp.type}
                </td>
                {/* Custom Ratings Display */}
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${
                          i < comp.progressiveDisclosureRating ? 'bg-cyan-500' : 'bg-slate-800'
                        }`} 
                      />
                    ))}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${
                          i < comp.searchRelevanceRating ? 'bg-emerald-400' : 'bg-slate-800'
                        }`} 
                      />
                    ))}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${
                          i < comp.versioningUxRating ? 'bg-blue-400' : 'bg-slate-800'
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
        <div className="md:col-span-2 p-6 rounded-xl border border-slate-800 bg-slate-950/40 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-mono font-bold">
              {selectedCompetitor.logo}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">Benchmarking Details: {selectedCompetitor.name}</h3>
              <p className="text-[10px] font-mono text-cyan-400">{selectedCompetitor.type}</p>
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
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/20 p-2.5 rounded border border-slate-900">
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
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/20 p-2.5 rounded border border-slate-900">
                    <span className="text-red-400 font-bold">•</span>
                    <span>{weak}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Actionable Takeaways Column */}
        <div className="p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-blue-950/20 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-4">
            <div className="p-2 w-fit rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wide">Actionable Takeaway</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-semibold">
              How OTel Ecosystem Explorer adopts these patterns:
            </p>
            <p className="text-xs text-slate-400 leading-relaxed italic bg-slate-950/50 p-4 rounded-lg border border-slate-900">
              &ldquo;{selectedCompetitor.takeaway}&rdquo;
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between text-[9px] font-mono text-slate-500">
            <span>Learn Rate: High</span>
            <span>Target: DX Design</span>
          </div>
        </div>
      </section>

      {/* Synthesis Summary */}
      <section className="p-6 rounded-xl border border-slate-800 bg-slate-950/40 space-y-4">
        <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">The Golden Path Framework</h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          Our benchmark reveals that successful developer sites utilize a <strong className="text-slate-300">dual-onboarding layout</strong>. 
          For beginners, they show simple, copy-paste snippets with progress indicators. For power users, they provide search inputs targeting deep metadata schema trees directly on the landing dashboard page. We have integrated these paradigms directly in our recommended OpenTelemetry Information Architecture.
        </p>
      </section>
    </div>
  );
}

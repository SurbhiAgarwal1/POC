'use client';

import React, { useState } from 'react';
import { Layout, ToggleLeft, ToggleRight, Sparkles, Terminal, Code2, GitCompare, Compass, CheckCircle } from 'lucide-react';

export default function WireframeMockups() {
  const [isHighFi, setIsHighFi] = useState<boolean>(true);
  const [activeScreen, setActiveScreen] = useState<'onboarding' | 'details' | 'compare'>('details');

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <section className="flex flex-wrap items-center justify-between gap-6 border-b border-slate-900 pb-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/40 text-xs text-cyan-300 font-mono">
            <Layout className="w-3.5 h-3.5" />
            UX Prototyping Portal
          </div>
          <h1 className="text-2xl font-bold text-slate-100">Interactive Wireframes & Mockups</h1>
          <p className="text-xs text-slate-400 max-w-xl">
            Toggle between raw technical blueprints (Low-Fi) and fully rendered dev-tool layouts (High-Fi) to examine our ergonomic workflow redesigns.
          </p>
        </div>

        {/* Fidelity Toggle Switch */}
        <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-2 rounded-xl shadow-md shadow-black/40">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Fidelity:</span>
          <button
            onClick={() => setIsHighFi(false)}
            className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold cursor-pointer transition-all ${
              !isHighFi 
                ? 'bg-slate-850 text-slate-200 border border-slate-700 shadow-sm' 
                : 'text-slate-500 hover:text-slate-400'
            }`}
          >
            Low-Fi Sketch
          </button>
          <button
            onClick={() => setIsHighFi(true)}
            className={`px-3 py-1 rounded-lg text-[10px] font-mono font-bold cursor-pointer transition-all ${
              isHighFi 
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/10' 
                : 'text-slate-500 hover:text-slate-400'
            }`}
          >
            High-Fi Render
          </button>
        </div>
      </section>

      {/* Workspace Sub-tabs */}
      <section className="flex border-b border-slate-900 text-xs">
        <button
          onClick={() => setActiveScreen('onboarding')}
          className={`pb-3 px-4 font-mono font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeScreen === 'onboarding' 
              ? 'border-cyan-500 text-cyan-300' 
              : 'border-transparent text-slate-500 hover:text-slate-400'
          }`}
        >
          <Compass className="w-4 h-4" />
          01. Quick Onboarding Flow
        </button>
        <button
          onClick={() => setActiveScreen('details')}
          className={`pb-3 px-4 font-mono font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeScreen === 'details' 
              ? 'border-cyan-500 text-cyan-300' 
              : 'border-transparent text-slate-500 hover:text-slate-400'
          }`}
        >
          <Terminal className="w-4 h-4" />
          02. Component Detail Console
        </button>
        <button
          onClick={() => setActiveScreen('compare')}
          className={`pb-3 px-4 font-mono font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeScreen === 'compare' 
              ? 'border-cyan-500 text-cyan-300' 
              : 'border-transparent text-slate-500 hover:text-slate-400'
          }`}
        >
          <GitCompare className="w-4 h-4" />
          03. Version Compare Diff
        </button>
      </section>

      {/* Screen Render Container */}
      <section className={`p-6 rounded-xl border transition-all duration-300 ${
        isHighFi 
          ? 'border-slate-800 bg-slate-950/60 shadow-xl' 
          : 'border-dashed border-slate-700 bg-slate-900/10 font-mono text-slate-400'
      }`}>
        
        {/* Sketch / Blueprint Label (when LowFi) */}
        {!isHighFi && (
          <div className="mb-6 p-3 rounded border border-dashed border-slate-700 bg-slate-900/50 text-[10px] text-amber-500/80 flex items-start gap-2 leading-relaxed">
            <span className="bg-amber-500/10 border border-amber-500/20 px-1 rounded">BLUEPRINT NOTE</span>
            <span>Low-fidelity rendering represents wireframe structural hierarchy. Styling and glows are bypassed to isolate spatial grid, accessibility targets, and primary text information density.</span>
          </div>
        )}

        {/* 1. Onboarding Flow Screen */}
        {activeScreen === 'onboarding' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-200">Interactive Prototype: Developer Golden Onboarding</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Redesigning standard OTel auto-instrumentation onboarding to prioritize swift copy-paste setups and avoid deep documentation clicks.
              </p>
            </div>

            {/* Layout steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Step 1 */}
              <div className={`p-4 rounded-xl border ${
                isHighFi ? 'border-slate-800 bg-slate-900/20' : 'border-slate-700 bg-slate-950/20'
              } space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isHighFi ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'border border-slate-700 text-slate-400'
                  }`}>
                    STEP 01
                  </span>
                  <span className="text-[10px] text-slate-500">Dependencies</span>
                </div>
                <h4 className="text-xs font-bold text-slate-300">Run Bootstraper CLI</h4>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Execute the installer script in terminal to automatically inspect and discover existing project runtimes.
                </p>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-cyan-400 font-mono">
                  npm install --save @opentelemetry/sdk-node
                </div>
              </div>

              {/* Step 2 */}
              <div className={`p-4 rounded-xl border ${
                isHighFi ? 'border-slate-800 bg-slate-900/20' : 'border-slate-700 bg-slate-950/20'
              } space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isHighFi ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'border border-slate-700 text-slate-400'
                  }`}>
                    STEP 02
                  </span>
                  <span className="text-[10px] text-slate-500">Auto Setup</span>
                </div>
                <h4 className="text-xs font-bold text-slate-300">Export Basic Configs</h4>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Configure local endpoints and service names utilizing environment parameters. No runtime changes needed.
                </p>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-blue-400 font-mono">
                  export OTEL_SERVICE_NAME=&ldquo;web-app&rdquo;
                </div>
              </div>

              {/* Step 3 */}
              <div className={`p-4 rounded-xl border ${
                isHighFi ? 'border-slate-800 bg-slate-900/20' : 'border-slate-700 bg-slate-950/20'
              } space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isHighFi ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'border border-slate-700 text-slate-400'
                  }`}>
                    STEP 03
                  </span>
                  <span className="text-[10px] text-slate-500">Validation</span>
                </div>
                <h4 className="text-xs font-bold text-slate-300">Trace Connections</h4>
                <p className="text-[11px] text-slate-500 leading-normal">
                  Run the diagnostic script. Verify traces are received successfully by local routing collectors.
                </p>
                <div className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-emerald-400 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Traces forwarding: SUCCESS</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Component Detail Console */}
        {activeScreen === 'details' && (
          <div className="space-y-6">
            
            {/* Split Console Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Main Content Area */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-2">
                  <h3 className={`text-base font-bold ${isHighFi ? 'text-slate-100' : 'text-slate-200'}`}>
                    opentelemetry-javaagent <span className="text-xs font-mono font-normal text-slate-500">v2.3.0</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Bytecode tracer agent providing transparent tracing injection for Tomcat, Spring Boot, and PostgreSQL JDBC frameworks.
                  </p>
                </div>

                {/* Configuration Code Block */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">01. Execute Command</h4>
                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-850 font-mono text-xs text-slate-300 space-y-2">
                    <div>$ wget https://github.com/open-telemetry/.../opentelemetry-javaagent.jar</div>
                    <div>$ java -javaagent:opentelemetry-javaagent.jar -jar customer-app.jar</div>
                  </div>
                </div>

                {/* Signals Table */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">02. Schema Metrics & Traces</h4>
                  <div className="overflow-x-auto border border-slate-850 rounded-lg">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-850 bg-slate-900/40 text-slate-500 font-mono text-[9px] uppercase tracking-wide">
                          <th className="p-2.5">Telemetry Signal</th>
                          <th className="p-2.5">Type</th>
                          <th className="p-2.5">Attribute required</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-900">
                        <tr>
                          <td className="p-2.5 text-slate-300 font-mono font-bold">http.server.request.duration</td>
                          <td className="p-2.5 text-slate-500">Histogram</td>
                          <td className="p-2.5 font-mono text-[10px] text-cyan-400">http.request.method</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 text-slate-300 font-mono font-bold">db.client.operation.duration</td>
                          <td className="p-2.5 text-slate-500">Histogram</td>
                          <td className="p-2.5 font-mono text-[10px] text-cyan-400">db.system</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sidebar Info Panel */}
              <div className={`p-4 rounded-xl border ${
                isHighFi ? 'border-slate-800 bg-slate-900/10' : 'border-slate-700 bg-slate-950/20'
              } space-y-4`}>
                <h4 className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">Telemetry Metadata</h4>
                
                <div className="space-y-3 text-xs leading-normal">
                  <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                    <span className="text-slate-500">Downloads</span>
                    <span className="text-slate-300 font-bold">2.1M/mo</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                    <span className="text-slate-500">Complexity</span>
                    <span className="text-emerald-400 font-bold uppercase">Low</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                    <span className="text-slate-500">Language</span>
                    <span className="text-slate-300">Java SDK</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Status</span>
                    <span className="text-cyan-400 font-bold">Stable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Version Compare Screen */}
        {activeScreen === 'compare' && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-200">Version Diff Explorer (v1.24.0 vs v2.0.0)</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Visualize environment variable changes and semantic convention renames side-by-side to prevent dashboard compile crashes.
              </p>
            </div>

            {/* Side-by-side diff mock */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Old Version */}
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-500">Version v1.24.0 (Legacy)</span>
                  <span className="bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded border border-red-500/20">OUTDATED</span>
                </div>
                <div className="font-mono text-xs text-slate-400 space-y-1.5">
                  <div className="line-through text-red-500/80">- OTEL_INSTRUMENTATION_HTTP_ENABLED</div>
                  <div className="line-through text-red-500/80">- http.method (Span Attribute)</div>
                  <div className="line-through text-red-500/80">- http.status_code (Span Attribute)</div>
                </div>
              </div>

              {/* New Version */}
              <div className={`p-4 rounded-lg border space-y-3 ${
                isHighFi ? 'border-cyan-500/20 bg-cyan-950/5' : 'border-slate-700 bg-slate-900'
              }`}>
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-300">Version v2.0.0 (Latest)</span>
                  <span className="bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">ACTIVE</span>
                </div>
                <div className="font-mono text-xs text-slate-300 space-y-1.5">
                  <div className="text-emerald-400 font-bold">+ otel.instrumentation.http.enabled</div>
                  <div className="text-emerald-400 font-bold">+ http.request.method (Semantic Convention)</div>
                  <div className="text-emerald-400 font-bold">+ http.response.status_code (Semantic Convention)</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

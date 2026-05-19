'use client';

import React, { useState } from 'react';
import { Layout, ToggleLeft, ToggleRight, Terminal, Code2, GitCompare, Compass, CheckCircle } from 'lucide-react';

export default function WireframeMockups() {
  const [isHighFi, setIsHighFi] = useState<boolean>(true);
  const [activeScreen, setActiveScreen] = useState<'onboarding' | 'details' | 'compare'>('details');

  return (
    <div className="space-y-8 pb-20">
      
      {/* Page Header */}
      <section className="flex flex-wrap items-center justify-between gap-6 border-b border-[#2c2e35] pb-6">
        <div className="space-y-2">
          <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-mono">
            UX Wireframes
          </div>
          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">Interactive Wireframes & Mockups</h1>
          <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
            Toggle between raw technical blueprints (Low-Fi) and fully rendered layouts (High-Fi) to examine our spatial grids and telemetry information densities.
          </p>
        </div>

        {/* Fidelity Toggle Switch */}
        <div className="flex items-center gap-3 bg-[#17181c] border border-[#2c2e35] p-2 rounded text-xs shadow shadow-black/40">
          <span className="text-[10px] font-mono text-slate-450 uppercase tracking-wide">Fidelity:</span>
          <button
            onClick={() => setIsHighFi(false)}
            className={`px-3 py-1 rounded text-[10px] font-mono font-bold cursor-pointer transition-all ${
              !isHighFi 
                ? 'bg-[#1e1f24] text-slate-200 border border-[#2c2e35]' 
                : 'text-slate-500 hover:text-slate-400'
            }`}
          >
            Low-Fi Sketch
          </button>
          <button
            onClick={() => setIsHighFi(true)}
            className={`px-3 py-1 rounded text-[10px] font-mono font-bold cursor-pointer transition-all ${
              isHighFi 
                ? 'bg-[#039acc] text-[#17181c]' 
                : 'text-slate-500 hover:text-slate-400'
            }`}
          >
            High-Fi Render
          </button>
        </div>
      </section>

      {/* Workspace Sub-tabs */}
      <section className="flex border-b border-[#2c2e35] text-xs">
        <button
          onClick={() => setActiveScreen('onboarding')}
          className={`pb-3 px-4 font-mono font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
            activeScreen === 'onboarding' 
              ? 'border-[#039acc] text-slate-200' 
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
              ? 'border-[#039acc] text-slate-200' 
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
              ? 'border-[#039acc] text-slate-200' 
              : 'border-transparent text-slate-500 hover:text-slate-400'
          }`}
        >
          <GitCompare className="w-4 h-4" />
          03. Version Compare Diff
        </button>
      </section>

      {/* Screen Render Container */}
      <section className={`p-6 rounded border transition-all duration-300 ${
        isHighFi 
          ? 'border-[#2c2e35] bg-[#1e1f24]' 
          : 'border-dashed border-[#2c2e35] bg-[#17181c] font-mono text-slate-400'
      }`}>
        
        {/* Sketch / Blueprint Label (when LowFi) */}
        {!isHighFi && (
          <div className="mb-6 p-3 rounded border border-dashed border-[#2c2e35] bg-[#1e1f24] text-[10px] text-amber-500 flex items-start gap-2 leading-relaxed font-mono">
            <span className="bg-amber-500/10 border border-amber-500/20 px-1 rounded uppercase font-bold">Blueprint Schema</span>
            <span>Low-fidelity rendering represents wireframe structural layout hierarchy. Styling attributes are bypassed to isolate spatial grid dimensions and access pathways.</span>
          </div>
        )}

        {/* 1. Onboarding Flow Screen */}
        {activeScreen === 'onboarding' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-200">Interactive Prototype: Developer Onboarding Flow</h3>
              <p className="text-xs text-slate-400 leading-normal">
                Redesigning standard OTel auto-instrumentation onboarding to prioritize swift copy-paste setups and avoid deep documentation lookups.
              </p>
            </div>

            {/* Layout steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Step 1 */}
              <div className={`p-4 rounded border ${
                isHighFi ? 'border-[#2c2e35] bg-[#17181c]' : 'border-slate-700 bg-[#17181c]'
              } space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    isHighFi ? 'bg-slate-800 text-slate-450 border-[#2c2e35]' : 'border-slate-700 text-slate-500'
                  }`}>
                    STEP 01
                  </span>
                  <span className="text-[10px] text-slate-500">Dependencies</span>
                </div>
                <h4 className="text-xs font-bold text-slate-300">Run Bootstraper CLI</h4>
                <p className="text-[11px] text-slate-450 leading-relaxed">
                  Execute the installer script in terminal to automatically inspect and discover existing project runtimes.
                </p>
                <div className="p-2.5 rounded bg-[#1e1f24] border border-[#2c2e35] text-[10px] text-[#039acc] font-mono">
                  npm install --save @opentelemetry/sdk-node
                </div>
              </div>

              {/* Step 2 */}
              <div className={`p-4 rounded border ${
                isHighFi ? 'border-[#2c2e35] bg-[#17181c]' : 'border-slate-700 bg-[#17181c]'
              } space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    isHighFi ? 'bg-slate-800 text-slate-450 border-[#2c2e35]' : 'border-slate-700 text-slate-500'
                  }`}>
                    STEP 02
                  </span>
                  <span className="text-[10px] text-slate-500">Auto Setup</span>
                </div>
                <h4 className="text-xs font-bold text-slate-300">Export Basic Configs</h4>
                <p className="text-[11px] text-slate-450 leading-relaxed">
                  Configure local endpoints and service names utilizing environment parameters. No runtime changes needed.
                </p>
                <div className="p-2.5 rounded bg-[#1e1f24] border border-[#2c2e35] text-[10px] text-[#039acc] font-mono">
                  export OTEL_SERVICE_NAME=&ldquo;web-app&rdquo;
                </div>
              </div>

              {/* Step 3 */}
              <div className={`p-4 rounded border ${
                isHighFi ? 'border-[#2c2e35] bg-[#17181c]' : 'border-slate-700 bg-[#17181c]'
              } space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    isHighFi ? 'bg-slate-800 text-slate-450 border-[#2c2e35]' : 'border-slate-700 text-slate-500'
                  }`}>
                    STEP 03
                  </span>
                  <span className="text-[10px] text-slate-500">Validation</span>
                </div>
                <h4 className="text-xs font-bold text-slate-300">Trace Connections</h4>
                <p className="text-[11px] text-slate-450 leading-relaxed">
                  Run the diagnostic script. Verify traces are received successfully by local routing collectors.
                </p>
                <div className="flex items-center gap-2 p-2 rounded bg-[#1e1f24] border border-[#2c2e35] text-[10px] text-emerald-400 font-mono">
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
                  <p className="text-xs text-slate-455 leading-relaxed">
                    Bytecode tracer agent providing transparent tracing injection for Tomcat, Spring Boot, and PostgreSQL JDBC frameworks.
                  </p>
                </div>

                {/* Configuration Code Block */}
                <div className="space-y-3">
                  <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">01. Execute Command</div>
                  <div className="p-4 rounded bg-[#17181c] border border-[#2c2e35] font-mono text-xs text-slate-300 space-y-2">
                    <div>$ wget https://github.com/open-telemetry/.../opentelemetry-javaagent.jar</div>
                    <div>$ java -javaagent:opentelemetry-javaagent.jar -jar customer-app.jar</div>
                  </div>
                </div>

                {/* Signals Table */}
                <div className="space-y-3">
                  <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">02. Schema Metrics & Traces</div>
                  <div className="overflow-x-auto border border-[#2c2e35] rounded">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-[#2c2e35] bg-[#17181c] text-slate-500 font-mono text-[9px] uppercase tracking-wide">
                          <th className="p-2.5">Telemetry Signal</th>
                          <th className="p-2.5">Type</th>
                          <th className="p-2.5">Attribute required</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#2c2e35]">
                        <tr className="hover:bg-[#17181c]/25">
                          <td className="p-2.5 text-slate-300 font-mono font-bold">http.server.request.duration</td>
                          <td className="p-2.5 text-slate-500">Histogram</td>
                          <td className="p-2.5 font-mono text-[10px] text-[#039acc] font-semibold">http.request.method</td>
                        </tr>
                        <tr className="hover:bg-[#17181c]/25">
                          <td className="p-2.5 text-slate-300 font-mono font-bold">db.client.operation.duration</td>
                          <td className="p-2.5 text-slate-500">Histogram</td>
                          <td className="p-2.5 font-mono text-[10px] text-[#039acc] font-semibold">db.system</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sidebar Info Panel */}
              <div className={`p-4 rounded border ${
                isHighFi ? 'border-[#2c2e35] bg-[#17181c]' : 'border-slate-750 bg-[#17181c]'
              } space-y-4`}>
                <h4 className="text-[10px] font-mono text-slate-550 uppercase tracking-wide font-bold">Telemetry Metadata</h4>
                
                <div className="space-y-3 text-xs leading-normal">
                  <div className="flex justify-between items-center border-b border-[#2c2e35] pb-2">
                    <span className="text-slate-505">Downloads</span>
                    <span className="text-slate-300 font-bold">2.1M/mo</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#2c2e35] pb-2">
                    <span className="text-slate-505">Complexity</span>
                    <span className="text-emerald-450 font-bold uppercase">Low</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#2c2e35] pb-2">
                    <span className="text-slate-505">Language</span>
                    <span className="text-slate-300">Java SDK</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-505">Status</span>
                    <span className="text-slate-300 font-bold">Stable</span>
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
              <p className="text-xs text-slate-450 leading-normal">
                Visualize environment variable changes and semantic convention renames side-by-side to prevent dashboard compile crashes.
              </p>
            </div>

            {/* Side-by-side diff mock */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Old Version */}
              <div className="p-4 rounded bg-[#17181c] border border-[#2c2e35] space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-500">Version v1.24.0 (Legacy)</span>
                  <span className="bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded border border-red-500/20">OUTDATED</span>
                </div>
                <div className="font-mono text-xs text-slate-450 space-y-1.5">
                  <div className="line-through text-red-500/80">- OTEL_INSTRUMENTATION_HTTP_ENABLED</div>
                  <div className="line-through text-red-500/80">- http.method (Span Attribute)</div>
                  <div className="line-through text-red-500/80">- http.status_code (Span Attribute)</div>
                </div>
              </div>

              {/* New Version */}
              <div className={`p-4 rounded border space-y-3 ${
                isHighFi ? 'border-[#2c2e35] bg-[#17181c]' : 'border-slate-700 bg-[#17181c]'
              }`}>
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-300">Version v2.0.0 (Latest)</span>
                  <span className="bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">ACTIVE</span>
                </div>
                <div className="font-mono text-xs text-slate-300 space-y-1.5">
                  <div className="text-emerald-450 font-bold">+ otel.instrumentation.http.enabled</div>
                  <div className="text-emerald-450 font-bold">+ http.request.method (Semantic Convention)</div>
                  <div className="text-emerald-450 font-bold">+ http.response.status_code (Semantic Convention)</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

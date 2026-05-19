'use client';

import React, { useState } from 'react';
import { instrumentationPackages, InstrumentationPackage, TelemetrySignal, ConfigOption } from '@/data/mockData';
import { 
  Cpu, 
  Search, 
  Filter, 
  Terminal, 
  HelpCircle, 
  Sliders, 
  Layers, 
  Code2, 
  ShieldCheck, 
  ChevronRight,
  Database,
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export default function InformationArchitecture() {
  const [selectedPkg, setSelectedPkg] = useState<InstrumentationPackage>(instrumentationPackages[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState('All');
  const [signalFilter, setSignalFilter] = useState('All');
  const [activeDetailTab, setActiveDetailTab] = useState<'metadata' | 'config' | 'schema'>('metadata');

  // Filter packages
  const filteredPkgs = instrumentationPackages.filter((pkg) => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLang = languageFilter === 'All' || pkg.language === languageFilter;
    
    const matchesSignal = signalFilter === 'All' || pkg.signals.some(s => s.type === signalFilter.toLowerCase());

    return matchesSearch && matchesLang && matchesSignal;
  });

  const getStabilityBadge = (stability: string) => {
    switch (stability) {
      case 'stable':
        return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-mono font-semibold">STABLE</span>;
      case 'beta':
        return <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] font-mono font-semibold">BETA</span>;
      default:
        return <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded text-[10px] font-mono font-semibold">DEPRECATED</span>;
    }
  };

  const getComplexityBadge = (complexity: string) => {
    switch (complexity) {
      case 'low': return <span className="bg-slate-800 text-emerald-400 border border-slate-700 px-1.5 py-0.5 rounded text-[10px] font-mono">LOW COMPLEXITY</span>;
      case 'medium': return <span className="bg-slate-800 text-amber-400 border border-slate-700 px-1.5 py-0.5 rounded text-[10px] font-mono">MEDIUM COMPLEXITY</span>;
      default: return <span className="bg-slate-800 text-red-400 border border-slate-700 px-1.5 py-0.5 rounded text-[10px] font-mono">HIGH COMPLEXITY</span>;
    }
  };

  return (
    <div className="space-y-8 pb-20">
      
      {/* Page Header */}
      <section className="space-y-2 border-b border-[#2c2e35] pb-6">
        <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-mono">
          Registry Explorer
        </div>
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
          Instrumentation Packages & Metadata Schemas
        </h1>
        <p className="text-sm text-slate-400 max-w-3xl leading-relaxed">
          Explore the consolidated taxonomy, standard environment setups, and dense semantic telemetry schemas designed to streamline developer workflows and control instrumentation overhead.
        </p>
      </section>

      {/* Structured Guidelines blocks */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-1.5">
          <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Phase 1</div>
          <h4 className="text-xs font-bold text-slate-200">Ambient Summary</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Consolidates package stability, download volumes, stars, and validated dependencies cleanly in a unified metadata card.
          </p>
        </div>

        <div className="p-4 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-1.5">
          <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Phase 2</div>
          <h4 className="text-xs font-bold text-slate-200">Actionable Bootstraps</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Displays copying configuration commands and standard environment variables for instant copy-paste setup routines.
          </p>
        </div>

        <div className="p-4 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-1.5">
          <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Phase 3</div>
          <h4 className="text-xs font-bold text-slate-200">Dense Telemetry Schema</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Exposes exhaustive tables detailing metrics, spans, active attributes, and compliance keys to combat data fragmentation.
          </p>
        </div>
      </section>

      {/* Split Component Explorer Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Filterable Sidebar List */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-4 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search packages..."
                className="w-full bg-[#17181c] border border-[#2c2e35] text-xs text-slate-200 rounded pl-9 pr-4 py-2 focus:outline-none focus:border-[#039acc]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Language filter dropdown */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wide block mb-1">Language</label>
                <select 
                  className="w-full bg-[#17181c] border border-[#2c2e35] text-[11px] rounded p-1.5 focus:outline-none focus:border-[#039acc] cursor-pointer text-slate-300"
                  value={languageFilter}
                  onChange={(e) => setLanguageFilter(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Java">Java</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Go / YAML">Collector</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-500 uppercase tracking-wide block mb-1">Signal Type</label>
                <select 
                  className="w-full bg-[#17181c] border border-[#2c2e35] text-[11px] rounded p-1.5 focus:outline-none focus:border-[#039acc] cursor-pointer text-slate-300"
                  value={signalFilter}
                  onChange={(e) => setSignalFilter(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Metric">Metric</option>
                  <option value="Span">Span</option>
                </select>
              </div>
            </div>
          </div>

          {/* List items */}
          <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
            {filteredPkgs.length > 0 ? (
              filteredPkgs.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPkg(pkg)}
                  className={`w-full text-left p-3.5 rounded border transition-all cursor-pointer block ${
                    selectedPkg.id === pkg.id 
                      ? 'border-[#039acc] bg-[#1e1f24]' 
                      : 'border-[#2c2e35] bg-[#17181c] hover:border-slate-650 hover:bg-[#1e1f24]/50'
                  }`}
                >
                  <div className="flex justify-between items-start gap-2 mb-1.5">
                    <h4 className="text-xs font-bold text-slate-200 truncate">{pkg.name}</h4>
                    {getStabilityBadge(pkg.stability)}
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed mb-3">
                    {pkg.description}
                  </p>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span className="bg-[#1e1f24] px-2 py-0.5 rounded border border-[#2c2e35]">
                      {pkg.language}
                    </span>
                    <span>{pkg.downloads}</span>
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center py-12 border border-dashed border-[#2c2e35] rounded text-slate-500 text-xs">
                No instrumentation packages match search filters.
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Information Matrix */}
        <div className="lg:col-span-8 p-6 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-6">
          
          {/* Component Name Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2c2e35] pb-4">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                {selectedPkg.name}
                <span className="text-xs font-mono font-normal text-slate-400 bg-[#17181c] border border-[#2c2e35] px-2 py-0.5 rounded">
                  v{selectedPkg.version}
                </span>
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xl">{selectedPkg.description}</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs bg-[#17181c] border border-[#2c2e35] px-3 py-1.5 rounded">
              <span className="text-[10px] font-mono text-slate-500">Coverage Index:</span>
              <span className="font-mono text-[#039acc] font-bold">{selectedPkg.coverageScore}%</span>
            </div>
          </div>

          {/* Phase Switch Toggles */}
          <div className="flex border-b border-[#2c2e35] text-xs">
            <button
              onClick={() => setActiveDetailTab('metadata')}
              className={`pb-3 px-4 font-mono font-semibold border-b-2 transition-all cursor-pointer ${
                activeDetailTab === 'metadata' 
                  ? 'border-[#039acc] text-slate-200' 
                  : 'border-transparent text-slate-500 hover:text-slate-400'
              }`}
            >
              Phase 1: Metadata Summary
            </button>
            <button
              onClick={() => setActiveDetailTab('config')}
              className={`pb-3 px-4 font-mono font-semibold border-b-2 transition-all cursor-pointer ${
                activeDetailTab === 'config' 
                  ? 'border-[#039acc] text-slate-200' 
                  : 'border-transparent text-slate-500 hover:text-slate-400'
              }`}
            >
              Phase 2: Actionable Bootstraps
            </button>
            <button
              onClick={() => setActiveDetailTab('schema')}
              className={`pb-3 px-4 font-mono font-semibold border-b-2 transition-all cursor-pointer ${
                activeDetailTab === 'schema' 
                  ? 'border-[#039acc] text-slate-200' 
                  : 'border-transparent text-slate-500 hover:text-slate-400'
              }`}
            >
              Phase 3: Telemetry Schema
            </button>
          </div>

          {/* Tab Content Rendering */}
          <div className="space-y-6">
            
            {/* Phase 1: Metadata */}
            {activeDetailTab === 'metadata' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Registry Details</h4>
                  
                  <div className="divide-y divide-[#2c2e35] border border-[#2c2e35] rounded p-3 space-y-3 bg-[#17181c]/50">
                    <div className="flex justify-between items-center text-xs py-1">
                      <span className="text-slate-500">Stability Grade</span>
                      {getStabilityBadge(selectedPkg.stability)}
                    </div>
                    <div className="flex justify-between items-center text-xs pt-3">
                      <span className="text-slate-500">Complexity</span>
                      {getComplexityBadge(selectedPkg.setupComplexity)}
                    </div>
                    <div className="flex justify-between items-center text-xs pt-3">
                      <span className="text-slate-500">Downloads</span>
                      <span className="text-slate-300 font-mono">{selectedPkg.downloads}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-3">
                      <span className="text-slate-500">Dependency Chain</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedPkg.dependencies.map((dep, idx) => (
                          <span key={idx} className="bg-[#17181c] border border-[#2c2e35] text-[9px] text-slate-400 font-mono px-1 py-0.5 rounded">
                            {dep}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Validated Runtime Configurations</h4>
                  <div className="border border-[#2c2e35] bg-[#17181c]/50 rounded p-4 space-y-3">
                    {selectedPkg.supportedVersions.map((item, idx) => (
                      <div key={idx} className="space-y-1 text-xs">
                        <div className="font-bold text-slate-300">{item.runtime}</div>
                        <div className="text-[11px] text-slate-400">Validated Library compatibility: {item.library}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Phase 2: Actionable Bootstraps */}
            {activeDetailTab === 'config' && (
              <div className="space-y-6">
                
                {/* Copy paste snippet */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Copy-Paste Setup Commands</h4>
                  <div className="relative border border-[#2c2e35] bg-[#17181c] rounded p-4 font-mono text-xs text-slate-300">
                    <div className="absolute top-2 right-2 text-[9px] bg-[#1e1f24] px-1.5 py-0.5 rounded border border-[#2c2e35] text-slate-400 uppercase">
                      CLI Shell
                    </div>
                    {selectedPkg.language === 'Java' ? (
                      <code>
                        # Download latest jar<br/>
                        curl -L -O https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v2.3.0/opentelemetry-javaagent.jar<br/><br/>
                        # Run spring boot with JVM agent<br/>
                        java -javaagent:opentelemetry-javaagent.jar -jar app.jar
                      </code>
                    ) : selectedPkg.language === 'JavaScript' ? (
                      <code>
                        # Install Node.js SDK and Express plugins<br/>
                        npm install --save @opentelemetry/sdk-node @opentelemetry/api @opentelemetry/instrumentation-express
                      </code>
                    ) : selectedPkg.language === 'Python' ? (
                      <code>
                        # Install python distributor package<br/>
                        pip install opentelemetry-distro opentelemetry-exporter-otlp<br/><br/>
                        # Initialize auto wrappers<br/>
                        opentelemetry-bootstrap -a install
                      </code>
                    ) : (
                      <code>
                        # Install OTel Collector Daemon<br/>
                        docker pull otel/opentelemetry-collector-contrib:v0.95.0
                      </code>
                    )}
                  </div>
                </div>

                {/* Configurations Variables Table */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Standard Environment Variable Options</h4>
                  <div className="overflow-x-auto border border-[#2c2e35] rounded">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-[#2c2e35] bg-[#17181c] text-slate-450 font-mono text-[9px] uppercase tracking-wide">
                          <th className="p-3">Environment Variable</th>
                          <th className="p-3">Default Value</th>
                          <th className="p-3">Importance</th>
                          <th className="p-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#2c2e35]">
                        {selectedPkg.configurations.map((cfg) => (
                          <tr key={cfg.name} className="hover:bg-[#17181c]/35">
                            <td className="p-3 font-mono text-[11px] text-[#039acc] font-semibold">{cfg.environmentVariable}</td>
                            <td className="p-3 font-mono text-slate-400">{cfg.defaultValue}</td>
                            <td className="p-3">
                              <span className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${
                                cfg.importance === 'critical' ? 'bg-red-500/10 text-red-400 border border-red-500/25' : 'bg-slate-800 text-slate-400'
                              }`}>
                                {cfg.importance.toUpperCase()}
                              </span>
                            </td>
                            <td className="p-3 text-slate-350 max-w-[200px] truncate">{cfg.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Phase 3: Telemetry Schema (Dense Attributes Tables) */}
            {activeDetailTab === 'schema' && (
              <div className="space-y-6">
                {selectedPkg.signals.map((signal, sIdx) => (
                  <div key={sIdx} className="space-y-3 p-4 rounded border border-[#2c2e35] bg-[#17181c]/30">
                    
                    {/* Signal Header */}
                    <div className="flex justify-between items-center border-b border-[#2c2e35] pb-2">
                      <div className="space-y-0.5">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                          signal.type === 'metric' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                        }`}>
                          {signal.type.toUpperCase()}
                        </span>
                        <h4 className="text-xs font-bold text-slate-200 mt-1">{signal.name}</h4>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {signal.dataType && <span>Type: {signal.dataType} | </span>}
                        {signal.unit && <span>Unit: {signal.unit}</span>}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 italic leading-relaxed">
                      &ldquo;{signal.description}&rdquo;
                    </p>

                    {/* Semantic attributes details */}
                    <div className="space-y-2">
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wide">Semantic Attributes</div>
                      <div className="overflow-x-auto border border-[#2c2e35] rounded">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="border-b border-[#2c2e35] bg-[#17181c] text-slate-550 font-mono text-[9px] uppercase tracking-wide">
                              <th className="p-2.5">Attribute Name</th>
                              <th className="p-2.5">Value Type</th>
                              <th className="p-2.5">Compliance</th>
                              <th className="p-2.5">Example</th>
                              <th className="p-2.5">Semantic Definition</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#2c2e35]/50">
                            {signal.attributes.map((attr) => (
                              <tr key={attr.name} className="hover:bg-[#17181c]/35">
                                <td className="p-2.5 font-mono text-[11px] text-[#039acc] font-semibold">{attr.name}</td>
                                <td className="p-2.5 font-mono text-slate-400">{attr.type}</td>
                                <td className="p-2.5">
                                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-bold ${
                                    attr.required ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-slate-800 text-slate-400'
                                  }`}>
                                    {attr.required ? 'REQUIRED' : 'OPTIONAL'}
                                  </span>
                                </td>
                                <td className="p-2.5 font-mono text-[10px] text-slate-400">{attr.example}</td>
                                <td className="p-2.5 text-slate-350 max-w-[200px] truncate">{attr.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Collector Pipeline Visualizer */}
      <section className="p-6 rounded border border-[#2c2e35] bg-[#1e1f24] space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-4 border-b border-[#2c2e35] pb-4">
          <div className="space-y-1">
            <div className="text-[10px] font-mono text-slate-500 uppercase font-bold">Architecture Schema</div>
            <h4 className="text-base font-bold text-slate-200">The OTel Collector pipeline routing diagram</h4>
          </div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">Defined via local collector config.yaml</span>
        </div>

        {/* Diagram Flow Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-2 relative">
          
          {/* Receivers */}
          <div className="p-4 rounded border border-[#2c2e35] bg-[#17181c] space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono">
                <Database className="w-4 h-4 text-slate-400" />
                01. Receivers (Ingress)
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Collector ports listen for inbound standard signals using endpoints. Ex: `otlp: grpc/http`.
              </p>
            </div>
            <div className="bg-[#1e1f24] p-2.5 rounded border border-[#2c2e35] font-mono text-[10px] text-slate-400 space-y-1.5">
              <div>otlp:</div>
              <div className="pl-4">protocols:</div>
              <div className="pl-8">grpc: &ldquo;localhost:4317&rdquo;</div>
            </div>
          </div>

          {/* Processors */}
          <div className="p-4 rounded border border-[#2c2e35] bg-[#17181c] space-y-3 flex flex-col justify-between relative">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono">
                <Sliders className="w-4 h-4 text-slate-400" />
                02. Processors (Transform)
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Transforms telemetry: scrubs private PII strings, limits queue overflow memory, batches payloads.
              </p>
            </div>
            <div className="bg-[#1e1f24] p-2.5 rounded border border-[#2c2e35] font-mono text-[10px] text-slate-400 space-y-1">
              <div>processors:</div>
              <div className="pl-4">memory_limiter: ...</div>
              <div className="pl-4">batch: {}</div>
            </div>
          </div>

          {/* Exporters */}
          <div className="p-4 rounded border border-[#2c2e35] bg-[#17181c] space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono">
                <Cpu className="w-4 h-4 text-slate-400" />
                03. Exporters (Egress)
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Sends scrubbed metrics and spans to observability backends. Ex: Elastic, Prometheus, Datadog.
              </p>
            </div>
            <div className="bg-[#1e1f24] p-2.5 rounded border border-[#2c2e35] font-mono text-[10px] text-slate-400 space-y-1">
              <div>exporters:</div>
              <div className="pl-4">otlp/elastic:</div>
              <div className="pl-8">endpoint: ...</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

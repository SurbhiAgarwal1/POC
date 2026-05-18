'use client';

import React, { useState, useEffect } from 'react';
import LandingPage from '@/components/LandingPage';
import UserResearch from '@/components/UserResearch';
import CompetitiveAnalysis from '@/components/CompetitiveAnalysis';
import InformationArchitecture from '@/components/InformationArchitecture';
import WireframeMockups from '@/components/WireframeMockups';
import AiDiscoveryUx from '@/components/AiDiscoveryUx';
import CommandPalette from '@/components/CommandPalette';
import { 
  Terminal, 
  Users, 
  Layers, 
  Search, 
  Award, 
  Layout, 
  Sparkles, 
  Compass, 
  Menu, 
  X,
  Activity,
  GitBranch
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Keyboard shortcut Ctrl+K to trigger search command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    // Scroll smoothly back to top on navigation change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'overview', label: 'Ecosystem Overview', icon: <Compass className="w-4 h-4" /> },
    { id: 'research-section', label: 'User Persona Research', icon: <Users className="w-4 h-4" /> },
    { id: 'competitive-section', label: 'Competitive Analysis', icon: <Award className="w-4 h-4" /> },
    { id: 'ia-section', label: 'Information Architecture', icon: <Layers className="w-4 h-4" /> },
    { id: 'mockups-section', label: 'Interactive Wireframes', icon: <Layout className="w-4 h-4" /> },
    { id: 'ai-section', label: 'AI Discovery Explorer', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'overview':
        return <LandingPage onNavigate={handleTabChange} />;
      case 'research-section':
        return <UserResearch />;
      case 'competitive-section':
        return <CompetitiveAnalysis />;
      case 'ia-section':
        return <InformationArchitecture />;
      case 'mockups-section':
        return <WireframeMockups />;
      case 'ai-section':
        return <AiDiscoveryUx />;
      default:
        return <LandingPage onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-100 grid-bg relative">
      <div className="absolute top-0 inset-x-0 h-[500px] radial-glow pointer-events-none" />

      {/* Sidebar Navigation - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-slate-900 bg-slate-950/90 glassmorphism shrink-0 sticky top-0 h-screen z-20">
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-900/60">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold text-sm">
              OT
            </div>
            <div>
              <span className="font-extrabold text-xs text-slate-200 tracking-wider">OTel Explorer</span>
              <p className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest leading-none">Research & IA</p>
            </div>
          </div>
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="flex-1 py-6 px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-semibold font-mono transition-all duration-200 cursor-pointer ${
                activeTab === item.id
                  ? 'bg-cyan-500/10 text-cyan-300 border-l-2 border-cyan-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/30'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-900/60 bg-slate-950/30 space-y-3">
          <div className="rounded-lg bg-slate-900/60 border border-slate-850 p-3 text-[10px] leading-normal font-mono text-slate-500 space-y-1">
            <div className="flex justify-between items-center text-slate-400 font-bold">
              <span>LFX Mentorship Application</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <p>Ecosystem Explorer IA Proposal</p>
            <div className="pt-2 text-cyan-500 hover:underline flex items-center gap-1">
              <span>Candidate Portfolio Profile</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        
        {/* Topbar Console */}
        <header className="h-16 flex items-center justify-between px-6 lg:px-8 border-b border-slate-900/60 bg-slate-950/80 sticky top-0 z-30 glassmorphism backdrop-blur-md">
          
          {/* Mobile Menu Trigger & Title */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="text-slate-500">Explorer</span>
              <span className="text-slate-700">/</span>
              <span className="text-cyan-400 font-mono">
                {navItems.find((n) => n.id === activeTab)?.label || 'Overview'}
              </span>
            </div>
          </div>

          {/* Search trigger & actions */}
          <div className="flex items-center gap-4">
            
            {/* Fuzzy Search Button */}
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/40 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors text-xs font-semibold cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search Registry...</span>
              <kbd className="hidden sm:inline bg-slate-950/60 border border-slate-850 px-1 py-0.5 rounded text-[10px] font-mono text-slate-500 shadow-sm leading-none">
                Ctrl K
              </kbd>
            </button>

            {/* Github Link */}
            <a
              href="https://github.com/open-telemetry"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 transition-colors"
            >
              <GitBranch className="w-5 h-5" />
            </a>
          </div>
        </header>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-slate-950 flex flex-col pt-20 px-6 space-y-2 border-b border-slate-900/60">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold font-mono text-left transition-colors cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-cyan-500/10 text-cyan-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Render Workspace Area */}
        <main className="flex-1 px-6 lg:px-8 py-8 max-w-5xl mx-auto w-full">
          {renderActiveComponent()}
        </main>
      </div>

      {/* Interactive Command Palette Overlay */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleTabChange}
      />
    </div>
  );
}

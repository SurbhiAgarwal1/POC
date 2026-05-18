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
  GitBranch,
  Globe,
  Moon,
  ChevronDown
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
    <div className="min-h-screen flex flex-col bg-[#17181c] text-slate-100 font-sans relative">
      
      {/* Top Navigation Bar - Exact OTel Branding Header */}
      <header className="h-14 flex items-center justify-between px-6 bg-[#16243b] border-b border-[#2c2e35] sticky top-0 z-30 shadow-md">
        
        {/* Left Section: SVG Logo and Horizontal Nav Links */}
        <div className="flex items-center gap-8">
          
          {/* OTel SVG Logo & Branding */}
          <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => handleTabChange('overview')}>
            <div className="w-7 h-7 bg-white/5 rounded flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2A14 14 0 1030 16 14 14 0 0016 2zm4.3 19.3L15 22.8a1 1 0 01-1.2-.6l-4.5-9.1a1 1 0 01.3-1.3l5.3-3.5a1 1 0 011.2.1l4.5 9.1a1 1 0 01-.3 1.3z" opacity="0.95" />
                <path d="M16.6 9.6L12 12.7l3 6.1 4.6-3.1z" fill="#38bdf8" />
              </svg>
            </div>
            <span className="font-bold text-sm text-white tracking-wide font-sans group-hover:text-cyan-300 transition-colors">OpenTelemetry</span>
          </div>

          {/* Core Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-300">
            <span className="hover:text-white transition-colors cursor-pointer py-4">Docs</span>
            <span className="text-white border-b-2 border-cyan-400 pb-4 pt-4 px-1 cursor-pointer font-bold">Ecosystem</span>
            <span className="hover:text-white transition-colors cursor-pointer py-4">Status</span>
            <span className="hover:text-white transition-colors cursor-pointer py-4">Community</span>
            <span className="hover:text-white transition-colors cursor-pointer py-4">Training</span>
            <span className="hover:text-white transition-colors cursor-pointer py-4">Blog</span>
          </nav>
        </div>

        {/* Right Section: Language, Theme Icon, and "Ask AI or search..." Input */}
        <div className="flex items-center gap-4">
          
          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <span>English</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </div>

          {/* Theme Icon (Styled as a clickable crescent moon) */}
          <div className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-900/40 transition-colors cursor-pointer">
            <Moon className="w-4 h-4 text-cyan-400 animate-pulse" />
          </div>

          {/* Ask AI or search bar */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#2c2e35] bg-[#1a1b20] text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors text-[11px] font-semibold cursor-pointer w-44 justify-between"
          >
            <div className="flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Ask AI or search...</span>
            </div>
            <kbd className="hidden sm:inline bg-[#17181c] border border-[#2c2e35] px-1 py-0.5 rounded text-[9px] font-mono text-slate-500 leading-none">
              Ctrl K
            </kbd>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-900/40 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Main Content Workspace Wrapper */}
      <div className="flex flex-1 min-h-[calc(100vh-3.5rem)] relative">
        
        {/* Left Sidebar - Matching OTel Sidebar checklist hierarchy */}
        <aside className="hidden lg:flex flex-col w-60 border-r border-[#2c2e35] bg-[#17181c] shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] z-20">
          <div className="py-6 px-5 space-y-6 flex-1 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="space-y-1.5">
                <h3 className="text-[11px] font-bold text-slate-300 uppercase tracking-widest font-mono">Ecosystem</h3>
                <div className="h-[1px] bg-[#2c2e35]/80 w-full" />
              </div>

              {/* Sidebar items matching mockData mappings */}
              <nav className="space-y-1.5">
                <button
                  onClick={() => handleTabChange('overview')}
                  className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'overview'
                      ? 'text-cyan-400 font-bold bg-[#1a1b20]/80 border-l-2 border-cyan-400 pl-2'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-[#1a1b20]/30 pl-3'
                  }`}
                >
                  Demo
                </button>

                <button
                  onClick={() => handleTabChange('ia-section')}
                  className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'ia-section'
                      ? 'text-cyan-400 font-bold bg-[#1a1b20]/80 border-l-2 border-cyan-400 pl-2'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-[#1a1b20]/30 pl-3'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] text-cyan-500">▶</span>
                    <span>Registry</span>
                  </div>
                </button>

                <button
                  onClick={() => handleTabChange('research-section')}
                  className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'research-section'
                      ? 'text-cyan-400 font-bold bg-[#1a1b20]/80 border-l-2 border-cyan-400 pl-2'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-[#1a1b20]/30 pl-3'
                  }`}
                >
                  Adopters
                </button>

                <button
                  onClick={() => handleTabChange('competitive-section')}
                  className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'competitive-section'
                      ? 'text-cyan-400 font-bold bg-[#1a1b20]/80 border-l-2 border-cyan-400 pl-2'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-[#1a1b20]/30 pl-3'
                  }`}
                >
                  Third-party distributions
                </button>

                <button
                  onClick={() => handleTabChange('mockups-section')}
                  className={`w-full text-left px-3 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === 'mockups-section'
                      ? 'text-cyan-400 font-bold bg-[#1a1b20]/80 border-l-2 border-cyan-400 pl-2'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-[#1a1b20]/30 pl-3'
                  }`}
                >
                  Integrations
                </button>
              </nav>
            </div>

            {/* Sidebar Footer Candidate Info */}
            <div className="border-t border-[#2c2e35] pt-4 bg-[#17181c] space-y-3">
              <div className="rounded border border-[#2c2e35] p-2.5 text-[9px] font-mono text-slate-500 leading-normal space-y-1 bg-[#1a1b20]/40">
                <div className="flex justify-between items-center text-slate-400 font-bold">
                  <span>LFX Proposal</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                </div>
                <p>Ecosystem Explorer IA</p>
                <div className="pt-1.5 text-cyan-500 hover:underline flex items-center gap-1">
                  <span>Candidate: SurbhiAgarwal1</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-14 bottom-0 z-40 bg-[#17181c] border-b border-[#2c2e35] flex flex-col py-6 px-6 space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono px-3 mb-2">Ecosystem Pages</h3>
            <button
              onClick={() => handleTabChange('overview')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-semibold font-mono cursor-pointer ${
                activeTab === 'overview' ? 'bg-[#1a1b20] text-cyan-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Demo
            </button>
            <button
              onClick={() => handleTabChange('ia-section')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-semibold font-mono cursor-pointer ${
                activeTab === 'ia-section' ? 'bg-[#1a1b20] text-cyan-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Registry
            </button>
            <button
              onClick={() => handleTabChange('research-section')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-semibold font-mono cursor-pointer ${
                activeTab === 'research-section' ? 'bg-[#1a1b20] text-cyan-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Adopters
            </button>
            <button
              onClick={() => handleTabChange('competitive-section')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-semibold font-mono cursor-pointer ${
                activeTab === 'competitive-section' ? 'bg-[#1a1b20] text-cyan-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Third-party distributions
            </button>
            <button
              onClick={() => handleTabChange('mockups-section')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-semibold font-mono cursor-pointer ${
                activeTab === 'mockups-section' ? 'bg-[#1a1b20] text-cyan-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Integrations
            </button>
            <button
              onClick={() => handleTabChange('ai-section')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-semibold font-mono cursor-pointer ${
                activeTab === 'ai-section' ? 'bg-[#1a1b20] text-cyan-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Ask AI Assistant
            </button>
          </div>
        )}

        {/* Right Main Content Panel */}
        <main className="flex-1 px-6 lg:px-8 py-8 max-w-5xl mx-auto w-full">
          {renderActiveComponent()}
        </main>
      </div>

      {/* Floating Yellow "Ask AI" Button - EXACT copy of the live screenshot */}
      <button
        onClick={() => handleTabChange('ai-section')}
        className="fixed bottom-6 right-6 z-40 bg-[#f5b301] hover:bg-[#e0a200] text-slate-950 px-4 py-2.5 rounded-lg flex items-center gap-2 font-bold text-xs tracking-wider shadow-lg shadow-[#f5b301]/10 hover:shadow-[#f5b301]/25 active:scale-95 transition-all cursor-pointer font-sans"
      >
        {/* Gold sparkling pen icon */}
        <svg className="w-4 h-4 text-slate-950 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
        <span>Ask AI</span>
      </button>

      {/* Interactive Command Palette Overlay */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleTabChange}
      />
    </div>
  );
}

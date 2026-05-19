'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, Cpu, Award, Users, FileText } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tabId: string) => void;
}

export default function CommandPalette({ isOpen, onClose, onNavigate }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandItems = [
    { term: 'OpenTelemetry Demo Setup', category: 'Registry Recommendations', action: 'overview' },
    { term: 'Registry Packages Index', category: 'Information Architecture', action: 'ia-section' },
    { term: 'Semantic Convention Metrics schema', category: 'IA Recommendations', action: 'ia-section' },
    { term: 'Auto Instrumentation setups', category: 'IA Recommendations', action: 'ia-section' },
    { term: 'Developer Interviews Synthesis', category: 'Personas', action: 'research-section' },
    { term: 'SRE Lead persona study', category: 'Personas', action: 'research-section' },
    { term: 'Competitive AWS & Stripe Audits', category: 'Competitive Analysis', action: 'competitive-section' },
    { term: 'Wireframe spatial blueprints', category: 'Interactive Mockups', action: 'mockups-section' },
    { term: 'High-Fidelity screens console', category: 'Interactive Mockups', action: 'mockups-section' }
  ];

  const filteredResults = commandItems.filter(item => 
    item.term.toLowerCase().includes(query.toLowerCase()) || 
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle outside clicks to close
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose]);

  // Key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % Math.max(1, filteredResults.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + filteredResults.length) % Math.max(1, filteredResults.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredResults[activeIndex]) {
          handleSelect(filteredResults[activeIndex]);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, filteredResults]);

  if (!isOpen) return null;

  const getIcon = (category: string) => {
    switch (category) {
      case 'Personas':
        return <Users className="w-4 h-4 text-[#039acc]" />;
      case 'Information Architecture':
      case 'IA Recommendations':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Competitive Analysis':
        return <Award className="w-4 h-4 text-blue-400" />;
      case 'Interactive Mockups':
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      default:
        return <FileText className="w-4 h-4 text-slate-400" />;
    }
  };

  const handleSelect = (item: typeof commandItems[0]) => {
    onNavigate(item.action);
    onClose();
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Main Palette */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-[#2c2e35] bg-[#1e1f24] shadow-2xl transition-all"
      >
        {/* Search Input */}
        <div className="flex items-center border-b border-[#2c2e35] px-4 py-3">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-0 border-0"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
          />
          <div className="rounded border border-[#2c2e35] bg-[#17181c] px-1.5 py-0.5 text-[10px] font-mono text-slate-400 shadow-sm">
            ESC
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[300px] overflow-y-auto p-2">
          {filteredResults.length > 0 ? (
            <div className="space-y-0.5">
              {filteredResults.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(item)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                    idx === activeIndex 
                      ? 'bg-[#17181c] text-slate-100 border-l-2 border-[#039acc]' 
                      : 'text-slate-300 hover:bg-[#17181c]/60 hover:text-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {getIcon(item.category)}
                    <span>{item.term}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider bg-[#17181c] px-2 py-0.5 rounded border border-[#2c2e35]">
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-slate-500 text-xs flex flex-col items-center justify-center gap-2">
              <Terminal className="w-8 h-8 text-slate-600" />
              <span>No results found for &ldquo;{query}&rdquo;</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#2c2e35] bg-[#17181c] px-4 py-2.5 text-[10px] text-slate-500 font-mono">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <kbd className="bg-[#1e1f24] px-1 rounded border border-[#2c2e35]">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-[#1e1f24] px-1 rounded border border-[#2c2e35]">Enter</kbd> Select
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, FileText, Users, Award, ShieldAlert, Cpu } from 'lucide-react';
import { searchIndex } from '@/data/mockData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tabId: string) => void;
}

export default function CommandPalette({ isOpen, onClose, onNavigate }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter items
  const filteredResults = searchIndex.filter((item) =>
    item.term.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: typeof searchIndex[0]) => {
    onNavigate(item.link);
    onClose();
    setQuery('');
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle keys inside palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filteredResults.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + filteredResults.length) % filteredResults.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredResults[activeIndex]) {
          handleSelect(filteredResults[activeIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, filteredResults]);

  if (!isOpen) return null;

  const getIcon = (category: string) => {
    switch (category) {
      case 'Personas':
        return <Users className="w-4 h-4 text-cyan-400" />;
      case 'Information Architecture':
      case 'IA Recommendations':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Competitive Analysis':
        return <Award className="w-4 h-4 text-blue-400" />;
      case 'Interactive Mockups':
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      case 'AI Discovery':
        return <ShieldAlert className="w-4 h-4 text-purple-400" />;
      default:
        return <FileText className="w-4 h-4 text-gray-400" />;
    }
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
        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-slate-800 bg-slate-950/95 glassmorphism shadow-2xl transition-all glow-panel-cyan"
      >
        {/* Search Input */}
        <div className="flex items-center border-b border-slate-800 px-4 py-3">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-0 border-0"
            placeholder="Type a command or search (e.g. Java, persona, Stripe)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
          />
          <div className="rounded border border-slate-800 bg-slate-900 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 shadow-sm">
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
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs transition-colors ${
                    idx === activeIndex 
                      ? 'bg-cyan-500/10 text-cyan-200 border-l-2 border-cyan-400' 
                      : 'text-slate-300 hover:bg-slate-900/60 hover:text-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {getIcon(item.category)}
                    <span>{item.term}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider bg-slate-900 px-2 py-0.5 rounded border border-slate-800/80">
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
        <div className="flex items-center justify-between border-t border-slate-900 bg-slate-950 px-4 py-2.5 text-[10px] text-slate-500 font-mono">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <kbd className="bg-slate-900 px-1 rounded border border-slate-800">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-slate-900 px-1 rounded border border-slate-800">Enter</kbd> Select
            </span>
          </div>
          <span>OpenTelemetry Explorer UX Research</span>
        </div>
      </div>
    </div>
  );
}

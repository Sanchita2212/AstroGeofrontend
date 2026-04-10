'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ResearchQuery() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-[#0e121e] text-slate-200 font-body relative pb-16">
      {/* Top Navigation Bar from image-2 */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-white/5">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-1 relative overflow-hidden shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <span className="text-xl z-10 relative drop-shadow group-hover:scale-110 transition-transform">🚀</span>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white/20 blur-md pointer-events-none" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-white tracking-wide">AstroGeo</h1>
            <p className="text-xs text-slate-400">Autonomous Scientific Research Platform</p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm hover:bg-slate-700/50 transition font-medium">
            <span className="text-base text-cyan-400">📊</span> Archive
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm hover:bg-slate-700/50 transition font-medium">
            <span className="text-base text-slate-300">⚙️</span> Settings
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm hover:bg-slate-700/50 transition font-medium">
            <span className="text-base text-rose-400">📚</span> Docs
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        
        {/* Main Research Container */}
        <div className="bg-[#111827]/80 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white tracking-wide mb-6">What would you like to research?</h2>
          
          <div className="relative mb-6">
            <textarea
              className="w-full bg-[#1e2436]/50 border border-slate-700/50 rounded-2xl px-5 py-4 text-sm text-slate-200 placeholder:text-slate-500 placeholder:font-light outline-none focus:border-indigo-500/50 focus:bg-[#1e2436] transition-colors resize-none h-[110px]"
              placeholder="Ask anything... e.g., 'Show me vegetation change in Thane over the last 5 years' or 'When is the next asteroid flyby visible from Pune?'"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <div className="absolute bottom-4 right-4">
              <Link href="/timeline" className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-medium text-sm transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                Analyze &rarr;
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {[
              { icon: '📈', label: 'Vegetation Trends' },
              { icon: '☄️', label: 'Asteroid Tracking' },
              { icon: '🌧️', label: 'Drought Analysis' },
              { icon: '🏙️', label: 'Urban Expansion' },
              { icon: '🌡️', label: 'Climate Patterns' }
            ].map(pill => (
              <button 
                key={pill.label} 
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span className="text-base">{pill.icon}</span> {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 mb-6">
          <div className="bg-[#111827]/80 border border-white/5 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="absolute right-8 top-8 text-2xl opacity-60 group-hover:opacity-100 transition-opacity drop-shadow">📦</div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase mb-4">Archive Depth</h3>
            <div className="text-5xl font-bold text-indigo-400 mb-2 drop-shadow-md">8.2 TB</div>
            <div className="text-sm text-slate-400">Historical satellite & orbital data stored</div>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="bg-[#111827]/80 border border-white/5 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors">
            <div className="absolute right-8 top-8 text-2xl opacity-60 group-hover:opacity-100 transition-opacity drop-shadow">⏳</div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase mb-4">Temporal Range</h3>
            <div className="text-5xl font-bold text-indigo-400 mb-2 drop-shadow-md">10 Years</div>
            <div className="text-sm text-slate-400">Continuous observation timeline</div>
          </div>
        </div>

      </div>
    </div>
  )
}

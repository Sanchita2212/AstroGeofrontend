'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SatelliteGlobe from '@/components/SatelliteGlobe'
import GlobeHero from '@/components/GlobeHero'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

function GlassPanel({ children, className }) {
  return (
    <div className={cn("bg-[#111827]/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden", className)}>
      {children}
    </div>
  )
}

function SatellitesTab() {
  return (
    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-160px)] min-h-[600px]">
      
      {/* Fleet Map */}
      <div className="lg:col-span-7 h-full">
        <GlassPanel className="h-full w-full p-6 flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-center mb-6 z-10">
            <h2 className="font-display font-semibold text-lg text-white flex items-center gap-2">🛰️ ISRO SATELLITE FLEET (52 Active)</h2>
            <div className="flex gap-2">
              <select className="bg-slate-900/80 border border-slate-700 text-slate-300 text-xs rounded-lg px-2 py-1.5 outline-none">
                <option>All Types</option>
                <option>Remote Sensing</option>
                <option>Communication</option>
                <option>Navigation</option>
                <option>Scientific</option>
              </select>
            </div>
          </div>

          <div className="flex-1">
            <SatelliteGlobe height="100%" />
          </div>
        </GlassPanel>
      </div>

      {/* Satellite List */}
      <div className="lg:col-span-5 h-full">
        <GlassPanel className="h-full p-0 flex flex-col">
          <div className="px-6 py-5 border-b border-slate-700/50 bg-[#1e2436]/50">
            <h3 className="font-display font-bold text-lg text-white">📡 SATELLITE LIST</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {/* CARTOSAT-3 */}
            <div className="bg-slate-800/40 rounded-xl border border-orange-500/30 overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
              <div className="p-4 border-b border-slate-700/30 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                    <h4 className="font-bold text-white text-lg">CARTOSAT-3</h4>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Earth Observation</div>
                </div>
                <div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">Operational ✅</div>
              </div>
              
              <div className="p-4 grid grid-cols-2 gap-3 text-xs border-b border-slate-700/30">
                <div className="bg-slate-900/50 p-2 rounded"><span className="text-slate-500 block mb-0.5">Launched</span><span className="text-slate-200">Nov 27, 2019</span></div>
                <div className="bg-slate-900/50 p-2 rounded"><span className="text-slate-500 block mb-0.5">Altitude</span><span className="text-slate-200">505 km</span></div>
                <div className="bg-slate-900/50 p-2 rounded col-span-2"><span className="text-slate-500 block mb-0.5">Current Position</span><span className="text-slate-200 font-medium">Above Arabian Sea</span></div>
              </div>

              <div className="p-4 bg-orange-500/5">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xs font-bold text-orange-400 flex items-center gap-1.5">🤖 AI HEALTH PREDICTION</div>
                  <div className="text-xs font-bold text-emerald-400">94/100 Score</div>
                </div>
                <div className="text-xs text-slate-300 space-y-1 mb-3">
                  <div className="flex justify-between"><span>Estimated Life Remaining:</span><span className="font-medium text-white">8.2 years</span></div>
                  <div className="flex justify-between"><span>Confidence:</span><span className="text-slate-400">82%</span></div>
                </div>
                <div className="bg-slate-900/80 rounded p-2 text-xs border border-slate-700">
                  <span className="text-slate-500 block">Next Pass Over India:</span>
                  <span className="text-cyan-400 font-medium tracking-wide">Tomorrow 9:15 AM | Delhi, Mumbai</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2 rounded transition-colors">📍 Track Live</button>
                  <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold py-2 rounded transition-colors border border-slate-600">✅ Verify Health</button>
                </div>
              </div>
            </div>

            {/* RISAT-2B Generic items */}
            {['RISAT-2B (Radar Imaging)', 'RESOURCESAT-2A (Earth Obs)', 'GSAT-30 (Communication)', 'NAVIC-1I (Navigation)'].map(sat => (
              <div key={sat} className="bg-slate-800/40 rounded-xl border border-slate-700/50 p-4 flex items-center gap-3 hover:bg-slate-800/60 transition-colors cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                <span className="text-sm font-medium text-slate-300">{sat}</span>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>

    </motion.div>
  )
}

function ChandrayaanTab() {
  return (
    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <div className="space-y-6">
        <GlassPanel className="p-8 h-full bg-gradient-to-br from-[#111827]/80 to-indigo-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20 transform scale-150 translate-x-12 -translate-y-12">
            <span className="text-9xl">🌕</span>
          </div>

          <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
              <h2 className="font-display font-bold text-3xl text-white mb-2 tracking-wide">🌙 CHANDRAYAAN-3</h2>
              <p className="text-slate-400">Live Mission Tracker</p>
            </div>
            <div className="text-right">
              <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500 border-dashed rounded text-emerald-400 font-bold text-sm mb-1">
                OPERATIONAL ✅
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Days on Moon</div>
              <div className="text-3xl font-display font-bold text-white">157</div>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
              <div className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Last Data</div>
              <div className="text-xl font-display font-bold text-slate-300 mt-1">3 hours ago</div>
            </div>
          </div>

          <div className="flex gap-3 relative z-10 mt-10">
            <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]">📊 Mission Timeline</button>
            <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition-colors border border-slate-600">🔭 Scientific Data</button>
            <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl transition-colors border border-slate-600">📸 View Images</button>
          </div>
        </GlassPanel>
      </div>

      <div className="space-y-6">
        <GlassPanel className="p-6 border-l-4 border-l-cyan-500">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">🚀 VIKRAM LANDER</h3>
            <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">Active (Sleep-Wake)</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50"><span className="text-slate-500 block text-xs">Location</span><span className="text-white font-medium">69.37°S, 32.32°E</span></div>
            <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50"><span className="text-slate-500 block text-xs">Battery</span><span className="text-emerald-400 font-medium">78%</span></div>
            <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50 col-span-2"><span className="text-slate-500 block text-xs">External Temp</span><span className="text-blue-400 font-medium">-180°C (Lunar Night)</span></div>
          </div>
          
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-3 text-center">
            <span className="text-slate-400 text-xs uppercase tracking-wider font-bold block mb-1">Next Wake Window</span>
            <span className="text-indigo-400 font-bold text-lg">Feb 5, 2025 (Est.)</span>
          </div>
        </GlassPanel>

        <GlassPanel className="p-6 border-l-4 border-l-orange-500">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">🤖 PRAGYAN ROVER</h3>
            <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">Hibernating</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50"><span className="text-slate-500 block text-xs">Distance Traveled</span><span className="text-white font-medium">118 meters</span></div>
            <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50"><span className="text-slate-500 block text-xs">Battery</span><span className="text-emerald-400 font-medium">65%</span></div>
          </div>

          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4">
            <h4 className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-3">Scientific Findings</h4>
            <ul className="text-sm text-slate-300 space-y-2">
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">•</span> Sulfur definitively detected on lunar surface</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">•</span> Vertical temperature gradient measured accurately</li>
              <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">•</span> 15 major elements identified via LIBS instrument</li>
            </ul>
          </div>
        </GlassPanel>
      </div>

    </motion.div>
  )
}

export default function IsroMissionCenter() {
  const tabs = [
    { value: 'satellites', label: '🛰️ Satellites' },
    { value: 'chandrayaan', label: '🌙 Chandrayaan' },
    { value: 'launches', label: '🚀 Launches' },
    { value: 'aditya', label: '☀️ Aditya-L1' }
  ]
  const [activeTab, setActiveTab] = useState('satellites')

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200 font-body">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(249,115,22,0.5)]">🇮🇳</div>
            <h1 className="text-3xl font-display font-bold text-white tracking-wide">ISRO Mission Center</h1>
          </div>
          <p className="text-slate-400">Track India's space assets, lunar missions, and upcoming launches in real-time.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-8 border-b border-slate-800 mb-8 overflow-x-auto custom-scrollbar pb-1">
          {tabs.map(t => {
            const isActive = activeTab === t.value
            return (
              <button
                key={t.value}
                onClick={() => setActiveTab(t.value)}
                className={cn(
                  "relative pb-4 text-base font-medium tracking-wide transition-colors whitespace-nowrap",
                  isActive ? "text-orange-400" : "text-slate-400 hover:text-slate-200"
                )}
              >
                {t.label}
                {isActive && (
                  <motion.div
                    layoutId="isroTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.8)]"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'satellites' && <SatellitesTab key="satellites" />}
          {activeTab === 'chandrayaan' && <ChandrayaanTab key="chandrayaan" />}
          {(activeTab === 'launches' || activeTab === 'aditya') && (
             <motion.div key="coming-soon" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex items-center justify-center h-[500px]">
               <div className="text-center">
                 <div className="text-5xl mb-4">{activeTab === 'launches' ? '🚀' : '☀️'}</div>
                 <h3 className="text-xl font-display font-bold text-slate-300 capitalize">{activeTab} Dashboard (Coming Soon)</h3>
                 <p className="text-slate-500 mt-2 text-sm">Telemetry endpoints being connected by the backend team.</p>
               </div>
             </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

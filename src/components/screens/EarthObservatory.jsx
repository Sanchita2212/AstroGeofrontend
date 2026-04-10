'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppShell } from '@/components/providers/AppShellProvider'

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
function getMapUrl(tab) {
  const base = "https://maps-492903.projects.earthengine.app/view/map"

  if (tab === "vegetation") return `${base}?mode=NDVI`
  if (tab === "drought") return `${base}?mode=Drought`
  if (tab === "floods") return `${base}?mode=Flood`
  if (tab === "urban") return `${base}?mode=Urban`

  return base
}

function VegetationTab() {
  const { homeCity } = useAppShell()
  return (
    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-160px)] min-h-[600px]">
      
      {/* Interactive Map Area */}
      <div className="lg:col-span-8 h-full">
        <GlassPanel className="h-full w-full p-6 flex flex-col relative">
          <p className="text-[11px] text-slate-500 mb-2 z-10">
            Observation &amp; weather baseline: <span className="text-slate-400">{homeCity}</span>
          </p>
          <div className="flex justify-between items-center mb-6 z-10">
            <h2 className="font-display font-semibold text-lg text-white flex items-center gap-2">🌱 NDVI (Vegetation Health) MONITORING</h2>
            <select className="bg-slate-900/80 border border-slate-700 text-slate-300 text-sm rounded-lg px-3 py-1.5 outline-none">
              <option>Maharashtra, India</option>
            </select>
          </div>

          <div className="flex-1 bg-[#0a0e17]/80 rounded-xl border border-slate-700/50 relative overflow-hidden flex flex-col items-center justify-center">
             {/* Embedded Google Earth Engine Map */}
             <iframe
               src="https://maps-492903.projects.earthengine.app/view/map"
               className="w-full h-full rounded-xl"
               frameBorder="0"
               allowFullScreen
               title="Earth Engine Map"
             />
             
             {/* Legend Overlay */}
             <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-lg border border-slate-700/50 text-xs text-slate-300 space-y-1.5 z-10">
               <div className="font-semibold text-white mb-2 pb-1 border-b border-slate-700">Legend</div>
               <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-green-500" /> Healthy (NDVI {'>'} 0.6)</div>
               <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-yellow-500" /> Moderate (0.3-0.6)</div>
               <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-red-500" /> Poor (NDVI {'<'} 0.3)</div>
             </div>
          </div>

          {/* Time Slider */}
          <div className="mt-6 z-10 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
            <div className="flex justify-between text-xs text-slate-400 font-bold tracking-wider mb-2">
              <span>2018</span>
              <span>2021</span>
              <span className="text-white">2025</span>
            </div>
            <div className="relative h-2 bg-slate-700 rounded-full">
               <div className="absolute top-0 left-0 h-full w-[85%] bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
               <div className="absolute top-1/2 left-[85%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-green-500 rounded-full cursor-pointer shadow-lg" />
            </div>
          </div>
        </GlassPanel>
      </div>

      {/* Change Detection Rules */}
      <div className="lg:col-span-4 h-full">
        <GlassPanel className="h-full p-6 flex flex-col border-t-4 border-t-red-500 bg-gradient-to-b from-red-900/10 to-transparent">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <h3 className="font-display font-bold text-lg text-white">AI-DETECTED CHANGES</h3>
            <span className="ml-auto text-xs text-slate-500">Last 30 days</span>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5 mb-6">
            <div className="text-red-400 font-bold mb-1">🚨 Significant NDVI Drop Detected</div>
            <div className="text-sm text-slate-300 mb-4">📍 Thane District, Maharashtra<br/>📅 Detected: Jan 25, 2025</div>
            
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-slate-900/60 p-2 rounded border border-slate-700"><span className="text-xs text-slate-400 block">Change Magnitude</span><span className="text-red-400 font-bold">-13.2%</span></div>
              <div className="bg-slate-900/60 p-2 rounded border border-slate-700"><span className="text-xs text-slate-400 block">Area Affected</span><span className="text-white font-bold">15.3 km²</span></div>
            </div>

            <div className="border border-indigo-500/30 bg-indigo-900/20 rounded-lg p-4">
               <div className="text-sm font-bold text-indigo-400 mb-2 flex items-center gap-2">🤖 AI ANALYSIS</div>
               <div className="text-xs text-slate-300 mb-2 font-medium border-b border-indigo-500/20 pb-1">Probable Causes (Ranked)</div>
               
               <div className="space-y-3">
                 <div>
                   <div className="flex justify-between text-sm mb-1"><span className="text-white font-medium">1. Drought</span><span className="text-indigo-400 font-bold">78%</span></div>
                   <ul className="text-xs text-slate-400 pl-4 space-y-1 list-disc">
                     <li>No rainfall in 45 days</li>
                     <li>Soil moisture: 12% (vs 28% normal)</li>
                   </ul>
                 </div>
                 <div>
                   <div className="flex justify-between text-sm mb-1"><span className="text-white font-medium">2. Urbanization</span><span className="text-slate-400 font-bold">18%</span></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-sm"><span className="text-white font-medium">3. Agriculture</span><span className="text-slate-400 font-bold">4%</span></div>
                 </div>
               </div>
            </div>

            <div className="flex gap-2 mt-5">
              <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-xs text-white font-semibold py-2 rounded transition-colors border border-slate-600">✅ Verify</button>
              <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-xs text-white font-semibold py-2 rounded transition-colors border border-slate-600">📄 Report</button>
            </div>
          </div>
        </GlassPanel>
      </div>

    </motion.div>
  )
}

function DroughtTab() {
  const { homeCity } = useAppShell()
  return (
    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <GlassPanel className="p-6">
          <p className="text-[11px] text-slate-500 mb-4">
            Weather &amp; analysis baseline: <span className="text-slate-400">{homeCity}</span>
          </p>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-display font-semibold text-lg text-white flex items-center gap-2">💧 AGRICULTURAL DROUGHT MONITOR</h2>
            <div className="flex gap-2">
              <select className="bg-slate-900/80 border border-slate-700 text-slate-300 text-xs rounded-lg px-2 py-1.5 outline-none">
                <option>Maharashtra</option>
              </select>
              <select className="bg-slate-900/80 border border-slate-700 text-slate-300 text-xs rounded-lg px-2 py-1.5 outline-none">
                <option>Kharif 2025</option>
              </select>
            </div>
          </div>

          <div className="w-full h-[400px] bg-[#0a0e17]/80 rounded-xl border border-slate-700/50 flex flex-col items-center justify-center relative shadow-inner">
            <div className="text-center opacity-50">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-sm font-medium">Interactive State Map Rendered Here</p>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/70 text-xs">
              <div className="font-semibold text-white mb-2 border-b border-slate-700 pb-1">Severity Scale</div>
              <div className="space-y-1.5 text-slate-300">
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-yellow-400" /> D0 Abnormally Dry</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-orange-400" /> D1 Moderate</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-red-500" /> D2 Severe</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-slate-800" /> D3 Extreme</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-purple-600" /> D4 Exceptional</div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>

      <div className="space-y-6">
        <GlassPanel className="p-6 border-l-4 border-l-red-500 bg-gradient-to-bl from-[#111827]/80 to-red-900/10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-1">District Analysis</div>
              <h2 className="font-display font-bold text-xl text-white">Vidarbha Region, MH</h2>
            </div>
            <div className="text-right">
              <div className="inline-block px-3 py-1 bg-red-500/20 border border-red-500 border-dashed rounded text-red-500 font-bold text-sm mb-1">
                D2 (Severe Drought) 🔴
              </div>
              <div className="text-xs text-slate-500">Updated: 2 hours ago</div>
            </div>
          </div>

          <div className="bg-slate-900/60 rounded-xl border border-slate-700/50 p-5 mb-5 space-y-4">
             <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold text-sm">🤖 AI PREDICTION (Soil & Yield)</div>
             
             <div className="grid grid-cols-2 gap-4">
               <div>
                  <div className="text-xs text-slate-400 mb-1">Soil Moisture</div>
                  <div className="text-xl font-bold text-red-400">12.3% <span className="text-xs font-normal text-slate-500">(8th pct)</span></div>
               </div>
               <div>
                  <div className="text-xs text-slate-400 mb-1">Historical Avg</div>
                  <div className="text-xl font-bold text-slate-200">28.5%</div>
               </div>
             </div>
             
             <div className="text-xs font-medium text-amber-500 bg-amber-500/10 p-2 rounded">
               ⚠️ This is WORSE than 92% of historical records.
             </div>
          </div>

          <div className="bg-slate-900/60 rounded-xl border border-slate-700/50 p-5">
            <h4 className="text-sm font-bold text-white mb-4 border-b border-slate-700 pb-2">🌾 CROP YIELD IMPACT PREDICTION</h4>
            
            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="text-sm text-slate-300">Cotton Yield Predicted</span>
                <span className="text-lg font-bold text-white">1.8 tons/ha</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-slate-400">Historical Average</span>
                <span className="text-sm font-medium text-slate-300">2.4 tons/ha</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-slate-400">Expected Loss</span>
                <span className="text-sm font-bold text-red-500">-25% loss</span>
              </div>
              
              <div className="mt-4 pt-3 border-t border-slate-800">
                <div className="text-xs text-slate-400 mb-2">Similar Conditions in Past:</div>
                <div className="flex justify-between text-xs text-slate-300"><span>• 2015</span><span>1.7 tons/ha (actual)</span></div>
                <div className="flex justify-between text-xs text-slate-300"><span>• 2018</span><span>1.9 tons/ha (actual)</span></div>
              </div>
            </div>
            
            <div className="mt-6 flex gap-2">
              <button className="flex-1 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 text-xs font-bold py-2 rounded-lg transition-colors border border-indigo-500/50">✅ Verify Prediction</button>
              <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2 rounded-lg transition-colors border border-slate-600">📥 Download Report</button>
            </div>
          </div>

        </GlassPanel>
      </div>
    </motion.div>
  )
}

export default function EarthObservatory() {
  const tabs = [
    { value: 'vegetation', label: '🌱 Vegetation' },
    { value: 'drought', label: '💧 Drought' },
    { value: 'urban', label: '🏙️ Urban' },
    { value: 'floods', label: '🌊 Floods' }
  ]
  const [activeTab, setActiveTab] = useState('vegetation')

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200 font-body">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-white tracking-wide mb-2">Earth Observatory</h1>
          <p className="text-slate-400">Analyze geospatial data, track environmental changes, and predict impacts using satellite intelligence.</p>
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
                  isActive ? "text-cyan-400" : "text-slate-400 hover:text-slate-200"
                )}
              >
                {t.label}
                {isActive && (
                  <motion.div
                    layoutId="earthTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'vegetation' && <VegetationTab key="vegetation" />}
          {activeTab === 'drought' && <DroughtTab key="drought" />}
          {(activeTab === 'urban' || activeTab === 'floods') && (
             <motion.div key="coming-soon" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="flex items-center justify-center h-[500px]">
               <div className="text-center">
                 <div className="text-5xl mb-4">{activeTab === 'urban' ? '🏙️' : '🌊'}</div>
                 <h3 className="text-xl font-display font-bold text-slate-300 capitalize">{activeTab} Monitoring (Coming Soon)</h3>
                 <p className="text-slate-500 mt-2 text-sm">Geospatial feature extraction pipeline currently training.</p>
               </div>
             </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

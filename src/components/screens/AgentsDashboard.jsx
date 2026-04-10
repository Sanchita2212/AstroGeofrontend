'use client'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AgentsDashboard() {
  return (
    <div className="min-h-screen bg-[#0e121e] text-slate-200 font-body relative">
      {/* Top Navigation Bar from image-1 */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-1 relative overflow-hidden shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <span className="text-xl z-10 relative drop-shadow">🚀</span>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white/20 blur-md pointer-events-none" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-white tracking-wide">AstroGeo</h1>
            <p className="text-xs text-slate-400">Autonomous Scientific Research Platform</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm hover:bg-slate-700/50 transition font-medium">
            <span className="text-base">📊</span> Archive
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm hover:bg-slate-700/50 transition font-medium">
            <span className="text-base">⚙️</span> Settings
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 text-sm hover:bg-slate-700/50 transition font-medium">
            <span className="text-base">📚</span> Docs
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-[#111827]/80 border border-white/5 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
          
          <h2 className="text-xs font-semibold tracking-[0.2em] text-slate-400 mb-6 uppercase">Active Agents</h2>
          
          <div className="space-y-4">
            {/* Geospatial Agent */}
            <div className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-slate-900/30 hover:bg-indigo-900/20 hover:border-indigo-500/30 transition cursor-pointer group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🌍</span>
              <div>
                <h3 className="text-slate-200 font-semibold tracking-wide text-[15px]">Geospatial Agent</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span className="text-xs text-slate-400">Online</span>
                </div>
              </div>
            </div>

            {/* Astronomy Agent */}
            <div className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-slate-900/30 hover:bg-orange-900/20 hover:border-orange-500/30 transition cursor-pointer group">
              <span className="text-2xl group-hover:scale-110 transition-transform">☄️</span>
              <div>
                <h3 className="text-slate-200 font-semibold tracking-wide text-[15px]">Astronomy Agent</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span className="text-xs text-slate-400">Online</span>
                </div>
              </div>
            </div>

            {/* Agro-Climate Agent */}
            <div className="flex items-center gap-4 p-5 rounded-xl border border-indigo-500/30 bg-indigo-900/20 shadow-[0_0_20px_rgba(99,102,241,0.05)] cursor-pointer group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🌾</span>
              <div>
                <h3 className="text-white font-semibold tracking-wide text-[15px]">Agro-Climate Agent</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span className="text-xs text-slate-400">Online</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-xs font-semibold tracking-[0.2em] text-slate-400 mt-12 mb-6 uppercase">Data Sources</h2>
          <div className="space-y-3">
            {['Sentinel-2 (ESA)', 'NASA JPL Horizons', 'NASA POWER API', 'ISRO Bhoonidhi', 'Neo4j GraphRAG'].map(source => (
              <div key={source} className="flex items-center gap-3 text-sm text-slate-300">
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {source}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

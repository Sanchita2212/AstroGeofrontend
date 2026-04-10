'use client'

import GlobeViewer from './GlobeViewer'

export default function GlobeHero({ nightMode = true }) {
  return (
    <div className={`relative h-[min(80vh,840px)] w-full overflow-hidden rounded-3xl border border-white/10 ${nightMode ? 'bg-gradient-to-br from-[#0b1630] via-[#0a0f1d] to-[#070b14]' : 'bg-gradient-to-br from-[#1b2a3c] via-[#233450] to-[#14202f]'}`}>
      
      {/* Background glow */}
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_30%_35%,rgba(34,211,238,0.18),transparent_52%),radial-gradient(circle_at_70%_65%,rgba(168,85,247,0.14),transparent_52%)]" />
      
      {/* 🌍 SATVIS INTEGRATION */}
      <div className="absolute inset-0">
        <iframe
          src="/satvis/index.html"
          className="w-full h-full border-none"
          title="Satellite Visualization"
          style={{ filter: nightMode ? 'brightness(1) contrast(1)' : 'brightness(1.15) contrast(1.05)' }}
        />
      </div>
    </div>
  )
}
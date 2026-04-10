/** Dummy data for AstroGeo dashboard UI */

export const liveStats = [
  { id: 'sat', label: 'Active Satellites', value: '52' },
  { id: 'launch', label: 'Next ISRO Launch', value: '23d' },
  { id: 'visible', label: 'Visible Tonight', value: '3' },
  { id: 'verified', label: 'Predictions Verified', value: '1,247' },
]

export const issTicker = {
  headline: 'ISS Position',
  detail: 'Over Indian Ocean · Next pass Mumbai: 20:42 IST',
}

export const featureCards = [
  {
    id: 'track',
    title: 'Live Tracking',
    desc: 'ISS position, satellite passes, orbital paths',
    icon: 'Satellite',
    href: '/astronomy',
    accent: 'from-astro-primary/30 to-cyan-500/10',
  },
  {
    id: 'predict',
    title: 'Predictions',
    desc: 'Asteroid alerts, launch windows, weather impact',
    icon: 'Orbit',
    href: '/research',
    accent: 'from-astro-secondary/25 to-amber-500/10',
  },
  {
    id: 'earth',
    title: 'Earth Watch',
    desc: 'NDVI, drought monitor, land cover change',
    icon: 'Globe2',
    href: '/earth',
    accent: 'from-emerald-500/20 to-astro-primary/10',
  },
  {
    id: 'isro',
    title: 'ISRO Tracker',
    desc: 'Fleet health, Chandrayaan-3, launch schedule',
    icon: 'Rocket',
    href: '/isro',
    accent: 'from-astro-secondary/30 to-orange-600/10',
  },
]

export const recentPredictions = [
  {
    id: '1',
    title: 'Asteroid 2024 BX1 — visible pass',
    status: 'Verified',
    tone: 'verified',
    meta: '98% confidence · Europe sector',
  },
  {
    id: '2',
    title: 'Drought signal — Maharashtra',
    status: 'Analyzing',
    tone: 'analyzing',
    meta: 'NASA POWER + Sentinel-2',
  },
  {
    id: '3',
    title: 'ISS pass — max elevation 60°',
    status: 'Upcoming',
    tone: 'upcoming',
    meta: 'Tonight 20:42 IST',
  },
  {
    id: '4',
    title: 'Vegetation anomaly — Thane',
    status: 'Verified',
    tone: 'verified',
    meta: 'NDVI Δ −12% vs baseline',
  },
]

export const isroFleet = [
  { name: 'Cartosat-3', type: 'EO', launch: '2019-11-27', health: 98 },
  { name: 'GSAT-24', type: 'Comm', launch: '2022-06-22', health: 99 },
  { name: 'RISAT-2B', type: 'SAR', launch: '2019-05-22', health: 97 },
  { name: 'EOS-04', type: 'SAR', launch: '2022-02-14', health: 96 },
  { name: 'INSAT-3DS', type: 'Met', launch: '2024-02-17', health: 100 },
]

export const chandrayaan3 = {
  lander: { name: 'Vikram', battery: 67, temp: '−42°C', distance: '0 m' },
  rover: { name: 'Pragyan', battery: 73, temp: '−38°C', distance: '128 m' },
}

export const shapFactors = [
  { name: 'Cloud cover', value: 14 },
  { name: 'Soil moisture', value: 22 },
  { name: 'Moon phase', value: -6 },
  { name: 'Wind shear', value: -9 },
  { name: 'Historical yield', value: 11 },
]

export const evidenceChain = [
  { source: 'NASA POWER', hash: '0x7f3a…c21d', detail: 'Solar + rainfall grids' },
  { source: 'Open-Meteo', hash: '0x91be…8a44', detail: 'Reanalysis bundle' },
  { source: 'Sentinel-2 L2A', hash: '0x4c02…ef01', detail: 'NDVI stack 2018–2025' },
]

export const ledgerBlocks = [
  { index: 1247, merkle: '0x9a2f…b701', time: '2026-04-02 14:22 UTC' },
  { index: 1246, merkle: '0x3d11…c88e', time: '2026-04-02 13:58 UTC' },
  { index: 1245, merkle: '0xe401…9aa0', time: '2026-04-02 13:31 UTC' },
]

export const closeApproaches = [
  { id: 'CA-1', name: '2024 BX1', date: '2026-04-08', dist: '0.12 LD', prob: 92 },
  { id: 'CA-2', name: '2023 DZ2', date: '2026-04-15', dist: '0.38 LD', prob: 78 },
  { id: 'CA-3', name: 'Apophis (recalc)', date: '2026-05-01', dist: '12.4 LD', prob: 45 },
]

export const launchTimeline = [
  { mission: 'PSLV-C59', agency: 'ISRO', date: '2026-03-15', vehicle: 'PSLV-XL' },
  { mission: 'Falcon 9 — Starlink', agency: 'SpaceX', date: '2026-03-18', vehicle: 'F9 B1078' },
  { mission: 'GSLV Mk III', agency: 'ISRO', date: '2026-04-02', vehicle: 'LVM3' },
]

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Satellite, Orbit, Globe2, Rocket, Radio, ChevronRight, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { featureCards, recentPredictions, issTicker } from '@/data/dashboardData'
import APOD from '@/components/APOD'
import { cn } from '@/lib/cn'

const iconMap = {
  Satellite,
  Orbit,
  Globe2,
  Rocket,
}

const badgeStyles = {
  verified: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  analyzing: 'border-amber-500/40 bg-amber-500/10 text-amber-200',
  upcoming: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-200',
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function DashboardHome() {
  return (
    <div className="relative z-10 space-y-10">
      <section className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-7"
        >
          <div className="glass glass-hover overflow-hidden rounded-2xl border-white/10 p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-astro-secondary/40 bg-astro-secondary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-astro-secondary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-astro-secondary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-astro-secondary" />
                </span>
                Live Now
              </span>
              <span className="text-xs text-slate-500">Orbital intelligence stream</span>
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              AstroGeo
              <span className="block text-lg font-normal text-slate-400 sm:text-xl">
                AI-powered space &amp; Earth intelligence
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
              Unified tracking, predictions, and verifiable evidence chains — built for operators who need
              clarity at mission speed.
            </p>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-medium text-astro-secondary">
                <Radio className="h-4 w-4 shrink-0" />
                ISS ticker
              </div>
              <div className="mt-2 font-mono-ui text-sm text-white">{issTicker.headline}</div>
              <div className="mt-1 text-xs text-slate-500">{issTicker.detail}</div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/astronomy"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-astro-primary px-5 text-sm font-medium text-white shadow-[0_0_24px_rgba(11,61,145,0.4)] transition hover:bg-astro-primary/90"
              >
                Open Astronomy Hub
              </Link>
              <Link
                href="/research"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                Verifiable AI Lab
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="lg:col-span-5"
        >
          <APOD />
        </motion.div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Feature grid</h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {featureCards.map((c) => {
            const Icon = iconMap[c.icon] || Satellite
            return (
              <motion.div key={c.id} variants={item}>
                <Link href={c.href} className="group block h-full">
                  <Card
                    className={cn(
                      'h-full border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]',
                      'hover:shadow-[0_0_32px_rgba(11,61,145,0.15)]'
                    )}
                  >
                    <CardContent className="p-6">
                      <div
                        className={cn(
                          'mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br border border-white/10',
                          c.accent
                        )}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-white">{c.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">{c.desc}</p>
                      <span className="mt-4 inline-flex items-center text-xs font-medium text-astro-secondary group-hover:gap-1">
                        Open
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Recent AI predictions
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="max-h-[420px] space-y-3 overflow-y-auto pr-1"
        >
          {recentPredictions.map((p) => (
            <motion.div key={p.id} variants={item}>
              <Card className="border-white/10 bg-white/[0.03] transition hover:border-white/15">
                <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-white">{p.title}</div>
                    <div className="mt-1 text-xs text-slate-500">{p.meta}</div>
                  </div>
                  <span
                    className={cn(
                      'shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wide',
                      badgeStyles[p.tone] || badgeStyles.upcoming
                    )}
                  >
                    {p.status}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

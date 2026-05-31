import Link from 'next/link'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TrendArea } from '@/components/charts'

const trendData = [
  { label: 'M', value: 42 },
  { label: 'T', value: 55 },
  { label: 'W', value: 48 },
  { label: 'T', value: 70 },
  { label: 'F', value: 65 },
  { label: 'S', value: 84 },
  { label: 'S', value: 92 },
]

const stats = [
  { label: 'CLUTCH SCORE', value: '87', suffix: '/100', color: 'text-chart-1' },
  { label: 'DAILY FOCUS', value: '94', suffix: '%', color: 'text-chart-2' },
  { label: 'TASKS DONE', value: '12', suffix: '/15', color: 'text-foreground' },
  { label: 'PREDICTED GRADE', value: 'A−', suffix: '', color: 'text-chart-3' },
]

const avatars = ['bg-chart-1', 'bg-chart-2', 'bg-chart-4', 'bg-chart-3']

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, oklch(0.7 0.16 250 / 0.18), transparent)' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Sparkles className="size-3.5 text-primary" />
            <span className="font-mono text-xs font-medium tracking-widest text-primary">AI-POWERED EXECUTION ENGINE</span>
          </div>

          <h1 className="mt-7 text-balance text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-foreground">Planning is Easy.</span>
            <br />
            <span className="text-primary">Execution is Hard.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Clutch transforms your tasks into actionable milestones and predicts your future performance before
            deadlines arrive.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-7 text-base font-semibold">
              <Link href="/dashboard">
                Start Free
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-border bg-card/50 px-7 text-base">
              <Link href="/coach">
                <Play className="size-4" />
                Watch Demo
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {avatars.map((c, i) => (
                <span key={i} className={`size-7 rounded-full border-2 border-background ${c}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Trusted by <span className="font-semibold text-foreground">14,000+</span> students &amp; teams
            </p>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
              <span className="size-3 rounded-full bg-chart-5" />
              <span className="size-3 rounded-full bg-chart-3" />
              <span className="size-3 rounded-full bg-chart-2" />
              <div className="mx-auto flex items-center rounded-md bg-background/60 px-3 py-1">
                <span className="font-mono text-xs text-muted-foreground">app.clutch.so/dashboard</span>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-background/40 p-4">
                    <p className="font-mono text-[10px] tracking-widest text-muted-foreground">{s.label}</p>
                    <p className={`mt-2 text-3xl font-bold ${s.color}`}>
                      {s.value}
                      <span className="text-base font-medium text-muted-foreground">{s.suffix}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-border bg-background/40 p-4">
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground">PRODUCTIVITY TREND</p>
                <div className="mt-2">
                  <TrendArea data={trendData} height={140} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

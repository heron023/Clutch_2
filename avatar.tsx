import { TriangleAlert } from 'lucide-react'

const stats = [
  { value: '92%', text: 'of students miss self-set deadlines at least once per week' },
  { value: '68%', text: 'of professionals report chronic procrastination affecting output' },
  { value: '3.1×', text: 'more time spent on low-priority tasks vs. high-impact work' },
  { value: '47%', text: 'of team projects run over deadline due to poor workload visibility' },
]

export function Problem() {
  return (
    <section className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-chart-5/30 bg-chart-5/10 px-4 py-1.5">
            <TriangleAlert className="size-3.5 text-chart-5" />
            <span className="font-mono text-xs font-medium tracking-widest text-chart-5">THE PROBLEM</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Most people plan perfectly.
            <br />
            <span className="text-muted-foreground">Almost nobody executes.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            You have the to-do list. You have the calendar. You have the good intentions. But when the deadline
            arrives, you&apos;re still scrambling — because you had no real-time feedback, no early warnings, and no
            accountability.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-4xl font-bold text-foreground sm:text-5xl">{s.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

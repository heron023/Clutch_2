import { Boxes, Brain, Activity, Trophy, Users, MessageSquareHeart, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Boxes,
    title: 'AI Task Allocation',
    text: "Clutch's engine analyzes your workload, energy patterns, and deadlines to automatically schedule tasks at optimal times.",
  },
  {
    icon: Brain,
    title: 'Predictive Analytics',
    text: 'See your predicted grade or project outcome before the deadline. Intervene early, not at the last minute.',
  },
  {
    icon: Activity,
    title: 'Real-Time Efficiency',
    text: 'Live focus meter, distraction alerts, and deep work tracking keep you performing at your peak throughout the day.',
  },
  {
    icon: Trophy,
    title: 'Clutch Score',
    text: 'A verifiable performance metric that measures execution quality — not just task completion. Shareable with recruiters.',
  },
  {
    icon: Users,
    title: 'Team Intelligence',
    text: 'Managers get a complete view of team workload, burnout risk, and delivery confidence across all active projects.',
  },
  {
    icon: MessageSquareHeart,
    title: 'Personalized Coaching',
    text: 'Your AI coach detects procrastination patterns and delivers actionable nudges before small delays become disasters.',
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <Sparkles className="size-3.5 text-primary" />
            <span className="font-mono text-xs font-medium tracking-widest text-primary">FEATURES</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to
            <br />
            actually execute.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Clutch replaces the cycle of broken to-do apps with a system that adapts, predicts, and coaches in real
            time.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="grid size-11 place-items-center rounded-xl border border-border bg-secondary/60 text-primary transition-colors group-hover:bg-primary/10">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

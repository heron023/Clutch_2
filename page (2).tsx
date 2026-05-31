import { AppShell, PageHeader } from "@/components/app/app-shell"
import { ScoreRadial, MultiLine } from "@/components/charts"
import { TrendingUp, Brain, Target, Zap, Clock } from "lucide-react"

const history = [
  { label: "W1", score: 64, peers: 58 },
  { label: "W2", score: 68, peers: 60 },
  { label: "W3", score: 61, peers: 62 },
  { label: "W4", score: 73, peers: 63 },
  { label: "W5", score: 79, peers: 65 },
  { label: "W6", score: 82, peers: 66 },
  { label: "W7", score: 87, peers: 68 },
]

const factors = [
  { label: "Consistency", value: 92, icon: Clock, color: "bg-chart-1" },
  { label: "Focus Quality", value: 84, icon: Brain, color: "bg-chart-2" },
  { label: "Goal Completion", value: 88, icon: Target, color: "bg-chart-4" },
  { label: "Momentum", value: 79, icon: Zap, color: "bg-chart-3" },
]

export default function ClutchScorePage() {
  return (
    <AppShell>
      <PageHeader title="Clutch Score" description="Your performance index, updated in real time." />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="relative flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6">
          <div className="relative w-full max-w-[220px]">
            <ScoreRadial value={87} height={220} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black text-foreground">87</span>
              <span className="font-mono text-xs tracking-widest text-muted-foreground">CLUTCH</span>
            </div>
          </div>
          <span className="mt-2 flex items-center gap-1.5 rounded-full bg-chart-2/15 px-3 py-1 text-sm font-semibold text-chart-2">
            <TrendingUp className="size-4" />
            +5 this week
          </span>
          <p className="mt-3 text-center text-sm text-muted-foreground text-pretty">
            You&apos;re in the top <span className="font-semibold text-foreground">8%</span> of all Clutch users.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-foreground">Score History</h2>
              <p className="text-xs text-muted-foreground">You vs. peer average</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="size-2.5 rounded-full bg-chart-1" /> You
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <span className="size-2.5 rounded-full bg-muted-foreground" /> Peers
              </span>
            </div>
          </div>
          <MultiLine
            data={history}
            height={260}
            lines={[
              { key: "score", color: "var(--color-chart-1)", name: "You" },
              { key: "peers", color: "oklch(0.66 0.015 255)", name: "Peers" },
            ]}
          />
        </div>
      </div>

      <h2 className="mb-3 mt-6 text-lg font-semibold text-foreground">Score Breakdown</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {factors.map((f) => (
          <div key={f.label} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-lg bg-secondary">
                <f.icon className="size-[18px] text-foreground" />
              </span>
              <span className="text-2xl font-bold text-foreground">{f.value}</span>
            </div>
            <p className="mt-3 text-sm font-medium text-foreground">{f.label}</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className={`h-full rounded-full ${f.color}`} style={{ width: `${f.value}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 p-6">
        <p className="font-mono text-[10px] tracking-widest text-primary">PREDICTION</p>
        <p className="mt-2 max-w-2xl text-lg font-medium leading-relaxed text-foreground text-pretty">
          At your current pace, Clutch predicts you&apos;ll hit a score of{" "}
          <span className="text-primary">92</span> by next month and finish the semester with a{" "}
          <span className="text-primary">3.8 GPA</span>.
        </p>
      </div>
    </AppShell>
  )
}

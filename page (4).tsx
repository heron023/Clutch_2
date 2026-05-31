import { AppShell, PageHeader, StatCard } from "@/components/app/app-shell"
import { TrendArea, BarChartSimple } from "@/components/charts"
import { Button } from "@/components/ui/button"
import { Plus, Flame, Clock, CheckCircle2, Circle } from "lucide-react"

const weekTrend = [
  { label: "Mon", value: 62 },
  { label: "Tue", value: 70 },
  { label: "Wed", value: 58 },
  { label: "Thu", value: 81 },
  { label: "Fri", value: 76 },
  { label: "Sat", value: 90 },
  { label: "Sun", value: 87 },
]

const focusHours = [
  { label: "Mon", value: 4.2 },
  { label: "Tue", value: 5.1 },
  { label: "Wed", value: 3.4 },
  { label: "Thu", value: 6.0 },
  { label: "Fri", value: 5.5 },
  { label: "Sat", value: 2.1 },
  { label: "Sun", value: 1.4 },
]

const todays = [
  { title: "Finish data structures problem set", time: "9:00 AM", done: true, tag: "CS 201" },
  { title: "Draft thesis introduction", time: "11:30 AM", done: true, tag: "Research" },
  { title: "Team standup + sprint planning", time: "2:00 PM", done: false, tag: "Work" },
  { title: "Review pull requests", time: "4:00 PM", done: false, tag: "Work" },
  { title: "Gym + recovery", time: "6:30 PM", done: false, tag: "Health" },
]

const milestones = [
  { title: "Midterm Prep", pct: 78, color: "bg-chart-1" },
  { title: "Capstone Project", pct: 54, color: "bg-chart-2" },
  { title: "Reading Backlog", pct: 32, color: "bg-chart-3" },
]

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader title="Welcome back, Jordan" description="Here's how your week is shaping up.">
        <Button className="rounded-full">
          <Plus className="size-4" />
          New Task
        </Button>
      </PageHeader>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="CLUTCH SCORE" value="87" suffix="/100" delta="+5" accent="text-chart-1" />
        <StatCard label="FOCUS TODAY" value="94" suffix="%" delta="+12%" accent="text-chart-2" />
        <StatCard label="TASKS DONE" value="12" suffix="/15" delta="+3" />
        <StatCard label="STREAK" value="18" suffix=" days" delta="+1" accent="text-chart-3" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-foreground">Productivity Trend</h2>
              <p className="text-xs text-muted-foreground">Clutch Score over the last 7 days</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-chart-2/15 px-2.5 py-1 text-xs font-semibold text-chart-2">
              <Flame className="size-3.5" />
              On a roll
            </span>
          </div>
          <TrendArea data={weekTrend} height={240} showAxis />
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <h2 className="font-semibold text-foreground">Focus Hours</h2>
          <p className="text-xs text-muted-foreground">Deep work logged daily</p>
          <div className="mt-4">
            <BarChartSimple data={focusHours} height={240} color="var(--color-chart-2)" />
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-foreground">Today&apos;s Schedule</h2>
            <span className="font-mono text-xs text-muted-foreground">5 ITEMS</span>
          </div>
          <ul className="space-y-2">
            {todays.map((t) => (
              <li
                key={t.title}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3"
              >
                {t.done ? (
                  <CheckCircle2 className="size-5 shrink-0 text-chart-2" />
                ) : (
                  <Circle className="size-5 shrink-0 text-muted-foreground" />
                )}
                <div className="min-w-0 flex-1">
                  <p
                    className={`truncate text-sm font-medium ${
                      t.done ? "text-muted-foreground line-through" : "text-foreground"
                    }`}
                  >
                    {t.title}
                  </p>
                </div>
                <span className="hidden shrink-0 rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground sm:inline">
                  {t.tag}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="size-3.5" />
                  {t.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <h2 className="font-semibold text-foreground">Milestones</h2>
          <p className="text-xs text-muted-foreground">Progress toward your goals</p>
          <div className="mt-5 space-y-5">
            {milestones.map((m) => (
              <div key={m.title}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{m.title}</span>
                  <span className="font-mono text-xs text-muted-foreground">{m.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-4">
            <p className="font-mono text-[10px] tracking-widest text-primary">AI INSIGHT</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              You&apos;re 23% more productive in the morning. Schedule your hardest task before noon to stay clutch.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

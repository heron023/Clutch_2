import { AppShell, PageHeader, StatCard } from "@/components/app/app-shell"
import { BarChartSimple } from "@/components/charts"
import { Button } from "@/components/ui/button"
import { UserPlus, ArrowUp, ArrowDown, Minus } from "lucide-react"

const teamVelocity = [
  { label: "W1", value: 48 },
  { label: "W2", value: 56 },
  { label: "W3", value: 52 },
  { label: "W4", value: 67 },
  { label: "W5", value: 71 },
  { label: "W6", value: 78 },
]

type Trend = "up" | "down" | "flat"
const members: { name: string; role: string; score: number; tasks: string; trend: Trend; color: string }[] = [
  { name: "Jordan Diaz", role: "Lead", score: 87, tasks: "12/15", trend: "up", color: "bg-chart-1" },
  { name: "Mia Chen", role: "Engineer", score: 91, tasks: "14/16", trend: "up", color: "bg-chart-2" },
  { name: "Andre Silva", role: "Designer", score: 74, tasks: "9/14", trend: "down", color: "bg-chart-4" },
  { name: "Priya Nair", role: "Engineer", score: 82, tasks: "11/13", trend: "flat", color: "bg-chart-3" },
  { name: "Tom Becker", role: "PM", score: 79, tasks: "10/12", trend: "up", color: "bg-chart-5" },
]

const trendIcon = {
  up: <ArrowUp className="size-3.5 text-chart-2" />,
  down: <ArrowDown className="size-3.5 text-destructive" />,
  flat: <Minus className="size-3.5 text-muted-foreground" />,
}

export default function TeamPage() {
  return (
    <AppShell>
      <PageHeader title="Team Dashboard" description="Sprint 14 — Performance &amp; momentum across the squad.">
        <Button className="rounded-full">
          <UserPlus className="size-4" />
          Invite
        </Button>
      </PageHeader>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="TEAM SCORE" value="83" suffix="/100" delta="+6" accent="text-chart-1" />
        <StatCard label="VELOCITY" value="78" suffix=" pts" delta="+9%" accent="text-chart-2" />
        <StatCard label="ON TRACK" value="4" suffix="/5" delta="+1" />
        <StatCard label="BLOCKERS" value="2" delta="-1" deltaUp={false} accent="text-chart-3" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2">
          <h2 className="font-semibold text-foreground">Team Velocity</h2>
          <p className="text-xs text-muted-foreground">Story points completed per sprint week</p>
          <div className="mt-4">
            <BarChartSimple data={teamVelocity} height={240} color="var(--color-chart-1)" />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <h2 className="font-semibold text-foreground">Distribution</h2>
          <p className="text-xs text-muted-foreground">Workload balance</p>
          <div className="mt-5 space-y-4">
            {members.slice(0, 5).map((m) => (
              <div key={m.name}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="truncate font-medium text-foreground">{m.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{m.tasks}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-semibold text-foreground">Team Members</h2>
          <span className="font-mono text-xs text-muted-foreground">5 MEMBERS</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="px-5 py-3 font-mono text-[10px] font-medium tracking-widest">MEMBER</th>
                <th className="px-5 py-3 font-mono text-[10px] font-medium tracking-widest">ROLE</th>
                <th className="px-5 py-3 font-mono text-[10px] font-medium tracking-widest">CLUTCH SCORE</th>
                <th className="px-5 py-3 font-mono text-[10px] font-medium tracking-widest">TASKS</th>
                <th className="px-5 py-3 font-mono text-[10px] font-medium tracking-widest">TREND</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {members.map((m) => (
                <tr key={m.name} className="transition-colors hover:bg-accent/30">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className={`flex size-8 items-center justify-center rounded-full text-xs font-bold text-primary-foreground ${m.color}`}>
                        {m.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                      <span className="font-medium text-foreground">{m.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">{m.role}</td>
                  <td className="px-5 py-3.5">
                    <span className="font-semibold text-foreground">{m.score}</span>
                    <span className="text-muted-foreground">/100</span>
                  </td>
                  <td className="px-5 py-3.5 font-mono text-muted-foreground">{m.tasks}</td>
                  <td className="px-5 py-3.5">{trendIcon[m.trend]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  )
}

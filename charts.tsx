"use client"

import { useState } from "react"
import { AppShell, PageHeader } from "@/components/app/app-shell"
import { Button } from "@/components/ui/button"
import { Plus, CheckCircle2, Circle, Flag } from "lucide-react"
import { cn } from "@/lib/utils"

type Priority = "high" | "medium" | "low"
type Task = {
  id: number
  title: string
  project: string
  due: string
  priority: Priority
  done: boolean
  status: "todo" | "in-progress" | "done"
}

const initialTasks: Task[] = [
  { id: 1, title: "Finish data structures problem set", project: "CS 201", due: "Today", priority: "high", done: false, status: "in-progress" },
  { id: 2, title: "Draft thesis introduction", project: "Research", due: "Today", priority: "high", done: false, status: "in-progress" },
  { id: 3, title: "Review 4 open pull requests", project: "Work", due: "Tomorrow", priority: "medium", done: false, status: "todo" },
  { id: 4, title: "Prepare slides for sprint demo", project: "Work", due: "Wed", priority: "medium", done: false, status: "todo" },
  { id: 5, title: "Read chapter 7 — Distributed Systems", project: "CS 305", due: "Fri", priority: "low", done: false, status: "todo" },
  { id: 6, title: "Submit scholarship application", project: "Personal", due: "Mon", priority: "high", done: true, status: "done" },
  { id: 7, title: "Weekly retro notes", project: "Work", due: "Yesterday", priority: "low", done: true, status: "done" },
]

const priorityStyles: Record<Priority, string> = {
  high: "text-destructive",
  medium: "text-chart-3",
  low: "text-muted-foreground",
}

const filters = ["All", "Today", "Upcoming", "Completed"] as const

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")

  const toggle = (id: number) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done, status: !t.done ? "done" : "todo" } : t)),
    )

  const filtered = tasks.filter((t) => {
    if (filter === "All") return true
    if (filter === "Today") return t.due === "Today" && !t.done
    if (filter === "Upcoming") return !t.done && t.due !== "Today"
    if (filter === "Completed") return t.done
    return true
  })

  const completed = tasks.filter((t) => t.done).length

  return (
    <AppShell>
      <PageHeader title="Tasks" description={`${completed} of ${tasks.length} tasks completed`}>
        <Button className="rounded-full">
          <Plus className="size-4" />
          New Task
        </Button>
      </PageHeader>

      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              filter === f
                ? "border-primary bg-primary/15 text-primary"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <ul className="divide-y divide-border">
          {filtered.map((t) => (
            <li key={t.id} className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-accent/30 sm:px-5">
              <button onClick={() => toggle(t.id)} aria-label={t.done ? "Mark incomplete" : "Mark complete"}>
                {t.done ? (
                  <CheckCircle2 className="size-5 text-chart-2" />
                ) : (
                  <Circle className="size-5 text-muted-foreground transition-colors hover:text-primary" />
                )}
              </button>

              <div className="min-w-0 flex-1">
                <p className={cn("truncate text-sm font-medium", t.done ? "text-muted-foreground line-through" : "text-foreground")}>
                  {t.title}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground">
                    {t.project}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <Flag className={cn("size-3", priorityStyles[t.priority])} />
                    <span className={priorityStyles[t.priority]}>{t.priority}</span>
                  </span>
                </div>
              </div>

              <span
                className={cn(
                  "shrink-0 text-xs font-medium",
                  t.due === "Today" && !t.done ? "text-chart-3" : "text-muted-foreground",
                )}
              >
                {t.due}
              </span>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-5 py-12 text-center text-sm text-muted-foreground">No tasks here. Nice and clear.</li>
          )}
        </ul>
      </div>
    </AppShell>
  )
}

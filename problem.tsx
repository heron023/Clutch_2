import type { ReactNode } from "react"
import { AppSidebar } from "@/components/app/app-sidebar"
import { AppTopbar } from "@/components/app/app-topbar"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopbar />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}

export function PageHeader({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children?: ReactNode
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted-foreground text-pretty">{description}</p>}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  )
}

export function StatCard({
  label,
  value,
  suffix,
  delta,
  deltaUp = true,
  accent = "text-foreground",
}: {
  label: string
  value: string
  suffix?: string
  delta?: string
  deltaUp?: boolean
  accent?: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="font-mono text-[10px] tracking-widest text-muted-foreground">{label}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className={`text-3xl font-bold ${accent}`}>
          {value}
          {suffix && <span className="text-base font-medium text-muted-foreground">{suffix}</span>}
        </p>
        {delta && (
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
              deltaUp ? "bg-chart-2/15 text-chart-2" : "bg-destructive/15 text-destructive"
            }`}
          >
            {delta}
          </span>
        )}
      </div>
    </div>
  )
}

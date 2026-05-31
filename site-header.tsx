"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ListChecks, Gauge, Users, Bot, Settings, LogOut } from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/tasks", label: "Tasks", icon: ListChecks },
  { href: "/clutch-score", label: "Clutch Score", icon: Gauge },
  { href: "/team", label: "Team Dashboard", icon: Users },
  { href: "/coach", label: "AI Coach", icon: Bot },
]

export function AppSidebar() {
  const pathname = usePathname()
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <Logo />
      </div>

      <nav className="flex-1 space-y-1 p-4">
        <p className="px-3 pb-2 font-mono text-[10px] tracking-widest text-muted-foreground">MENU</p>
        {nav.map((item) => {
          const active = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
              )}
            >
              <item.icon className="size-[18px]" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
          >
            <Settings className="size-[18px]" />
            Settings
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
          >
            <LogOut className="size-[18px]" />
            Log out
          </Link>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-lg border border-sidebar-border bg-card/50 p-3">
          <span className="flex size-9 items-center justify-center rounded-full bg-chart-1 text-sm font-bold text-primary-foreground">
            JD
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">Jordan Diaz</p>
            <p className="truncate text-xs text-muted-foreground">Pro Plan</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import { AppShell, PageHeader } from "@/components/app/app-shell"
import { Button } from "@/components/ui/button"
import { Bot, Send, Sparkles, Target, Calendar, Zap } from "lucide-react"

type Message = { role: "user" | "coach"; text: string }

const starters = [
  { icon: Target, text: "How do I hit my Clutch Score goal of 92?" },
  { icon: Calendar, text: "Plan my week around my CS midterm." },
  { icon: Zap, text: "I'm losing momentum — how do I recover?" },
]

const cannedReplies = [
  "Based on your data, your focus peaks between 8–11 AM. Block that window for your hardest task and protect it from meetings. Do that consistently this week and your score should climb 4–6 points.",
  "Here's a plan: front-load your problem sets Mon–Wed while energy is high, use Thursday for review, and keep Friday light. I've flagged 3 tasks that are at risk of slipping — want me to reschedule them?",
  "Momentum dips are normal. Start with a 25-minute focused sprint on the smallest open task. Completing one item rebuilds your streak and your Clutch Score rewards consistency over intensity.",
]

export default function CoachPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "coach",
      text: "Hey Jordan, I'm your Clutch Coach. I've reviewed this week's data — you're up 5 points and on an 18-day streak. What do you want to work on?",
    },
  ])
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages])

  const send = (text: string) => {
    if (!text.trim()) return
    const reply = cannedReplies[messages.filter((m) => m.role === "user").length % cannedReplies.length]
    setMessages((prev) => [...prev, { role: "user", text }, { role: "coach", text: reply }])
    setInput("")
  }

  return (
    <AppShell>
      <PageHeader title="AI Coach" description="Personalized guidance powered by your performance data." />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="flex h-[68vh] flex-col overflow-hidden rounded-2xl border border-border bg-card lg:col-span-2">
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary/15">
              <Bot className="size-5 text-primary" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Clutch Coach</p>
              <p className="flex items-center gap-1.5 text-xs text-chart-2">
                <span className="size-1.5 rounded-full bg-chart-2" /> Online
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "coach" && (
                  <span className="mr-3 mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Bot className="size-4 text-primary" />
                  </span>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed text-pretty ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-background/60 text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your coach anything..."
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <Button type="submit" size="icon" className="size-10 shrink-0 rounded-full" aria-label="Send message">
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-primary">
              <Sparkles className="size-3.5" /> QUICK PROMPTS
            </p>
            <div className="mt-4 space-y-2">
              {starters.map((s) => (
                <button
                  key={s.text}
                  onClick={() => send(s.text)}
                  className="flex w-full items-start gap-3 rounded-xl border border-border bg-background/40 p-3 text-left text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-accent/40"
                >
                  <s.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                  {s.text}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5">
            <p className="font-mono text-[10px] tracking-widest text-primary">TODAY&apos;S FOCUS</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground text-pretty">
              Your coach suggests tackling <span className="font-semibold">&quot;Draft thesis introduction&quot;</span> first.
              It&apos;s high-impact and aligned with your morning energy peak.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

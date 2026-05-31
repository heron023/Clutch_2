import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Logo } from '@/components/logo'

const faqs = [
  {
    q: 'How does the Clutch Score work?',
    a: 'The Clutch Score is a 0–100 metric calculated from your execution quality: on-time delivery, focus consistency, deadline adherence, and follow-through on high-impact tasks. It updates in real time as you work.',
  },
  {
    q: 'Is Clutch suitable for teams?',
    a: 'Absolutely. The Team plan adds a shared dashboard with workload distribution, burnout-risk alerts, and delivery-confidence scoring so managers can intervene before projects slip.',
  },
  {
    q: 'How does AI task scheduling work?',
    a: "Clutch analyzes your deadlines, estimated effort, and personal energy patterns to automatically place tasks into the optimal time slots — then adapts as your day changes.",
  },
  {
    q: 'Can students use Clutch for free?',
    a: 'Yes. The Student plan is free forever and includes Clutch Score tracking, AI scheduling for up to 5 active projects, productivity trends, and a basic AI coach.',
  },
  {
    q: 'Is my data private?',
    a: 'Your data is encrypted in transit and at rest. We never sell your information, and you can export or delete everything at any time.',
  },
]

export function FaqCta() {
  return (
    <>
      <section id="faq" className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently asked
          </h2>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="border-t border-border/60 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 text-center sm:p-16">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(closest-side at 50% 0%, oklch(0.7 0.16 250 / 0.16), transparent)' }}
            />
            <div className="relative">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Stop planning.
                <br />
                Start Clutching.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Join 14,000+ people who stopped procrastinating and started delivering — consistently.
              </p>
              <Button asChild size="lg" className="mt-8 rounded-full px-7 text-base font-semibold">
                <Link href="/dashboard">
                  Start Free — No Credit Card
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <Logo size="sm" />
            <p className="text-xs text-muted-foreground">© 2026 Clutch Technologies, Inc. All rights reserved.</p>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Security
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
}

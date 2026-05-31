import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'Student',
    price: 'Free',
    period: '',
    desc: 'Everything you need to stop procrastinating and start executing.',
    cta: 'Start Free',
    popular: false,
    features: ['Clutch Score tracking', 'AI task scheduling', '5 active projects', 'Productivity trends', 'Basic AI coach'],
  },
  {
    name: 'Professional',
    price: '$12',
    period: '/mo',
    desc: 'For individuals who demand peak performance every day.',
    cta: 'Start Free Trial',
    popular: true,
    features: [
      'Unlimited projects',
      'Live productivity tracker',
      'Advanced predictive analytics',
      'Full AI coaching',
      'Recruiter-ready report',
      'Priority support',
    ],
  },
  {
    name: 'Team',
    price: '$49',
    period: '/mo',
    desc: 'For teams that need visibility, accountability, and delivery confidence.',
    cta: 'Start Team Trial',
    popular: false,
    features: [
      'Everything in Pro',
      'Team dashboard',
      'Workload distribution',
      'Risk alerts',
      'Performance heatmap',
      'Slack & Jira integration',
      'Admin analytics',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-medium tracking-widest text-primary">PRICING</span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, transparent pricing.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-card p-7',
                tier.popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'
              )}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-semibold tracking-widest text-primary-foreground">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.desc}</p>
              <Button
                asChild
                className={cn('mt-6 w-full rounded-full font-semibold', !tier.popular && 'bg-secondary text-secondary-foreground hover:bg-secondary/80')}
              >
                <Link href="/dashboard">{tier.cta}</Link>
              </Button>
              <ul className="mt-7 flex flex-col gap-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

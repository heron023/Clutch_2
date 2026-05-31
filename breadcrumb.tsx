import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'My GPA went from 3.1 to 3.8 in one semester. Clutch caught that I was falling behind in Algorithms two weeks before the midterm.',
    initials: 'PN',
    name: 'Priya Nair',
    role: 'CS Senior, MIT',
    color: 'bg-chart-1',
  },
  {
    quote:
      'The team dashboard is the only tool I open before standups. Clutch Score gives me real signal on delivery risk instantly.',
    initials: 'JW',
    name: 'James Whitfield',
    role: 'Product Manager, Stripe',
    color: 'bg-chart-2',
  },
  {
    quote:
      'We onboarded the whole team in 20 minutes. Project completion rate jumped 34% in the first month alone.',
    initials: 'SR',
    name: 'Sofia Reyes',
    role: 'Founder, Mira AI',
    color: 'bg-chart-4',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Loved by students, pros, and teams.
        </h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-7">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-chart-3 text-chart-3" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className={`grid size-10 place-items-center rounded-full text-sm font-semibold text-primary-foreground ${t.color}`}>
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

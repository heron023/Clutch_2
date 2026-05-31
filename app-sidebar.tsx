import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { Features } from "@/components/landing/features"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { FaqCta } from "@/components/landing/faq-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Pricing />
        <Testimonials />
        <FaqCta />
      </main>
    </div>
  )
}

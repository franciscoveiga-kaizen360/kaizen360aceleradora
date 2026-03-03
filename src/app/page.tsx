import { HeroSection } from '@/components/organisms/HeroSection/HeroSection'
import { ProblemSection } from '@/components/organisms/ProblemSection/ProblemSection'
import { SolutionSection } from '@/components/organisms/SolutionSection/SolutionSection'
import { AuthoritySection } from '@/components/organisms/AuthoritySection/AuthoritySection'
import { HowItWorksSection } from '@/components/organisms/HowItWorksSection/HowItWorksSection'
import { PricingSection } from '@/components/organisms/PricingSection/PricingSection'
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection/TestimonialsSection'
import { FaqSection } from '@/components/organisms/FaqSection/FaqSection'
import { FinalCtaSection } from '@/components/organisms/FinalCtaSection/FinalCtaSection'
import { ContactSection } from '@/components/organisms/ContactSection/ContactSection'
import { Footer } from '@/components/organisms/Footer/Footer'
import { WhatsAppButton } from '@/components/organisms/WhatsAppButton/WhatsAppButton'
import { CookieBanner } from '@/components/organisms/CookieBanner/CookieBanner'

export default function HomePage() {
  return (
    <>
      <main>
        {/* Epic 2 — Top Sections */}
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        {/* Epic 3 — Authority & Offer */}
        <AuthoritySection />
        <HowItWorksSection />
        <PricingSection />
        {/* Epic 4 — Conversion Close & Compliance */}
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
      {/* Persistent floating elements */}
      <WhatsAppButton />
      <CookieBanner />
    </>
  )
}

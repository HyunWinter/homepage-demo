import React from 'react'
import { HeaderSection } from '@/components/header-section'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { ContentSection } from '@/components/content-section'
import { StatsSection } from '@/components/stats-section'
import { PricingSection } from '@/components/pricing-section'
import { CallToActionSection } from '@/components/cta-section'
import { FooterSection } from '@/components/footer-section'
import { WallOfLoveSection } from '@/components/testimonial-section'
import { FAQSection } from '@/components/faqs-section'

export default function HomePage() {
  return (
    <main>
      <HeaderSection />
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <StatsSection />
      <WallOfLoveSection />
      <PricingSection />
      <FAQSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  )
}
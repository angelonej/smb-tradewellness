import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CampaignSection } from './components/CampaignSection';
import { CrisisSection } from './components/CrisisSection';
import { VisionSection } from './components/VisionSection';
import { ModelSection } from './components/ModelSection';
import { ProgramsSection } from './components/ProgramsSection';
import { VirtualTourViewer } from './components/VirtualTourViewer';
import { TransformationGallery } from './components/TransformationGallery';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { TimelineJourney } from './components/TimelineJourney';
import { PlatformMockupSection } from './components/PlatformMockupSection';
import { ImpactMap } from './components/ImpactMap';
import { ImpactSection } from './components/ImpactSection';
import { TechnologySection } from './components/TechnologySection';
import { ResourcesSection } from './components/ResourcesSection';
import { DonationCalculator } from './components/DonationCalculator';
import { FundingSection } from './components/FundingSection';
import { SupportSection } from './components/SupportSection';
import { CommunityPortalPreview } from './components/CommunityPortalPreview';
import { FAQSection } from './components/FAQSection';
import { ApplicationProcess } from './components/ApplicationProcess';
import { LeadershipSection } from './components/LeadershipSection';
import { NewsletterSignup } from './components/NewsletterSignup';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CampaignSection />
        <CrisisSection />
        <VisionSection />
        <ModelSection />
        <ProgramsSection />
        <VirtualTourViewer />
        <TransformationGallery />
        <TestimonialsCarousel />
        <TimelineJourney />
        <PlatformMockupSection />
        <CommunityPortalPreview />
        <ImpactMap />
        <ImpactSection />
        <TechnologySection />
        <ResourcesSection />
        <FAQSection />
        <ApplicationProcess />
        <DonationCalculator />
        <FundingSection />
        <SupportSection />
        <NewsletterSignup />
        <LeadershipSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>;
}
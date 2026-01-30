import { useState } from "react";
import Hero from "@/components/landing/Hero";
import OfferCard from "@/components/landing/OfferCard";
import HowItWorks from "@/components/landing/HowItWorks";
import WhatYouGet from "@/components/landing/WhatYouGet";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyBar from "@/components/landing/StickyBar";
import LeadForm from "@/components/landing/LeadForm";

export interface LandingPageProps {
  variant: "A" | "B" | "C";
  subject: "Maths" | "English";
  audience: "Primary" | "High School" | "College";
}

const audienceKey = {
  "Primary": "primary",
  "High School": "highschool",
  "College": "college",
} as const;

const LandingPageTemplate = ({ variant, subject, audience }: LandingPageProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    // Track CTA click
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "cta_click", {
        event_category: "Lead",
        event_label: `${audience}_${subject}_${variant}`,
      });
    }
    setIsFormOpen(true);
  };

  const audienceType = audienceKey[audience];

  // Variant C puts "How It Works" before testimonials for process-focused flow
  const sections = variant === "C" ? (
    <>
      <HowItWorks />
      <WhatYouGet audience={audienceType} />
      <Testimonials subject={subject.toLowerCase() as "maths" | "english"} />
    </>
  ) : variant === "B" ? (
    // Variant B: Problem/solution framing - offer card prominent, then how it works
    <>
      <WhatYouGet audience={audienceType} />
      <Testimonials subject={subject.toLowerCase() as "maths" | "english"} />
      <HowItWorks />
    </>
  ) : (
    // Variant A: Standard outcome-focused order
    <>
      <Testimonials subject={subject.toLowerCase() as "maths" | "english"} />
      <HowItWorks />
      <WhatYouGet audience={audienceType} />
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <Hero
        variant={variant}
        subject={subject}
        audience={audience}
        onCTAClick={openForm}
      />

      {/* Offer Card Section */}
      <section className="ct-section -mt-16 relative z-10">
        <div className="ct-container">
          <OfferCard onCTAClick={openForm} />
        </div>
      </section>

      {/* Main Sections (order varies by variant) */}
      {sections}

      {/* FAQ */}
      <FAQ audience={audienceType} />

      {/* Final CTA */}
      <FinalCTA onCTAClick={openForm} variant={variant} />

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile CTA */}
      <StickyBar
        onCTAClick={openForm}
        ctaText={
          variant === "B"
            ? "Get a Plan This Week"
            : variant === "C"
            ? "See How It Works"
            : "Book Free Assessment"
        }
      />

      {/* Lead Form Modal */}
      <LeadForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        subject={subject}
        audience={audienceType}
      />
    </div>
  );
};

export default LandingPageTemplate;

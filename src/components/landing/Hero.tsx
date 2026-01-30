import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import CTAButton from "./CTAButton";
import TrustBadge from "./TrustBadge";

interface HeroProps {
  variant: "A" | "B" | "C";
  subject: "Maths" | "English";
  audience: "Primary" | "High School" | "College";
  onCTAClick?: () => void;
}

const heroContent = {
  A: {
    // Outcome + confidence
    headline: {
      "Primary-Maths": "Build Maths Confidence That Lasts a Lifetime",
      "Primary-English": "Give Your Child the Gift of Reading & Writing Confidence",
      "High School-Maths": "Turn Maths Struggles into Exam Success",
      "High School-English": "Master English Skills. Ace Every Essay.",
      "College-Maths": "Conquer University Maths with Clarity",
      "College-English": "Write with Confidence. Graduate with Distinction.",
    },
    subheadline: "See real improvement in just weeks with personalized 1-on-1 tutoring from Canberra's most trusted tutors.",
    cta: "Book Free Assessment",
  },
  B: {
    // Painkiller (stress reduction)
    headline: {
      "Primary-Maths": "Stop the Homework Battles. Start the Breakthroughs.",
      "Primary-English": "No More Tears Over Reading. No More Guessing With Spelling.",
      "High School-Maths": "Falling Behind in Maths? We'll Get Them Back on Track.",
      "High School-English": "Struggling with Essays? We'll Fix That This Term.",
      "College-Maths": "Overwhelmed by Uni Maths? Get Clarity This Week.",
      "College-English": "Assignment Stress? Get a Clear Plan Today.",
    },
    subheadline: "We identify exactly where they're stuck, create a plan, and deliver results. No more frustration.",
    cta: "Get a Plan This Week",
  },
  C: {
    // Process + certainty
    headline: {
      "Primary-Maths": "A Proven System to Master Primary Maths",
      "Primary-English": "Structured Learning That Builds Real English Skills",
      "High School-Maths": "The Clear Path from Confusion to Confidence in Maths",
      "High School-English": "From Basic Essays to A+ Papers: The Complete Method",
      "College-Maths": "Systematic Support for Every Maths Challenge",
      "College-English": "Academic Writing Excellence: Step by Step",
    },
    subheadline: "Assessment → Custom Plan → Weekly Tutoring → Progress Tracking. A structured approach that works.",
    cta: "See How It Works",
  },
};

const Hero = ({ variant, subject, audience, onCTAClick }: HeroProps) => {
  const key = `${audience}-${subject}` as keyof (typeof heroContent)["A"]["headline"];
  const content = heroContent[variant];
  const headline = content.headline[key];

  return (
    <section className="ct-hero">
      {/* Background gradient overlay */}
      <div className="ct-hero-overlay" />

      {/* Content */}
      <div className="ct-hero-content py-20 md:py-28">
        <div className="ct-container">
          {/* Top bar - contact info */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-white/80 text-sm mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <a href="tel:0412345678" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>0412 345 678</span>
            </a>
            <a href="mailto:hello@canberratutoring.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>hello@canberratutoring.com.au</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Canberra, ACT</span>
            </span>
          </motion.div>

          {/* Main content */}
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TrustBadge variant="stars" text="5-Star Rated" />
              <TrustBadge variant="experience" text="15+ Years" />
              <TrustBadge variant="students" text="1000+ Students" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {content.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <CTAButton onClick={onCTAClick} pulse>
                {content.cta}
              </CTAButton>
              <CTAButton variant="phone" href="tel:0412345678">
                Call Now
              </CTAButton>
            </motion.div>

            {/* Price teaser */}
            <motion.p
              className="mt-8 text-white/70 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              11 lessons for just <span className="text-ct-yellow font-semibold">$55/lesson</span> • Free assessment included
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

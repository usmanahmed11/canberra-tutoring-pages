import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";

interface FinalCTAProps {
  onCTAClick?: () => void;
  variant?: "A" | "B" | "C";
}

const ctaContent = {
  A: {
    headline: "Ready to See Real Results?",
    subheadline: "Book your free assessment today and let's create a plan for success.",
    buttonText: "Book Free Assessment",
  },
  B: {
    headline: "Ready to End the Struggle?",
    subheadline: "Get a clear plan this week. No obligation, no pressure.",
    buttonText: "Get a Plan This Week",
  },
  C: {
    headline: "Ready to Get Started?",
    subheadline: "See exactly how our process works and what to expect.",
    buttonText: "See How It Works",
  },
};

const FinalCTA = ({ onCTAClick, variant = "A" }: FinalCTAProps) => {
  const content = ctaContent[variant];

  return (
    <section className="ct-section bg-gradient-to-br from-ct-blue to-ct-green text-white">
      <div className="ct-container">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            {content.headline}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {content.subheadline}
          </p>

          {/* CTA Button */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <button
              onClick={onCTAClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-ct-green font-bold text-lg rounded-xl hover:bg-ct-mint transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              {content.buttonText}
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Contact alternatives */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span>Or reach us directly:</span>
            <a
              href="tel:0412345678"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              0412 345 678
            </a>
            <a
              href="mailto:hello@canberratutoring.com.au"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;

import { motion } from "framer-motion";
import { Check, Gift, FileText } from "lucide-react";
import CTAButton from "./CTAButton";

interface OfferCardProps {
  onCTAClick?: () => void;
}

const OfferCard = ({ onCTAClick }: OfferCardProps) => {
  return (
    <motion.div
      className="ct-offer-card max-w-lg mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ct-yellow/20 text-ct-green-dark text-sm font-semibold mb-4">
        <Gift className="w-4 h-4" />
        Limited Term Offer
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-5xl font-bold price-highlight font-heading">$55</span>
          <span className="text-muted-foreground text-lg">/lesson</span>
        </div>
        <p className="text-foreground font-medium">Buy 11 lessons upfront</p>
        <p className="text-sm text-muted-foreground">That's just $605 for a full term</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ct-green/10 flex items-center justify-center mt-0.5">
            <Check className="w-4 h-4 text-ct-green" />
          </span>
          <span>
            <strong className="text-foreground">Free Assessment</strong>
            <span className="text-muted-foreground"> — identify gaps & set goals</span>
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ct-green/10 flex items-center justify-center mt-0.5">
            <Check className="w-4 h-4 text-ct-green" />
          </span>
          <span>
            <strong className="text-foreground">Individual Learning Plan</strong>
            <span className="text-muted-foreground"> — tailored to your child</span>
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ct-green/10 flex items-center justify-center mt-0.5">
            <Check className="w-4 h-4 text-ct-green" />
          </span>
          <span>
            <strong className="text-foreground">Weekly Progress Notes</strong>
            <span className="text-muted-foreground"> — stay in the loop</span>
          </span>
        </li>
      </ul>

      {/* Optional Add-on */}
      <div className="p-4 rounded-xl bg-muted/50 mb-6">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-ct-blue" />
          <div>
            <p className="font-medium text-foreground">Written Progress Report</p>
            <p className="text-sm text-muted-foreground">Optional add-on: +$55</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTAButton onClick={onCTAClick} pulse className="w-full justify-center">
        Book Free Assessment
      </CTAButton>
    </motion.div>
  );
};

export default OfferCard;

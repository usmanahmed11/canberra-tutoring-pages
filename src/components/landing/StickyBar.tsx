import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";

interface StickyBarProps {
  onCTAClick?: () => void;
  ctaText?: string;
  showAfter?: number; // pixels scrolled before showing
}

const StickyBar = ({
  onCTAClick,
  ctaText = "Book Free Assessment",
  showAfter = 600,
}: StickyBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="ct-sticky-bar md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CTAButton onClick={onCTAClick} className="w-full justify-center">
            {ctaText}
          </CTAButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBar;

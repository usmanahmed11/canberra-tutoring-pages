import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "phone";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  pulse?: boolean;
}

const CTAButton = ({
  variant = "primary",
  children,
  onClick,
  href,
  className = "",
  pulse = false,
}: CTAButtonProps) => {
  const baseClasses = {
    primary: "ct-btn-primary",
    secondary: "ct-btn-secondary",
    phone: "ct-btn-secondary",
  };

  const content = (
    <motion.span
      className={`${baseClasses[variant]} ${pulse ? "animate-pulse-subtle" : ""} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "phone" && <Phone className="w-5 h-5" />}
      {children}
      {variant === "primary" && <ArrowRight className="w-5 h-5" />}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  );
};

export default CTAButton;

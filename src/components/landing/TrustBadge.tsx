import { Star, Shield, Award, Users } from "lucide-react";

interface TrustBadgeProps {
  variant?: "stars" | "guarantee" | "experience" | "students";
  text?: string;
}

const icons = {
  stars: Star,
  guarantee: Shield,
  experience: Award,
  students: Users,
};

const defaultText = {
  stars: "5-Star Rated",
  guarantee: "Satisfaction Guaranteed",
  experience: "15+ Years Experience",
  students: "1000+ Students",
};

const TrustBadge = ({ variant = "stars", text }: TrustBadgeProps) => {
  const Icon = icons[variant];
  const displayText = text || defaultText[variant];

  return (
    <span className="ct-trust-badge">
      <Icon className="w-4 h-4" />
      <span>{displayText}</span>
    </span>
  );
};

export default TrustBadge;

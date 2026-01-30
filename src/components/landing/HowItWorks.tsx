import { motion } from "framer-motion";
import { ClipboardCheck, UserCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Free Assessment",
    description: "We identify your child's current level, learning style, and specific gaps that need attention.",
  },
  {
    icon: UserCheck,
    title: "Custom Learning Plan",
    description: "We match them with the right tutor and create a structured plan targeting their unique needs.",
  },
  {
    icon: TrendingUp,
    title: "Weekly Progress",
    description: "Regular lessons build momentum. You get updates and see improvement week by week.",
  },
];

const HowItWorks = () => {
  return (
    <section className="ct-section bg-muted/30">
      <div className="ct-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process to get your child on track
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="ct-step-card text-center relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-ct-green text-white font-bold flex items-center justify-center text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-ct-mint flex items-center justify-center">
                <step.icon className="w-8 h-8 text-ct-green" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 border-t-2 border-dashed border-ct-softgreen" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  outcome?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  subject?: "maths" | "english";
}

const defaultTestimonials: Record<string, Testimonial[]> = {
  maths: [
    {
      quote: "My daughter went from dreading maths homework to actually asking to practice. Her confidence has completely transformed.",
      author: "Sarah M.",
      role: "Parent, Year 4 student",
      outcome: "C to A in one term",
    },
    {
      quote: "The tutors really understand how to break down concepts. My son finally 'gets' fractions and multiplication.",
      author: "David L.",
      role: "Parent, Year 3 student",
      outcome: "Now top of class",
    },
    {
      quote: "Professional, patient, and genuinely invested in my child's progress. Worth every dollar.",
      author: "Michelle K.",
      role: "Parent, Year 6 student",
      outcome: "Scholarship achieved",
    },
  ],
  english: [
    {
      quote: "My son's writing has improved dramatically. He can now structure an essay and express his ideas clearly.",
      author: "Jenny T.",
      role: "Parent, Year 5 student",
      outcome: "Reading level up 2 years",
    },
    {
      quote: "The one-on-one attention made all the difference. My daughter now loves reading and writes with confidence.",
      author: "Mark R.",
      role: "Parent, Year 4 student",
      outcome: "C to B+ in writing",
    },
    {
      quote: "Finally, someone who could help with spelling and grammar in a way that actually sticks. Highly recommend!",
      author: "Lisa H.",
      role: "Parent, Year 3 student",
      outcome: "Confident reader now",
    },
  ],
};

const Testimonials = ({ testimonials, subject = "maths" }: TestimonialsProps) => {
  const items = testimonials || defaultTestimonials[subject];

  return (
    <section className="ct-section">
      <div className="ct-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Real Results from Real Parents
          </h2>
          <p className="text-lg text-muted-foreground">
            See what Canberra families are saying
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="ct-testimonial"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-ct-yellow text-ct-yellow" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-ct-mint" />
                <p className="text-foreground pl-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Outcome Badge */}
              {testimonial.outcome && (
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-ct-green/10 text-ct-green text-sm font-medium">
                    ✓ {testimonial.outcome}
                  </span>
                </div>
              )}

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

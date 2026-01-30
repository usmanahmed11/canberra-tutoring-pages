import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
  audience?: "primary" | "highschool" | "college";
  subject?: "maths" | "english";
}

const defaultFAQs: Record<string, FAQItem[]> = {
  primary: [
    {
      question: "What ages do you tutor for primary school?",
      answer: "We work with students from Kindergarten through Year 6, typically ages 5-12. Our tutors are experienced in making learning engaging and age-appropriate for younger learners.",
    },
    {
      question: "How do you keep young children engaged?",
      answer: "Our tutors use interactive activities, games, and hands-on learning materials. Sessions are structured but flexible, with breaks built in to maintain focus and enthusiasm.",
    },
    {
      question: "Can parents sit in on lessons?",
      answer: "Absolutely! Parents are welcome to observe sessions, especially in the beginning. We also provide detailed lesson notes after each session so you know exactly what was covered.",
    },
    {
      question: "What if my child is behind their grade level?",
      answer: "Many students come to us because they've fallen behind. Our free assessment identifies exactly where the gaps are, and we create a plan to fill them systematically without overwhelming your child.",
    },
    {
      question: "How long are the tutoring sessions?",
      answer: "Sessions are typically 1 hour, which is optimal for primary students. For younger children (K-Year 2), we can adjust to 45-minute sessions if needed.",
    },
    {
      question: "What's included in the $55/lesson price?",
      answer: "Each lesson includes 1-hour of one-on-one tutoring, preparation time, lesson notes sent to parents, and access to practice materials. The free assessment and learning plan are included when you book a term package.",
    },
  ],
  highschool: [
    {
      question: "Which high school subjects do you cover?",
      answer: "We specialize in Maths (all levels from Year 7-12 including Methods, Specialist, and Applications) and English (including Literature, EAL, and essay writing skills).",
    },
    {
      question: "Can you help with exam preparation?",
      answer: "Yes! We offer targeted exam prep for NAPLAN, school assessments, and senior secondary exams. Our tutors are familiar with curriculum requirements and exam formats.",
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "Most students show measurable improvement within 4-6 weeks of consistent tutoring. We set clear goals and track progress through regular check-ins and assessment benchmarks.",
    },
    {
      question: "Do you offer homework help?",
      answer: "Yes, tutors can help with specific homework questions, but we focus on building understanding rather than just getting answers. This ensures students can tackle similar problems independently.",
    },
    {
      question: "What if my teen doesn't want tutoring?",
      answer: "It's common for teens to be reluctant. Our tutors build rapport quickly and focus on making sessions productive and low-stress. Many students end up looking forward to sessions once they start seeing progress.",
    },
    {
      question: "Are tutors available on weekends?",
      answer: "Yes, we have tutors available 7 days a week, with many time slots on weekends. We'll work with your schedule to find the best fit.",
    },
  ],
  college: [
    {
      question: "What college subjects do you support?",
      answer: "We support university-level Maths (Calculus, Linear Algebra, Statistics) and English/Academic Writing (essays, research papers, thesis support). Contact us for specific course inquiries.",
    },
    {
      question: "Can you help with assignment structure?",
      answer: "Absolutely. Our tutors help with planning, structure, research methods, and editing. We teach you the skills while helping you produce high-quality work.",
    },
    {
      question: "How is college tutoring different?",
      answer: "College tutoring is more collaborative and flexible. Sessions focus on your specific assignments and exams. We expect students to come prepared with questions and materials.",
    },
    {
      question: "Do you offer last-minute exam help?",
      answer: "Yes, we can arrange intensive sessions before exams. However, the best results come from consistent tutoring throughout the semester. Book early for exam periods—slots fill fast.",
    },
    {
      question: "What if I just need help with one assignment?",
      answer: "No problem. While our term package offers the best value, we can arrange short-term support for specific assignments. Contact us to discuss your needs.",
    },
    {
      question: "Can sessions be online?",
      answer: "Yes, all our tutoring is available online via video call with screen sharing. This works especially well for college students who need flexibility.",
    },
  ],
};

const FAQ = ({ items, audience = "primary" }: FAQProps) => {
  const faqItems = items || defaultFAQs[audience];

  return (
    <section className="ct-section bg-muted/30">
      <div className="ct-container max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl px-6 border-0 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

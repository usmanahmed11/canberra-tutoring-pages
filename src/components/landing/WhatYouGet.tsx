import { motion } from "framer-motion";
import { BookOpen, Users, FileText, BarChart3, Clock, HeartHandshake } from "lucide-react";

interface WhatYouGetProps {
  audience?: "primary" | "highschool" | "college";
  subject?: "maths" | "english";
}

const features = {
  primary: [
    {
      icon: BookOpen,
      title: "Individual Learning Plan",
      description: "A customized roadmap built around your child's specific needs, pace, and learning style.",
    },
    {
      icon: Users,
      title: "Expert Tutor Matching",
      description: "We match your child with a tutor who clicks—someone patient, encouraging, and skilled.",
    },
    {
      icon: FileText,
      title: "Lesson Notes After Every Session",
      description: "Know exactly what was covered and how your child is progressing after each lesson.",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Regular check-ins and assessments so you can see real improvement, not just hope for it.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Sessions that fit your family's routine—after school, weekends, whatever works.",
    },
    {
      icon: HeartHandshake,
      title: "Confidence Building",
      description: "We focus on building self-belief alongside skills. Confidence changes everything.",
    },
  ],
  highschool: [
    {
      icon: BookOpen,
      title: "Structured Learning Plan",
      description: "A clear roadmap targeting curriculum requirements, exam skills, and knowledge gaps.",
    },
    {
      icon: Users,
      title: "Subject-Expert Tutors",
      description: "Tutors who know the curriculum inside-out and understand how to get results.",
    },
    {
      icon: FileText,
      title: "Detailed Session Summaries",
      description: "Parents and students get notes on what was covered and what to practice before next time.",
    },
    {
      icon: BarChart3,
      title: "Assessment & Progress Tracking",
      description: "Regular benchmarks so you can measure improvement against school assessments.",
    },
    {
      icon: Clock,
      title: "Flexible Online & In-Person",
      description: "Choose how and when sessions happen. We adapt to your schedule.",
    },
    {
      icon: HeartHandshake,
      title: "Exam Prep & Study Skills",
      description: "Beyond content—we teach how to study effectively and manage exam pressure.",
    },
  ],
  college: [
    {
      icon: BookOpen,
      title: "Targeted Support Plan",
      description: "We focus on your specific units, assignments, and exam prep—no wasted time.",
    },
    {
      icon: Users,
      title: "University-Level Expertise",
      description: "Tutors with advanced degrees who understand university-level rigour and expectations.",
    },
    {
      icon: FileText,
      title: "Assignment & Essay Guidance",
      description: "Structure, research, argumentation—we help you produce work you're proud of.",
    },
    {
      icon: BarChart3,
      title: "Skills Transfer Focus",
      description: "Not just answers—we teach you methods you can apply independently.",
    },
    {
      icon: Clock,
      title: "Flexible Online Sessions",
      description: "Sessions fit around your uni schedule. Book when you need it.",
    },
    {
      icon: HeartHandshake,
      title: "Academic Independence",
      description: "Our goal is to make you confident enough to not need us. That's success.",
    },
  ],
};

const WhatYouGet = ({ audience = "primary" }: WhatYouGetProps) => {
  const items = features[audience];

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
            What You Get
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than tutoring—a complete support system for success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-2xl bg-white border border-border hover:border-ct-green/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-12 h-12 rounded-xl bg-ct-mint flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-ct-green" />
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;

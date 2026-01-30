import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  parentName: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  studentYear: z.string().min(1, "Please select a year level"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
  audience?: string;
}

const yearLevels = {
  primary: ["Kindergarten", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"],
  highschool: ["Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12"],
  college: ["First Year", "Second Year", "Third Year", "Honours/Postgrad"],
};

const LeadForm = ({ isOpen, onClose, subject = "Maths", audience = "primary" }: LeadFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual submission logic)
    console.log("Form submitted:", { ...data, subject, audience });
    
    // Track form submission event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "form_submit", {
        event_category: "Lead",
        event_label: `${audience}_${subject}`,
      });
    }
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation completes
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 300);
  };

  const levels = yearLevels[audience as keyof typeof yearLevels] || yearLevels.primary;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-lg mx-auto z-50 bg-white rounded-3xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: "-45%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: "-45%" }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="relative p-6 pb-4 border-b border-border">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
              <h3 className="text-2xl font-bold font-heading text-foreground pr-8">
                {isSubmitted ? "You're All Set!" : "Book Your Free Assessment"}
              </h3>
              {!isSubmitted && (
                <p className="text-muted-foreground mt-1">
                  {subject} tutoring • No obligation
                </p>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-ct-mint flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-ct-green" />
                    </div>
                    <h4 className="text-xl font-bold font-heading text-foreground mb-2">
                      Thank You!
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      We'll be in touch within 24 hours to schedule your free assessment.
                    </p>
                    <button
                      onClick={handleClose}
                      className="ct-btn-primary"
                    >
                      Got It
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {/* Parent Name */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Your Name *
                      </label>
                      <input
                        {...register("parentName")}
                        type="text"
                        placeholder="e.g. Sarah Smith"
                        className="ct-input"
                      />
                      {errors.parentName && (
                        <p className="text-destructive text-sm mt-1">{errors.parentName.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        className="ct-input"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="0412 345 678"
                        className="ct-input"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Year Level */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Student Year Level *
                      </label>
                      <select {...register("studentYear")} className="ct-input">
                        <option value="">Select year level</option>
                        {levels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                      {errors.studentYear && (
                        <p className="text-destructive text-sm mt-1">{errors.studentYear.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Anything we should know? (optional)
                      </label>
                      <textarea
                        {...register("message")}
                        rows={3}
                        placeholder="Tell us about your goals or concerns..."
                        className="ct-input resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ct-btn-primary w-full justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            ⏳
                          </motion.span>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Book Free Assessment
                        </span>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadForm;

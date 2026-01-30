import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

const pages = [
  {
    audience: "Primary",
    subject: "Maths",
    variants: [
      { label: "A", path: "/primary-maths-a", angle: "Outcome + Confidence" },
      { label: "B", path: "/primary-maths-b", angle: "Painkiller" },
      { label: "C", path: "/primary-maths-c", angle: "Process + Certainty" },
    ],
  },
  {
    audience: "Primary",
    subject: "English",
    variants: [
      { label: "A", path: "/primary-english-a", angle: "Outcome + Confidence" },
      { label: "B", path: "/primary-english-b", angle: "Painkiller" },
      { label: "C", path: "/primary-english-c", angle: "Process + Certainty" },
    ],
  },
  {
    audience: "High School",
    subject: "Maths",
    variants: [
      { label: "A", path: "/high-school-maths-a", angle: "Outcome + Confidence" },
      { label: "B", path: "/high-school-maths-b", angle: "Painkiller" },
      { label: "C", path: "/high-school-maths-c", angle: "Process + Certainty" },
    ],
  },
  {
    audience: "High School",
    subject: "English",
    variants: [
      { label: "A", path: "/high-school-english-a", angle: "Outcome + Confidence" },
      { label: "B", path: "/high-school-english-b", angle: "Painkiller" },
      { label: "C", path: "/high-school-english-c", angle: "Process + Certainty" },
    ],
  },
  {
    audience: "College",
    subject: "Maths",
    variants: [
      { label: "A", path: "/college-maths-a", angle: "Outcome + Confidence" },
      { label: "B", path: "/college-maths-b", angle: "Painkiller" },
      { label: "C", path: "/college-maths-c", angle: "Process + Certainty" },
    ],
  },
  {
    audience: "College",
    subject: "English",
    variants: [
      { label: "A", path: "/college-english-a", angle: "Outcome + Confidence" },
      { label: "B", path: "/college-english-b", angle: "Painkiller" },
      { label: "C", path: "/college-english-c", angle: "Process + Certainty" },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-gradient-to-r from-ct-blue to-ct-green text-white py-12">
        <div className="ct-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Canberra Tutoring
          </h1>
          <p className="text-xl text-white/90 mb-2">
            Landing Page System
          </p>
          <p className="text-white/70">
            18 conversion-tested variants across 6 audience segments
          </p>
        </div>
      </header>

      {/* Dashboard */}
      <main className="ct-container py-12">
        <div className="grid gap-6">
          {pages.map((page) => (
            <div
              key={`${page.audience}-${page.subject}`}
              className="bg-white rounded-2xl p-6 shadow-sm border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-ct-mint text-ct-green-dark mb-2">
                    {page.audience}
                  </span>
                  <h2 className="text-2xl font-bold font-heading text-foreground">
                    {page.subject} Tutoring
                  </h2>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {page.variants.map((variant) => (
                  <Link
                    key={variant.path}
                    to={variant.path}
                    className="group flex flex-col p-4 rounded-xl border-2 border-border hover:border-ct-green/50 hover:bg-ct-mint/30 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-ct-green">
                        Variant {variant.label}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-ct-green transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {variant.angle}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-ct-blue group-hover:text-ct-green transition-colors">
                      View page
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-border">
          <h3 className="text-lg font-bold font-heading text-foreground mb-4">
            Variant Strategy Guide
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-full bg-ct-green/10 flex items-center justify-center font-bold text-ct-green">
                  A
                </span>
                <span className="font-semibold text-foreground">Outcome + Confidence</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Results-focused messaging. Testimonials prominent. CTA: "Book Free Assessment"
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-full bg-ct-blue/10 flex items-center justify-center font-bold text-ct-blue">
                  B
                </span>
                <span className="font-semibold text-foreground">Painkiller</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Stress/frustration framing. Problem-solution approach. CTA: "Get a Plan This Week"
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-full bg-ct-yellow/20 flex items-center justify-center font-bold text-foreground">
                  C
                </span>
                <span className="font-semibold text-foreground">Process + Certainty</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Structured methodology. "How it works" emphasized. CTA: "See How It Works"
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Canberra Tutoring. All pages ready for A/B testing.</p>
      </footer>
    </div>
  );
};

export default Index;

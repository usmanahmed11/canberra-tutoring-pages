import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="ct-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-heading text-white mb-4">
              Canberra Tutoring
            </h3>
            <p className="text-sm leading-relaxed">
              Trusted by over 1,000 Canberra families. We provide personalized
              one-on-one tutoring that builds confidence and delivers results.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:0412345678"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0412 345 678
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@canberratutoring.com.au"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@canberratutoring.com.au
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Canberra, ACT
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4">Office Hours</h4>
            <ul className="space-y-1 text-sm">
              <li>Monday – Friday: 9am – 8pm</li>
              <li>Saturday: 9am – 5pm</li>
              <li>Sunday: 10am – 4pm</li>
            </ul>
          </div>
        </div>

        {/* Terms */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-xs text-white/60 space-y-2">
            <p>
              <strong>Terms & Conditions:</strong> The $55/lesson rate applies
              when purchasing 11 lessons upfront ($605 total). Lessons must be
              used within 14 weeks of purchase. Unused lessons are
              non-refundable but may be transferred to another student with
              prior approval. The free assessment is a 30-minute session to
              identify learning needs; it does not include a written report.
              Written progress reports are available as an optional add-on for
              $55. Prices are valid for the current term only and may change
              without notice.
            </p>
            <p>
              © {new Date().getFullYear()} Canberra Tutoring. All rights
              reserved. ABN: 12 345 678 901
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

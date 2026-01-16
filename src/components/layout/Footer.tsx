import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "447000000000";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'd like a quote for commercial roofing");


const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      
      <div className="container-wide py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="text-white/60 text-sm">
                  147 Hampton Road, Southport,<br />
                  Merseyside, PR8 5DJ
                </span>
              </li>
              <li>
                <a href="tel:01704542122" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">01704 542122</span>
                </a>
              </li>
              <li>
                <a href="tel:07838121592" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">Mob: 07838 121592</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent text-xs font-bold">8-6</span>
                </div>
                <span className="text-sm">Available 8:00am – 18:00</span>
              </li>
              <li>
                <a href="mailto:info@primergroup.co.uk" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">info@primergroup.co.uk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Primer Group LTD. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Commercial Roofers Southport | Industrial Roofing Merseyside
          </p>
        </div>
      </div>
    </footer>
  );
}

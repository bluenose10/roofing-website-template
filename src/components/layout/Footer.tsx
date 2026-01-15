import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "447000000000";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'd like a quote for commercial roofing");

const services = [
  { name: "Industrial Roof Installation", href: "/services#industrial" },
  { name: "Commercial Flat Roofing", href: "/services#flat-roof" },
  { name: "Roof Repair & Maintenance", href: "/services#repair" },
  { name: "Emergency Leak Response", href: "/services#emergency" },
  { name: "Roof Inspections", href: "/services#inspections" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">P</span>
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight">PRIMER GROUP</span>
                <span className="block text-xs text-white/60 tracking-widest">LTD</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Southport's trusted commercial roofing specialists. Delivering precision 
              industrial roofing solutions across Merseyside.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
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
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  147 Hampton Road, Southport,<br />
                  Merseyside, PR8 5DJ
                </span>
              </li>
              <li>
                <a href="tel:+441234567890" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-sm">01onal 123 4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@primergroup.co.uk" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-sm">info@primergroup.co.uk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Primer Group LTD. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Commercial Roofers Southport | Industrial Roofing Merseyside
          </p>
        </div>
      </div>
    </footer>
  );
}

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
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-wide py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center glow-accent">
                <span className="text-primary font-bold text-xl">P</span>
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight">PRIMER GROUP</span>
                <span className="block text-xs text-white/50 tracking-widest">LTD</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Southport's trusted commercial roofing specialists. Delivering precision 
              industrial roofing solutions across Merseyside.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-[#25D366]/30"
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
                    className="text-white/60 hover:text-accent transition-colors text-sm"
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
                <a href="tel:+441234567890" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">01234 567 890</span>
                </a>
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

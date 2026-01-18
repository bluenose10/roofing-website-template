import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { businessConfig } from "@/config/business";
import { getServiceTypeText } from "@/utils/serviceType";

const WHATSAPP_NUMBER = businessConfig.contact.whatsapp;
const WHATSAPP_MESSAGE = encodeURIComponent(`Hi, I'd like a quote for ${getServiceTypeText().toLowerCase()} roofing`);

export function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your <span className="text-gradient">Project?</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10">
            Get a free, no-obligation quote within 24 hours. Our team is ready
            to discuss your {getServiceTypeText().toLowerCase()} roofing needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="whatsapp"
              size="xl" 
              asChild
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Now
              </a>
            </Button>
            <Button 
              variant="cta" 
              size="xl"
              asChild
            >
              <Link to="/contact">
                Contact Form
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a href={`tel:${businessConfig.contact.phone}`} className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Or call: {businessConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

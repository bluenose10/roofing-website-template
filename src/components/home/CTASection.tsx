import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "447000000000";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'd like a quote for commercial roofing");

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-accent via-accent to-amber-400 relative overflow-hidden">
      {/* Glass orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary/70 mb-10">
            Get a free, no-obligation quote within 24 hours. Our team is ready 
            to discuss your commercial roofing needs.
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
            <a href="tel:01704542122" className="flex items-center gap-2 text-primary/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Or call: 01704 542122</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

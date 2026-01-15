import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "447000000000";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'd like a quote for commercial roofing");

export function CTASection() {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            currentColor 20px,
            currentColor 21px
          )`,
        }} />
      </div>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Get a free, no-obligation quote within 24 hours. Our team is ready 
            to discuss your commercial roofing needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="xl" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
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
              variant="heroOutline" 
              size="xl"
              className="border-white/30 text-white hover:border-white hover:bg-white/10"
              asChild
            >
              <Link to="/contact">
                Contact Form
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-white/70">
            <a href="tel:+441234567890" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Or call: 01234 567 890</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

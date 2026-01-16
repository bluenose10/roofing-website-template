import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { CheckCircle, ArrowRight, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roofing.jpg";

const WHATSAPP_NUMBER = "447838121592";

const services = [
  {
    id: "industrial",
    title: "Industrial Roof Installation",
    description: "Complete roofing solutions for warehouses, factories, and large commercial buildings. We specialize in handling complex industrial projects of any scale.",
    features: [
      "Built-up roofing systems (BUR)",
      "Standing seam metal roofing",
      "Single-ply membrane systems",
      "Green roofing options",
    ],
    timeline: "2-8 weeks",
  },
  {
    id: "flat-roof",
    title: "Commercial Flat Roofing",
    description: "Expert flat roof systems designed for commercial buildings. We work with premium materials to ensure longevity and performance.",
    features: [
      "EPDM rubber roofing",
      "TPO membrane systems",
      "PVC roofing solutions",
      "Modified bitumen",
    ],
    timeline: "1-4 weeks",
  },
  {
    id: "repair",
    title: "Roof Repair & Maintenance",
    description: "Proactive maintenance programs and rapid repairs to extend your roof's lifespan and prevent costly damage.",
    features: [
      "Regular maintenance programs",
      "Leak detection and repair",
      "Flashing and seam repairs",
      "Drainage improvements",
    ],
    timeline: "Same day - 1 week",
  },
  {
    id: "emergency",
    title: "Emergency Leak Response",
    description: "24/7 emergency response for urgent roof leaks and storm damage. We're here when you need us most.",
    features: [
      "24/7 emergency callout",
      "Rapid temporary repairs",
      "Storm damage assessment",
      "Insurance claim support",
    ],
    timeline: "2-4 hour response",
    urgent: true,
  },
  {
    id: "inspections",
    title: "Roof Inspections & Surveys",
    description: "Comprehensive roof assessments using the latest drone technology and thermal imaging to identify issues before they become problems.",
    features: [
      "Drone aerial surveys",
      "Thermal imaging analysis",
      "Core sampling and testing",
      "Detailed condition reports",
    ],
    timeline: "1-3 days",
  },
  {
    id: "gutters",
    title: "Gutter & Drainage Systems",
    description: "Professional gutter and drainage solutions for commercial properties. Proper water management is essential to protect your roof investment and building structure.",
    features: [
      "Commercial gutter installation",
      "Drainage system design",
      "Gutter cleaning & maintenance",
      "Downspout installation & repair",
    ],
    timeline: "1-2 weeks",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Commercial roofing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
        </div>
        
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Commercial Roofing <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              From new installations to emergency repairs, we deliver comprehensive 
              roofing solutions tailored to your commercial property needs across 
              Southport and Merseyside.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background relative">
        <div className="container-wide">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group relative bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  service.urgent 
                    ? "border-accent/60 hover:border-accent hover:shadow-xl hover:shadow-accent/20" 
                    : "border-border hover:border-accent hover:shadow-xl hover:shadow-accent/10"
                }`}
              >
                {/* Urgent badge */}
                {service.urgent && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-bold rounded-bl-xl">
                    24/7 Available
                  </div>
                )}
                
                {/* Content */}
                <div className="p-8 lg:p-10">
                  <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-start">
                    {/* Left side - Main content */}
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
                        {service.description}
                      </p>
                      
                      {/* Features grid */}
                      <div className="grid sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature) => (
                          <div 
                            key={feature} 
                            className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3 border border-border"
                          >
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-foreground text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right side - Timeline & CTA */}
                    <div className="lg:text-right space-y-4">
                      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm font-semibold text-accent">{service.timeline}</span>
                      </div>
                      
                      <div>
                        <Button variant="cta" className="w-full lg:w-auto" asChild>
                          <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${service.title}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Get Quote
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default Services;

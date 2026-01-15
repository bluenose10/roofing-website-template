import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Building2, Layers, Wrench, AlertTriangle, Search, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "447000000000";

const services = [
  {
    id: "industrial",
    icon: Building2,
    title: "Industrial Roof Installation",
    description: "Complete roofing solutions for warehouses, factories, and large commercial buildings. We specialize in handling complex industrial projects of any scale.",
    features: [
      "Built-up roofing systems (BUR)",
      "Standing seam metal roofing",
      "Single-ply membrane systems",
      "Green roofing options",
    ],
    timeline: "2-8 weeks depending on size",
  },
  {
    id: "flat-roof",
    icon: Layers,
    title: "Commercial Flat Roofing",
    description: "Expert flat roof systems designed for commercial buildings. We work with premium materials to ensure longevity and performance.",
    features: [
      "EPDM rubber roofing",
      "TPO membrane systems",
      "PVC roofing solutions",
      "Modified bitumen",
    ],
    timeline: "1-4 weeks depending on complexity",
  },
  {
    id: "repair",
    icon: Wrench,
    title: "Roof Repair & Maintenance",
    description: "Proactive maintenance programs and rapid repairs to extend your roof's lifespan and prevent costly damage.",
    features: [
      "Regular maintenance programs",
      "Leak detection and repair",
      "Flashing and seam repairs",
      "Drainage improvements",
    ],
    timeline: "Same day to 1 week",
  },
  {
    id: "emergency",
    icon: AlertTriangle,
    title: "Emergency Leak Response",
    description: "24/7 emergency response for urgent roof leaks and storm damage. We're here when you need us most.",
    features: [
      "24/7 emergency callout",
      "Rapid temporary repairs",
      "Storm damage assessment",
      "Insurance claim support",
    ],
    timeline: "2-4 hour response time",
  },
  {
    id: "inspections",
    icon: Search,
    title: "Roof Inspections & Surveys",
    description: "Comprehensive roof assessments using the latest drone technology and thermal imaging to identify issues before they become problems.",
    features: [
      "Drone aerial surveys",
      "Thermal imaging analysis",
      "Core sampling and testing",
      "Detailed condition reports",
    ],
    timeline: "1-3 days for full survey",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-display-sm font-bold text-primary-foreground mb-6">
              Commercial Roofing Services
            </h1>
            <p className="text-lg text-white/80">
              From new installations to emergency repairs, we deliver comprehensive 
              roofing solutions tailored to your commercial property needs across 
              Southport and Merseyside.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-wide space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <span className="text-5xl font-bold text-muted/30">0{index + 1}</span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {service.description}
                </p>
                
                <div className="bg-muted rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Typical Timeline:</span>
                    <span className="font-semibold text-foreground ml-2">{service.timeline}</span>
                  </div>
                  <Button variant="cta" asChild>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${service.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className={`bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl aspect-video flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <service.icon className="w-24 h-24 text-accent/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Every project is unique. Contact us to discuss your specific 
            commercial roofing requirements.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

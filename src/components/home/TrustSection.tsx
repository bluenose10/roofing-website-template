import { motion } from "framer-motion";
import { Shield, Users, Clock, Award, CheckCircle, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive liability coverage for complete peace of mind",
  },
  {
    icon: Users,
    title: "Certified Team",
    description: "Industry-certified professionals with ongoing training",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We stick to timelines and budget commitments",
  },
  {
    icon: Award,
    title: "Quality Materials",
    description: "Premium roofing materials from trusted manufacturers",
  },
  {
    icon: CheckCircle,
    title: "Guaranteed Work",
    description: "Extended warranties on all installations and repairs",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "24/7 emergency service for urgent roofing issues",
  },
];

const certifications = [
  "NFRC Member",
  "CSCS Certified",
  "Safe Contractor Approved",
  "CompetentRoofer Registered",
];

export function TrustSection() {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      
      <div className="container-wide relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted Commercial <span className="text-gradient">Roofing Experts</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We've built our reputation on quality workmanship, reliability, 
            and exceptional customer service.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="group flex items-start gap-4 p-6 bg-card border-2 border-border/70 rounded-2xl hover:border-accent hover:shadow-lg hover:shadow-accent/15 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/15 border border-accent/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:glow-accent transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications - Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-card border-2 border-accent/40 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg shadow-accent/10"
        >
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Industry Accredited
              </h3>
              <p className="text-muted-foreground">
                Certified and approved by leading industry bodies
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <motion.span
                  key={cert}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-accent/15 border-2 border-accent/40 rounded-full text-sm font-medium text-foreground hover:bg-accent hover:text-primary-foreground hover:border-accent transition-colors duration-300 cursor-default"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

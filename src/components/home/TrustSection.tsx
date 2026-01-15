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
    <section className="section-padding bg-muted">
      <div className="container-wide">
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
          <h2 className="text-heading text-foreground mb-6">
            Trusted Commercial Roofing Experts
          </h2>
          <p className="text-lg text-muted-foreground">
            We've built our reputation on quality workmanship, reliability, 
            and exceptional customer service.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Industry Accredited
              </h3>
              <p className="text-muted-foreground">
                Certified and approved by leading industry bodies
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

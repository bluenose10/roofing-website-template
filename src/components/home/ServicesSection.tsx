import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { businessConfig } from "@/config/business";
import { servicesContent } from "@/config/content";
import { getServices } from "@/utils/serviceType";

const services = getServices();

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      
      <div className="container-wide relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            {servicesContent.badge.replace('Southport', businessConfig.location.city)}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {servicesContent.headline}
          </h2>
          <p className="text-xl text-muted-foreground">
            {servicesContent.description.replace('Primer Group LTD', businessConfig.name).replace('Southport', businessConfig.location.city)}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white border-2 border-border rounded-2xl p-8 hover:border-[#F3CD45] hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-bold text-border group-hover:text-accent/30 transition-colors duration-300">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 bg-accent/15 border border-accent/30 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 group-hover:glow-accent transition-all duration-300">
                    <service.icon className="w-6 h-6 text-accent group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent opacity-80 group-hover:opacity-100 transition-all"
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

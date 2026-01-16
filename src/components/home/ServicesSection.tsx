import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Wrench, AlertTriangle, Search, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Industrial Roof Installation",
    description: "Complete roofing solutions for warehouses, factories, and large commercial buildings.",
    href: "/services#industrial",
  },
  {
    number: "02",
    icon: Layers,
    title: "Commercial Flat Roofing",
    description: "Expert flat roof systems including single-ply membranes, built-up, and modified bitumen.",
    href: "/services#flat-roof",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Roof Repair & Maintenance",
    description: "Proactive maintenance programs and rapid repairs to extend your roof's lifespan.",
    href: "/services#repair",
  },
  {
    number: "04",
    icon: AlertTriangle,
    title: "Emergency Leak Response",
    description: "24/7 emergency response for urgent roof leaks and storm damage repair.",
    href: "/services#emergency",
  },
  {
    number: "05",
    icon: Search,
    title: "Roof Inspections & Surveys",
    description: "Comprehensive roof assessments using drone technology and thermal imaging.",
    href: "/services#inspections",
  },
];

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
          className="max-w-2xl mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Commercial & Industrial Roofers Southport
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Commercial Roofing Contractors Southport
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            At Primer Group LTD, we deliver top-tier commercial and industrial roofing services designed to protect your business and maintain its professional appearance. Serving Southport and surrounding areas including Liverpool and Manchester, our proactive approach includes expert installation, scheduled maintenance, regular inspections, and prompt resolution of issues to extend your roof's lifespan while preventing costly repairs.
          </p>
          <p className="text-lg text-muted-foreground">
            Our skilled commercial and industrial roofing contractors provide a meticulous, efficient process that enhances durability, safety, and stunning curb appeal for your property.
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
              className={`group relative bg-white border-2 border-border rounded-2xl p-8 hover:border-[#F3CD45] hover:shadow-xl transition-all duration-300 overflow-hidden ${
                index === 0 ? "lg:row-span-2" : ""
              }`}
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

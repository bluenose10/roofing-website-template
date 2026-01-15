import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const categories = ["All", "Industrial", "Commercial", "Flat Roof", "Metal Roof"];

const projects = [
  {
    id: 1,
    image: project1,
    title: "Industrial Warehouse Complex",
    category: "Industrial",
    size: "45,000 sq ft",
    location: "Southport",
    material: "EPDM Membrane",
    duration: "6 weeks",
    description: "Complete roof replacement for a major distribution centre, including new insulation and drainage systems.",
  },
  {
    id: 2,
    image: project2,
    title: "Commercial Office Building",
    category: "Commercial",
    size: "28,000 sq ft",
    location: "Liverpool",
    material: "Standing Seam Metal",
    duration: "4 weeks",
    description: "Modern metal roofing installation with integrated skylights for natural lighting.",
  },
  {
    id: 3,
    image: project3,
    title: "Distribution Centre",
    category: "Flat Roof",
    size: "62,000 sq ft",
    location: "Merseyside",
    material: "TPO Single-Ply",
    duration: "8 weeks",
    description: "Large-scale flat roof installation with energy-efficient white membrane system.",
  },
  {
    id: 4,
    image: project1,
    title: "Manufacturing Plant Renovation",
    category: "Industrial",
    size: "38,000 sq ft",
    location: "Formby",
    material: "Built-Up Roofing",
    duration: "5 weeks",
    description: "Comprehensive roof overhaul including structural repairs and vapor barriers.",
  },
  {
    id: 5,
    image: project2,
    title: "Retail Park Development",
    category: "Commercial",
    size: "52,000 sq ft",
    location: "Southport",
    material: "Metal Cladding",
    duration: "7 weeks",
    description: "Multi-unit retail development with custom metal roofing and integrated guttering.",
  },
  {
    id: 6,
    image: project3,
    title: "Agricultural Storage Facility",
    category: "Metal Roof",
    size: "35,000 sq ft",
    location: "Ormskirk",
    material: "Corrugated Metal",
    duration: "3 weeks",
    description: "Durable metal roof installation designed for agricultural environment.",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-display-sm font-bold text-primary-foreground mb-6">
              Featured Projects
            </h1>
            <p className="text-lg text-white/80">
              Explore our portfolio of commercial roofing projects across Southport 
              and Merseyside. Each project showcases our commitment to quality and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-background border-b border-border sticky top-[73px] z-30">
        <div className="container-wide py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-medium text-foreground ml-1">{project.size}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium text-foreground ml-1">{project.duration}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium text-foreground ml-1">{project.location}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Material:</span>
                        <span className="font-medium text-foreground ml-1">{project.material}</span>
                      </div>
                    </div>

                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

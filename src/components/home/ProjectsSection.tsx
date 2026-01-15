import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Industrial Warehouse Complex",
    category: "Industrial",
    size: "45,000 sq ft",
    location: "Southport",
  },
  {
    id: 2,
    image: project2,
    title: "Commercial Office Building",
    category: "Commercial",
    size: "28,000 sq ft",
    location: "Liverpool",
  },
  {
    id: 3,
    image: project3,
    title: "Distribution Centre",
    category: "Flat Roof",
    size: "62,000 sq ft",
    location: "Merseyside",
  },
];

export function ProjectsSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Featured Projects
            </span>
            <h2 className="text-heading text-primary-foreground">
              Delivering Excellence Across Merseyside
            </h2>
          </div>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span>{project.size}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <Link
                to={`/projects/${project.id}`}
                className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <span className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Project
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/config/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent) / 0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted Across <span className="text-gradient">Merseyside</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Over 35 years of delivering exceptional commercial roofing solutions. Here's what our clients say about
            working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">
                <Quote className="w-5 h-5 text-accent-foreground" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white border-2 border-border rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {["DT", "SM", "JO", "HP"].map((initials, i) => (
                <div
                  key={initials}
                  className="w-8 h-8 bg-accent rounded-full border-2 border-white flex items-center justify-center text-accent-foreground text-xs font-bold"
                >
                  {initials}
                </div>
              ))}
            </div>

            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

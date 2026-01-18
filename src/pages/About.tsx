import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Users, Award, Shield, Clock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";
import { businessConfig } from "@/config/business";
import { aboutContent } from "@/config/content";
import { getServiceTypeText } from "@/utils/serviceType";

const timeline = aboutContent.timeline;

const valueIcons: Record<string, any> = {
  "Quality Craftsmanship": Target,
  "Precision": Target,
  "Respect for Your Property": Shield,
  "Safety First": Shield,
  "Honest & Reliable": Clock,
  "Reliability": Clock,
  "Transparent Pricing": Eye,
  "Transparency": Eye,
};

const values = aboutContent.values.map(value => ({
  icon: valueIcons[value.title] || Target,
  title: value.title,
  description: value.description,
}));

const team = [
  { name: "Managing Director", role: "Leadership & Strategy", experience: "35+ years" },
  { name: "Operations Manager", role: "Project Coordination", experience: "18+ years" },
  { name: "Lead Surveyor", role: "Inspections & Assessments", experience: "15+ years" },
  { name: "Site Foreman", role: "On-Site Management", experience: "20+ years" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={`${getServiceTypeText()} roofing specialists`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
        </div>

        <div className="container-wide relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {businessConfig.branding.tagline.replace('[Your Tagline]', 'Built on Quality, Driven by Excellence')}
            </h1>
            <p className="text-lg text-white/80">
              Professional {getServiceTypeText().toLowerCase()} roofing specialists serving {businessConfig.location.city} and {businessConfig.location.region} since {businessConfig.foundingYear}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-border rounded-xl p-8"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional {getServiceTypeText().toLowerCase()} roofing solutions that protect your property, enhance value, and exceed expectations through skilled craftsmanship and reliable service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-border rounded-xl p-8"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be {businessConfig.location.region}'s most trusted {getServiceTypeText().toLowerCase()} roofing specialists, setting the standard for quality workmanship and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">Our Journey</span>
            <h2 className="text-heading text-foreground">35+ Years of Excellence</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white border-2 border-border rounded-xl p-6">
                      <span className="text-accent font-bold text-2xl">{item.year}</span>
                      <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full flex-shrink-0 hidden lg:block" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">Our Values</span>
            <h2 className="text-heading text-foreground">What Drives Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">Our Team</span>
            <h2 className="text-heading text-primary-foreground">Experienced Professionals</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-1">{member.name}</h3>
                <p className="text-white/70 text-sm mb-2">{member.role}</p>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                  {member.experience}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-[#F3CD45] rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <Award className="w-12 h-12 text-accent" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Industry Accredited</h3>
                  <p className="text-muted-foreground">Certified by leading industry bodies</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {aboutContent.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 px-4 py-2 bg-muted border border-border rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

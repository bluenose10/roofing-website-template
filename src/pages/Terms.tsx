import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-roofing.jpg";

const Terms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
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
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-white/80">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Primer Group LTD website and services, you accept and 
                agree to be bound by the terms and provision of this agreement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Primer Group LTD provides commercial roofing services including installation, 
                repair, maintenance, and inspection services. All work is subject to individual 
                quotation and contract terms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">3. Quotations</h2>
              <p className="text-muted-foreground leading-relaxed">
                All quotations are valid for 30 days from the date of issue unless otherwise 
                stated. Quotations are subject to site survey and may be adjusted based on 
                findings during inspection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border-2 border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">4. Warranty</h2>
              <p className="text-muted-foreground leading-relaxed">
                All work completed by Primer Group LTD is covered by our standard warranty. 
                Specific warranty terms will be outlined in individual project contracts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white border-2 border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">5. Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Primer Group LTD carries comprehensive public liability insurance. Specific 
                coverage details are available upon request.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white border-2 border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">6. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding these terms, please contact us at:<br /><br />
                <strong className="text-foreground">Primer Group LTD</strong><br />
                147 Hampton Road, Southport, Merseyside, PR8 5DJ<br />
                Phone: 01704 542122
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
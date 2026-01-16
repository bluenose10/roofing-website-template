import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-roofing.jpg";

const Privacy = () => {
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
              Privacy Policy
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
              <h2 className="text-xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when you request a quote, 
                fill out a contact form, or communicate with us via phone, email, or WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and respond 
                to your comments and questions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not share your personal information with third parties except as described 
                in this policy or with your consent. We may share information with service providers 
                who perform services on our behalf.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border-2 border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable measures to help protect your personal information from loss, 
                theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white border-2 border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:<br /><br />
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

export default Privacy;
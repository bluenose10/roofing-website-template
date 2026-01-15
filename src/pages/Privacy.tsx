import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="bg-primary pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/80">Last updated: January 2025</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6">
              We collect information you provide directly to us, such as when you request a quote, 
              fill out a contact form, or communicate with us via phone, email, or WhatsApp.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              process transactions, send you technical notices and support messages, and respond 
              to your comments and questions.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-6">
              We do not share your personal information with third parties except as described 
              in this policy or with your consent. We may share information with service providers 
              who perform services on our behalf.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We take reasonable measures to help protect your personal information from loss, 
              theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <strong>Primer Group LTD</strong><br />
              147 Hampton Road, Southport, Merseyside, PR8 5DJ<br />
              Email: info@primergroup.co.uk
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

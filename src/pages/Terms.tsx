import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="bg-primary pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-white/80">Last updated: January 2025</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using the Primer Group LTD website and services, you accept and 
              agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
            <p className="text-muted-foreground mb-6">
              Primer Group LTD provides commercial roofing services including installation, 
              repair, maintenance, and inspection services. All work is subject to individual 
              quotation and contract terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">3. Quotations</h2>
            <p className="text-muted-foreground mb-6">
              All quotations are valid for 30 days from the date of issue unless otherwise 
              stated. Quotations are subject to site survey and may be adjusted based on 
              findings during inspection.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">4. Warranty</h2>
            <p className="text-muted-foreground mb-6">
              All work completed by Primer Group LTD is covered by our standard warranty. 
              Specific warranty terms will be outlined in individual project contracts.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">5. Liability</h2>
            <p className="text-muted-foreground mb-6">
              Primer Group LTD carries comprehensive public liability insurance. Specific 
              coverage details are available upon request.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact</h2>
            <p className="text-muted-foreground">
              For any questions regarding these terms, please contact us at:<br />
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

export default Terms;

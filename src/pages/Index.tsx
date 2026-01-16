import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection, faqs } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Commercial Roofing Southport",
    description:
      "Professional commercial and industrial roofing contractors Southport. Specialists in flat roofing, emergency repairs, and complete roof replacements.",
    url: "https://id-preview--c25d345b-d615-44dc-b942-f9f22213b38c.lovable.app",
    telephone: "+447838121592",
    areaServed: [
      { "@type": "City", name: "Liverpool" },
      { "@type": "City", name: "Southport" },
      { "@type": "City", name: "St Helens" },
      { "@type": "City", name: "Knowsley" },
      { "@type": "City", name: "Sefton" },
      { "@type": "AdministrativeArea", name: "Merseyside" },
      { "@type": "AdministrativeArea", name: "Lancashire" },
      { "@type": "AdministrativeArea", name: "Cheshire" },
    ],
    serviceType: [
      "Commercial Flat Roofing",
      "Industrial Roof Repairs",
      "Emergency Roofing Services",
      "Roof Maintenance",
      "EPDM Roofing",
      "TPO Roofing",
      "GRP Fibreglass Roofing",
    ],
    priceRange: "£45-£120 per m²",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "500",
    },
  };

  return (
    <Layout>
      {/* Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

      {/* Hidden Netlify form for detection */}
      <form hidden method="POST" name="contact" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
        <input type="text" name="projectType" />
        <textarea name="message"></textarea>
      </form>

      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TrustSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

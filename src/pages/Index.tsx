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
    "@id": "https://primergroup.co.uk/#organization",
    name: "Primer Group LTD",
    alternateName: "Primer Group",
    legalName: "Primer Group Limited",
    description:
      "Commercial and industrial roofing contractors serving Southport and Merseyside. Specialists in flat roofing, emergency repairs, and complete roof replacements.",
    url: "https://primergroup.co.uk",
    telephone: "+447838121592",
    email: "info@primergroup.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "147 Hampton Road",
      addressLocality: "Southport",
      addressRegion: "Merseyside",
      postalCode: "PR8 5DJ",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.6476",
      longitude: "-3.0069",
    },
    areaServed: [
      { "@type": "City", name: "Southport", "@id": "https://en.wikipedia.org/wiki/Southport" },
      { "@type": "City", name: "Liverpool", "@id": "https://en.wikipedia.org/wiki/Liverpool" },
      { "@type": "City", name: "Formby" },
      { "@type": "City", name: "Ormskirk" },
      { "@type": "City", name: "St Helens" },
      { "@type": "City", name: "Knowsley" },
      { "@type": "City", name: "Sefton" },
      { "@type": "AdministrativeArea", name: "Merseyside" },
      { "@type": "AdministrativeArea", name: "Lancashire" },
      { "@type": "AdministrativeArea", name: "Cheshire" },
    ],
    serviceType: [
      "Commercial Roofing",
      "Industrial Roofing",
      "Commercial Flat Roofing",
      "Industrial Roof Repairs",
      "Emergency Roofing Services",
      "Roof Maintenance",
      "Roof Inspections",
      "EPDM Roofing",
      "TPO Roofing",
      "GRP Fibreglass Roofing",
      "Roof Replacement",
      "Flat Roof Installation",
    ],
    priceRange: "££",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Flat Roofing",
            description: "Professional flat roofing installation and repair for commercial properties",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Roof Repairs",
            description: "24/7 emergency roofing repair services across Merseyside",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Inspections",
            description: "Comprehensive roof inspection and maintenance services",
          },
        },
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "500",
    },
    foundingDate: "1989",
    slogan: "Precision Commercial Roofing",
    knowsAbout: [
      "Commercial Roofing",
      "Industrial Roofing",
      "Flat Roofing Systems",
      "EPDM Roofing",
      "TPO Roofing",
      "Emergency Roof Repairs",
      "Roof Maintenance",
    ],
  };

  return (
    <Layout>
      {/* Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

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

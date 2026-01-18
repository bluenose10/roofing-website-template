import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { TrustSection } from "@/components/home/TrustSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection, faqs } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { businessConfig } from "@/config/business";
import { getServicesDetailed } from "@/utils/serviceType";

const Index = () => {
  const detailedServices = getServicesDetailed();

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
    "@id": `${businessConfig.website.url}/#organization`,
    name: businessConfig.name,
    alternateName: businessConfig.alternateName,
    legalName: businessConfig.legalName,
    description: businessConfig.description,
    url: businessConfig.website.url,
    telephone: `+${businessConfig.contact.whatsapp}`,
    email: businessConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessConfig.location.streetAddress,
      addressLocality: businessConfig.location.city,
      addressRegion: businessConfig.location.region,
      postalCode: businessConfig.location.postalCode,
      addressCountry: businessConfig.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessConfig.location.coordinates.latitude,
      longitude: businessConfig.location.coordinates.longitude,
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
    serviceType: detailedServices.map(service => service.title),
    priceRange: "££",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: detailedServices.slice(0, 3).map(service => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
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
    foundingDate: businessConfig.foundingYear.toString(),
    slogan: businessConfig.branding.tagline,
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

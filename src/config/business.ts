/**
 * Business Configuration
 *
 * This file contains all business-specific information that should be customized
 * when cloning this template for a new roofing company.
 *
 * TO CUSTOMIZE: Update all values in this file with your business details.
 */

export const businessConfig = {
  // Business Identity
  name: "Primer Group",
  legalName: "Primer Group Limited",
  alternateName: "Primer Group LTD",

  // Service Type: "commercial" or "residential"
  serviceType: "commercial" as "commercial" | "residential",

  // Location Details
  location: {
    city: "Southport",
    region: "Merseyside",
    streetAddress: "147 Hampton Road",
    postalCode: "PR8 5DJ",
    country: "GB",
    countryName: "United Kingdom",
    coordinates: {
      latitude: "53.6476",
      longitude: "-3.0069"
    },
    // Service area description
    serviceArea: "Southport and Merseyside",
    serviceRadius: "50-mile radius of Liverpool"
  },

  // Contact Information
  contact: {
    phone: "01704542122",
    phoneDisplay: "01704 542 122",
    mobile: "07838121592",
    mobileDisplay: "07838 121 592",
    whatsapp: "447838121592", // Include country code, no + or spaces
    email: "info@primergroup.co.uk"
  },

  // Website & Social Media
  website: {
    url: "https://primergroup.co.uk",
    domain: "primergroup.co.uk"
  },

  social: {
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: ""
  },

  // Branding
  branding: {
    tagline: "Built on Quality, Driven by Excellence",
    primaryColor: "gold", // matches Tailwind accent color
    logoText: "Primer Group Ltd" // Text shown in header logo
  },

  // Company Details
  foundingYear: 2009,
  emergencyResponseTime: "2-4 hour emergency response",

  // Operating Hours (for schema.org)
  operatingHours: [
    "Monday-Friday: 8:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 4:00 PM",
    "Sunday: Closed"
  ],

  // Business Description (for SEO)
  description: "Professional commercial roofing solutions for businesses across Southport and Merseyside. Expert installation, maintenance, and emergency repair services.",

  // Keywords for SEO
  keywords: "commercial roofers Southport, industrial roofing Merseyside, flat roof repair Southport, commercial roofing contractors, roof installation",
} as const;

// Type exports for TypeScript
export type ServiceType = typeof businessConfig.serviceType;

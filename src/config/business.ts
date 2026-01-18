/**
 * Business Configuration Template
 *
 * This is a TEMPLATE configuration file for a roofing company website.
 * All values in square brackets [ ] should be replaced with your actual business details.
 *
 * TO CUSTOMIZE: Replace all placeholder text with your company information.
 */

export const businessConfig = {
  // Business Identity
  name: "[Your Business Name]",
  legalName: "[Your Business Name] Ltd",
  alternateName: "[Your Company]",

  // Service Type: "commercial" or "residential"
  serviceType: "residential" as "commercial" | "residential",

  // Location Details
  location: {
    city: "[Your City]",
    region: "[Your Region]",
    streetAddress: "[Your Street Address]",
    postalCode: "[Your Postcode]",
    country: "GB",
    countryName: "United Kingdom",
    coordinates: {
      latitude: "51.5074",  // London coordinates as placeholder
      longitude: "-0.1278"
    },
    // Service area description
    serviceArea: "[Your City] and surrounding areas",
    serviceRadius: "30-mile radius"
  },

  // Contact Information
  contact: {
    phone: "01234567890",
    phoneDisplay: "01234 567 890",
    mobile: "07700900123",
    mobileDisplay: "07700 900 123",
    whatsapp: "447700900123", // Include country code, no + or spaces
    email: "info@yourcompany.co.uk"
  },

  // Website & Social Media
  website: {
    url: "https://yourcompany.co.uk",
    domain: "yourcompany.co.uk"
  },

  social: {
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: ""
  },

  // Branding
  branding: {
    tagline: "[Your Tagline]",
    primaryColor: "gold", // matches Tailwind accent color
    logoText: "[Your Business Name]" // Text shown in header logo
  },

  // Company Details
  foundingYear: 2010,
  emergencyResponseTime: "2-4 hour emergency response",

  // Operating Hours (for schema.org)
  operatingHours: [
    "Monday-Friday: 8:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 4:00 PM",
    "Sunday: Closed"
  ],

  // Business Description (for SEO)
  description: "Professional residential roofing services for homeowners. Expert roof installations, repairs, and maintenance for homes across [Your Area].",

  // Keywords for SEO
  keywords: "residential roofers, home roofing, roof replacement, roof repairs, new roof installation, [your city] roofers, roofing contractors",
} as const;

// Type exports for TypeScript
export type ServiceType = typeof businessConfig.serviceType;

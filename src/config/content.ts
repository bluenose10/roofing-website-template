/**
 * Content Configuration
 *
 * This file contains all marketing content, services, testimonials, FAQs, etc.
 * Update this file to customize the website content for your roofing business.
 *
 * TO CUSTOMIZE: Update all text content, services, testimonials, and FAQs below.
 */

import { Building2, Wrench, AlertTriangle, Search, Layers, Droplets, Home, Hammer, Shield, Sparkles } from "lucide-react";

// Commercial Services
export const commercialServices = [
  {
    number: "01",
    icon: Building2,
    title: "Industrial Roof Installation",
    description: "Complete roofing solutions for warehouses, factories, and large commercial buildings.",
    href: "/services#industrial",
  },
  {
    number: "02",
    icon: Layers,
    title: "Commercial Flat Roofing",
    description: "Expert flat roof systems including single-ply membranes, built-up, and modified bitumen.",
    href: "/services#flat-roof",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Roof Repair & Maintenance",
    description: "Proactive maintenance programs and rapid repairs to extend your roof's lifespan.",
    href: "/services#repair",
  },
  {
    number: "04",
    icon: AlertTriangle,
    title: "Emergency Leak Response",
    description: "24/7 emergency response for urgent roof leaks and storm damage repair.",
    href: "/services#emergency",
  },
  {
    number: "05",
    icon: Search,
    title: "Roof Inspections & Surveys",
    description: "Comprehensive roof assessments using drone technology and thermal imaging.",
    href: "/services#inspections",
  },
  {
    number: "06",
    icon: Droplets,
    title: "Gutter & Drainage Systems",
    description: "Commercial gutter installation, drainage solutions, and preventative maintenance.",
    href: "/services#gutters",
  },
];

// Residential Services
export const residentialServices = [
  {
    number: "01",
    icon: Home,
    title: "New Roof Installation",
    description: "Complete roof replacement with tiles, slates, or shingles for your home.",
    href: "/services#installation",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Roof Repairs",
    description: "Fast and reliable repairs for damaged tiles, leaks, and storm damage.",
    href: "/services#repairs",
  },
  {
    number: "03",
    icon: Shield,
    title: "Re-Roofing Services",
    description: "Complete roof replacement to restore your home's protection and curb appeal.",
    href: "/services#re-roofing",
  },
  {
    number: "04",
    icon: AlertTriangle,
    title: "Emergency Repairs",
    description: "24/7 emergency response for urgent leaks and storm damage.",
    href: "/services#emergency",
  },
  {
    number: "05",
    icon: Search,
    title: "Roof Inspections",
    description: "Thorough assessments to identify issues before they become costly problems.",
    href: "/services#inspections",
  },
  {
    number: "06",
    icon: Droplets,
    title: "Guttering Services",
    description: "Gutter installation, repairs, and cleaning to protect your home from water damage.",
    href: "/services#gutters",
  },
];

// Testimonials
export const testimonials = [
  {
    name: "Sarah & John M.",
    role: "Homeowner",
    company: "[Your City]",
    content:
      "Our entire roof was replaced in just 5 days with minimal disruption to our family. The team was professional, cleaned up perfectly each day, and the quality is outstanding. Highly recommend!",
    rating: 5,
  },
  {
    name: "The Thompson Family",
    role: "Homeowner",
    company: "[Your Area] Resident",
    content:
      "Emergency leak during a storm - they had someone out within 2 hours on a Saturday evening. Temporary repair done that night, permanent fix completed the following week. Fantastic service when we needed it most.",
    rating: 5,
  },
  {
    name: "Michael R.",
    role: "Homeowner",
    company: "[Your Region]",
    content:
      "Complete re-roof on our Victorian terrace. They matched the original slate perfectly and were very respectful of our period property. The craftsmanship is excellent and the price was fair.",
    rating: 5,
  },
  {
    name: "Emma & David L.",
    role: "Homeowner",
    company: "[Your City]",
    content:
      "From quote to completion, the whole process was smooth and professional. They answered all our questions, stayed on budget, and our new roof looks amazing. Peace of mind knowing it's guaranteed for 20 years!",
    rating: 5,
  },
];

// FAQs
export const faqs = [
  {
    question: "What types of roofing materials do you work with?",
    answer: "We work with all types of residential roofing materials including concrete and clay tiles, natural slate, synthetic slate, asphalt shingles, and flat roof systems (EPDM, fibreglass GRP). We can advise on the best material for your home's style, budget, and location."
  },
  {
    question: "How long does a typical roof replacement take?",
    answer: "Most residential roof replacements take 3-7 days depending on the size and complexity of your roof. A standard 3-bed semi-detached home typically takes 4-5 days. We'll provide a clear timeline before starting and keep you informed throughout the project."
  },
  {
    question: "Do you offer emergency roof repair services?",
    answer: "Yes, we provide 24/7 emergency response for urgent leaks and storm damage. Our rapid response team can typically attend within 2-4 hours to make your property safe and watertight. We'll then schedule permanent repairs at your convenience."
  },
  {
    question: "What areas do you cover?",
    answer: "We serve [Your City] and surrounding areas within a 30-mile radius. This includes [list nearby towns/areas]. Contact us to confirm we cover your area—we're often happy to travel further for larger projects."
  },
  {
    question: "How often should my roof be inspected?",
    answer: "We recommend professional roof inspections every 2-3 years, or after severe weather events. Regular inspections can identify minor issues like damaged tiles or worn flashing before they lead to leaks and costly interior damage."
  },
  {
    question: "What warranties do you offer on roofing work?",
    answer: "All our installations come with comprehensive warranties. Our workmanship is guaranteed for 10-20 years depending on the materials used, and manufacturer warranties on materials range from 15-50 years. We're fully insured with £5M public liability cover."
  },
  {
    question: "Will you be working on my roof while I'm at home?",
    answer: "Yes, most of our work is done while homeowners are present. We work efficiently, maintain a clean and safe site, and are respectful of your property. We'll discuss access requirements and working hours before starting, and you're welcome to continue your daily routine."
  },
  {
    question: "How much does a new roof cost?",
    answer: "Costs vary depending on roof size, materials chosen, and complexity of the work. As a guide, a complete roof replacement on a typical 3-bed home ranges from £5,000-£12,000. We provide free, no-obligation quotes with transparent pricing and flexible payment options."
  }
];

// About Page Content
export const aboutContent = {
  timeline: [
    {
      year: 2010,
      title: "Foundation",
      description: "[Your Business Name] established in [Your Area], beginning by serving local homeowners and building a reputation for quality workmanship and reliable service."
    },
    {
      year: 2014,
      title: "Growth",
      description: "Expanded operations across [Your Region], growing our team of skilled roofers and helping hundreds more homeowners protect their properties."
    },
    {
      year: 2018,
      title: "Innovation",
      description: "Invested in modern roofing materials and techniques. Became certified installers for premium roofing systems and expanded our range of services."
    },
    {
      year: 2024,
      title: "Today",
      description: "One of [Your City]'s most trusted residential roofing specialists, protecting over 500 homes with expert installations, repairs, and maintenance."
    }
  ],

  values: [
    {
      title: "Quality Craftsmanship",
      description: "Every roof we work on receives meticulous attention to detail. We use premium materials and proven techniques to ensure lasting protection for your home."
    },
    {
      title: "Respect for Your Property",
      description: "We treat your home with care, maintaining a clean work site, protecting your property, and minimizing disruption to your daily life."
    },
    {
      title: "Honest & Reliable",
      description: "We show up on time, complete work as promised, and stand behind our guarantees. Our warranties give you peace of mind for years to come."
    },
    {
      title: "Transparent Pricing",
      description: "You'll receive detailed quotes with no hidden costs, clear explanations of the work needed, and honest advice—even if it means recommending a simple repair."
    }
  ],

  certifications: [
    "Certified Roofing Installers",
    "CSCS Certified",
    "Safe Contractor",
    "CompetentRoofer",
    "£5M Public Liability Insurance",
    "TrustMark Registered"
  ]
};

// Hero Section Content
export const heroContent = {
  headlines: ["QUALITY", "[YOUR BUSINESS]", "RESIDENTIAL ROOFING"],
  subheadline: "[Your City]'s Trusted Residential Roofing Specialists",
  description: "Professional residential roofing services for homeowners. Expert roof installations, repairs, and maintenance with guaranteed quality workmanship and full insurance.",
  stats: [
    { value: "500+", label: "Homes Protected" },
    { value: "[X]+", label: "Years Experience" },
    { value: "24/7", label: "Emergency Response" }
  ]
};

// Services Section Content
export const servicesContent = {
  badge: "Residential Roofers [Your City]",
  headline: "Our Residential Roofing Services",
  description: "Professional residential roofing services for homeowners across [Your City] and surrounding areas. From new roof installations to emergency repairs and gutter systems, we protect your home with expert craftsmanship and reliable service."
};

// Detailed Commercial Services for Services Page
export const commercialServicesDetailed = [
  {
    id: "industrial",
    title: "Industrial Roof Installation",
    description: "Complete roofing solutions for warehouses, factories, and large commercial buildings. We specialize in handling complex industrial projects of any scale.",
    features: [
      "Built-up roofing systems (BUR)",
      "Standing seam metal roofing",
      "Single-ply membrane systems",
      "Green roofing options",
    ],
    timeline: "2-8 weeks",
  },
  {
    id: "flat-roof",
    title: "Commercial Flat Roofing",
    description: "Expert flat roof systems designed for commercial buildings. We work with premium materials to ensure longevity and performance.",
    features: [
      "EPDM rubber roofing",
      "TPO membrane systems",
      "PVC roofing solutions",
      "Modified bitumen",
    ],
    timeline: "1-4 weeks",
  },
  {
    id: "repair",
    title: "Roof Repair & Maintenance",
    description: "Proactive maintenance programs and rapid repairs to extend your roof's lifespan and prevent costly damage.",
    features: [
      "Regular maintenance programs",
      "Leak detection and repair",
      "Flashing and seam repairs",
      "Drainage improvements",
    ],
    timeline: "Same day - 1 week",
  },
  {
    id: "emergency",
    title: "Emergency Leak Response",
    description: "24/7 emergency response for urgent roof leaks and storm damage. We're here when you need us most.",
    features: [
      "24/7 emergency callout",
      "Rapid temporary repairs",
      "Storm damage assessment",
      "Insurance claim support",
    ],
    timeline: "2-4 hour response",
    urgent: true,
  },
  {
    id: "inspections",
    title: "Roof Inspections & Surveys",
    description: "Comprehensive roof assessments using the latest drone technology and thermal imaging to identify issues before they become problems.",
    features: [
      "Drone aerial surveys",
      "Thermal imaging analysis",
      "Core sampling and testing",
      "Detailed condition reports",
    ],
    timeline: "1-3 days",
  },
  {
    id: "gutters",
    title: "Gutter & Drainage Systems",
    description: "Professional gutter and drainage solutions for commercial properties. Proper water management is essential to protect your roof investment and building structure.",
    features: [
      "Commercial gutter installation",
      "Drainage system design",
      "Gutter cleaning & maintenance",
      "Downspout installation & repair",
    ],
    timeline: "1-2 weeks",
  },
];

// Detailed Residential Services for Services Page
export const residentialServicesDetailed = [
  {
    id: "installation",
    title: "New Roof Installation",
    description: "Complete roof installation for your home using premium materials. We work with tiles, slates, shingles, and modern flat roofing systems.",
    features: [
      "Concrete & clay tiles",
      "Natural slate roofing",
      "Asphalt shingles",
      "Flat roof systems (EPDM, GRP)",
    ],
    timeline: "3-7 days",
  },
  {
    id: "repairs",
    title: "Roof Repairs",
    description: "Fast and reliable repairs for all types of roof damage. From missing tiles to leaks, we fix it right the first time.",
    features: [
      "Tile & slate replacement",
      "Leak detection and repair",
      "Flashing and valley repairs",
      "Storm damage restoration",
    ],
    timeline: "Same day - 3 days",
  },
  {
    id: "re-roofing",
    title: "Complete Re-Roofing",
    description: "Full roof replacement to restore your home's protection and enhance curb appeal. We remove old roofing and install a brand new system.",
    features: [
      "Complete tear-off & removal",
      "New felt & battens",
      "Premium materials installed",
      "Full clean-up included",
    ],
    timeline: "4-8 days",
  },
  {
    id: "emergency",
    title: "Emergency Repairs",
    description: "24/7 emergency response for urgent roof problems. Storm damage, sudden leaks, or structural issues—we respond fast.",
    features: [
      "24/7 emergency callout",
      "Rapid temporary weatherproofing",
      "Storm damage assessment",
      "Insurance claim assistance",
    ],
    timeline: "2-4 hour response",
    urgent: true,
  },
  {
    id: "inspections",
    title: "Roof Inspections",
    description: "Comprehensive roof surveys to identify potential problems before they become expensive. Perfect before buying a home or as part of regular maintenance.",
    features: [
      "Detailed visual inspection",
      "Photographic evidence",
      "Written condition report",
      "Repair recommendations",
    ],
    timeline: "1-2 days",
  },
  {
    id: "gutters",
    title: "Guttering Services",
    description: "Professional gutter installation, repair, and cleaning services. Proper guttering protects your home from water damage and foundation issues.",
    features: [
      "uPVC gutter installation",
      "Gutter cleaning & unblocking",
      "Downpipe repairs",
      "Cast iron gutter restoration",
    ],
    timeline: "1-3 days",
  },
];

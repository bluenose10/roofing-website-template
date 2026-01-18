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
    name: "David Thompson",
    role: "Warehouse Manager",
    company: "Thompson Logistics, Southport",
    content:
      "Primer Group replaced the entire roof on our 50,000 sq ft warehouse. Professional team, minimal disruption to our operations, and completed ahead of schedule. Highly recommend.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Property Director",
    company: "Merseyside Retail Holdings",
    content:
      "We've used Primer Group for all our commercial properties across Merseyside for the past 8 years. Their maintenance program has saved us thousands in potential repairs.",
    rating: 5,
  },
  {
    name: "James O'Connor",
    role: "Factory Owner",
    company: "O'Connor Manufacturing, Liverpool",
    content:
      "Emergency leak on a Sunday morning - Primer Group had a team on-site within 2 hours. Temporary fix done same day, permanent repair completed that week. Exceptional service.",
    rating: 5,
  },
  {
    name: "Helen Price",
    role: "Facilities Manager",
    company: "North West Healthcare Trust",
    content:
      "Primer Group handled our hospital roof refurbishment with incredible attention to safety and cleanliness. Their team understood the sensitive nature of our environment.",
    rating: 5,
  },
];

// FAQs
export const faqs = [
  {
    question: "What types of commercial roofing systems do you install?",
    answer: "We specialise in flat roofing systems including EPDM rubber, TPO, PVC single-ply membranes, built-up felt roofing, GRP fibreglass, and liquid-applied waterproofing. We also install metal roofing, composite panels, and green roof systems for commercial and industrial properties."
  },
  {
    question: "How long does a commercial roof installation take?",
    answer: "Project timelines vary based on roof size and complexity. A typical 500m² flat roof replacement takes 1-2 weeks, while larger industrial projects may take 3-4 weeks. We provide detailed schedules upfront and work efficiently to minimise disruption to your operations."
  },
  {
    question: "Do you offer emergency roof repair services?",
    answer: "Yes, we provide 24/7 emergency response across Merseyside and the North West. Our rapid response team can typically attend within 2-4 hours for urgent leaks, storm damage, or structural concerns. Call us immediately if you have an emergency."
  },
  {
    question: "What areas do you cover in the North West?",
    answer: "We cover the entire Merseyside region including Liverpool, Wirral, St Helens, Knowsley, and Sefton. We also serve Greater Manchester, Lancashire, Cheshire, and surrounding areas within a 50-mile radius of Liverpool."
  },
  {
    question: "How often should a commercial roof be inspected?",
    answer: "We recommend professional inspections twice yearly—spring and autumn—plus after severe weather events. Regular inspections identify minor issues before they become costly repairs. We offer maintenance contracts with scheduled inspections and priority response."
  },
  {
    question: "What warranties do you offer on roofing work?",
    answer: "All our installations come with comprehensive warranties. Workmanship is guaranteed for 10-20 years depending on the system, and material warranties from manufacturers range from 15-30 years. We're fully insured and stand behind every project we complete."
  },
  {
    question: "Can you work on occupied buildings without disrupting operations?",
    answer: "Absolutely. We regularly work on occupied offices, warehouses, retail units, and industrial facilities. We plan around your business hours, use quiet working methods where needed, and maintain strict health and safety protocols to ensure minimal disruption."
  },
  {
    question: "What is the cost of a new commercial roof?",
    answer: "Costs depend on roof size, chosen system, access requirements, and existing roof condition. As a guide, commercial flat roofing typically ranges from £45-£120 per m². We provide free, no-obligation surveys and detailed quotes with transparent pricing—no hidden costs."
  }
];

// About Page Content
export const aboutContent = {
  timeline: [
    {
      year: 2009,
      title: "Foundation",
      description: "Primer Group LTD established in Southport, beginning with small commercial projects and building a reputation for quality workmanship."
    },
    {
      year: 2012,
      title: "Growth",
      description: "Expanded operations across Merseyside and the North West, adding industrial roofing and large-scale projects to our portfolio."
    },
    {
      year: 2016,
      title: "Innovation",
      description: "Invested in drone technology and thermal imaging for advanced roof inspections. Became NFRC certified members."
    },
    {
      year: 2023,
      title: "Today",
      description: "One of Southport's most trusted commercial roofing contractors, managing projects from small repairs to major industrial installations."
    }
  ],

  values: [
    {
      title: "Precision",
      description: "Every roof we install is measured, planned, and executed with meticulous attention to detail. We don't cut corners."
    },
    {
      title: "Safety First",
      description: "All our operatives are CSCS certified. We maintain rigorous safety protocols on every site, protecting both our team and your premises."
    },
    {
      title: "Reliability",
      description: "We show up on time, complete work as scheduled, and stand behind our guarantees. Our 10-20 year warranties aren't just promises—they're commitments."
    },
    {
      title: "Transparency",
      description: "You'll receive detailed quotes with no hidden costs, regular project updates, and honest advice—even if it means recommending a repair instead of replacement."
    }
  ],

  certifications: [
    "NFRC Member",
    "CSCS Certified",
    "Safe Contractor",
    "CompetentRoofer",
    "£5M Public Liability Insurance",
    "Constructionline Gold"
  ]
};

// Hero Section Content
export const heroContent = {
  headlines: ["PRECISION", "PRIMER GROUP", "COMMERCIAL ROOFING"],
  subheadline: "Southport's Trusted Commercial Roofing Specialists",
  description: "Over 15 years' experience delivering industrial roof installations, emergency repairs, and maintenance across Merseyside. NFRC members with £5M liability cover.",
  stats: [
    { value: "500+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Emergency Response" }
  ]
};

// Services Section Content
export const servicesContent = {
  badge: "Commercial & Industrial Roofers Southport",
  headline: "Our Commercial Roofing Services",
  description: "Primer Group LTD delivers comprehensive commercial and industrial roofing solutions across Southport, Liverpool, and Manchester. From new installations to emergency repairs and gutter systems, our expert contractors protect your investment with quality workmanship and reliable service."
};

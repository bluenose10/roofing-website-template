# Roofing Website Template Setup Guide

This template can be easily customized for any roofing business (commercial or residential) in any location. Follow this guide to create a branded website in 15-30 minutes.

## Quick Start

1. Clone this repository
2. Update `src/config/business.ts` with your business details
3. Update `src/config/content.ts` with your marketing content
4. Replace images in `src/assets/` with your photos
5. Deploy to Netlify

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/primer-build.git my-roofing-site
cd my-roofing-site
npm install
```

---

## Step 2: Configure Business Details

Open `src/config/business.ts` and update all values:

### Business Identity
```typescript
name: "Your Company Name",
legalName: "Your Company Legal Name Ltd",
alternateName: "Your Brand Name",
```

### Service Type
Choose `"commercial"` or `"residential"`:
```typescript
serviceType: "residential", // Change this to switch between commercial/residential
```

This single setting automatically:
- Changes "Commercial" to "Residential" throughout the site
- Updates service descriptions and offerings
- Adjusts WhatsApp messages and CTAs
- Modifies SEO content

### Location Details
```typescript
location: {
  city: "Manchester",           // Your city
  region: "Greater Manchester", // Your region/county
  streetAddress: "123 Main Street",
  postalCode: "M1 1AA",
  country: "GB",
  coordinates: {
    latitude: "53.4808",        // Get from Google Maps
    longitude: "-2.2426"
  },
  serviceArea: "Manchester and Greater Manchester",
  serviceRadius: "30-mile radius of Manchester"
}
```

**Finding Coordinates:**
1. Go to Google Maps
2. Right-click your business address
3. Click the coordinates to copy them

### Contact Information
```typescript
contact: {
  phone: "01234567890",
  phoneDisplay: "01234 567 890",     // How you want it displayed
  mobile: "07123456789",
  mobileDisplay: "07123 456 789",
  whatsapp: "447123456789",          // Include country code (44 for UK)
  email: "info@yourcompany.co.uk"
}
```

### Website & Social Media
```typescript
website: {
  url: "https://yourcompany.co.uk",
  domain: "yourcompany.co.uk"
},
social: {
  facebook: "https://facebook.com/yourpage",
  twitter: "",
  linkedin: "",
  instagram: ""
}
```

### Branding
```typescript
branding: {
  tagline: "Your Company Tagline",
  primaryColor: "gold",              // Matches Tailwind accent color
  logoText: "Your Company Ltd"       // Text shown in header
}
```

### Company Details
```typescript
foundingYear: 2010,
emergencyResponseTime: "1-2 hour emergency response",
operatingHours: [
  "Monday-Friday: 8:00 AM - 6:00 PM",
  "Saturday: 9:00 AM - 2:00 PM",
  "Sunday: Closed"
],
description: "Your company description for SEO",
keywords: "your, seo, keywords, here"
```

---

## Step 3: Customize Content

Open `src/config/content.ts` and update:

### Services

The template includes both commercial and residential service arrays. When you set `serviceType` in `business.ts`, the correct services are automatically shown.

**For Commercial Roofing:**
```typescript
export const commercialServices = [
  {
    number: "01",
    icon: Building2,
    title: "Industrial Roof Installation",
    description: "Complete roofing solutions for warehouses...",
    href: "/services#industrial",
  },
  // ... more services
];
```

**For Residential Roofing:**
```typescript
export const residentialServices = [
  {
    number: "01",
    icon: Home,
    title: "New Roof Installation",
    description: "Complete roof replacement with tiles...",
    href: "/services#installation",
  },
  // ... more services
];
```

**Customize each service:**
- Change titles and descriptions
- Update the `href` anchor links
- Icons are from [lucide-react](https://lucide.dev/)

### Testimonials
```typescript
export const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner",
    company: "Manchester",
    content: "Excellent service...",
    rating: 5,
  },
  // Add 3-4 real testimonials
];
```

### FAQs
```typescript
export const faqs = [
  {
    question: "What types of roofing do you install?",
    answer: "We install all types including..."
  },
  // Add 6-8 frequently asked questions
];
```

### About Page Content
```typescript
export const aboutContent = {
  timeline: [
    {
      year: 2010,
      title: "Foundation",
      description: "Company started..."
    },
    // Add 3-4 key milestones
  ],
  values: [
    {
      title: "Quality",
      description: "We never compromise..."
    },
    // Add 4 core values
  ],
  certifications: [
    "TrustMark Approved",
    "Checkatrade Member",
    // Add your certifications
  ]
};
```

### Hero Section
```typescript
export const heroContent = {
  headlines: ["QUALITY", "YOUR COMPANY", "ROOFING"],
  subheadline: "Manchester's Trusted Roofing Specialists",
  description: "Over 10 years' experience...",
  stats: [
    { value: "200+", label: "Projects Completed" },
    { value: "10+", label: "Years Experience" },
    { value: "24/7", label: "Emergency Response" }
  ]
};
```

---

## Step 4: Replace Images

### Required Images

1. **Hero Image** (`src/assets/hero-roofing.jpg`)
   - Recommended size: 1920x1080px
   - Your best roofing project or team photo
   - Will be used on homepage hero section

2. **Project Images** (optional, update in `src/assets/`)
   - Add your completed project photos
   - Update references in project components

3. **Favicon** (`public/commercial-roofers-southport.jpeg`)
   - 512x512px square logo
   - Rename to match your company

### Image Guidelines
- Use high-quality, professional photos
- Optimize for web (compress images)
- Show your actual work, not stock photos
- Include team photos if possible

---

## Step 5: Update Netlify Form

The contact form is configured for Netlify. The hidden form in `index.html` is already set up correctly. After deployment:

1. Go to Netlify Dashboard → Your Site → Forms
2. Enable form detection (if not already enabled)
3. Check that the "contact" form appears
4. Test by submitting the form
5. Set up email notifications in Netlify

---

## Step 6: Test Locally

```bash
npm run dev
```

Open http://localhost:5173 and check:

- [ ] Company name appears in header and footer
- [ ] Contact details are correct everywhere
- [ ] Location (city name) is updated throughout
- [ ] Service type (commercial/residential) is correct
- [ ] All links work
- [ ] WhatsApp button opens with correct number
- [ ] Phone numbers are clickable
- [ ] Services show correct offerings
- [ ] Testimonials show your content
- [ ] FAQs are relevant
- [ ] About page has your timeline and values

---

## Step 7: Deploy to Netlify

### First Time Setup

1. Push your code to GitHub:
```bash
git add .
git commit -m "Customize for [Your Company Name]"
git push origin main
```

2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Custom Domain

1. In Netlify, go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow instructions to:
   - Add domain
   - Configure DNS (usually add A record and CNAME)
   - Enable HTTPS (automatic with Netlify)

---

## Customization Tips

### Changing Colors

The template uses gold as the accent color. To change:

1. Open `tailwind.config.ts`
2. Update the `accent` color:
```typescript
accent: {
  DEFAULT: "hsl(var(--accent))",
  foreground: "hsl(var(--accent-foreground))",
}
```

3. Update CSS variables in `src/index.css`:
```css
--accent: 38 92% 50%; /* HSL values for your color */
```

### Adding Pages

1. Create new file in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`:
```typescript
<Route path="/your-page" element={<YourPage />} />
```
3. Add to navigation in Header.tsx

### Service Type Flexibility

The `getServices()` function in `src/utils/serviceType.ts` automatically returns the correct services based on your `serviceType` setting. You can:

- Add more services to either array in `content.ts`
- Create a hybrid by mixing both arrays
- Create entirely new service categories

---

## SEO Checklist

After customization:

- [ ] Update `index.html` title and meta description
- [ ] Check schema.org data in `Index.tsx` (auto-populated from config)
- [ ] Generate and upload `sitemap.xml` (or use plugin)
- [ ] Update `robots.txt` if needed
- [ ] Add Google Analytics (optional)
- [ ] Submit site to Google Search Console

---

## Troubleshooting

### Form not working
- Check Netlify Forms dashboard
- Ensure form detection is enabled
- Verify hidden form in `index.html` matches visible form fields

### WhatsApp not opening
- Verify `whatsapp` number includes country code (e.g., 447...)
- Test the generated link manually

### Images not loading
- Check file paths are correct
- Ensure images are in `src/assets/`
- Run `npm run build` to check for errors

### Styling looks wrong
- Clear browser cache
- Run `npm install` again
- Check Tailwind config hasn't been modified

---

## Support

For issues with:
- **Template structure**: Check this guide and the plan file
- **React/Vite**: See [Vite documentation](https://vitejs.dev/)
- **Deployment**: See [Netlify documentation](https://docs.netlify.com/)
- **Tailwind CSS**: See [Tailwind documentation](https://tailwindcss.com/)

---

## File Reference

### Configuration Files (Edit these)
- `src/config/business.ts` - All business data
- `src/config/content.ts` - All marketing content
- `src/utils/serviceType.ts` - Service type logic (usually don't need to edit)

### Component Files (Usually don't need to edit)
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/home/HeroSection.tsx`
- `src/components/home/ServicesSection.tsx`
- `src/components/home/TestimonialsSection.tsx`
- `src/components/home/FAQSection.tsx`
- `src/components/home/CTASection.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Index.tsx`

All these components automatically pull data from your config files!

---

## Quick Conversion Example

**Converting Primer Group (Commercial, Southport) to ABC Roofing (Residential, Manchester):**

1. **business.ts:**
```typescript
name: "ABC Roofing",
serviceType: "residential",
location: { city: "Manchester", ... },
contact: { phone: "0161...", ... }
```

2. **content.ts:**
Update testimonials to Manchester homeowners, adjust FAQs for residential questions

3. **Assets:**
Replace hero image with residential roofing photo

4. **Deploy:**
Push to GitHub, deploy on Netlify

**Total time: 20 minutes** ✅

---

## License

This template is provided as-is for use in roofing business websites.

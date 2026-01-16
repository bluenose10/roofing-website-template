import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import heroImage from "@/assets/hero-roofing.jpg";

const WHATSAPP_NUMBER = "447000000000";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Fastest response - usually within minutes",
    value: "Chat Now",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like a quote for commercial roofing")}`,
    highlight: true,
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with our team",
    value: "01234 567 890",
    href: "tel:+441234567890",
    highlight: false,
  },
  {
    icon: Mail,
    title: "Email",
    description: "For detailed enquiries",
    value: "info@primergroup.co.uk",
    href: "mailto:info@primergroup.co.uk",
    highlight: false,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message sent successfully! We'll be in touch soon.");
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Commercial roofing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
        </div>
        
        <div className="container-wide relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Discuss Your Project
            </h1>
            <p className="text-lg text-white/80">
              Ready to get started? Contact us for a free, no-obligation quote. 
              We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.title === "WhatsApp" ? "_blank" : undefined}
                rel={method.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group p-6 rounded-xl border-2 transition-all hover:shadow-lg ${
                  method.highlight 
                    ? "bg-transparent border-[#25D366]/50 hover:border-[#25D366]" 
                    : "bg-transparent border-white/10 hover:border-[#F3CD45]"
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  method.highlight ? "bg-[#25D366]" : "bg-accent/10"
                }`}>
                  <method.icon className={`w-6 h-6 ${method.highlight ? "text-white" : "text-accent"}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                <span className={`font-semibold ${method.highlight ? "text-[#25D366]" : "text-accent"}`}>
                  {method.value}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for your enquiry. We'll be in touch within 24 hours.
                  </p>
                  <Button variant="cta" asChild>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp for Faster Response
                    </a>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01onal 123 4567"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="installation">New Roof Installation</option>
                        <option value="repair">Repair & Maintenance</option>
                        <option value="emergency">Emergency Repair</option>
                        <option value="inspection">Roof Inspection</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-center text-muted-foreground text-sm">
                    Or for a faster response,{" "}
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-medium hover:underline"
                    >
                      message us on WhatsApp
                    </a>
                  </p>
                </form>
              )}
            </motion.div>

            {/* Map & Address */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Visit Our Office</h2>
              
              {/* Map placeholder */}
              <div className="aspect-video bg-muted rounded-xl mb-6 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2360.896693892673!2d-3.0069!3d53.6476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDM4JzUxLjQiTiAzwrAwMCcyNC44Ilc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Primer Group Location"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      147 Hampton Road, Southport,<br />
                      Merseyside, PR8 5DJ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-accent text-sm font-medium mt-1">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

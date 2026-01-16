import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "447838121592";

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

export const FAQSection = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I have a question about your roofing services.`, "_blank");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our commercial roofing services across Merseyside and the North West.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for?
          </p>
          <Button onClick={handleWhatsApp} className="gap-2">
            <MessageCircle className="w-4 h-4" />
            Ask Us on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

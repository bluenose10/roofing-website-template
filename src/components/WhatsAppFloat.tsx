import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { businessConfig } from "@/config/business";
import { getServiceTypeText } from "@/utils/serviceType";

const WHATSAPP_NUMBER = businessConfig.contact.whatsapp;
const WHATSAPP_MESSAGE = encodeURIComponent(`Hi, I'd like a quote for ${getServiceTypeText().toLowerCase()} roofing`);

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all lg:hidden"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold">Get Quote</span>
    </motion.a>
  );
}

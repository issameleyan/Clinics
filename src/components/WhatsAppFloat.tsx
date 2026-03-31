import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/966500000000"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg transition-transform hover:scale-110 md:bottom-6 md:flex ltr:right-6 rtl:left-6"
    aria-label="WhatsApp"
  >
    <MessageCircle size={28} className="text-accent-foreground" />
  </a>
);

export default WhatsAppFloat;

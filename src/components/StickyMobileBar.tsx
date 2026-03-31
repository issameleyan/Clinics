import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";

const StickyMobileBar = () => {
  const { t } = useLang();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-background shadow-lg md:hidden">
      <a
        href="tel:+966500000000"
        className="flex flex-1 flex-col items-center gap-1 py-3 text-xs font-semibold text-foreground transition-colors hover:text-primary"
      >
        <Phone size={20} />
        {t("اتصل", "Call")}
      </a>
      <a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center gap-1 py-3 text-xs font-semibold text-accent"
      >
        <MessageCircle size={20} />
        {t("واتساب", "WhatsApp")}
      </a>
      <Link
        to="/booking"
        className="flex flex-1 flex-col items-center gap-1 py-3 text-xs font-semibold text-primary"
      >
        <CalendarCheck size={20} />
        {t("احجز", "Book")}
      </Link>
    </div>
  );
};

export default StickyMobileBar;

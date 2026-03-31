import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-border bg-foreground pb-24 md:pb-8">
      <div className="container-tight px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary-foreground">
              {t("عيادة الابتسامة", "Smile Clinic")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(
                "رعاية متكاملة لصحة أسنانك في الرياض",
                "Complete dental care in Riyadh"
              )}
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">
              {t("روابط سريعة", "Quick Links")}
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">
                {t("الخدمات", "Services")}
              </Link>
              <Link to="/doctors" className="text-sm text-muted-foreground hover:text-primary">
                {t("الأطباء", "Doctors")}
              </Link>
              <Link to="/booking" className="text-sm text-muted-foreground hover:text-primary">
                {t("احجز موعد", "Book Now")}
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-primary-foreground">
              {t("تواصل معنا", "Contact")}
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Phone size={14} /> +966 50 000 0000
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> {t("الرياض، حي الملقا", "Riyadh, Al-Malqa")}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} /> {t("السبت - الخميس: 9ص - 9م", "Sat-Thu: 9AM-9PM")}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-muted-foreground/20 pt-6 text-center text-xs text-muted-foreground">
          © 2026 {t("عيادة الابتسامة", "Smile Clinic")}. {t("جميع الحقوق محفوظة", "All rights reserved")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: t("الرئيسية", "Home") },
    { to: "/services", label: t("الخدمات", "Services") },
    { to: "/doctors", label: t("الأطباء", "Doctors") },
    { to: "/about", label: t("من نحن", "About") },
    { to: "/contact", label: t("تواصل معنا", "Contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-tight flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-primary">
          {t("عيادة الابتسامة", "Smile Clinic")}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <Button asChild size="sm">
            <Link to="/booking">{t("احجز موعد", "Book Now")}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-foreground hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>
            <Button asChild size="sm" className="flex-1">
              <Link to="/booking" onClick={() => setOpen(false)}>
                {t("احجز موعد", "Book Now")}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

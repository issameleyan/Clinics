import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: t("الرئيسية", "Home") },
    { to: "/services", label: t("الخدمات", "Services") },
    { to: "/doctors", label: t("الأطباء", "Doctors") },
    { to: "/about", label: t("من نحن", "About") },
    { to: "/contact", label: t("تواصل معنا", "Contact") },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="container-tight flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            {t("عيادة الابتسامة", "Smile Clinic")}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
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

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <Button asChild size="sm" className="gradient-cta border-0 text-primary-foreground">
            <Link to="/booking">{t("احجز موعد", "Book Now")}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-foreground transition-colors lg:hidden"
        >
          <span className="sr-only">Open menu</span>
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu using Dialog */}
      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogContent className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card px-4 py-4 sm:px-6 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-border lg:hidden [&>button]:hidden">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              {t("عيادة الابتسامة", "Smile Clinic")}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-base font-semibold transition-colors hover:bg-secondary ${
                  location.pathname === l.to ? "text-primary" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold"
              >
                {lang === "ar" ? "EN" : "عربي"}
              </button>
              <Button asChild size="sm" className="flex-1 gradient-cta border-0 text-primary-foreground">
                <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                  {t("احجز موعد", "Book Now")}
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;

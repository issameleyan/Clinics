import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

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

      {/* Mobile menu using Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
          <SheetHeader className="px-5 pt-5 pb-2">
            <SheetTitle className="text-lg font-bold text-primary text-start">
              {t("عيادة الابتسامة", "Smile Clinic")}
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col px-4 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-base font-semibold transition-colors hover:bg-secondary ${
                  location.pathname === l.to ? "text-primary bg-secondary/50" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-2 flex flex-col gap-3">
              <button
                onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className="self-start rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                {lang === "ar" ? "EN" : "عربي"}
              </button>
              <Button asChild size="default" className="w-full gradient-cta border-0 text-primary-foreground">
                <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                  {t("احجز موعد", "Book Now")}
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;

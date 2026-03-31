import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { useLang } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLang();

  const footerLinks = [
    {
      title: t("روابط سريعة", "Quick Links"),
      links: [
        { label: t("الرئيسية", "Home"), href: "/" },
        { label: t("الخدمات", "Services"), href: "/services" },
        { label: t("الأطباء", "Doctors"), href: "/doctors" },
        { label: t("من نحن", "About Us"), href: "/about" },
      ],
    },
    {
      title: t("خدماتنا", "Our Services"),
      links: [
        { label: t("تنظيف الأسنان", "Teeth Cleaning"), href: "/services" },
        { label: t("تبييض الأسنان", "Teeth Whitening"), href: "/services" },
        { label: t("زراعة الأسنان", "Dental Implants"), href: "/services" },
        {
          label: t("احجز موعد", "Book Now"),
          href: "/booking",
          pulse: true,
        },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Phone size={18} className="text-primary" />,
      text: "+966 50 000 0000",
      href: "tel:+966500000000",
    },
    {
      icon: <MessageCircle size={18} className="text-primary" />,
      text: t("واتساب", "WhatsApp"),
      href: "https://wa.me/966500000000",
    },
    {
      icon: <MapPin size={18} className="text-primary" />,
      text: t("الرياض، حي الملقا", "Riyadh, Al-Malqa"),
    },
    {
      icon: <Mail size={18} className="text-primary" />,
      text: "info@smileclinic.sa",
      href: "mailto:info@smileclinic.sa",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
    { icon: <Globe size={18} />, label: "Website", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-foreground pb-24 md:pb-8">
      <div className="relative z-10">
        <div className="container-tight px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand section */}
            <div>
              <Link to="/" className="mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                  ♥
                </span>
                <span className="text-lg font-bold text-primary-foreground">
                  {t("عيادة الابتسامة", "Smile Clinic")}
                </span>
              </Link>
              <p className="text-sm text-muted-foreground">
                {t(
                  "رعاية متكاملة لصحة أسنانك باستخدام أحدث التقنيات في الرياض",
                  "Complete dental care using the latest technologies in Riyadh"
                )}
              </p>
            </div>

            {/* Footer link sections */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 text-sm font-semibold text-primary-foreground">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.label} className="flex items-center gap-2">
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                      {link.pulse && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-primary-foreground">
                {t("تواصل معنا", "Contact Us")}
              </h4>
              <ul className="flex flex-col gap-3">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {item.icon}
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        {item.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-muted-foreground/20" />

          {/* Footer bottom */}
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-muted-foreground/20 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {t("عيادة الابتسامة", "Smile Clinic")}.{" "}
              {t("جميع الحقوق محفوظة", "All rights reserved")}
            </p>
          </div>
        </div>

        {/* Text hover effect */}
        <div className="hidden h-24 items-center justify-center md:flex">
          <TextHoverEffect text="SMILE" />
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;

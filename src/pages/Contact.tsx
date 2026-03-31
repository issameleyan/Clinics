import { useState } from "react";
import { Phone, MapPin, Clock, MailIcon } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ContactCard } from "@/components/ui/contact-card";

const Contact = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero with background image */}
      <section className="relative section-padding text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
        </div>
        <div className="container-tight relative z-10 py-8 md:py-12">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">{t("تواصل معنا", "Contact Us")}</h1>
          <p className="mt-4 text-lg text-primary-foreground/90">{t("نسعد بالرد على استفساراتك", "We're happy to answer your questions")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <ContactCard
            title={t("تواصل معنا", "Contact With Us")}
            description={t(
              "إذا كان لديك أي سؤال عن خدماتنا أو تحتاج مساعدة، يسعدنا خدمتك. نرد خلال يوم عمل واحد.",
              "If you have any questions about our services or need help, we're happy to assist. We respond within 1 business day."
            )}
            contactInfo={[
              { icon: MailIcon, label: t("البريد", "Email"), value: "info@smileclinic.sa" },
              { icon: Phone, label: t("الهاتف", "Phone"), value: "+966 50 000 0000" },
              { icon: MapPin, label: t("العنوان", "Address"), value: t("الرياض، حي الملقا", "Riyadh, Al-Malqa") },
              { icon: Clock, label: t("ساعات العمل", "Hours"), value: t("السبت - الخميس: ٩ص - ٩م", "Sat - Thu: 9AM - 9PM"), className: "sm:col-span-2" },
            ]}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-lg bg-secondary p-8 text-center">
                <p className="text-lg font-semibold text-secondary-foreground">{t("شكراً! سنتواصل معك قريباً", "Thank you! We'll contact you soon")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label>{t("الاسم", "Name")}</Label>
                  <Input required placeholder={t("اسمك الكامل", "Your full name")} className="mt-1" />
                </div>
                <div>
                  <Label>{t("البريد الإلكتروني", "Email")}</Label>
                  <Input required type="email" placeholder="email@example.com" dir="ltr" className="mt-1" />
                </div>
                <div>
                  <Label>{t("رقم الهاتف", "Phone Number")}</Label>
                  <Input required type="tel" placeholder="+966 5X XXX XXXX" dir="ltr" className="mt-1" />
                </div>
                <div>
                  <Label>{t("الرسالة", "Message")}</Label>
                  <Textarea required rows={4} placeholder={t("كيف نقدر نساعدك؟", "How can we help you?")} className="mt-1" />
                </div>
                <Button type="submit" size="lg" className="gradient-cta w-full border-0 text-primary-foreground">
                  {t("أرسل", "Send")}
                </Button>
              </form>
            )}
          </ContactCard>
        </div>
      </section>

      {/* Map section */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">{t("موقعنا", "Our Location")}</h2>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsijNDAuMCJF!5e0!3m2!1sar!2ssa!4v1600000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

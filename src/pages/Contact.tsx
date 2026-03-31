import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="gradient-hero section-padding text-center">
        <div className="container-tight">
          <h1 className="text-4xl font-bold text-primary-foreground">{t("تواصل معنا", "Contact Us")}</h1>
          <p className="mt-4 text-primary-foreground/80">{t("نسعد بالرد على استفساراتك", "We're happy to answer your questions")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">{t("أرسل لنا رسالة", "Send Us a Message")}</h2>
            {submitted ? (
              <div className="rounded-lg bg-secondary p-8 text-center">
                <p className="text-lg font-semibold text-secondary-foreground">{t("شكراً! سنتواصل معك قريباً", "Thank you! We'll contact you soon")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">{t("الاسم", "Name")}</label>
                  <Input required placeholder={t("اسمك الكامل", "Your full name")} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">{t("رقم الهاتف", "Phone Number")}</label>
                  <Input required type="tel" placeholder="+966 5X XXX XXXX" dir="ltr" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">{t("الرسالة", "Message")}</label>
                  <Textarea required rows={4} placeholder={t("كيف نقدر نساعدك؟", "How can we help you?")} />
                </div>
                <Button type="submit" size="lg" className="gradient-cta w-full border-0 text-primary-foreground">
                  {t("أرسل", "Send")}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-foreground">
              <Phone size={20} className="text-primary" />
              <div>
                <p className="text-sm font-medium">{t("الهاتف", "Phone")}</p>
                <p className="text-sm text-muted-foreground" dir="ltr">+966 50 000 0000</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <MapPin size={20} className="text-primary" />
              <div>
                <p className="text-sm font-medium">{t("العنوان", "Address")}</p>
                <p className="text-sm text-muted-foreground">{t("الرياض، حي الملقا، شارع الأمير محمد بن سلمان", "Riyadh, Al-Malqa, Prince Mohammed Bin Salman St")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Clock size={20} className="text-primary" />
              <div>
                <p className="text-sm font-medium">{t("ساعات العمل", "Working Hours")}</p>
                <p className="text-sm text-muted-foreground">{t("السبت - الخميس: ٩ صباحاً - ٩ مساءً", "Sat - Thu: 9AM - 9PM")}</p>
              </div>
            </div>
            <Button asChild className="gradient-cta w-full border-0 text-primary-foreground">
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} className="me-2" />
                {t("تواصل عبر واتساب", "Chat on WhatsApp")}
              </a>
            </Button>

            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsijNDAuMCJF!5e0!3m2!1sar!2ssa!4v1600000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

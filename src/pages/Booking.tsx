import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Booking = () => {
  const { t } = useLang();

  return (
    <div>
      <section className="gradient-hero section-padding text-center">
        <div className="container-tight">
          <h1 className="text-4xl font-bold text-primary-foreground">{t("احجز موعدك", "Book Your Appointment")}</h1>
          <p className="mt-4 text-primary-foreground/80">{t("اختر الطريقة الأنسب لك", "Choose the most convenient way for you")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-2xl">
          <div className="space-y-6">
            {/* WhatsApp booking */}
            <div className="rounded-xl border border-border bg-background p-8 text-center shadow-sm">
              <MessageCircle size={40} className="mx-auto mb-4 text-accent" />
              <h2 className="mb-2 text-xl font-bold text-foreground">{t("احجز عبر واتساب", "Book via WhatsApp")}</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                {t("أسرع طريقة — رد فوري من فريقنا", "Fastest way — instant response from our team")}
              </p>
              <Button asChild size="lg" className="gradient-cta border-0 text-primary-foreground">
                <a href="https://wa.me/966500000000?text=%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="me-2" />
                  {t("ابدأ المحادثة", "Start Chat")}
                </a>
              </Button>
            </div>

            {/* Call */}
            <div className="rounded-xl border border-border bg-background p-8 text-center shadow-sm">
              <Phone size={40} className="mx-auto mb-4 text-primary" />
              <h2 className="mb-2 text-xl font-bold text-foreground">{t("اتصل بنا مباشرة", "Call Us Directly")}</h2>
              <p className="mb-6 text-sm text-muted-foreground">
                {t("تكلم مع فريقنا واحجز موعدك الآن", "Talk to our team and book now")}
              </p>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="tel:+966500000000">
                  <Phone size={18} className="me-2" />
                  +966 50 000 0000
                </a>
              </Button>
            </div>

            {/* Booking widget placeholder */}
            <div className="rounded-xl border-2 border-dashed border-border bg-section-alt p-12 text-center">
              <CalendarCheck size={48} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="mb-2 text-lg font-bold text-foreground">{t("نموذج الحجز الإلكتروني", "Online Booking Form")}</h2>
              <p className="text-sm text-muted-foreground">
                {t("قريباً — احجز أونلاين مباشرة من الموقع", "Coming soon — Book online directly from the website")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;

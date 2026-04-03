import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { GradientCard } from "@/components/ui/gradient-card";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const servicesData = {
  ar: [
    { title: "تنظيف الأسنان", desc: "إزالة الجير والتصبغات في جلسة واحدة بدون ألم. نستخدم أحدث أجهزة الموجات فوق الصوتية لضمان نظافة عميقة وشاملة.", badge: "الأكثر طلباً", badgeColor: "#2563EB", gradient: "blue" as const, img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=300&auto=format&fit=crop" },
    { title: "تبييض الأسنان", desc: "ابتسامة بيضاء ناصعة باستخدام تقنية الليزر المتقدمة. نتائج فورية تدوم لأشهر مع الحفاظ على صحة المينا.", badge: "نتائج فورية", badgeColor: "#0EA5E9", gradient: "sky" as const, img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=300&auto=format&fit=crop" },
    { title: "تقويم الأسنان", desc: "تقويم شفاف أو معدني حسب حالتك مع متابعة مستمرة. خيارات متعددة تناسب جميع الأعمار.", badge: "خيارات متعددة", badgeColor: "#6366F1", gradient: "indigo" as const, img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=300&auto=format&fit=crop" },
    { title: "زراعة الأسنان", desc: "زراعة ثابتة بأحدث التقنيات العالمية. تدوم مدى الحياة وتبدو طبيعية تماماً.", badge: "تدوم مدى الحياة", badgeColor: "#14B8A6", gradient: "teal" as const, img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=300&auto=format&fit=crop" },
    { title: "علاج الجذور", desc: "علاج العصب بتقنيات حديثة بدون خوف أو ألم. نحافظ على سنك الطبيعي بأقل تدخل ممكن.", badge: "بدون ألم", badgeColor: "#8B5CF6", gradient: "purple" as const, img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=300&auto=format&fit=crop" },
    { title: "تركيبات وتيجان", desc: "تركيبات ثابتة بمظهر طبيعي ومتانة عالية. مصممة خصيصاً لتناسب شكل ولون أسنانك.", badge: "شكل طبيعي", badgeColor: "#F59E0B", gradient: "amber" as const, img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=300&auto=format&fit=crop" },
  ],
  en: [
    { title: "Teeth Cleaning", desc: "Remove tartar and stains in one painless session. We use the latest ultrasonic devices for a deep and thorough clean.", badge: "Most Popular", badgeColor: "#2563EB", gradient: "blue" as const, img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=300&auto=format&fit=crop" },
    { title: "Teeth Whitening", desc: "Bright white smile using advanced laser technology. Immediate results lasting months while preserving enamel health.", badge: "Instant Results", badgeColor: "#0EA5E9", gradient: "sky" as const, img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=300&auto=format&fit=crop" },
    { title: "Orthodontics", desc: "Clear or metal braces based on your case with continuous follow-up. Multiple options for all ages.", badge: "Multiple Options", badgeColor: "#6366F1", gradient: "indigo" as const, img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=300&auto=format&fit=crop" },
    { title: "Dental Implants", desc: "Permanent implants with the latest global technology. Last a lifetime and look completely natural.", badge: "Lifetime Lasting", badgeColor: "#14B8A6", gradient: "teal" as const, img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=300&auto=format&fit=crop" },
    { title: "Root Canal", desc: "Modern nerve treatment without fear or pain. We preserve your natural tooth with minimal intervention.", badge: "Pain-Free", badgeColor: "#8B5CF6", gradient: "purple" as const, img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=300&auto=format&fit=crop" },
    { title: "Crowns & Bridges", desc: "Fixed prosthetics with natural appearance and high durability. Custom-designed to match your teeth.", badge: "Natural Look", badgeColor: "#F59E0B", gradient: "amber" as const, img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=300&auto=format&fit=crop" },
  ],
};

const Services = () => {
  const { t, lang } = useLang();
  const data = lang === "ar" ? servicesData.ar : servicesData.en;

  return (
    <div>
      {/* Hero with background image */}
      <section className="relative section-padding text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
        </div>
        <div className="container-tight relative z-10 py-8 md:py-12">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">{t("خدمات طب الأسنان في عيادة الابتسامة", "Dental Services at Smile Clinic")}</h1>
          <p className="mt-4 text-lg text-primary-foreground/90">{t("كل ما تحتاجه لابتسامة صحية في مكان واحد", "Everything you need for a healthy smile in one place")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((s, i) => (
            <GradientCard
              key={i}
              gradient={s.gradient}
              badgeText={s.badge}
              badgeColor={s.badgeColor}
              title={s.title}
              description={s.desc}
              ctaText={t("احجز الآن", "Book Now")}
              ctaHref="/booking"
              imageUrl={s.img}
            />
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <div className="grid items-center gap-8 overflow-hidden rounded-2xl border-2 border-primary bg-background shadow-sm md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                {t("مو متأكد وش تحتاج؟", "Not Sure What You Need?")}
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                {t(
                  "لا تقلق — احجز استشارة مجانية مع أحد أطبائنا وخلنا نساعدك تختار العلاج المناسب. بدون أي التزام.",
                  "Don't worry — book a free consultation with one of our doctors and let us help you choose the right treatment. No commitment required."
                )}
              </p>
              <ul className="mb-6 space-y-2">
                {[
                  t("استشارة مجانية بدون أي رسوم", "Free consultation with no fees"),
                  t("خطة علاج مخصصة لحالتك", "Treatment plan customized for your case"),
                  t("أسعار واضحة وخيارات تقسيط", "Transparent pricing and installment options"),
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gradient-cta border-0 text-primary-foreground">
                  <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} className="me-2" />
                    {t("احجز استشارتك المجانية", "Book Your Free Consultation")}
                  </a>
                </Button>
                <Button asChild size="lg" className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/booking">{t("صفحة الحجز", "Booking Page")}</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block h-full">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
                alt={t("استشارة مجانية", "Free consultation")}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { GradientCard } from "@/components/ui/gradient-card";

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
      <section className="gradient-hero section-padding text-center">
        <div className="container-tight">
          <h1 className="text-4xl font-bold text-primary-foreground">{t("خدمات طب الأسنان في عيادة الابتسامة", "Dental Services at Smile Clinic")}</h1>
          <p className="mt-4 text-primary-foreground/80">{t("كل ما تحتاجه لابتسامة صحية في مكان واحد", "Everything you need for a healthy smile in one place")}</p>
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
    </div>
  );
};

export default Services;

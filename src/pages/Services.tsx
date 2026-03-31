import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const servicesData = {
  ar: [
    { title: "تنظيف الأسنان", desc: "إزالة الجير والتصبغات في جلسة واحدة بدون ألم.", benefits: ["جلسة واحدة فقط", "بدون ألم", "نتائج فورية"] },
    { title: "تبييض الأسنان", desc: "ابتسامة بيضاء ناصعة باستخدام تقنية الليزر.", benefits: ["نتائج من أول جلسة", "آمن على المينا", "يدوم لأشهر"] },
    { title: "تقويم الأسنان", desc: "تقويم شفاف أو معدني حسب حالتك.", benefits: ["خيارات متعددة", "نتائج مضمونة", "متابعة مستمرة"] },
    { title: "زراعة الأسنان", desc: "زراعة ثابتة بأحدث التقنيات.", benefits: ["تدوم مدى الحياة", "تبدو طبيعية", "بدون ألم"] },
    { title: "علاج الجذور", desc: "علاج العصب بتقنيات حديثة بدون خوف.", benefits: ["بدون ألم", "جلسة واحدة", "حفظ السن الطبيعي"] },
    { title: "تركيبات وتيجان", desc: "تركيبات ثابتة بمظهر طبيعي.", benefits: ["متينة وقوية", "شكل طبيعي", "مريحة"] },
  ],
  en: [
    { title: "Teeth Cleaning", desc: "Remove tartar and stains in one painless session.", benefits: ["One session only", "Pain-free", "Immediate results"] },
    { title: "Teeth Whitening", desc: "Bright white smile using laser technology.", benefits: ["Results from first session", "Safe for enamel", "Lasts for months"] },
    { title: "Orthodontics", desc: "Clear or metal braces based on your case.", benefits: ["Multiple options", "Guaranteed results", "Continuous follow-up"] },
    { title: "Dental Implants", desc: "Permanent implants with latest technology.", benefits: ["Last a lifetime", "Look natural", "Pain-free"] },
    { title: "Root Canal", desc: "Modern nerve treatment without fear.", benefits: ["Pain-free", "One session", "Preserve natural tooth"] },
    { title: "Crowns & Bridges", desc: "Fixed prosthetics with natural appearance.", benefits: ["Durable", "Natural look", "Comfortable"] },
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
        <div className="container-tight grid gap-6 md:grid-cols-2">
          {data.map((s, i) => (
            <div key={i} className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <h2 className="mb-2 text-xl font-bold text-foreground">{s.title}</h2>
              <p className="mb-4 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mb-6 space-y-1">
                {s.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button asChild size="sm" className="gradient-cta border-0 text-primary-foreground">
                <Link to="/booking">{t("احجز الآن", "Book Now")}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

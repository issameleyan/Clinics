import { useLang } from "@/contexts/LanguageContext";
import heroImg from "@/assets/hero-dental.jpg";

const About = () => {
  const { t } = useLang();

  return (
    <div>
      <section className="gradient-hero section-padding text-center">
        <div className="container-tight">
          <h1 className="text-4xl font-bold text-primary-foreground">{t("من نحن", "About Us")}</h1>
          <p className="mt-4 text-primary-foreground/80">{t("تعرف على قصتنا ورؤيتنا", "Learn about our story and vision")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">{t("قصة العيادة", "Our Story")}</h2>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                "بدأنا عيادة الابتسامة في الرياض بهدف واحد: نوفر علاج أسنان يكون المريض فيه مرتاح وواثق. من أول يوم، ركزنا إن تجربة المريض تكون سهلة — من الحجز للعلاج للمتابعة.",
                "We started Smile Clinic in Riyadh with one goal: to provide dental care where patients feel comfortable and confident. From day one, we focused on making the patient experience easy — from booking to treatment to follow-up."
              )}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                "اليوم، خدمنا أكثر من ١٠٠٠ مريض وبنينا سمعة تعتمد على النتائج مو الكلام.",
                "Today, we've served over 1,000 patients and built a reputation based on results, not words."
              )}
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img src={heroImg} alt={t("عيادة الابتسامة", "Smile Clinic")} className="h-full w-full object-cover" loading="lazy" width={1920} height={1080} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-tight text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">{t("رؤيتنا", "Our Vision")}</h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            {t(
              "نسعى نكون الخيار الأول لعلاج الأسنان في الرياض — بخدمة تحترم وقت المريض، وأسعار واضحة، ونتائج تتكلم عن نفسها.",
              "We aim to be the first choice for dental care in Riyadh — with service that respects the patient's time, transparent pricing, and results that speak for themselves."
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

import { Link } from "react-router-dom";
import { Shield, Award, Users, Heart, CheckCircle, Target, Eye } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-dental.jpg";

const About = () => {
  const { t } = useLang();

  const values = [
    { icon: Heart, title: t("راحة المريض أولاً", "Patient Comfort First"), desc: t("نستخدم تقنيات تخدير متقدمة وبيئة مريحة لضمان تجربة بدون ألم أو قلق", "Advanced anesthesia techniques and comfortable environment ensure a pain-free, anxiety-free experience") },
    { icon: Shield, title: t("أعلى معايير التعقيم", "Highest Sterilization Standards"), desc: t("نتبع بروتوكولات تعقيم صارمة تتوافق مع المعايير العالمية لسلامتك", "Strict sterilization protocols aligned with international standards for your safety") },
    { icon: Award, title: t("أطباء معتمدون", "Certified Doctors"), desc: t("فريقنا حاصل على شهادات من أفضل الجامعات والمراكز المتخصصة عالمياً", "Our team holds certifications from top universities and specialized centers worldwide") },
    { icon: Target, title: t("تقنيات حديثة", "Modern Technology"), desc: t("أجهزة ليزر وتصوير رقمي ثلاثي الأبعاد لتشخيص دقيق وعلاج فعال", "Laser equipment and 3D digital imaging for precise diagnosis and effective treatment") },
  ];

  const milestones = [
    { number: t("١٠٠٠+", "1000+"), label: t("مريض راضٍ", "Happy Patients") },
    { number: t("١٥+", "15+"), label: t("سنة خبرة", "Years Experience") },
    { number: t("٩٨٪", "98%"), label: t("نسبة رضا", "Satisfaction Rate") },
    { number: t("٥٠٠٠+", "5000+"), label: t("عملية ناجحة", "Successful Procedures") },
  ];

  return (
    <div>
      {/* Hero with background image */}
      <section className="relative section-padding text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909615957-be38d6bf9dbb?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
        </div>
        <div className="container-tight relative z-10 py-8 md:py-12">
          <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">{t("من نحن", "About Us")}</h1>
          <p className="mt-4 text-lg text-primary-foreground/90">{t("تعرف على قصتنا ورؤيتنا ولماذا يثق بنا الآلاف", "Learn about our story, vision, and why thousands trust us")}</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-tight grid gap-10 items-center md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-foreground">{t("قصة العيادة", "Our Story")}</h2>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                "بدأنا عيادة الابتسامة في الرياض عام ٢٠٠٩ بهدف واحد: نوفر علاج أسنان يكون المريض فيه مرتاح وواثق. من أول يوم، ركزنا إن تجربة المريض تكون سهلة — من الحجز للعلاج للمتابعة.",
                "We started Smile Clinic in Riyadh in 2009 with one goal: to provide dental care where patients feel comfortable and confident. From day one, we focused on making the patient experience easy — from booking to treatment to follow-up."
              )}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {t(
                "استثمرنا في أحدث الأجهزة والتقنيات العالمية، واستقطبنا أفضل الأطباء المتخصصين من جامعات عريقة. نؤمن أن كل مريض يستحق رعاية شخصية وخطة علاج مصممة خصيصاً لحالته.",
                "We invested in the latest global equipment and technologies, and recruited the best specialized doctors from prestigious universities. We believe every patient deserves personalized care and a treatment plan designed specifically for their case."
              )}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                "اليوم، خدمنا أكثر من ١٠٠٠ مريض وأجرينا أكثر من ٥٠٠٠ عملية ناجحة. سمعتنا تعتمد على النتائج مو الكلام.",
                "Today, we've served over 1,000 patients and performed over 5,000 successful procedures. Our reputation is based on results, not words."
              )}
            </p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={heroImg} alt={t("عيادة الابتسامة", "Smile Clinic")} className="h-full w-full object-cover" loading="lazy" width={1920} height={1080} />
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-background p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-primary">{m.number}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-tight grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">{t("رؤيتنا", "Our Vision")}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                "نسعى نكون الخيار الأول لعلاج الأسنان في الرياض والمملكة — بخدمة تحترم وقت المريض، وأسعار واضحة بدون مفاجآت، ونتائج تتكلم عن نفسها. هدفنا أن يكون كل مريض سفيراً لنا.",
                "We aim to be the first choice for dental care in Riyadh and the Kingdom — with service that respects the patient's time, transparent pricing with no surprises, and results that speak for themselves. Our goal is for every patient to be our ambassador."
              )}
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-8 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">{t("مهمتنا", "Our Mission")}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(
                "نقدم رعاية أسنان متكاملة تجمع بين الخبرة الطبية العالية والتقنيات الحديثة في بيئة مريحة. نلتزم بتثقيف مرضانا وتمكينهم من اتخاذ قرارات صحية واعية.",
                "We provide comprehensive dental care that combines high medical expertise with modern technology in a comfortable environment. We are committed to educating our patients and empowering them to make informed health decisions."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground">{t("قيمنا", "Our Values")}</h2>
          <p className="mb-10 text-center text-muted-foreground">{t("المبادئ التي توجه عملنا كل يوم", "The principles that guide our work every day")}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-background p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding text-center">
        <div className="container-tight">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">{t("جاهز لابتسامة جديدة؟", "Ready for a New Smile?")}</h2>
          <p className="mb-8 text-primary-foreground/80">{t("احجز موعدك اليوم وابدأ رحلتك معنا", "Book your appointment today and start your journey with us")}</p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link to="/booking">{t("احجز موعد", "Book Appointment")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;

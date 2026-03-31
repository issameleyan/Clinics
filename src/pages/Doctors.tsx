import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Award, Calendar } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const Doctors = () => {
  const { t } = useLang();

  const doctors = [
    {
      img: doctor1,
      name: t("د. أحمد المنصور", "Dr. Ahmed Al-Mansour"),
      spec: t("تجميل الأسنان", "Cosmetic Dentistry"),
      exp: t("١٥ سنة خبرة", "15 years experience"),
      desc: t("متخصص في تصميم الابتسامة وتركيب الفينير. أجرى أكثر من ٥٠٠ عملية تجميل ناجحة.", "Specialized in smile design and veneer installation. Over 500 successful cosmetic procedures."),
      achievements: [
        t("زمالة الكلية الملكية البريطانية", "Fellow of the Royal College (UK)"),
        t("عضو الجمعية الأمريكية لطب الأسنان التجميلي", "Member of AACD"),
      ],
      rating: 4.9,
      patients: 500,
    },
    {
      img: doctor2,
      name: t("د. سارة القحطاني", "Dr. Sara Al-Qahtani"),
      spec: t("تقويم الأسنان", "Orthodontics"),
      exp: t("١٢ سنة خبرة", "12 years experience"),
      desc: t("خبيرة في التقويم الشفاف والتقليدي. تعامل مع أكثر من ٣٠٠ حالة تقويم.", "Expert in clear and traditional braces. Treated over 300 orthodontic cases."),
      achievements: [
        t("شهادة إنفيزالاين بلاتينيوم", "Invisalign Platinum Certificate"),
        t("ماجستير تقويم الأسنان - جامعة الملك سعود", "MSc Orthodontics - King Saud University"),
      ],
      rating: 4.8,
      patients: 300,
    },
    {
      img: doctor3,
      name: t("د. خالد العتيبي", "Dr. Khalid Al-Otaibi"),
      spec: t("زراعة الأسنان", "Dental Implants"),
      exp: t("١٠ سنوات خبرة", "10 years experience"),
      desc: t("متخصص في الزراعة الفورية وترميم الأسنان. نسبة نجاح ٩٨٪ في عمليات الزراعة.", "Specialist in immediate implants and dental restoration. 98% success rate in implant procedures."),
      achievements: [
        t("البورد الألماني في زراعة الأسنان", "German Board in Dental Implants"),
        t("عضو الجمعية الدولية لزراعة الأسنان", "Member of ITI"),
      ],
      rating: 4.9,
      patients: 400,
    },
  ];

  return (
    <div>
      <section className="gradient-hero section-padding text-center">
        <div className="container-tight">
          <h1 className="text-4xl font-bold text-primary-foreground">{t("أطباؤنا", "Our Doctors")}</h1>
          <p className="mt-4 text-primary-foreground/80">{t("فريق طبي تثق فيه ويهتم بك", "A medical team you trust and that cares for you")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight space-y-8">
          {doctors.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow hover:shadow-lg md:flex-row"
            >
              <div className="relative h-72 overflow-hidden md:h-auto md:w-80">
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={600}
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-sm font-semibold text-foreground backdrop-blur-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {d.rating}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground">{d.name}</h2>
                <p className="text-sm font-semibold text-primary">{d.spec}</p>
                <p className="mb-3 text-xs text-muted-foreground">{d.exp}</p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>

                {/* Achievements */}
                <div className="mb-4 space-y-1.5">
                  {d.achievements.map((a, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-foreground">
                      <Award className="h-3.5 w-3.5 text-primary" />
                      {a}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button asChild size="sm" className="gradient-cta border-0 text-primary-foreground">
                    <Link to="/booking">
                      <Calendar className="me-1.5 h-4 w-4" />
                      {t("احجز مع الطبيب", "Book with Doctor")}
                    </Link>
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    {d.patients}+ {t("مريض", "patients")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Doctors;

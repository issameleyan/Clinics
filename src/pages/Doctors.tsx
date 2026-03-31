import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const Doctors = () => {
  const { t } = useLang();

  const doctors = [
    { img: doctor1, name: t("د. أحمد المنصور", "Dr. Ahmed Al-Mansour"), spec: t("تجميل الأسنان", "Cosmetic Dentistry"), exp: t("١٥ سنة خبرة", "15 years experience"), desc: t("متخصص في تصميم الابتسامة وتركيب الفينير. أجرى أكثر من ٥٠٠ عملية تجميل ناجحة.", "Specialized in smile design and veneer installation. Over 500 successful cosmetic procedures.") },
    { img: doctor2, name: t("د. سارة القحطاني", "Dr. Sara Al-Qahtani"), spec: t("تقويم الأسنان", "Orthodontics"), exp: t("١٢ سنة خبرة", "12 years experience"), desc: t("خبيرة في التقويم الشفاف والتقليدي. تعامل مع أكثر من ٣٠٠ حالة تقويم.", "Expert in clear and traditional braces. Treated over 300 orthodontic cases.") },
    { img: doctor3, name: t("د. خالد العتيبي", "Dr. Khalid Al-Otaibi"), spec: t("زراعة الأسنان", "Dental Implants"), exp: t("١٠ سنوات خبرة", "10 years experience"), desc: t("متخصص في الزراعة الفورية وترميم الأسنان. نسبة نجاح ٩٨٪ في عمليات الزراعة.", "Specialist in immediate implants and dental restoration. 98% success rate in implant procedures.") },
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
            <div key={i} className="flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm md:flex-row">
              <img src={d.img} alt={d.name} className="h-64 w-full object-cover md:h-auto md:w-72" loading="lazy" width={600} height={600} />
              <div className="flex flex-1 flex-col justify-center p-6">
                <h2 className="text-xl font-bold text-foreground">{d.name}</h2>
                <p className="text-sm font-semibold text-primary">{d.spec}</p>
                <p className="mb-2 text-xs text-muted-foreground">{d.exp}</p>
                <p className="mb-4 text-sm text-foreground">{d.desc}</p>
                <Button asChild size="sm" className="gradient-cta w-fit border-0 text-primary-foreground">
                  <Link to="/booking">{t("احجز مع الطبيب", "Book with Doctor")}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Doctors;

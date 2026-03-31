import { Link } from "react-router-dom";
import { Star, Shield, Users, Award, Phone, MessageCircle, MapPin, Clock, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-dental.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const Home = () => {
  const { t, lang } = useLang();

  const trustItems = [
    { icon: Users, value: "+1000", label: t("مريض راضٍ", "Happy Patients") },
    { icon: Shield, value: t("أحدث", "Latest"), label: t("الأجهزة الطبية", "Medical Equipment") },
    { icon: Award, value: t("أطباء", "Expert"), label: t("متخصصين", "Doctors") },
    { icon: Star, value: t("نتائج", "Guaranteed"), label: t("مضمونة", "Results") },
  ];

  const services = [
    { title: t("تنظيف الأسنان", "Teeth Cleaning"), desc: t("إزالة الجير والتصبغات في جلسة واحدة", "Remove tartar and stains in one session") },
    { title: t("تبييض الأسنان", "Teeth Whitening"), desc: t("ابتسامة بيضاء ناصعة من أول جلسة", "Bright white smile from the first session") },
    { title: t("تقويم الأسنان", "Orthodontics"), desc: t("تقويم شفاف ومريح بنتائج سريعة", "Clear and comfortable braces with fast results") },
    { title: t("زراعة الأسنان", "Dental Implants"), desc: t("زراعة ثابتة تدوم مدى الحياة", "Permanent implants that last a lifetime") },
    { title: t("علاج الجذور", "Root Canal"), desc: t("علاج بدون ألم ونتائج فورية", "Painless treatment with immediate results") },
  ];

  const doctors = [
    { img: doctor1, name: t("د. أحمد المنصور", "Dr. Ahmed Al-Mansour"), spec: t("تجميل الأسنان", "Cosmetic Dentistry"), exp: t("١٥ سنة خبرة", "15 years experience") },
    { img: doctor2, name: t("د. سارة القحطاني", "Dr. Sara Al-Qahtani"), spec: t("تقويم الأسنان", "Orthodontics"), exp: t("١٢ سنة خبرة", "12 years experience") },
    { img: doctor3, name: t("د. خالد العتيبي", "Dr. Khalid Al-Otaibi"), spec: t("زراعة الأسنان", "Dental Implants"), exp: t("١٠ سنوات خبرة", "10 years experience") },
  ];

  const whyUs = [
    { title: t("بدون ألم", "Pain-Free"), desc: t("تقنيات تخدير متقدمة تضمن راحتك", "Advanced anesthesia techniques ensure comfort") },
    { title: t("جلسات سريعة", "Quick Sessions"), desc: t("معظم العلاجات تنتهي في جلسة واحدة", "Most treatments completed in one session") },
    { title: t("مواعيد مرنة", "Flexible Hours"), desc: t("نستقبلك من السبت للخميس ٩ص - ٩م", "We welcome you Sat-Thu 9AM-9PM") },
    { title: t("أسعار مناسبة", "Fair Prices"), desc: t("خطط دفع مريحة وأسعار واضحة", "Comfortable payment plans and transparent pricing") },
  ];

  const testimonials = [
    { text: t("زرت عيادات كثير قبل كذا، بس هنا أول مرة أحس بالراحة. العلاج كان بدون ألم فعلاً", "I visited many clinics before, but here was the first time I felt comfortable. Treatment was truly painless"), name: t("محمد ر.", "Mohammed R.") },
    { text: t("النتيجة كانت واضحة من أول جلسة. تبييض أسنان ممتاز والفريق متعاون جداً", "Results were clear from the first session. Excellent whitening and very cooperative team"), name: t("نورة ع.", "Noura A.") },
    { text: t("أفضل تجربة زراعة أسنان. الطبيب شرح كل شي بالتفصيل وما حسيت بأي خوف", "Best implant experience. Doctor explained everything in detail and I felt no fear"), name: t("عبدالله ك.", "Abdullah K.") },
    { text: t("العيادة نظيفة ومرتبة والمواعيد دقيقة. ما انتظرت أبداً", "Clinic is clean and organized, appointments are precise. Never had to wait"), name: t("فاطمة م.", "Fatima M.") },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t("عيادة الابتسامة", "Smile Clinic")} className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="gradient-hero absolute inset-0" />
        </div>
        <div className="container-tight relative z-10 px-4 py-20">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm text-primary-foreground">
              <Star size={14} fill="currentColor" />
              {t("تقييم عالي من مرضانا", "Highly rated by our patients")}
            </div>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              {t("ابتسامة صحية تبدأ من عيادة الابتسامة", "A Healthy Smile Starts at Smile Clinic")}
            </h1>
            <p className="mb-2 text-lg text-primary-foreground/90 md:text-xl">
              {t(
                "رعاية متكاملة لأسنانك في الرياض — بدون ألم وبنتائج من أول جلسة",
                "Complete dental care in Riyadh — pain-free with results from the first session"
              )}
            </p>
            <p className="mb-8 text-sm font-medium text-primary-foreground/70">
              {t("جلسات سريعة — نتائج فورية", "Quick sessions — Immediate results")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-cta border-0 text-primary-foreground shadow-lg">
                <Link to="/booking">{t("احجز موعد الآن", "Book Now")}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
                <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="me-2" />
                  {t("تواصل عبر واتساب", "Chat on WhatsApp")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-sm">
              <item.icon size={28} className="mb-2 text-primary" />
              <span className="text-2xl font-bold text-foreground">{item.value}</span>
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground">{t("خدماتنا", "Our Services")}</h2>
          <p className="mb-10 text-center text-muted-foreground">
            {t("نوفر جميع خدمات طب الأسنان تحت سقف واحد", "All dental services under one roof")}
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div key={i} className="group rounded-lg border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{s.desc}</p>
                <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/booking">{t("احجز الآن", "Book Now")}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground">{t("شاهد الفرق بنفسك", "See the Difference")}</h2>
          <p className="mb-8 text-muted-foreground">{t("نتائج حقيقية من مرضانا", "Real results from our patients")}</p>
          <div className="mx-auto max-w-xl overflow-hidden rounded-xl shadow-lg">
            <img src={beforeAfter2} alt={t("قبل وبعد", "Before and After")} className="w-full" loading="lazy" width={800} height={512} />
          </div>
          <Button asChild size="lg" className="mt-8 gradient-cta border-0 text-primary-foreground">
            <Link to="/booking">{t("ابدأ رحلتك اليوم", "Start Your Journey Today")}</Link>
          </Button>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground">{t("أطباؤنا", "Our Doctors")}</h2>
          <p className="mb-10 text-center text-muted-foreground">{t("فريق طبي تثق فيه", "A medical team you can trust")}</p>
          <div className="grid gap-6 md:grid-cols-3">
            {doctors.map((d, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-background text-center shadow-sm">
                <img src={d.img} alt={d.name} className="h-64 w-full object-cover" loading="lazy" width={600} height={600} />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground">{d.name}</h3>
                  <p className="text-sm text-primary">{d.spec}</p>
                  <p className="mb-4 text-xs text-muted-foreground">{d.exp}</p>
                  <Button asChild size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link to="/booking">{t("احجز مع الطبيب", "Book with Doctor")}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight">
          <h2 className="mb-2 text-center text-3xl font-bold text-foreground">{t("ليش تختارنا؟", "Why Choose Us?")}</h2>
          <p className="mb-10 text-center text-muted-foreground">{t("أسباب حقيقية تخليك تثق فينا", "Real reasons to trust us")}</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <div key={i} className="rounded-lg border border-border bg-background p-6">
                <h3 className="mb-2 text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">{t("آراء مرضانا", "Patient Reviews")}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((rev, i) => (
              <div key={i} className="rounded-lg border border-border bg-background p-6">
                <Quote size={20} className="mb-3 text-primary/40" />
                <p className="mb-4 text-sm leading-relaxed text-foreground">{rev.text}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-2 text-xs font-semibold text-muted-foreground">{rev.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="gradient-hero section-padding text-center">
        <div className="container-tight">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            {t("لا تنتظر، احجز موعدك الآن", "Don't Wait, Book Your Appointment Now")}
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            {t("خطوة واحدة تفصلك عن ابتسامة جديدة", "One step away from a new smile")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/booking">{t("احجز موعد", "Book Appointment")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} className="me-2" />
                {t("واتساب", "WhatsApp")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+966500000000">
                <Phone size={18} className="me-2" />
                {t("اتصل الآن", "Call Now")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* MAP + CONTACT */}
      <section className="section-padding">
        <div className="container-tight">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">{t("موقعنا", "Our Location")}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsijNDAuMCJF!5e0!3m2!1sar!2ssa!4v1600000000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3 text-foreground">
                <MapPin size={20} className="text-primary" />
                <span>{t("الرياض، حي الملقا، شارع الأمير محمد بن سلمان", "Riyadh, Al-Malqa, Prince Mohammed Bin Salman St")}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Phone size={20} className="text-primary" />
                <span dir="ltr">+966 50 000 0000</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Clock size={20} className="text-primary" />
                <span>{t("السبت - الخميس: ٩ صباحاً - ٩ مساءً", "Sat - Thu: 9AM - 9PM")}</span>
              </div>
              <Button asChild className="mt-4 gradient-cta border-0 text-primary-foreground">
                <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="me-2" />
                  {t("تواصل مباشرة", "Contact Directly")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

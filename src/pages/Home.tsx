import { Link, useNavigate } from "react-router-dom";
import { Star, Shield, Users, Award, Phone, MessageCircle, MapPin, Clock, Quote, Stethoscope } from "lucide-react";
import { StatisticsCards } from "@/components/ui/statistics-card-1";
import { useLang } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ui/hero-section-9";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import heroImg from "@/assets/hero-dental.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const Home = () => {
  const { t, lang } = useLang();
  const navigate = useNavigate();

  const trustItems = [
    { icon: Users, value: "+1000", label: t("مريض راضٍ", "Happy Patients") },
    { icon: Shield, value: t("أحدث", "Latest"), label: t("الأجهزة الطبية", "Medical Equipment") },
    { icon: Award, value: t("أطباء", "Expert"), label: t("متخصصين", "Doctors") },
    { icon: Clock, value: t("مواعيد", "Flexible"), label: t("مرنة", "Hours") },
  ];

  const serviceAccordionItems = [
    {
      id: 1,
      title: t("تنظيف الأسنان", "Teeth Cleaning"),
      imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 2,
      title: t("تبييض الأسنان", "Teeth Whitening"),
      imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: t("تقويم الأسنان", "Orthodontics"),
      imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: t("زراعة الأسنان", "Dental Implants"),
      imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    },
    {
      id: 5,
      title: t("علاج الجذور", "Root Canal"),
      imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop",
    },
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
    { text: t("زرت عيادات كثير قبل كذا، بس هنا أول مرة أحس بالراحة. العلاج كان بدون ألم فعلاً", "I visited many clinics before, but here was the first time I felt comfortable. Treatment was truly painless"), image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150", name: t("محمد ر.", "Mohammed R."), role: t("مريض", "Patient") },
    { text: t("النتيجة كانت واضحة من أول جلسة. تبييض أسنان ممتاز والفريق متعاون جداً", "Results were clear from the first session. Excellent whitening and very cooperative team"), image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150", name: t("نورة ع.", "Noura A."), role: t("مريضة", "Patient") },
    { text: t("أفضل تجربة زراعة أسنان. الطبيب شرح كل شي بالتفصيل وما حسيت بأي خوف", "Best implant experience. Doctor explained everything in detail and I felt no fear"), image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150", name: t("عبدالله ك.", "Abdullah K."), role: t("مريض", "Patient") },
    { text: t("العيادة نظيفة ومرتبة والمواعيد دقيقة. ما انتظرت أبداً", "Clinic is clean and organized, appointments are precise. Never had to wait"), image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150", name: t("فاطمة م.", "Fatima M."), role: t("مريضة", "Patient") },
    { text: t("تجربة ممتازة من البداية للنهاية. أنصح الكل يجربون", "Excellent experience from start to finish. I recommend everyone tries it"), image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150", name: t("سارة ع.", "Sara A."), role: t("مريضة", "Patient") },
    { text: t("الدكتور كان صبور جداً وشرح لي كل خطوة. شكراً لكم", "The doctor was very patient and explained every step. Thank you"), image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150", name: t("خالد م.", "Khalid M."), role: t("مريض", "Patient") },
    { text: t("أسعارهم معقولة مقارنة بالجودة العالية. راح أرجع لهم دايماً", "Their prices are reasonable compared to the high quality. I'll always come back"), image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150", name: t("ريم ح.", "Reem H."), role: t("مريضة", "Patient") },
    { text: t("تعامل راقي واحترافي. من أفضل العيادات اللي زرتها", "Elegant and professional treatment. One of the best clinics I've visited"), image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150", name: t("أحمد س.", "Ahmed S."), role: t("مريض", "Patient") },
    { text: t("النظافة والتعقيم على أعلى مستوى. أحسست بالأمان", "Hygiene and sterilization at the highest level. I felt safe"), image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150", name: t("منى ك.", "Mona K."), role: t("مريضة", "Patient") },
  ];

  const heroData = {
    title: (
      <>
        {t("ابتسامة صحية تبدأ من", "A Healthy Smile Starts at")}{" "}
        <span className="text-primary">{t("عيادة الابتسامة", "Smile Clinic")}</span>
      </>
    ),
    subtitle: t(
      "رعاية متكاملة لأسنانك باستخدام أحدث التقنيات في الرياض، مع تجربة مريحة ونتائج واضحة",
      "Complete dental care using the latest technologies in Riyadh, with a comfortable experience and clear results"
    ),
    actions: [
      {
        text: t("احجز موعد الآن", "Book Now"),
        onClick: () => navigate("/booking"),
        variant: "default" as const,
        className: "gradient-cta border-0 text-primary-foreground",
      },
      {
        text: t("تواصل عبر واتساب", "Chat on WhatsApp"),
        onClick: () => window.open("https://wa.me/966500000000", "_blank"),
        variant: "outline" as const,
      },
    ],
    stats: [
      { value: "+1000", label: t("مريض راضٍ", "Happy Patients"), icon: <Users size={20} /> },
      { value: t("أطباء متخصصين", "Expert Doctors"), label: "", icon: <Stethoscope size={20} /> },
      { value: t("أحدث الأجهزة", "Latest Equipment"), label: "", icon: <Shield size={20} /> },
    ],
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    ],
  };

  return (
    <div>
      {/* HERO */}
      <div className="relative">
        <AnimatedGradientBackground
          gradientColors={["#f0fdfa", "#0D9488", "#10B981", "#0D9488", "#f0fdfa", "#10B981", "#0D9488"]}
          gradientStops={[0, 30, 45, 60, 75, 88, 100]}
          startingGap={150}
          Breathing={true}
          animationSpeed={0.01}
          breathingRange={3}
          containerClassName="opacity-20"
        />
        <HeroSection {...heroData} />
      </div>

      {/* TRUST */}
      <section className="section-padding bg-section-alt">
        <div className="container-tight grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center rounded-lg bg-background p-6 text-center shadow-sm border border-border">
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
          <LandingAccordionItem
            items={serviceAccordionItems}
            leftTitle={t("خدماتنا", "Our Services")}
            leftDescription={t(
              "نقدم مجموعة متكاملة من خدمات طب الأسنان لمساعدتك على الحفاظ على ابتسامة صحية وجميلة",
              "We offer a comprehensive range of dental services to help you maintain a healthy and beautiful smile"
            )}
            ctaText={t("احجز الآن", "Book Now")}
            ctaHref="/booking"
          />
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
      <TestimonialsSection
        badge={t("آراء مرضانا", "Patient Reviews")}
        title={t("ماذا يقول مرضانا", "What Our Patients Say")}
        description={t("تجارب حقيقية من مرضانا الكرام", "Real experiences from our valued patients")}
        testimonials={testimonials}
      />

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

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ZENITH_HOMEPAGE_SERVICES,
  BLOG_ARTICLES,
  DOCTORS_DATA,
  TESTIMONIALS_DATA,
  CREDENTIALS_DATA,
  CLINIC_STATISTICS,
  HERO_FEATURED_TREATMENTS,
  ZENITH_CONTACT,
} from "@/lib/zenith-data";
import { AppointmentModal } from "@/components/AppointmentModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export const Route = createFileRoute("/")({ component: Index });

const A = "/assets/zenith/";
const source = "https://www.zenithdentistry.lk";

const SPA_EXTERIOR_IMG = "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/environmental-to.webp";
const SPA_INTERIOR_IMG = "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/environmental-bottom.webp";
const ABOUT_HOME_IMG = "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/about-home.webp";
const PATIENT_TESTIMONIALS = [
  {
    id: 1,
    name: "Uta Boehlandt",
    country: "German",
    quote: "I've been looking for a dentist for a long time. Nobody is as good as in this clinic. Clean, safe, with no waiting. Very professional. Without pain. Simply register by phone.",
    avatar: "man.webp",
    remoteAvatar: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/man.webp"
  },
  {
    id: 2,
    name: "Phyllis Swaris",
    country: "USA",
    quote: "I was a very scared person, contemplating a 10 implant surgery, to replace ill fitting dentures. Dr Fouzan & his sweet, caring assistants made me at ease from the start. Dr explains everything clearly & with patience. My course of treatment was re evaluated several times & adjusted. I have the utmost confidence in Zenith Dentistry and without hesitation would recommend any of the services offered.",
    avatar: "man.webp",
    remoteAvatar: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/man.webp"
  },
  {
    id: 3,
    name: "Mariyam wussa",
    country: "Maldives",
    quote: "My experience at zenith Dental was pretty smooth and calm. From the very beginning, the receptionist to the nurses who was there to help out through out my process made sure I was comfortable all the time. Dr.Fouzan was patient, as it was my very first time to consult a dentist. He took me through a journey of my own tooth which I wasn’t aware my entire life. He made sure I understand every single thing and made things clear out in a way that I understood. Breaking my process to not to make me overwhelmed, he didn’t just treat my teeth; he and his team made sure I was emotionally ready before any procedure took place.",
    avatar: "man.webp",
    remoteAvatar: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/man.webp"
  },
  {
    id: 4,
    name: "ToMoYo Li",
    country: "China",
    quote: "Excellent treatment，just removed my first wisdom tooth yesterday，didn't feel any pain，operation was comfortable, it’s not scary at all. Thankssss so much. I’ll come back for the operations for my other 3 wisdom tooth.",
    avatar: "man.webp",
    remoteAvatar: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/man.webp"
  },
  {
    id: 5,
    name: "Shawn Angel",
    country: "New Zealand",
    quote: "Dr. Fauzan is the kindest, friendliest, most patient-concerned dentist ever! I travelled from New Zealand and he took me under my care. He worked with dentists in New Zealand and made sure my teeth looked good after several implants. He treats every patient like they are his own family. A respectful doctor doing a perfect job.",
    avatar: "woman.webp",
    remoteAvatar: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/woman.webp"
  },
  {
    id: 6,
    name: "Roy Lumb",
    country: "UK",
    quote: "I made an appointment at short notice for a clean and polish the day I was leaving for the UK. I managed to get an immediate appointment and the clinic was very well appointed. The Dentist was gentle and thorough, and I am pleased with both the result and the price.",
    avatar: "man.webp",
    remoteAvatar: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/man.webp"
  },
  {
    id: 7,
    name: "Julie Lee",
    country: "South Korea",
    quote: "Dr. Fouzan is really an amazing dentist and the staffs are very friendly! My mother and I received few treatments from Zenith Dentistry and we're happy to share our experience! I have been receiving orthodontic treatments since the end of 2010 and I'm scheduled to get my braces removed next month and I'm very satisfied with the whole experience, process and the result! I'm sure some of you might be wondering why I'm still wearing my braces but this is my fault...",
    avatar: "woman.webp",
    remoteAvatar: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/woman.webp"
  },
  {
    id: 8,
    name: "Isthuthi",
    country: "Korea",
    quote: "When I came to Sri Lanka, I had a problem with the implant that I had planted in Korea. So I was very worried, but I got to know this dentist through the introduction of an acquaintance. And when I came, the facilities were good, and most of all, the kindness of the doctors moved my heart. If I have any problems with my teeth in the future, I will go back to this dentist.",
    avatar: "woman.webp",
    remoteAvatar: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/woman.webp"
  }
];

const PATIENTS_TREATED_STATS = [
  {
    id: "implants",
    count: "3,000+",
    label: "Implants placed",
    icon: "dental-implant-icon.svg",
    fallbackIcon: "dental-implant-icon.webp",
  },
  {
    id: "braces",
    count: "5,000+",
    label: "Braces Fixed",
    icon: "braces-icon.svg",
    fallbackIcon: "braces-icon.webp",
  },
  {
    id: "experience",
    count: "21+",
    label: "Years of Experience",
    icon: "year-off-exp-icon.svg",
    fallbackIcon: "year-off-exp-icon.png",
  },
  {
    id: "smiles",
    count: "4,582+",
    label: "Happy Smile",
    icon: "happy-smile-icon.svg",
    fallbackIcon: "happy-smile-icon.png",
  },
  {
    id: "staff",
    count: "18+",
    label: "Staff at Service",
    icon: "staffs-icon.svg",
    fallbackIcon: "staffs-icon.png",
  },
];

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={down ? "M12 4v16m-6-6 6 6 6-6" : "M5 12h14m-5-5 5 5-5 5"} />
    </svg>
  );
}

function Index() {
  useScrollReveal();
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const handleBook = (serviceName = "") => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#f3f1e9] text-[#193331]">
      {/* Splash Screen */}
      <div className={`splash ${loading ? "" : "splash--gone"}`} aria-hidden={!loading}>
        <img src={`${A}logo.png`} alt="Zenith Dentistry" />
        <div className="splash-line">
          <i />
        </div>
      </div>

      <Header />

      {/* HERO SECTION / FEATURED TREATMENTS */}
      <section id="home" className="hero screen-section">
        <img
          className="hero-image"
          src={`${A}hero.webp`}
          alt="Zenith Dentistry patient receiving attentive care"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Zenith Dentistry · Dehiwala, Sri Lanka</p>
          <h1>
            Care, comfort<br />
            <em>& confidence.</em>
          </h1>
          <p className="hero-intro">
            Latest treatments and technology, delivered with a genuine passion for patient care.
          </p>

          {/* Hero Featured Treatments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl">
            {HERO_FEATURED_TREATMENTS.map((feat) => (
              <div
                key={feat.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-left space-y-2 hover:bg-white/20 transition duration-300"
              >
                <h3 className="font-serif text-lg text-white font-medium">{feat.title}</h3>
                <p className="text-[11px] text-white/80 line-clamp-2 leading-relaxed">{feat.description}</p>
                <a
                  href={`${source}${feat.href}`}
                  className="text-[10px] uppercase font-bold tracking-widest text-[#709b9d] hover:text-white inline-flex items-center gap-1.5 pt-1"
                >
                  Read More <Arrow />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-bottom">
          <button
            onClick={() => handleBook()}
            className="pill light-pill cursor-pointer border-0 bg-transparent"
          >
            Book an appointment <Arrow />
          </button>
          <a href="#spa-environmental" className="scroll-cue">
            <span>Discover Zenith</span>
            <Arrow down />
          </a>
        </div>
      </section>

      {/* SECTION IMMEDIATELY AFTER THE HERO — EXACT ZENITH SOURCE CONTENT */}
      <section id="spa-environmental" className="py-24 px-[7vw] bg-[#f9f9f7] text-[#193331] overflow-hidden border-b border-[#193331]/10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Row 1: SPA LIKE + Exterior Building Image + ENVIRONMENTAL */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-[#193331] uppercase leading-none">
                SPA LIKE
              </h2>
            </div>

            <div className="lg:col-span-4">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#304240]/10 bg-[#304240] h-64 sm:h-72 group">
                <img
                  src={SPA_EXTERIOR_IMG}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${A}clinic.jpg`; }}
                  alt="Zenith Dentistry Spa Like Exterior"
                  title="Unique Designed"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#193331] uppercase leading-none">
                ENVIRONMENTAL
              </h2>
            </div>
          </div>

          {/* Row 2: unique designed + Interior Dental Clinic Image + dentistry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal">
            <div className="lg:col-span-4 lg:text-right">
              <h3 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-[#304240] lowercase leading-none">
                unique designed
              </h3>
            </div>

            <div className="lg:col-span-4">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#304240]/10 bg-[#304240] h-64 sm:h-72 group">
                <img
                  src={SPA_INTERIOR_IMG}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${A}clinic-3.jpg`; }}
                  alt="Zenith Dentistry Clinic Interior"
                  title="Unique Designed"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <h3 className="font-serif text-5xl sm:text-7xl font-medium tracking-tight text-[#193331] lowercase leading-none">
                dentistry
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION — REDESIGNED WITH EXACT VERBATIM ZENITH CONTENT */}
      <section id="about" className="about section-pad bg-[#f3f1e9]">
        <div className="section-index">About Us</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12">
          {/* Left Column: Heading, Verbatim Paragraph, and CTA */}
          <div className="lg:col-span-6 space-y-8 reveal">
            <div className="space-y-3">
              <p className="eyebrow">About Us</p>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium leading-[0.95] text-[#193331]">
                Welcome to Zenith Dentistry
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#304240] leading-relaxed text-justify font-sans">
              ZENITH DENTISTRY is a highly regarded Dehiwala-Colombo with a spa-like environment that will make your next dental appointment unlike any other. We invite you to our unique loft space designed in a way that does not feel like a dentist office. One of our primary goals is to help make all our patients, young and old, feel at ease and comfortable during routine visits or complex dental restorations with much in house facilities like Dental X-rays (IOPA, OPG, Cephalogram) and Intra Oral Digital Scan.
            </p>

            <div className="pt-2">
              <a
                href={`${source}/about-us/`}
                title="Get to know us"
                className="text-link inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#304240] border-b-2 border-[#304240] pb-2 hover:opacity-80 transition"
              >
                get to know us <Arrow />
              </a>
            </div>

            <div className="credentials pt-6 border-t border-[#193331]/15 grid grid-cols-2 gap-6">
              <div>
                <b className="font-serif text-4xl font-normal text-[#304240] block">16</b>
                <span className="text-xs text-[#657673]">Years of compassionate care</span>
              </div>
              <div>
                <b className="font-serif text-4xl font-normal text-[#304240] block">ISO</b>
                <span className="text-xs text-[#657673]">9001:2015 certified clinic</span>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Zenith About Us Image */}
          <div className="lg:col-span-6 reveal">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#304240]/10 bg-[#304240] min-h-[420px] sm:min-h-[540px] group">
              <img
                src={ABOUT_HOME_IMG}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${A}about.webp`; }}
                alt="Zenith Dentistry"
                title="Zenith Dentistry"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / TREATMENTS SECTION — REBUILT WITH EXACT 8 HOMEPAGE ZENITH ITEMS */}
      <section id="services" className="services section-pad bg-[#dce7e3]">
        <div className="section-index">services</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline mt-8 mb-12 reveal">
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#304240]/75">
              services
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-serif text-4xl sm:text-6xl font-medium text-[#193331] leading-tight">
              We Provide Best Treatments
            </h2>
          </div>
        </div>

        {/* 4-Column Desktop Editorial Grid rendering exact 8 Zenith homepage items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ZENITH_HOMEPAGE_SERVICES.map((item, i) => (
            <div
              key={item.id}
              className="service-card reveal bg-[#f6f6f1] rounded-3xl overflow-hidden shadow-lg border border-[#304240]/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="service-photo h-52 relative overflow-hidden bg-[#304240]">
                  <img
                    src={item.remoteImage || `${A}${item.image}`}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${A}${item.image}`; }}
                    alt={item.title}
                    title={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center font-bold text-[10px] text-[#304240]">
                    0{i + 1}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-2xl font-semibold text-[#193331] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#667774] leading-relaxed">
                    {item.shortCopy}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#193331]/10 mt-auto flex items-center justify-between">
                <a
                  href={`${source}${item.href}`}
                  title="Read More"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#304240] hover:text-[#709b9d] transition"
                >
                  Read More <Arrow />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="pill dark-pill inline-flex" href={`${source}/our-service/`}>
            Explore all treatments <Arrow />
          </a>
        </div>
      </section>

      {/* TEAM / OUR SPECIALIZED DOCTORS SECTION */}
      <section id="team" className="team team-section section-pad bg-[#26383A] text-white" style={{ backgroundColor: "#26383A" }}>
        <div className="section-index light-index">TEAM</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12">
          {/* Left Column: Doctor Portrait Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#304240]/10 bg-[#304240] min-h-[420px] sm:min-h-[520px] group">
              <img
                src={DOCTORS_DATA[0]?.remoteImage || `${A}doctor.webp`}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${A}${DOCTORS_DATA[0]?.image || 'doctor.webp'}`; }}
                alt="Dr. Ahamed Fouzan, Founder of Zenith Dentistry"
                title="Dr. Ahamed Fouzan"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Transparent Text Overlay directly on Image */}
              <div className="doctor-overlay-card absolute left-6 bottom-6 sm:left-8 sm:bottom-8 z-10 p-0 max-w-[260px] sm:max-w-[280px]">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1 text-white">
                  FOUNDER
                </p>
                <h4 className="font-serif text-2xl sm:text-3xl font-medium leading-tight mb-3 text-white">
                  Dr. Ahamed<br />Fouzan
                </h4>
                <a
                  href={`${source}/dr-ahamed-fouzan/`}
                  title="KNOW MORE"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white border-b border-white pb-1 hover:opacity-80 transition"
                >
                  KNOW MORE <Arrow />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Section Header, Doctor Details, Verbatim Bio & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F3EE]/90">
                TEAM
              </p>
              <h2 className="font-serif text-4xl sm:text-6xl font-medium leading-[0.95] text-[#F5F3EE]">
                Our Specialized Doctors
              </h2>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/20">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F5F3EE]">
                  Dr. Ahamed Fouzan
                </h3>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-white bg-white/10 px-3 py-1 rounded-full">
                  Founder
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#D9DEDA] leading-relaxed text-justify font-sans">
              Dr. Fouzan began his dental career at Faculty Of Dental Sciences,University of Peradeniya, Kandy in 1997 earning his BDS (Bachelor in Dental Surgery) there in 2002. Spending five years of intense training in Peradeniya Dental Hospital and Kandy General hospital during his university career he chose to practice as full time private General Dental Practitioner, He became a dentist to help patients restore their smile and tooth function, because he feels it is a very gratifying goal to achieve.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href={`${source}/about-us/`}
                title="meet our team"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F5F3EE]/80 hover:text-[#F5F3EE] transition"
              >
                meet our team <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AAID CONVOCATION 2018 SECTION — STAGGERED MASONRY ZIG-ZAG LAYOUT */}
      <section className="section-pad bg-[#f6f6f1]">
        <div className="section-index">CONVOCATION</div>

        <div className="mt-8 mb-12 space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#709b9d]">
            CONVOCATION
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl font-medium text-[#193331] leading-tight">
            AAID Convocation 2018
          </h2>
        </div>

        {/* 2-Column Staggered Masonry Layout (Left Column & Vertically Offset Right Column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 max-w-7xl mx-auto items-start">
          {/* Left Column: Image 1, Image 3, Image 5 */}
          <div className="space-y-10 lg:space-y-16">
            {[
              {
                id: "aaid-1",
                img: `${A}aaid-1.webp`,
                remoteImg: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/1.webp",
                alt: "Dr. Ahamed Fouzan receiving AAID Convocation 2018 Certificate - Texas USA",
                title: "AAID Convocation 2018 - Texas-USA"
              },
              {
                id: "aaid-4",
                img: `${A}aaid-4.webp`,
                remoteImg: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/4.webp",
                alt: "AAID Convocation 2018 Presentation",
                title: "AAID Convocation 2018"
              },
              {
                id: "aaid-wcli-fellowship",
                img: `${A}aaid-wcli-fellowship.webp`,
                remoteImg: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/wcli-associate-fellowship-1.webp",
                alt: "WCLI Associate Fellowship - 2023 Bengaluru",
                title: "WCLI Associate Fellowship - 2023 Bengaluru"
              }
            ].map((item) => (
              <div
                key={item.id}
                className="relative rounded-[2rem] overflow-hidden shadow-xl border border-[#d6ddd9] bg-[#1e2e2c] flex items-center justify-center p-2.5 sm:p-4 group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
              >
                <img
                  src={item.img}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = item.remoteImg; }}
                  alt={item.alt}
                  title={item.title}
                  className="w-full h-auto object-contain rounded-[1.5rem] transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            ))}
          </div>

          {/* Right Column (Vertically Offset Downward): Image 2, Image 4 */}
          <div className="space-y-10 lg:space-y-16 pt-0 md:pt-20 lg:pt-28">
            {[
              {
                id: "aaid-3",
                img: `${A}aaid-3.webp`,
                remoteImg: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/3.webp",
                alt: "AAID Convocation 2018 Ceremony",
                title: "AAID Convocation 2018"
              },
              {
                id: "aaid-american-academy",
                img: `${A}aaid-american-academy.webp`,
                remoteImg: "https://www.zenithdentistry.lk/wp-content/uploads/2023/10/the-american-academy-of-implant-dentistry.webp",
                alt: "The American Academy of Implant Dentistry",
                title: "The American Academy of Implant Dentistry"
              }
            ].map((item) => (
              <div
                key={item.id}
                className="relative rounded-[2rem] overflow-hidden shadow-xl border border-[#d6ddd9] bg-[#1e2e2c] flex items-center justify-center p-2.5 sm:p-4 group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5"
              >
                <img
                  src={item.img}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = item.remoteImg; }}
                  alt={item.alt}
                  title={item.title}
                  className="w-full h-auto object-contain rounded-[1.5rem] transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZED HIGH END DENTAL SERVICES SECTION */}
      <section className="bg-[#304240] text-white section-pad text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium leading-tight text-[#F5F3EE]">
            Personalized high end Dental Services
          </h2>
          <div>
            <button
              onClick={() => handleBook()}
              title="Book An Appointment"
              className="pill light-pill cursor-pointer border-0 bg-transparent mx-auto inline-flex items-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#193331] transition-colors"
            >
              Book An Appointment <Arrow />
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonials_section section-pad bg-[#719b9b] text-white overflow-hidden">
        <div className="section-index light-index mb-4">testimonial</div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              testimonial
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium leading-tight text-white">
              See What our Patients Say
            </h2>
          </div>

          {/* 4 Review Cards Side-by-Side Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
          {(() => {
            const activeSet = PATIENT_TESTIMONIALS.slice(
              (currentTestimonialIndex % 2) * 4,
              (currentTestimonialIndex % 2) * 4 + 4
            );

            return (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                  {activeSet.map((t) => (
                    <div
                      key={t.id}
                      className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 sm:p-7 border border-white/20 shadow-xl flex flex-col justify-between h-full space-y-6 transition-all duration-300 hover:bg-white/15"
                    >
                      <div className="space-y-4">
                        {/* 5-Star Rating Graphic */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4"
                              style={{ fill: "#f59e0b", stroke: "none" }}
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>

                        {/* Verbatim Review Quote */}
                        <p className="font-serif text-xs sm:text-sm leading-relaxed text-white/95 italic font-light">
                          "{t.quote}"
                        </p>
                      </div>

                      {/* Profile / Patient Details */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/15">
                        <div className="w-11 h-11 rounded-full overflow-hidden bg-white/20 border border-white/30 p-0.5 flex-shrink-0">
                          <img
                            src={`${A}${t.avatar}`}
                            onError={(e) => { (e.currentTarget as HTMLImageElement).src = t.remoteAvatar; }}
                            alt={t.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-serif text-base font-semibold text-white leading-tight">
                            {t.name}
                          </h3>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                            {t.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    {[0, 1].map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentTestimonialIndex(page)}
                        aria-label={`Go to page ${page + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          (currentTestimonialIndex % 2) === page ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setCurrentTestimonialIndex((prev) => (prev === 0 ? 1 : prev - 1))}
                      aria-label="Previous Reviews"
                      className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-[#193331] transition-colors"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setCurrentTestimonialIndex((prev) => (prev === 1 ? 0 : prev + 1))}
                      aria-label="Next Reviews"
                      className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-[#193331] transition-colors"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* View All Reviews Option */}
          <div className="text-center pt-4">
            <a
              href={`${source}/testimonials/`}
              title="view all reviews"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-white border-b-2 border-white pb-2 hover:opacity-80 transition-opacity"
            >
              View all Reviews <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* PATIENTS TREATED SECTION — USES EXACT STATISTICS SECTION BG COLOR #f3f1e9 */}
      <section id="patients-treated" className="patients_treated_section section-pad bg-[#f3f1e9] text-[#193331] overflow-hidden">
        <div className="section-index mb-8">Patients Treated</div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Main Content Area: Left Heading & Copy + Right Team / Counter Photograph */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center reveal">
            {/* Left Side Content Area */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <p className="eyebrow text-[#304240]/80">our track record</p>
                <h2 className="font-serif text-4xl sm:text-6xl font-medium leading-[0.95] text-[#193331]">
                  Patients Treated
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#405956] leading-relaxed">
                Dedicated to clinical excellence and patient-first care, Zenith Dentistry has delivered thousands of healthy, confident smiles to patients across Sri Lanka and worldwide.
              </p>
            </div>

            {/* Right Side: Existing Team / Counter Photograph */}
            <div className="lg:col-span-7">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#304240]/10 bg-[#f3f1e9] min-h-[320px] group">
                <img
                  src={`${A}counter.webp`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `${A}clinic.jpg`;
                  }}
                  alt="Patients Treated"
                  title="Patients Treated"
                  className="w-full h-full min-h-[320px] object-cover block transition-transform duration-700 group-hover:scale-105"
                  style={{ opacity: 1, filter: "none", mixBlendMode: "normal" }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Area: 5 Matching Statistic Cards in a Single Horizontal Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {PATIENTS_TREATED_STATS.map((item, idx) => (
              <div
                key={item.id}
                className={`reveal-fade-up delay-${idx + 1} bg-[#f6f6f1] rounded-[2rem] p-6 sm:p-7 border border-[#d6ddd9] shadow-sm flex flex-col items-center justify-between text-center space-y-5 h-full min-h-[210px] transition-all duration-300 hover:shadow-md hover:-translate-y-1 group`}
              >
                {/* White Icon Box */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center p-3 shadow-md border border-[#d6ddd9]/50 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={`${A}${item.icon}`}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = "true";
                        target.src = `${A}${item.fallbackIcon}`;
                      }
                    }}
                    alt={item.label}
                    title={item.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain block opacity-100"
                    style={{ opacity: 1, filter: "none" }}
                  />
                </div>

                {/* Counter Number & Label */}
                <div className="space-y-1.5 w-full">
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#304240] leading-none">
                    <AnimatedCounter value={item.count} />
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#193331] leading-snug tracking-wide uppercase">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG & ARTICLE SECTION — LATEST UPDATES AND NEWS */}
      <section id="blog" className="journal section-pad bg-[#B8D8D5] overflow-hidden">
        <div className="section-index mb-8">BLOG & ARTICLE</div>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 reveal">
            <p className="eyebrow text-[#304240]/80">BLOG & ARTICLE</p>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium leading-[0.95] text-[#193331]">
              Latest Updates And News
            </h2>
          </div>

          {/* 3 Article Cards Grid (Side-by-Side on Desktop, Stacked on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch reveal">
            {/* Card 1 */}
            <div className="bg-[#f6f6f1] rounded-[2rem] p-6 sm:p-8 border border-[#d6ddd9] shadow-sm flex flex-col justify-between h-full space-y-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
              <div className="space-y-3">
                <a
                  href={`${source}/blog/brushing-techniques/`}
                  className="font-serif text-2xl sm:text-3xl font-semibold text-[#193331] leading-snug hover:text-[#709b9d] transition-colors block"
                >
                  Brushing Techniques
                </a>
                <p className="text-sm text-[#405956] leading-relaxed">
                  How important is brushing? Brushing is very important as it keeps our teeth and gums healthy. It helps to clean dirt between the gums and the teeth...
                </p>
              </div>

              <div className="pt-4 border-t border-[#193331]/15 flex items-center justify-between">
                <span className="text-xs font-bold text-[#657673] uppercase tracking-wider">
                  October 1st, 2024
                </span>
                <a
                  href={`${source}/blog/brushing-techniques/`}
                  className="text-xs font-bold uppercase tracking-wider text-[#304240] hover:text-[#709b9d] inline-flex items-center gap-2 transition-colors"
                >
                  Read Article <Arrow />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f6f6f1] rounded-[2rem] p-6 sm:p-8 border border-[#d6ddd9] shadow-sm flex flex-col justify-between h-full space-y-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
              <div className="space-y-3">
                <a
                  href={`${source}/blog/what-are-the-most-common-causes-of-bleeding-in-the-gums/`}
                  className="font-serif text-2xl sm:text-3xl font-semibold text-[#193331] leading-snug hover:text-[#709b9d] transition-colors block"
                >
                  What are the most common causes of bleeding in the gums?
                </a>
                <p className="text-sm text-[#405956] leading-relaxed">
                  Have you noticed your gums bleeding unexpectedly? Does this happen when you floss or brush your teeth? While a little blood after brushing, flossing...
                </p>
              </div>

              <div className="pt-4 border-t border-[#193331]/15 flex items-center justify-between">
                <span className="text-xs font-bold text-[#657673] uppercase tracking-wider">
                  October 21st, 2023
                </span>
                <a
                  href={`${source}/blog/what-are-the-most-common-causes-of-bleeding-in-the-gums/`}
                  className="text-xs font-bold uppercase tracking-wider text-[#304240] hover:text-[#709b9d] inline-flex items-center gap-2 transition-colors"
                >
                  Read Article <Arrow />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f6f6f1] rounded-[2rem] p-6 sm:p-8 border border-[#d6ddd9] shadow-sm flex flex-col justify-between h-full space-y-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
              <div className="space-y-3">
                <a
                  href={`${source}/blog/how-do-you-deal-with-the-difficulties-of-misaligned-teeth/`}
                  className="font-serif text-2xl sm:text-3xl font-semibold text-[#193331] leading-snug hover:text-[#709b9d] transition-colors block"
                >
                  How do you deal with the difficulties of Misaligned teeth?
                </a>
                <p className="text-sm text-[#405956] leading-relaxed">
                  Dental Misalignment is a physical and functional mouth defect that is more widespread than you might think. Very often, Misaligned teeth...
                </p>
              </div>

              <div className="pt-4 border-t border-[#193331]/15 flex items-center justify-between">
                <span className="text-xs font-bold text-[#657673] uppercase tracking-wider">
                  October 16th, 2023
                </span>
                <a
                  href={`${source}/blog/how-do-you-deal-with-the-difficulties-of-misaligned-teeth/`}
                  className="text-xs font-bold uppercase tracking-wider text-[#304240] hover:text-[#709b9d] inline-flex items-center gap-2 transition-colors"
                >
                  Read Article <Arrow />
                </a>
              </div>
            </div>
          </div>

          {/* READ OUR BLOG Button */}
          <div className="text-center pt-4 reveal">
            <a
              href={`${source}/blog/`}
              title="read our blog"
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-[#304240] border-b-2 border-[#304240] pb-2 hover:opacity-80 transition-opacity"
            >
              READ OUR BLOG <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section id="contact-us" className="section-pad bg-[#dce7e3]">
        <div className="section-index">07 / Contact Us</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl sm:text-6xl font-medium text-[#193331]">
              Reach out to<br />Zenith Dentistry.
            </h2>
            <div className="space-y-3 text-sm text-[#405956]">
              <p>📍 <strong>Address:</strong> {ZENITH_CONTACT.addressLine1}, {ZENITH_CONTACT.addressLine2}</p>
              <p>📞 <strong>Phone:</strong> <a href={`tel:${ZENITH_CONTACT.phones[0]}`} className="underline font-bold">{ZENITH_CONTACT.displayPhones[0]}</a> / <a href={`tel:${ZENITH_CONTACT.phones[1]}`} className="underline font-bold">{ZENITH_CONTACT.displayPhones[1]}</a></p>
              <p>✉️ <strong>Email:</strong> <a href={`mailto:${ZENITH_CONTACT.email}`} className="underline">{ZENITH_CONTACT.email}</a></p>
            </div>
            <div>
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-[#304240] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#193331] transition inline-flex items-center gap-2"
              >
                View Contact Form <Arrow />
              </Link>
            </div>
          </div>

          {/* Right Side: Interactive Google Map replacing image */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[380px] w-full border border-[#304240]/10 bg-[#304240]">
            <iframe
              title="Zenith Dentistry Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.328405073144!2d79.8661633!3d6.8512144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b42c4b57421%3A0xbce54117b8f9e612!2s55%20Hospital%20Rd%2C%20Dehiwala-Mount%20Lavinia!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={selectedService}
      />
    </main>
  );
}
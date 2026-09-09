import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DOCTORS_DATA } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/dr-ahamed-fouzan/")({
  component: DrAhamedFouzanProfilePage,
});

const A = "/assets/zenith/";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[1.6] stroke-linecap-round stroke-linejoin-round">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

const doctor = DOCTORS_DATA[0];

export function DrAhamedFouzanProfilePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f3f1e9] text-[#193331]">
      <Header />

      {/* DR. AHAMED FOUZAN PROFILE HERO & BIOGRAPHY SECTION */}
      <section className="pt-36 pb-20 px-[7vw] bg-[#304240] text-white">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow light text-xs font-bold uppercase tracking-[0.2em] text-[#709b9d] mb-4">
            Zenith Dentistry · Founder & Lead Dental Surgeon
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-none mb-8 text-[#F5F3EE]">
            Dr. Ahamed Fouzan
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
            {/* Doctor Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-[#26383A] min-h-[440px]">
                <img
                  src={doctor.remoteImage || `${A}our-doctor.webp`}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = `${A}doctor.webp`; }}
                  alt="Dr. Ahamed Fouzan, Founder of Zenith Dentistry"
                  title="Dr. Ahamed Fouzan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-6 bottom-6 z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md text-white border border-white/30">
                    Founder
                  </span>
                </div>
              </div>
            </div>

            {/* Doctor Details & Biography */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#F5F3EE]">
                  Biography & Background
                </h2>
                <div className="flex flex-wrap gap-2 pt-2">
                  {doctor.qualifications.map((q) => (
                    <span
                      key={q}
                      className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full font-medium border border-white/10"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#D9DEDA] leading-relaxed text-justify font-sans">
                {doctor.bio}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-white/15">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="pill dark-pill cursor-pointer border-0 m-0 bg-[#709b9d] text-white hover:bg-[#5f8789] transition-colors"
                >
                  Schedule Consultation <Arrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: AWARDS FOR TOP PERFORMING */}
      <section className="section-pad bg-[#F9F3EE]" style={{ backgroundColor: "#F9F3EE" }}>
        <div className="max-w-7xl mx-auto">
          {/* Header text */}
          <div className="space-y-3 mb-14 text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#709b9d]">
              Got We Deserve
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium text-[#193331] leading-tight">
              Awards For Top Performing
            </h2>
          </div>

          {/* Awards Editorial Grid (Desktop: 2 Columns, Mobile: Stacked Vertically) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* AWARD 01: Gold Winner */}
            <div className="bg-[#f6f6f1] rounded-[2rem] p-6 sm:p-8 border border-[#d6ddd9] shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              {/* Award Certificate Image */}
              <div className="relative rounded-2xl overflow-hidden bg-white p-3 border border-[#e5ece8] shadow-inner mb-6 flex items-center justify-center min-h-[260px] sm:min-h-[340px]">
                <img
                  src={`${A}gold_winner.png`}
                  alt="Gold Winner Award Certificate"
                  title="Gold Winner"
                  className="w-full h-auto max-h-[420px] object-contain rounded-xl"
                />
              </div>

              {/* Award Details */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <img
                    src={`${A}gold_winner_icon.png`}
                    alt="Gold Winner Icon"
                    className="w-8 h-8 object-contain"
                  />
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#193331]">
                    Gold Winner
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#405956] leading-relaxed font-sans">
                  Best Practise In Srilanka Dental Awards By ORAM 2018
                </p>
              </div>
            </div>

            {/* AWARD 02: Runner Up */}
            <div className="bg-[#f6f6f1] rounded-[2rem] p-6 sm:p-8 border border-[#d6ddd9] shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              {/* Award Certificate Image */}
              <div className="relative rounded-2xl overflow-hidden bg-white p-3 border border-[#e5ece8] shadow-inner mb-6 flex items-center justify-center min-h-[260px] sm:min-h-[340px]">
                <img
                  src={`${A}runner_up.png`}
                  alt="Runner Up Award Certificate"
                  title="Runner Up"
                  className="w-full h-auto max-h-[420px] object-contain rounded-xl"
                />
              </div>

              {/* Award Details */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <img
                    src={`${A}runner_up_icon.png`}
                    alt="Runner Up Icon"
                    className="w-8 h-8 object-contain"
                  />
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#193331]">
                    Runner Up
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#405956] leading-relaxed font-sans">
                  Best Patient Care In Srilanka Dental Awards By ORAM 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AppointmentModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}

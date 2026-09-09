import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DOCTORS_DATA } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/doctors")({
  component: DoctorsPage,
});

const A = "/assets/zenith/";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function DoctorsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f3f1e9] text-[#193331]">
      <Header />

      {/* Header */}
      <section className="pt-36 pb-16 px-[7vw] bg-[#304240] text-white">
        <div className="max-w-4xl">
          <p className="eyebrow light">Clinical Excellence & Compassion</p>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-none mt-6 mb-6">
            Meet our dental<br />
            <em className="font-light italic">specialists.</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Our team brings over 16 years of clinical mastery, advanced postgraduate training in implantology and clear aligner therapy, and a shared dedication to patient comfort.
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="team-section section-pad bg-[#F9F3EE]" style={{ backgroundColor: "#F9F3EE" }}>
        <div className="section-index">01 / Lead Dental Surgeons</div>

        <div className="mt-12 space-y-16">
          {DOCTORS_DATA.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-[#f6f6f1] rounded-[2.5rem] overflow-hidden p-8 sm:p-12 border border-[#d6ddd9] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="h-[480px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={`${A}${doctor.image}`}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <span className="px-3.5 py-1.5 bg-[#709b9d]/20 text-[#304240] text-xs font-bold uppercase tracking-wider rounded-full">
                  {doctor.title}
                </span>

                <h2 className="font-serif text-4xl sm:text-5xl font-medium text-[#193331]">
                  {doctor.name}
                </h2>

                <p className="text-xs font-bold text-[#657673] uppercase tracking-wider">
                  {doctor.designation}
                </p>

                <p className="text-sm text-[#405956] leading-relaxed">
                  {doctor.bio}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#193331]/15">
                  <p className="text-xs uppercase tracking-wider font-bold text-[#304240]">
                    Specializations & Expertise:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((s) => (
                      <span key={s} className="px-3 py-1 bg-[#dce7e3] text-[#193331] text-xs rounded-full font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="pill dark-pill cursor-pointer border-0 m-0"
                  >
                    Schedule Consultation <Arrow />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <AppointmentModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FACILITIES_DATA } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/facilities")({
  component: FacilitiesPage,
});

const A = "/assets/zenith/";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function FacilitiesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f3f1e9] text-[#193331]">
      <Header />

      {/* Header */}
      <section className="pt-36 pb-16 px-[7vw] bg-[#304240] text-white">
        <div className="max-w-4xl">
          <p className="eyebrow light">Designed For Calm & Precision</p>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-none mt-6 mb-6">
            Facilities &<br />
            <em className="font-light italic">technology.</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Our clinic combines ISO 9001:2015 certified sterilization standards with state-of-the-art 3D intraoral digital scanners, in-house digital X-rays, and serene lounges designed to put every patient at ease.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad">
        <div className="section-index">01 / State-of-the-Art Clinic Infrastructure</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {FACILITIES_DATA.map((fac) => (
            <div key={fac.id} className="bg-[#f6f6f1] rounded-[2rem] overflow-hidden border border-[#d6ddd9] shadow-lg flex flex-col justify-between">
              {fac.image && (
                <div className="h-64 relative overflow-hidden">
                  <img src={`${A}${fac.image}`} alt={fac.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#304240]/80 backdrop-blur text-white text-[10px] uppercase font-bold tracking-wider rounded-full">
                    {fac.highlight}
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="font-serif text-3xl font-medium mb-3">{fac.title}</h3>
                <p className="text-xs text-[#667774] leading-relaxed">{fac.description}</p>
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

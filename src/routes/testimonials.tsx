import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TESTIMONIALS_DATA } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#304240] text-white">
      <Header />

      {/* Header */}
      <section className="pt-36 pb-16 px-[7vw]">
        <div className="max-w-4xl">
          <p className="eyebrow light">Patient Stories & Feedback</p>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-none mt-6 mb-6">
            Words from those<br />
            <em className="font-light italic">we’ve cared for.</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Read genuine experiences from local and international patients who placed their smiles in our hands.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-pad pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="bg-[#719b9b] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="font-serif text-6xl leading-none text-white/40 block mb-2">“</span>
                <blockquote className="font-serif text-xl sm:text-2xl font-light leading-relaxed mb-6">
                  {t.quote}
                </blockquote>
              </div>
              <div className="pt-6 border-t border-white/20">
                <p className="font-bold text-sm">{t.patientName}</p>
                <p className="text-xs text-white/80">{t.location} · {t.treatment}</p>
                <div className="text-yellow-300 text-xs mt-2 font-bold">
                  {"★".repeat(t.rating)}
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

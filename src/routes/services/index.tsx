import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES_DATA } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/services/")({
  component: ServicesIndexPage,
});

const A = "/assets/zenith/";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function ServicesIndexPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState("");

  const handleBook = (title: string) => {
    setSelectedServiceTitle(title);
    setBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#dce7e3] text-[#193331]">
      <Header />

      {/* Header */}
      <section className="pt-36 pb-16 px-[7vw] bg-[#304240] text-white">
        <div className="max-w-4xl">
          <p className="eyebrow light">Comprehensive Dental Care</p>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-none mt-6 mb-6 font-normal">
            Precision care,<br />
            <em className="font-light italic">made personal.</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            From preventive check-ups to advanced implant surgery and clear aligner orthodontics, explore our full spectrum of specialized treatments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad">
        <div className="section-index">All Treatments & Services</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SERVICES_DATA.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#f6f6f1] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-60 relative overflow-hidden">
                  <img
                    src={`${A}${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-[#304240]/80 backdrop-blur text-white text-[10px] uppercase font-bold tracking-wider rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="font-serif text-3xl font-semibold text-[#193331] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#667774] leading-relaxed mb-6">
                    {item.shortCopy}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-[#709b9d]">
                      Key Highlights:
                    </p>
                    <ul className="text-xs text-[#405956] space-y-1">
                      {item.benefits.slice(0, 2).map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="text-[#709b9d] font-bold">•</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between gap-4 border-t border-[#193331]/10 mt-auto">
                <Link
                  to="/services/$serviceSlug"
                  params={{ serviceSlug: item.slug }}
                  className="text-xs font-bold uppercase tracking-wider text-[#304240] hover:underline flex items-center gap-2"
                >
                  Full Details <Arrow />
                </Link>
                <button
                  onClick={() => handleBook(item.title)}
                  className="px-4 py-2 bg-[#304240] text-white text-[10px] font-bold uppercase tracking-wider rounded-full hover:bg-[#193331] transition"
                >
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={selectedServiceTitle}
      />
    </main>
  );
}

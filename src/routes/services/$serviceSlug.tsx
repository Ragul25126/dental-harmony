import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES_DATA } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/services/$serviceSlug")({
  component: ServiceDetailPage,
});

const A = "/assets/zenith/";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function ServiceDetailPage() {
  const { serviceSlug } = Route.useParams();
  const [bookingOpen, setBookingOpen] = useState(false);

  const service = SERVICES_DATA.find((s) => s.slug === serviceSlug) || SERVICES_DATA[0];

  return (
    <main className="min-h-screen bg-[#f3f1e9] text-[#193331]">
      <Header />

      {/* Header */}
      <section className="pt-36 pb-16 px-[7vw] bg-[#304240] text-white">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#709b9d] mb-4">
            <Link to="/services" className="hover:underline">Treatments</Link>
            <span>/</span>
            <span>{service.category}</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            {service.shortCopy}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="rounded-3xl overflow-hidden shadow-xl h-[400px]">
              <img
                src={`${A}${service.image}`}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="font-serif text-3xl font-medium mb-4">About this Treatment</h2>
              <p className="text-[#405956] text-base leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-serif text-2xl font-medium mb-4">Key Clinical Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="p-4 bg-[#f6f6f1] rounded-2xl border border-[#d6ddd9] flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#709b9d]/20 text-[#304240] flex items-center justify-center font-bold text-xs shrink-0">
                      ✓
                    </span>
                    <p className="text-xs text-[#304240] leading-normal">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div>
              <h3 className="font-serif text-2xl font-medium mb-4">Treatment Journey</h3>
              <div className="space-y-4">
                {service.procedureSteps.map((step, idx) => (
                  <div key={idx} className="p-5 bg-[#dce7e3] rounded-2xl flex items-start gap-4">
                    <span className="font-serif text-2xl font-bold text-[#304240]">0{idx + 1}</span>
                    <p className="text-xs text-[#304240] leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <div>
                <h3 className="font-serif text-2xl font-medium mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-6 bg-white rounded-2xl border border-[#d6ddd9] space-y-2">
                      <h4 className="font-serif text-lg font-semibold text-[#193331]">{faq.question}</h4>
                      <p className="text-xs text-[#657673] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA Card */}
          <div className="space-y-8">
            <div className="p-8 bg-[#304240] text-white rounded-3xl sticky top-28 space-y-6 shadow-xl">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#709b9d]">
                Zenith Appointment
              </span>
              <h3 className="font-serif text-3xl font-medium">Ready to discuss {service.title}?</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Book a personal consultation with our lead specialists in Dehiwala.
              </p>
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full py-3.5 bg-white text-[#304240] hover:bg-[#f3f1e9] text-xs uppercase tracking-widest font-bold rounded-full transition flex items-center justify-center gap-2"
              >
                Book Consultation <Arrow />
              </button>
              <div className="pt-4 border-t border-white/20 text-xs text-white/70 space-y-2">
                <p>📍 #55, Hospital Road, Dehiwala</p>
                <p>📞 011 272 7477 / 011 490 2655</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={service.title}
      />
    </main>
  );
}

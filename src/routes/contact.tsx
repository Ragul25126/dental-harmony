import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ZENITH_CONTACT } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const A = "/assets/zenith/";

function ContactPage() {
  useScrollReveal();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#f3f1e9] text-[#193331]">
      <Header />

      {/* Header */}
      <section className="pt-36 pb-16 px-[7vw] bg-[#304240] text-white">
        <div className="max-w-4xl reveal-fade-up">
          <p className="eyebrow light">We Are Here To Help</p>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-none mt-6 mb-6">
            Get in touch with<br />
            <em className="font-light italic">Zenith Dentistry.</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Located in Dehiwala, Sri Lanka. Contact our reception team to schedule your visit or ask any treatment questions.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Details */}
          <div className="space-y-8 reveal-fade-up delay-1">
            <div className="p-8 bg-[#f6f6f1] rounded-3xl border border-[#d6ddd9] space-y-6">
              <h2 className="font-serif text-3xl font-medium">Clinic Information</h2>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#709b9d] block mb-1">Location Address</span>
                <p className="text-base font-semibold text-[#193331]">
                  {ZENITH_CONTACT.addressLine1}<br />
                  {ZENITH_CONTACT.addressLine2}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#709b9d] block mb-1">Telephone & Appointments</span>
                {ZENITH_CONTACT.phones.map((phone, i) => (
                  <a key={phone} href={`tel:${phone}`} className="block text-sm font-semibold text-[#304240] hover:underline">
                    {ZENITH_CONTACT.displayPhones[i]}
                  </a>
                ))}
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#709b9d] block mb-1">WhatsApp & Direct Chat</span>
                <a
                  href={ZENITH_CONTACT.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[#25D366] hover:underline block"
                >
                  {ZENITH_CONTACT.displayWhatsapp} (Instant Response)
                </a>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#709b9d] block mb-1">Email Inquiries</span>
                <a href={`mailto:${ZENITH_CONTACT.email}`} className="text-sm font-semibold text-[#304240] hover:underline">
                  {ZENITH_CONTACT.email}
                </a>
              </div>

              <div className="pt-4 border-t border-[#193331]/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#709b9d] block mb-2">Opening Hours</span>
                {ZENITH_CONTACT.hours.map((h) => (
                  <div key={h.days} className="flex justify-between text-xs text-[#657673] py-1">
                    <span>{h.days}</span>
                    <span className="font-semibold text-[#193331]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-[#304240] text-white rounded-3xl space-y-4">
              <h3 className="font-serif text-2xl font-normal">Need an urgent appointment?</h3>
              <p className="text-xs text-white/80">
                Call our direct reception line or send a message via WhatsApp for prompt assistance.
              </p>
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full py-3.5 bg-white text-[#304240] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#f3f1e9] transition"
              >
                Book Appointment Online
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#d6ddd9] shadow-xl space-y-6">
            <h2 className="font-serif text-3xl font-medium text-[#193331]">Send a Message</h2>
            <p className="text-xs text-[#667774]">
              Have a question about treatment options or international patient arrangements? Leave us a message below.
            </p>

            {sent ? (
              <div className="p-6 bg-[#dce7e3] text-[#193331] rounded-2xl space-y-3 text-center">
                <span className="text-3xl font-bold">✓</span>
                <h3 className="font-serif text-xl font-semibold">Message Received</h3>
                <p className="text-xs text-[#405956]">
                  Thank you, {name}. Our team will review your message and reply via email or phone shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 text-xs text-[#304240]">
                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-[#d0dad6] bg-[#f8f8f4] focus:outline-none focus:ring-2 focus:ring-[#709b9d]"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#d0dad6] bg-[#f8f8f4] focus:outline-none focus:ring-2 focus:ring-[#709b9d]"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                    Message / Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can Zenith Dentistry help you?"
                    className="w-full px-4 py-3 rounded-xl border border-[#d0dad6] bg-[#f8f8f4] focus:outline-none focus:ring-2 focus:ring-[#709b9d]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#304240] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#193331] transition shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <AppointmentModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES_DATA, ZENITH_CONTACT } from "@/lib/zenith-data";
import { useState } from "react";

export const Route = createFileRoute("/appointment")({
  component: AppointmentPage,
});

function AppointmentPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(SERVICES_DATA[0].title);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date) {
      setError("Please fill out your full name, contact phone number, and preferred date.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f3f1e9] text-[#193331]">
      <Header />

      {/* Header */}
      <section className="pt-36 pb-16 px-[7vw] bg-[#304240] text-white">
        <div className="max-w-4xl">
          <p className="eyebrow light">Zenith Online Booking</p>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-none mt-6 mb-6">
            Book your visit to<br />
            <em className="font-light italic">Zenith Dentistry.</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Choose your preferred date, time, and service. Our team in Dehiwala will verify and confirm your appointment.
          </p>
        </div>
      </section>

      {/* Booking Form Card */}
      <section className="section-pad max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d6ddd9] shadow-2xl">
          {submitted ? (
            <div className="text-center space-y-6 py-8">
              <div className="w-20 h-20 bg-[#709b9d]/20 text-[#304240] rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h2 className="font-serif text-4xl font-medium text-[#193331]">
                Appointment Request Received
              </h2>
              <p className="text-sm text-[#556966] max-w-md mx-auto leading-relaxed">
                Thank you, {name}. We have received your booking request for <strong>{service}</strong> on <strong>{date} at {time}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/94705068621?text=${encodeURIComponent(`Hello Zenith Dentistry, I requested an appointment for ${name} on ${date} for ${service}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:brightness-105 transition"
                >
                  Confirm Instant via WhatsApp
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3.5 bg-[#304240] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#193331] transition"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs text-[#304240]">
              <h2 className="font-serif text-3xl font-medium text-[#193331] mb-2">
                Patient Details
              </h2>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs">
                  {error}
                </div>
              )}

              <div>
                <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#d0dad6] bg-[#f8f8f4] focus:outline-none focus:ring-2 focus:ring-[#709b9d] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="077 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d0dad6] bg-[#f8f8f4] focus:outline-none focus:ring-2 focus:ring-[#709b9d] text-sm"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d0dad6] bg-[#f8f8f4] focus:outline-none focus:ring-2 focus:ring-[#709b9d] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                  Select Treatment / Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#d0dad6] bg-[#f8f8f4] focus:outline-none focus:ring-2 focus:ring-[#709b9d] text-sm"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Consultation">General Examination & Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d0dad6] bg-[#f8f8f4] focus:outline-none focus:ring-2 focus:ring-[#709b9d] text-sm"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                    Preferred Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d0dad6] bg-[#f8f8f4] focus:outline-none focus:ring-2 focus:ring-[#709b9d] text-sm"
                  >
                    <option value="09:30 AM">09:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                  Special Requests or Medical Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe any symptoms or specific requests..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#d0dad6] bg-[#f8f8f4] focus:outline-none focus:ring-2 focus:ring-[#709b9d] text-sm"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#304240] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#193331] transition shadow-lg"
                >
                  Submit Appointment Request
                </button>
              </div>

              <p className="text-[10px] text-center text-[#78908c] mt-4">
                Need immediate assistance? Call our Dehiwala clinic at{" "}
                <a href={`tel:${ZENITH_CONTACT.phones[0]}`} className="font-bold underline text-[#304240]">
                  {ZENITH_CONTACT.displayPhones[0]}
                </a>
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

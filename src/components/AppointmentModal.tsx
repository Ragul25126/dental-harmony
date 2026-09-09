import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SERVICES_DATA, ZENITH_CONTACT } from "@/lib/zenith-data";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function AppointmentModal({ isOpen, onClose, preselectedService }: AppointmentModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(preselectedService || SERVICES_DATA[0].title);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date) {
      setError("Please fill out your name, contact phone number, and preferred date.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
    setError("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleReset()}>
      <DialogContent className="sm:max-w-[500px] bg-[#f8f8f4] border border-[#dce7e3] p-6 sm:p-8 rounded-3xl shadow-2xl text-[#193331]">
        <DialogHeader className="mb-4">
          <DialogTitle className="font-serif text-3xl font-medium text-[#193331]">
            {submitted ? "Appointment Requested" : "Book Your Appointment"}
          </DialogTitle>
          <DialogDescription className="text-sm text-[#556966] mt-1">
            {submitted
              ? "Thank you for reaching out to Zenith Dentistry. Our reception will contact you shortly to confirm."
              : "Select your preferred date and treatment. We will confirm your visit promptly."}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 bg-[#709b9d]/20 text-[#304240] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <div className="bg-white p-4 rounded-2xl border border-[#d6ddd9] text-left text-xs space-y-2 text-[#405956]">
              <p><strong>Patient Name:</strong> {name}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Treatment:</strong> {service}</p>
              <p><strong>Preferred Date:</strong> {date} ({time})</p>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={`https://wa.me/94705068621?text=${encodeURIComponent(`Hello Zenith Dentistry, I requested an appointment for ${name} on ${date} for ${service}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:brightness-105 transition flex items-center justify-center gap-2"
              >
                Confirm via WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="w-full py-3 px-4 bg-[#304240] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#193331] transition"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs text-[#304240]">
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs">
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
                className="w-full px-4 py-2.5 rounded-xl border border-[#d0dad6] bg-white focus:outline-none focus:ring-2 focus:ring-[#709b9d]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d0dad6] bg-white focus:outline-none focus:ring-2 focus:ring-[#709b9d]"
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
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d0dad6] bg-white focus:outline-none focus:ring-2 focus:ring-[#709b9d]"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                Select Treatment
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#d0dad6] bg-white focus:outline-none focus:ring-2 focus:ring-[#709b9d]"
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="General Consultation">General Consultation / Examination</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d0dad6] bg-white focus:outline-none focus:ring-2 focus:ring-[#709b9d]"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 uppercase tracking-wider text-[10px] text-[#687a77]">
                  Preferred Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d0dad6] bg-white focus:outline-none focus:ring-2 focus:ring-[#709b9d]"
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
                Additional Notes
              </label>
              <textarea
                rows={2}
                placeholder="Mention any specific concerns or pain..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#d0dad6] bg-white focus:outline-none focus:ring-2 focus:ring-[#709b9d]"
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-[#304240] hover:bg-[#193331] text-white font-bold text-xs uppercase tracking-widest rounded-full transition shadow-lg flex items-center justify-center gap-2"
              >
                Submit Booking Request
              </button>
            </div>
            <p className="text-[10px] text-center text-[#78908c] mt-2">
              Or call reception directly at <a href={`tel:${ZENITH_CONTACT.phones[0]}`} className="underline font-bold">{ZENITH_CONTACT.displayPhones[0]}</a>
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

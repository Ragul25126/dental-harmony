import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GALLERY_IMAGES } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const A = "/assets/zenith/";

function GalleryPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Clinic Interior", "Treatments", "Technology", "Clinical"];

  const filteredImages = activeCategory === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#f3f1e9] text-[#193331]">
      <Header />

      {/* Header */}
      <section className="pt-36 pb-16 px-[7vw] bg-[#304240] text-white">
        <div className="max-w-4xl">
          <p className="eyebrow light">Visual Insights</p>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-none mt-6 mb-6">
            Clinic & smile<br />
            <em className="font-light italic">gallery.</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Take a visual tour of our Dehiwala clinic environment, state-of-the-art diagnostic equipment, and patient transformation results.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="section-pad">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 pb-8 border-b border-[#193331]/15 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                activeCategory === cat
                  ? "bg-[#304240] text-white"
                  : "bg-[#f6f6f1] text-[#657673] hover:bg-[#dce7e3]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-[#304240] h-[320px] shadow-lg"
            >
              <img
                src={`${A}${item.url}`}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142e2b]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#709b9d]">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-medium leading-snug">
                  {item.title}
                </h3>
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

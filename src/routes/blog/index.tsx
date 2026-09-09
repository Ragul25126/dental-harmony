import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BLOG_ARTICLES } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexPage,
});

const A = "/assets/zenith/";

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function BlogIndexPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#B8D8D5] text-[#193331]">
      <Header />

      {/* Header */}
      <section className="pt-36 pb-16 px-[7vw] bg-[#B8D8D5] text-[#193331]">
        <div className="max-w-4xl">
          <p className="eyebrow light">Zenith Dental Journal</p>
          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-none mt-6 mb-6">
            Knowledge for<br />
            <em className="font-light italic">healthier smiles.</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Expert advice, oral health tips, and clinical perspectives from Dr. Ahamed Fouzan and our specialist team.
          </p>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="section-pad">
        <div className="section-index">Latest Articles</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {BLOG_ARTICLES.map((article) => (
            <Link
              key={article.id}
              to="/blog/$articleSlug"
              params={{ articleSlug: article.slug }}
              className="bg-[#f6f6f1] rounded-3xl overflow-hidden border border-[#d6ddd9] shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img
                    src={`${A}${article.image}`}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur font-bold text-[10px] uppercase tracking-wider rounded-full text-[#304240]">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-[#709b9d] block mb-2">{article.date}</span>
                  <h3 className="font-serif text-2xl font-semibold leading-tight text-[#193331] mb-3">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#667774] leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#193331]/10 mt-auto flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#304240]">
                <span>Read Full Article</span>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <AppointmentModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}

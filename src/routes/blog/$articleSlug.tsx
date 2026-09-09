import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BLOG_ARTICLES } from "@/lib/zenith-data";
import { useState } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";

export const Route = createFileRoute("/blog/$articleSlug")({
  component: BlogArticlePage,
});

const A = "/assets/zenith/";

function BlogArticlePage() {
  const { articleSlug } = Route.useParams();
  const [bookingOpen, setBookingOpen] = useState(false);

  const article = BLOG_ARTICLES.find((a) => a.slug === articleSlug) || BLOG_ARTICLES[0];

  return (
    <main className="min-h-screen bg-[#B8D8D5] text-[#193331]">
      <Header />

      {/* Article Header */}
      <section className="pt-36 pb-16 px-[7vw] bg-[#B8D8D5] text-[#193331]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#709b9d] mb-4">
            <Link to="/blog" className="hover:underline">Journal</Link>
            <span>/</span>
            <span>{article.category}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-pad max-w-4xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-xl mb-12 h-[400px]">
          <img
            src={`${A}${article.image}`}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose max-w-none space-y-6 text-[#304240]">
          <p className="font-serif text-2xl text-[#193331] leading-relaxed font-medium">
            {article.summary}
          </p>

          <div className="border-t border-[#193331]/20 pt-6 space-y-6 text-sm leading-relaxed text-[#405956]">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Article Footer CTA */}
        <div className="mt-16 p-8 bg-[#dce7e3] rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-medium">Have questions about your oral health?</h3>
            <p className="text-xs text-[#556966]">Schedule a personal consultation with our team in Dehiwala.</p>
          </div>
          <button
            onClick={() => setBookingOpen(true)}
            className="px-6 py-3.5 bg-[#304240] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#193331] transition shrink-0"
          >
            Book Appointment
          </button>
        </div>
      </section>

      <Footer />
      <AppointmentModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
}

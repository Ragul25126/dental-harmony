import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES_DATA, ZENITH_HOMEPAGE_SERVICES } from "@/lib/zenith-data";
import { useState, useEffect, useRef } from "react";
import { AppointmentModal } from "@/components/AppointmentModal";
import { CoverFlowCarousel, CarouselItem } from "@/components/ui/3-d-coverflow-carousel";

export const Route = createFileRoute("/services/")({
  component: ServicesIndexPage,
});

const A = "/assets/zenith/";

export function ServicesIndexPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState("");
  const [activeScrollIndex, setActiveScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleBook = (title: string) => {
    setSelectedServiceTitle(title);
    setBookingOpen(true);
  };

  // Convert 8 Zenith Dentistry services into 3D Coverflow carousel items with exact homepage images and content
  const coverflowItems: CarouselItem[] = ZENITH_HOMEPAGE_SERVICES.map((item) => ({
    tag: `#${item.category}`,
    titleLine1: item.title.toUpperCase(),
    titleLine2: "SPECIALIZED CARE",
    desc: item.shortCopy,
    img: item.remoteImage || `${A}${item.image}`,
    ctaText: "Full Details",
    ctaUrl: `/services/${item.slug}`,
  }));

  const totalItems = coverflowItems.length;

  // Track scroll position inside container and map to 3D Coverflow slide index (0 to 7)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = rect.height - viewportHeight;
      if (scrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / scrollableDistance));
      
      const newIndex = Math.min(totalItems - 1, Math.floor(progress * totalItems));
      setActiveScrollIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalItems]);

  const handleCtaClick = (item: CarouselItem) => {
    if (item.ctaUrl && item.ctaUrl !== "#") {
      navigate({ to: item.ctaUrl });
    }
  };

  return (
    <main className="min-h-screen bg-[#dce7e3] text-[#193331]">
      <Header />

      {/* Sticky Scroll Section for Pinning 3D Coverflow Presentation */}
      <div ref={containerRef} className="relative h-[320vh] bg-[#dce7e3]">
        {/* Sticky Viewport Container */}
        <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 overflow-hidden">
          {/* Header Content */}
          <div className="max-w-4xl mx-auto text-center mb-2 z-10 shrink-0">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="w-10 h-[2px] bg-[#304240]" />
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#304240]">
                SERVICES ({activeScrollIndex + 1} / {totalItems})
              </span>
              <span className="w-10 h-[2px] bg-[#304240]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight font-normal mb-2 text-[#193331]">
              Precision care,<br />
              <em className="font-light italic text-[#304240]">made personal.</em>
            </h1>

            <p className="text-xs sm:text-sm text-[#405956] max-w-xl mx-auto leading-relaxed mb-3">
              From preventive check-ups to advanced implant surgery and clear aligner orthodontics, explore our full spectrum of specialized treatments.
            </p>

            <button
              onClick={() => handleBook("General Consultation")}
              className="px-5 py-2 bg-[#304240] text-white font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-[#193331] transition shadow-md inline-flex items-center gap-2"
            >
              Book A Visit
            </button>
          </div>

          {/* 3D Coverflow Stage Driven directly by Scroll Position */}
          <div className="w-full max-w-6xl mx-auto relative z-10 shrink-0">
            <CoverFlowCarousel
              items={coverflowItems}
              externalIndex={activeScrollIndex}
              scrollDriven={true}
              autoplay={false}
              className="bg-transparent! min-h-[580px]!"
              onCtaClick={handleCtaClick}
            />
          </div>
        </div>
      </div>

      <Footer />
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedService={selectedServiceTitle}
      />
    </main>
  );
}





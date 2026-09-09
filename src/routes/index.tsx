import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const A = "/assets/zenith/";
const source = "https://www.zenithdentistry.lk";

const services = [
  { title: "Dental implants", copy: "Restore confidence with long-lasting, natural-looking tooth replacement.", image: "implant.webp", href: "/our-service/dental-implants/" },
  { title: "Invisalign", copy: "A discreet, comfortable route to a beautifully aligned smile.", image: "align.webp", href: "/our-service/invisalign/" },
  { title: "Dental veneers", copy: "Carefully crafted laminates that refine the shape and colour of your smile.", image: "veneers.webp", href: "/our-service/dental-veneers/" },
  { title: "Root canal care", copy: "Gentle treatment designed to save your natural tooth and relieve discomfort.", image: "root-canal.webp", href: "/our-service/root-canal-treatment/" },
];

const articles = [
  { date: "01.10.24", title: "Brushing techniques", image: "blog-brushing.webp", href: "/blog/brushing-techniques/" },
  { date: "21.10.23", title: "What causes bleeding gums?", image: "blog-gums.jpg", href: "/blog/what-are-the-most-common-causes-of-bleeding-in-the-gums/" },
  { date: "16.10.23", title: "Living with misaligned teeth", image: "blog-align.jpg", href: "/blog/how-do-you-deal-with-the-difficulties-of-misaligned-teeth/" },
];

function Arrow({ down = false }: { down?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d={down ? "M12 4v16m-6-6 6 6 6-6" : "M5 12h14m-5-5 5 5-5 5"} /></svg>;
}

function Index() {
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu]);

  const go = (id: string) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <main>
      <div className={`splash ${loading ? "" : "splash--gone"}`} aria-hidden={!loading}>
        <img src={`${A}logo.png`} alt="Zenith Dentistry" />
        <div className="splash-line"><i /></div>
      </div>

      <header className="site-header">
        <button className="brand" onClick={() => go("home")} aria-label="Back to top">
          <img src={`${A}logo.png`} alt="Zenith Dentistry" />
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => go("about")}>Our approach</button>
          <button onClick={() => go("services")}>Treatments</button>
          <button onClick={() => go("stories")}>Stories</button>
          <button onClick={() => go("contact")}>Contact</button>
        </nav>
        <a className="header-cta" href="tel:+94112727477">Book a visit <Arrow /></a>
        <button className={`menu-toggle ${menu ? "is-open" : ""}`} onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Toggle menu"><span /><span /></button>
      </header>

      <div className={`mobile-menu ${menu ? "is-open" : ""}`} aria-hidden={!menu}>
        <div className="mobile-menu-links">
          {[['about','Our approach'],['services','Treatments'],['stories','Patient stories'],['contact','Contact']].map(([id,label], i) => (
            <button key={id} onClick={() => go(id)}><small>0{i + 1}</small>{label}</button>
          ))}
        </div>
        <div className="mobile-menu-foot">#55, Hospital Road, Dehiwala<br />011 272 7477</div>
      </div>

      <section id="home" className="hero screen-section">
        <img className="hero-image" src={`${A}hero.webp`} alt="Zenith Dentistry patient receiving attentive care" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Zenith Dentistry · Dehiwala, Sri Lanka</p>
          <h1>Care, comfort<br /><em>& confidence.</em></h1>
          <p className="hero-intro">Latest treatments and technology, delivered with a genuine passion for patient care.</p>
        </div>
        <div className="hero-bottom">
          <a href="tel:+94112727477" className="pill light-pill">Book an appointment <Arrow /></a>
          <button className="scroll-cue" onClick={() => go("about")}><span>Discover Zenith</span><Arrow down /></button>
        </div>
      </section>

      <section id="about" className="about screen-section section-pad">
        <div className="section-index">01 / Our approach</div>
        <div className="about-heading reveal">
          <p className="eyebrow">Welcome to Zenith</p>
          <h2>We care for people.<br /><em>Not just teeth.</em></h2>
        </div>
        <div className="about-grid">
          <figure className="image-card tall reveal"><img src={`${A}about.webp`} alt="The spa-like Zenith Dentistry interior" /><figcaption><span>Designed for calm</span><b>Dehiwala — Colombo</b></figcaption></figure>
          <div className="about-copy reveal">
            <p>Our unique space is designed to feel unlike a dental office. Every detail helps patients—young and old—feel at ease, whether they visit for a routine check-up or complex restoration.</p>
            <p>For 16 years, our full-service clinic has combined compassionate care with in-house dental X-rays and intraoral digital scanning.</p>
            <a className="text-link" href={`${source}/about-us/`}>Meet Zenith Dentistry <Arrow /></a>
            <div className="credentials"><div><b>16</b><span>Years of compassionate care</span></div><div><b>ISO</b><span>9001:2015 certified clinic</span></div></div>
          </div>
        </div>
      </section>

      <section id="services" className="services screen-section section-pad">
        <div className="section-index">02 / Treatments</div>
        <div className="services-head reveal"><h2>Precision care,<br /><em>made personal.</em></h2><p>From preventive care to advanced smile restoration, our specialists keep your treatment considered and connected—all in one place.</p></div>
        <div className="service-grid">
          {services.map((item, i) => <a className="service-card reveal" key={item.title} href={`${source}${item.href}`}>
            <div className="service-photo"><img src={`${A}${item.image}`} alt="" /><span>0{i + 1}</span></div>
            <div className="service-info"><h3>{item.title}</h3><p>{item.copy}</p><i><Arrow /></i></div>
          </a>)}
        </div>
        <a className="pill dark-pill" href={`${source}/our-service/`}>Explore all treatments <Arrow /></a>
      </section>

      <section id="stories" className="stories screen-section section-pad">
        <div className="section-index light-index">03 / The Zenith experience</div>
        <div className="stories-grid">
          <div className="doctor-card reveal">
            <img src={`${A}doctor.webp`} alt="Dr. Ahamed Fouzan, founder of Zenith Dentistry" />
            <div><p>Founder</p><h3>Dr. Ahamed<br />Fouzan</h3><a href={`${source}/dr-ahamed-fouzan/`}>Read profile <Arrow /></a></div>
          </div>
          <div className="quote reveal">
            <span className="quote-mark">“</span>
            <blockquote>I’ve been looking for a dentist for a long time. Nobody is as good as in this clinic. Clean, safe, with no waiting. Very professional. Without pain.</blockquote>
            <p><b>Uta Boehlandt</b><br />Germany</p>
            <a href={`${source}/testimonials/`}>All patient stories <Arrow /></a>
          </div>
        </div>
        <div className="gallery-strip reveal">
          {["clinic.jpg", "clinic-2.jpg", "clinic-3.jpg"].map((image, i) => <figure key={image}><img src={`${A}${image}`} alt={`Zenith Dentistry clinic interior ${i + 1}`} /></figure>)}
        </div>
      </section>

      <section className="journal section-pad">
        <div className="section-index">Journal / Advice from our team</div>
        <div className="journal-head"><h2>Knowledge for<br /><em>healthier smiles.</em></h2><a className="text-link" href={`${source}/blog/`}>Visit the journal <Arrow /></a></div>
        <div className="article-grid">{articles.map((a) => <a key={a.title} href={`${source}${a.href}`} className="article"><div><img src={`${A}${a.image}`} alt="" /><span>{a.date}</span></div><h3>{a.title}</h3><p>Read article <Arrow /></p></a>)}</div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-callout"><p className="eyebrow light">Ready when you are</p><h2>Let’s make your next<br />visit feel <em>different.</em></h2><a className="pill light-pill" href="tel:+94112727477">Book an appointment <Arrow /></a></div>
        <div className="footer-grid">
          <img src={`${A}logo.png`} alt="Zenith Dentistry" />
          <div><small>Visit</small><p>#55, Hospital Road<br />Dehiwala, Sri Lanka</p></div>
          <div><small>Contact</small><a href="tel:+94112727477">011 272 7477</a><a href="tel:+94114902655">011 490 2655</a><a href="mailto:info@zenithdentsitry.lk">info@zenithdentsitry.lk</a></div>
          <div><small>Follow</small><a href="https://www.instagram.com/zenithdentistry.lk/">Instagram</a><a href="https://www.facebook.com/Zenith-Implant-Centre-985902528143607/">Facebook</a><a href="https://wa.me/94705068621">WhatsApp</a></div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Zenith Dentistry <span>Care for people, not just teeth.</span></div>
      </footer>
    </main>
  );
}
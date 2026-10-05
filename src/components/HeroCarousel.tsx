import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useLanguage, t } from "../i18n/LanguageContext";

export type Slide = {
  img: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
};

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const { language } = useLanguage();
  const [i, setI] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setI((v) => (v + 1) % slides.length);
      setTick((v) => v + 1);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const go = (n: number) => {
    setI(n);
    setTick((v) => v + 1);
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#1f2420]">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${i === idx ? "hero-open" : ""}`}
            style={{ backgroundImage: `url(${s.img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-end md:items-center pb-28 md:pb-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-4xl text-white min-h-[280px]">
            <div key={tick}>
              <div
                className="text-[11px] md:text-xs tracking-[0.5em] uppercase text-[#c9a96a] mb-6"
                style={{ animation: "slideInLeft 1s cubic-bezier(.16,.84,.32,1) both" }}
              >
                — {slides[i].eyebrow}
              </div>
              <h1
                className="font-serif text-5xl md:text-7xl lg:text-[6.4rem] leading-[0.95] mb-8"
                style={{ animation: "zoomIn 1.25s cubic-bezier(.16,.84,.32,1) both" }}
              >
                {slides[i].title}
              </h1>
              <p
                className="text-lg md:text-xl font-light text-white/85 max-w-xl leading-relaxed"
                style={{ animation: "slideInRight 1.15s cubic-bezier(.16,.84,.32,1) .15s both" }}
              >
                {slides[i].subtitle}
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4" style={{ animation: "fadeUp 1.2s ease-out .4s both" }}>
              <Link to="/termine" className="px-8 py-4 bg-[#c9a96a] text-[#1f2420] text-xs tracking-[0.3em] uppercase hover:bg-white transition-all duration-500">
                {t(language, "Termin anfragen", "Request appointment", "Demander un rendez-vous")}
              </Link>
              <Link to="/begleitung" className="px-8 py-4 border border-white/60 text-white text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-[#1f2420] transition-all duration-500">
                {t(language, "Mehr erfahren", "Learn more", "En savoir plus")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx)}
            className={`h-[2px] transition-all duration-700 ${i === idx ? "w-10 bg-[#c9a96a]" : "w-4 bg-white/35 hover:bg-white/60"}`}
            aria-label={`${t(language, "Bild", "Image", "Image")} ${idx + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-10 right-6 lg:right-10 z-10 text-white font-serif tracking-widest text-sm">
        <span className="text-[#c9a96a] text-2xl">{String(i + 1).padStart(2, "0")}</span>
        <span className="text-white/40 mx-2">/</span>
        <span className="text-white/60">{String(slides.length).padStart(2, "0")}</span>
      </div>

      <div className="absolute bottom-10 left-6 lg:left-10 z-10 text-white/70 text-[10px] tracking-[0.5em] uppercase hidden md:block">
        <div style={{ animation: "floaty 3s ease-in-out infinite" }}>
          {t(language, "Scrollen ↓", "Scroll ↓", "Défiler ↓")}
        </div>
      </div>
    </section>
  );
}

import { useLanguage, t } from "../i18n/LanguageContext";

export default function LifestyleRail({ title }: { title?: string }) {
  const { language } = useLanguage();

  const shots = [
    { src: "/images/pexels-kampus-8430297.jpg",          cap: t(language, "Ein Gespräch, das Türen öffnet",  "A conversation that opens doors",           "Une conversation qui ouvre des portes") },
    { src: "/images/pexels-timur-weber-8560685.jpg",     cap: t(language, "Frieden — von innen nach außen",  "Peace — from within outward",               "La paix — de l'intérieur vers l'extérieur") },
    { src: "/images/2149056550.jpg",                     cap: t(language, "Begleitung auf dem Lebensweg",    "Accompaniment along life's path",           "Accompagnement sur le chemin de la vie") },
    { src: "/images/2148759101.jpg",                     cap: t(language, "Geborgenheit, die trägt",         "A shelter that sustains",                   "Un refuge qui soutient") },
    { src: "/images/engin_akyurt-woman-3711719_1920.jpg",cap: t(language, "Stille, die heilt",               "Silence that heals",                        "Le silence qui guérit") },
    { src: "/images/tumisu-divorce-6930723_1920.jpg",    cap: t(language, "Hoffnung — neu entfacht",         "Hope — rekindled",                          "L'espoir — ravivé") },
  ];

  const row = [...shots, ...shots];

  return (
    <section className="py-24 bg-[#1f2420] overflow-hidden">
      {title && (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10 flex items-end justify-between gap-6">
          <h2 className="font-serif text-4xl md:text-6xl text-[#f8f5ef] max-w-3xl leading-tight reveal-zoom">
            {title}
          </h2>
          <div className="hidden md:block text-[10px] tracking-[0.4em] uppercase text-[#c9a96a]">
            Horizontal · HD
          </div>
        </div>
      )}
      <div className="rail-track flex gap-6 px-6">
        {row.map((s, i) => (
          <figure key={i} className="rail-card shrink-0 w-[78vw] md:w-[42vw] lg:w-[32vw]">
            <div className="overflow-hidden h-[420px] md:h-[520px]">
              <img src={s.src} alt={s.cap} className="w-full h-full object-cover rail-img" />
            </div>
            <figcaption className="mt-4 text-[#f8f5ef]/80 font-serif text-xl italic">{s.cap}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import Marquee from "../components/Marquee";
import LifestyleRail from "../components/LifestyleRail";
import { useReveal } from "../hooks/useReveal";
import { useLanguage, t } from "../i18n/LanguageContext";
import { makeHeroSlides } from "../data/heroSlides";

export default function Home() {
  useReveal();
  const { language } = useLanguage();
  const slides = makeHeroSlides(language);

  const marqueeItems = [
    t(language, "Glaube",     "Faith",       "Foi"),
    t(language, "Frieden",    "Peace",       "Paix"),
    t(language, "Vergebung",  "Forgiveness", "Pardon"),
    t(language, "Heilung",    "Healing",     "Guérison"),
    t(language, "Hoffnung",   "Hope",        "Espoir"),
    t(language, "Gnade",      "Grace",       "Grâce"),
    t(language, "Stärke",     "Strength",    "Force"),
  ];

  return (
    <main className="page-enter">
      {/* 1. HERO */}
      <HeroCarousel slides={slides} />

      <LifestyleRail />

      {/* 2. MARQUEE */}
      <Marquee items={marqueeItems} />

      {/* 3. INTRO — Seelsorger */}
      <section className="py-32 bg-[#f8f5ef] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 reveal-left">
            <div className="relative">
              <img
                src="/images/pexels-gustavo-fring-7447245.jpg"
                alt={t(language, "Pfarrer Daniel Müller", "Pastor Daniel Müller", "Pasteur Daniel Müller")}
                className="w-full h-[640px] object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#c9a96a] text-[#1f2420] p-8 w-56">
                <div className="font-serif text-5xl leading-none">20</div>
                <div className="text-[10px] tracking-[0.3em] uppercase mt-2">
                  {t(language, "Jahre Seelsorge & Begleitung", "Years of Pastoral Care", "Ans de cure d'âme")}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
              — {t(language, "Ihr Seelsorger", "Your Pastor", "Votre pasteur")}
            </div>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 reveal-zoom">
              {t(language, "Pfarrer", "Pastor", "Pasteur")}{" "}
              <em className="italic text-[#8a9a82]">Daniel</em> Müller
            </h2>
            <p className="text-lg md:text-xl text-[#1f2420]/75 font-light leading-relaxed mb-6 reveal">
              {t(language,
                "Ordinierter Pfarrer, ausgebildeter Seelsorger und seit über zwei Jahrzehnten treuer Adventist. Seine Arbeit verbindet tiefes biblisches Wissen mit einem offenen, urteilsfreien Herzen.",
                "An ordained pastor, trained pastoral counsellor, and committed Adventist for over two decades. His work combines deep biblical knowledge with an open, non-judgmental heart.",
                "Pasteur ordonné, accompagnateur pastoral formé et adventiste engagé depuis plus de vingt ans. Son travail allie une profonde connaissance biblique à un cœur ouvert et bienveillant."
              )}
            </p>
            <p className="text-lg md:text-xl text-[#1f2420]/75 font-light leading-relaxed mb-10 reveal">
              {t(language,
                '„Jede Seele, die zu mir kommt, trägt eine Geschichte. Meine Berufung ist es, gemeinsam mit ihr einen neuen Weg zu finden — in der Kraft Gottes."',
                '"Every soul that comes to me carries a story. My calling is to find a new path together — in the strength of God."',
                '« Chaque âme qui vient à moi porte une histoire. Ma vocation est de trouver ensemble un nouveau chemin — dans la force de Dieu. »'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 4. DREI SÄULEN */}
      <section className="py-32 bg-[#efe9df] relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
              — {t(language, "Unser Weg", "Our Way", "Notre chemin")}
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl mx-auto reveal-zoom">
              {language === "en"
                ? <>Three pillars on which every <em className="italic text-[#8a9a82]">encounter</em> rests.</>
                : language === "fr"
                ? <>Trois piliers sur lesquels chaque <em className="italic text-[#8a9a82]">rencontre</em> repose.</>
                : <>Drei Säulen, auf denen jede <em className="italic text-[#8a9a82]">Begegnung</em> ruht.</>}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {([
              {
                k: "01",
                t_de: "Gebet",        t_en: "Prayer",     t_fr: "Prière",
                d_de: "Das Gebet ist unser erster Schritt — bevor wir sprechen, hören wir gemeinsam auf Gott.",
                d_en: "Prayer is our first step — before we speak, we listen together to God.",
                d_fr: "La prière est notre premier pas — avant de parler, nous écoutons Dieu ensemble.",
              },
              {
                k: "02",
                t_de: "Gottes Wort",  t_en: "God's Word",  t_fr: "La Parole de Dieu",
                d_de: "Die Heilige Schrift als lebendige Quelle: Orientierung, Trost und Kraft für jeden Lebensweg.",
                d_en: "Holy Scripture as a living source: guidance, comfort, and strength for every life's path.",
                d_fr: "La Sainte Écriture comme source vivante : orientation, réconfort et force pour chaque chemin de vie.",
              },
              {
                k: "03",
                t_de: "Gemeinschaft", t_en: "Community",   t_fr: "Communauté",
                d_de: "Kein Mensch ist zur Einsamkeit bestimmt. Gemeinsam tragen wir leichter.",
                d_en: "No one is destined for loneliness. Together we carry things more lightly.",
                d_fr: "Personne n'est destiné à la solitude. Ensemble, nous portons plus légèrement.",
              },
            ] as const).map((p, i) => (
              <div
                key={p.k}
                className="group bg-[#f8f5ef] p-10 border border-transparent hover:border-[#c9a96a]/40 transition-all duration-700 hover:-translate-y-2 reveal"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="font-serif text-7xl text-[#c9a96a]/40 group-hover:text-[#c9a96a] transition-colors duration-700">{p.k}</div>
                <h3 className="font-serif text-3xl mt-6 mb-5 text-[#1f2420]">
                  {t(language, p.t_de, p.t_en, p.t_fr)}
                </h3>
                <p className="text-[#1f2420]/70 font-light leading-relaxed">
                  {t(language, p.d_de, p.d_en, p.d_fr)}
                </p>
                <div className="mt-8 w-10 h-[1px] bg-[#c9a96a] group-hover:w-20 transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BILDERGALERIE */}
      <section className="py-32 bg-[#f8f5ef] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal-left">
                — {t(language, "Einblicke", "Glimpses", "Aperçus")}
              </div>
              <h2 className="font-serif text-5xl md:text-6xl max-w-xl reveal-zoom">
                {language === "en"
                  ? <>Where <em className="italic text-[#8a9a82]">trust</em> grows.</>
                  : language === "fr"
                  ? <>Là où la <em className="italic text-[#8a9a82]">confiance</em> grandit.</>
                  : <>Dort, wo <em className="italic text-[#8a9a82]">Vertrauen</em> wächst.</>}
              </h2>
            </div>
            <Link to="/geschichte" className="link-ul text-xs tracking-[0.3em] uppercase text-[#1f2420]">
              {t(language, "Unsere Geschichte ansehen →", "View our story →", "Voir notre histoire →")}
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 reveal-expand">
              <div className="overflow-hidden h-[500px]">
                <img src="/images/pexels-andres-ayrton-6578784.jpg" alt={t(language, "Begleitung in ruhiger Atmosphäre", "Accompaniment in a calm atmosphere", "Accompagnement dans une atmosphère apaisante")} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 grid gap-6">
              <div className="overflow-hidden h-[240px] reveal-right">
                <img src="/images/pexels-cottonbro-4098176.jpg" alt={t(language, "Seelsorge-Gespräch", "Pastoral conversation", "Conversation pastorale")} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]" />
              </div>
              <div className="overflow-hidden h-[240px] reveal-right" style={{ animationDelay: ".2s" }}>
                <img src="/images/pexels-cottonbro-4100423.jpg" alt={t(language, "Gemeinsam im Gebet", "Together in prayer", "Ensemble dans la prière")} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BIBELZITAT / CTA */}
      <section className="py-32 bg-[#3a4a3f] text-[#f8f5ef] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url(/images/joelmonteil-mountain-5360913_1920.jpg)", backgroundSize: "cover" }} />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="font-serif text-7xl text-[#c9a96a] mb-8">"</div>
          <blockquote className="font-serif text-3xl md:text-5xl leading-tight italic reveal-zoom">
            {language === "en"
              ? <>He heals the brokenhearted <span className="gold-shine not-italic"> and binds up their wounds.</span></>
              : language === "fr"
              ? <>Il guérit ceux qui ont le cœur brisé <span className="gold-shine not-italic"> et il panse leurs plaies.</span></>
              : <>Er heilt, die zerbrochenen Herzens sind, <span className="gold-shine not-italic"> und verbindet ihre Wunden.</span></>}
          </blockquote>
          <div className="text-sm tracking-[0.3em] uppercase mt-10 text-white/60 reveal">
            — {t(language, "Psalm 147, 3", "Psalm 147:3", "Psaume 147:3")}
          </div>
          <Link to="/termine" className="inline-block mt-14 px-10 py-5 bg-[#c9a96a] text-[#1f2420] text-xs tracking-[0.3em] uppercase hover:bg-white transition-all duration-500">
            {t(language, "Ihren ersten Termin anfragen", "Request your first appointment", "Demander votre premier rendez-vous")}
          </Link>
        </div>
      </section>
    </main>
  );
}

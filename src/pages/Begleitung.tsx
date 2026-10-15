import HeroCarousel from "../components/HeroCarousel";
import LifestyleRail from "../components/LifestyleRail";
import { useReveal } from "../hooks/useReveal";
import { Link } from "react-router-dom";
import { useLanguage, t } from "../i18n/LanguageContext";
import { makeHeroSlides } from "../data/heroSlides";

export default function Begleitung() {
  useReveal();
  const { language } = useLanguage();
  const slides = makeHeroSlides(language);

  const angebote = [
    {
      k: "01",
      img: "/images/pexels-polina-zimmerman-3958385.jpg",
      t_de: "Seelsorge-Gespräch",    t_en: "Pastoral Conversation",   t_fr: "Entretien pastoral",
      d_de: "Ein geschützter Raum für alles, was die Seele beschäftigt — ohne Wertung, ohne Eile.",
      d_en: "A protected space for everything that troubles the soul — without judgment, without hurry.",
      d_fr: "Un espace protégé pour tout ce qui préoccupe l'âme — sans jugement, sans précipitation.",
    },
    {
      k: "02",
      img: "/images/engin_akyurt-woman-3711719_1920.jpg",
      t_de: "Biblische Lebensberatung", t_en: "Biblical Life Counseling", t_fr: "Conseil de vie biblique",
      d_de: "Die Schrift als Kompass: Orientierung für Entscheidungen, Beziehungen und Lebensfragen.",
      d_en: "Scripture as compass: guidance for decisions, relationships, and life's questions.",
      d_fr: "L'Écriture comme boussole : orientation pour les décisions, les relations et les questions de vie.",
    },
    {
      k: "03",
      img: "/images/tumisu-divorce-6930723_1920.jpg",
      t_de: "Ehebegleitung",          t_en: "Marriage Accompaniment",  t_fr: "Accompagnement conjugal",
      d_de: "Für Paare, die neu zueinander finden möchten — auf dem Fundament von Liebe und Gottes Wort.",
      d_en: "For couples seeking to find each other again — on the foundation of love and God's Word.",
      d_fr: "Pour les couples qui souhaitent se retrouver — sur le fondement de l'amour et de la Parole de Dieu.",
    },
    {
      k: "04",
      img: "/images/olkina79-woman-5909532_1920.jpg",
      t_de: "Gebet & Innere Heilung", t_en: "Prayer & Inner Healing",  t_fr: "Prière & Guérison intérieure",
      d_de: "Intercessorisches Gebet und geistliche Begleitung zur Heilung tiefer emotionaler Wunden.",
      d_en: "Intercessory prayer and spiritual accompaniment for the healing of deep emotional wounds.",
      d_fr: "Prière d'intercession et accompagnement spirituel pour la guérison de blessures émotionnelles profondes.",
    },
  ];

  const steps = [
    { n: "I",   t_de: "Gesprächsangebot", t_en: "Conversation offer", t_fr: "Offre d'entretien",     d_de: "Ein unverbindliches erstes Gespräch — um sich kennenzulernen.", d_en: "A non-binding first conversation — to get acquainted.", d_fr: "Un premier entretien sans engagement — pour faire connaissance." },
    { n: "II",  t_de: "Kennenlernen",     t_en: "Getting to know",   t_fr: "Prise de connaissance", d_de: "Gemeinsam verstehen, was Ihre Seele bewegt.", d_en: "Understanding together what moves your soul.", d_fr: "Comprendre ensemble ce qui touche votre âme." },
    { n: "III", t_de: "Seelsorgeweg",     t_en: "Pastoral path",     t_fr: "Chemin pastoral",      d_de: "Gemeinsam wähle ich mit Ihnen den Weg, der zu Ihrer Situation und Ihrem Glauben passt.", d_en: "Together I choose with you the path that fits your situation and your faith.", d_fr: "Ensemble, je choisis avec vous le chemin qui correspond à votre situation et à votre foi." },
    { n: "IV",  t_de: "Nachbegleitung",   t_en: "Follow-up care",    t_fr: "Suivi pastoral",       d_de: "Regelmäßige Begegnungen in Ihrem Rhythmus — mit Sabbatpausen, wenn nötig.", d_en: "Regular meetings at your own rhythm — with Sabbath rest when needed.", d_fr: "Rencontres régulières à votre rythme — avec repos du Sabbat si nécessaire." },
  ];

  return (
    <main className="page-enter">
      <HeroCarousel slides={slides} />
      <LifestyleRail title={t(language, "Seelsorge, die im Leben ankommt — nicht nur im Gespräch.", "Pastoral care that reaches real life — not just in conversation.", "Une cure d'âme qui atteint la vraie vie — pas seulement dans la conversation.")} />

      {/* INTRO */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
            — {t(language, "Meine Haltung", "My Approach", "Ma posture")}
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-10 reveal-zoom">
            {language === "en"
              ? <>Not to fix. <em className="italic text-[#8a9a82]">To accompany.</em></>
              : language === "fr"
              ? <>Pas réparer. <em className="italic text-[#8a9a82]">Accompagner.</em></>
              : <>Nicht reparieren. <em className="italic text-[#8a9a82]">Begleiten.</em></>}
          </h2>
          <p className="text-xl md:text-2xl text-[#1f2420]/75 font-light leading-relaxed reveal">
            {t(language,
              "Ich glaube: Heilung geschieht, wenn du dich vollständig angenommen fühlst — von Gott und von deinem Gegenüber. Jedes Werkzeug ist nur ein Mittel zum Zweck. Das Wesentliche ist die Begegnung im Licht der Schrift.",
              "I believe healing happens when you feel fully accepted — by God and by the one before you. Every tool is just a means to an end. What matters is the encounter in the light of Scripture.",
              "Je crois que la guérison arrive quand tu te sens pleinement accepté(e) — par Dieu et par ton interlocuteur. Chaque outil n'est qu'un moyen. L'essentiel est la rencontre à la lumière de l'Écriture."
            )}
          </p>
        </div>
      </section>

      {/* ANGEBOTE */}
      <section className="py-32 bg-[#efe9df]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <h2 className="font-serif text-5xl md:text-6xl reveal-left">
              {language === "en" ? <>My <em className="italic text-[#8a9a82]">Offerings</em></> : language === "fr" ? <>Mes <em className="italic text-[#8a9a82]">Offres</em></> : <>Meine <em className="italic text-[#8a9a82]">Angebote</em></>}
            </h2>
            <div className="text-xs tracking-[0.3em] uppercase text-[#1f2420]/60 reveal-right">
              {t(language, "Vier von vielen Wegen", "Four of many paths", "Quatre parmi bien des chemins")}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {angebote.map((a, i) => (
              <article key={a.k} className="group reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="overflow-hidden h-80 mb-6">
                  <img src={a.img} alt={t(language, a.t_de, a.t_en, a.t_fr)} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1800ms]" />
                </div>
                <div className="flex items-start gap-5">
                  <div className="font-serif text-3xl text-[#c9a96a]">{a.k}</div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2 text-[#1f2420]">{t(language, a.t_de, a.t_en, a.t_fr)}</h3>
                    <p className="text-[#1f2420]/70 font-light leading-relaxed">{t(language, a.d_de, a.d_en, a.d_fr)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIEUX D'ACCOMPAGNEMENT */}
      <section className="py-28 bg-[#f8f5ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
              — {t(language, "Wo ich Sie begleite", "Where I accompany you", "Où je vous accompagne")}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl reveal-zoom">
              {language === "en"
                ? <>Accompaniment — <em className="italic text-[#8a9a82]">in person or online.</em></>
                : language === "fr"
                ? <>Accompagnement — <em className="italic text-[#8a9a82]">en personne ou en ligne.</em></>
                : <>Begleitung — <em className="italic text-[#8a9a82]">persönlich oder online.</em></>}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏛",
                t_de: "Vor Ort · Adventgemeinde Aschaffenburg",
                t_en: "In person · Adventgemeinde Aschaffenburg",
                t_fr: "Sur place · Adventgemeinde Aschaffenburg",
                d_de: "Persönliche Begegnungen in einem geschützten, vertrauten Raum.",
                d_en: "Personal meetings in a safe and familiar setting.",
                d_fr: "Rencontres personnelles dans un cadre protégé et familier.",
              },
              {
                icon: "🏛",
                t_de: "Vor Ort · Adventgemeinde Wertheim",
                t_en: "In person · Adventgemeinde Wertheim",
                t_fr: "Sur place · Adventgemeinde Wertheim",
                d_de: "Begleitung in ruhiger Atmosphäre, nahe bei Ihnen.",
                d_en: "Accompaniment in a calm atmosphere, close to you.",
                d_fr: "Accompagnement dans une atmosphère paisible, près de vous.",
              },
              {
                icon: "🏠",
                t_de: "Bei Ihnen zu Hause",
                t_en: "At your home",
                t_fr: "À votre domicile",
                d_de: "Begleitung bei Ihnen zu Hause und in Ihrer vertrauten Umgebung.",
                d_en: "Accompaniment at your home and in your familiar surroundings.",
                d_fr: "Accompagnement à votre domicile et dans votre environnement familier.",
              },
              {
                icon: "💻",
                t_de: "Online",
                t_en: "Online",
                t_fr: "En ligne",
                d_de: "Seelsorge per Online Meeting — ortsunabhängig, diskret und genauso persönlich.",
                d_en: "Pastoral care via Online Meeting — location-independent, discreet, and just as personal.",
                d_fr: "Accompagnement par Online Meeting — indépendant du lieu, discret et tout aussi personnel.",
              },
            ].map((loc, i) => (
              <div key={i} className="bg-[#efe9df] p-8 reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl mb-4">{loc.icon}</div>
                <h3 className="font-serif text-xl mb-3 text-[#3a4a3f]">{t(language, loc.t_de, loc.t_en, loc.t_fr)}</h3>
                <p className="text-sm text-[#1f2420]/70 font-light leading-relaxed">{t(language, loc.d_de, loc.d_en, loc.d_fr)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROZESS */}
      <section className="py-32 bg-[#f8f5ef] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
              — {t(language, "Ihr Weg mit mir", "Your journey with me", "Votre chemin avec moi")}
            </div>
            <h2 className="font-serif text-5xl md:text-6xl reveal-zoom">
              {language === "en"
                ? <>Four <em className="italic text-[#8a9a82]">steps</em> of accompaniment</>
                : language === "fr"
                ? <>Quatre <em className="italic text-[#8a9a82]">étapes</em> de l'accompagnement</>
                : <>Vier <em className="italic text-[#8a9a82]">Schritte</em> der Begleitung</>}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-14 left-0 right-0 h-[1px] bg-[#c9a96a]/30 hidden md:block" />
            <div className="grid md:grid-cols-4 gap-10 relative">
              {steps.map((s, i) => (
                <div key={s.n} className="text-center reveal-expand bg-[#f8f5ef] px-4" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="w-28 h-28 mx-auto rounded-full border border-[#c9a96a] bg-[#f8f5ef] flex items-center justify-center font-serif text-3xl text-[#3a4a3f] mb-6">{s.n}</div>
                  <h3 className="font-serif text-2xl mb-3">{t(language, s.t_de, s.t_en, s.t_fr)}</h3>
                  <p className="text-sm font-light text-[#1f2420]/70 leading-relaxed">{t(language, s.d_de, s.d_en, s.d_fr)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#3a4a3f] text-[#f8f5ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <Link to="/termine" className="inline-block px-10 py-5 bg-[#c9a96a] text-[#1f2420] text-xs tracking-[0.3em] uppercase hover:bg-white transition-all duration-500">
            {t(language, "Jetzt Termin anfragen", "Request appointment now", "Demander un rendez-vous maintenant")}
          </Link>
        </div>
      </section>
    </main>
  );
}

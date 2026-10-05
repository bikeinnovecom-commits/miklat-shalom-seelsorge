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
    { n: "I",   t_de: "Erstkontakt",      t_en: "First contact",     t_fr: "Premier contact",     d_de: "15-minütiges kostenfreies Gespräch — um sich kennenzulernen, ohne Verpflichtung.", d_en: "15-minute free conversation — to get acquainted, without obligation.", d_fr: "Conversation gratuite de 15 minutes — pour faire connaissance, sans engagement." },
    { n: "II",  t_de: "Kennenlernen",     t_en: "Getting to know",   t_fr: "Prise de connaissance",d_de: "60 Minuten, um gemeinsam zu verstehen, was Ihre Seele bewegt.", d_en: "60 minutes to understand together what moves your soul.", d_fr: "60 minutes pour comprendre ensemble ce qui touche votre âme." },
    { n: "III", t_de: "Seelsorgeweg",     t_en: "Pastoral path",     t_fr: "Chemin pastoral",      d_de: "Gemeinsam wählen wir den Weg, der zu Ihrer Situation und Ihrem Glauben passt.", d_en: "Together we choose the path that fits your situation and faith.", d_fr: "Ensemble, nous choisissons le chemin qui correspond à votre situation et à votre foi." },
    { n: "IV",  t_de: "Nachbegleitung",   t_en: "Follow-up care",    t_fr: "Suivi pastoral",       d_de: "Regelmäßige Begegnungen in Ihrem Rhythmus — mit Sabbatpausen, wenn nötig.", d_en: "Regular meetings at your own rhythm — with Sabbath rest when needed.", d_fr: "Rencontres régulières à votre rythme — avec repos du Sabbat si nécessaire." },
  ];

  const testimonials = [
    { q_de: "Nach Jahren innerer Leere fand ich hier Worte, die mich wieder atmen ließen. Der Glaube hat mich nicht verlassen — ich hatte ihn nur nicht mehr gehört.", q_en: "After years of inner emptiness I found words here that let me breathe again. Faith had not left me — I had simply stopped hearing it.", q_fr: "Après des années de vide intérieur, j'ai trouvé ici des mots qui m'ont permis de respirer à nouveau. La foi ne m'avait pas abandonné — je l'avais simplement oubliée.", n: "Miriam, 38" },
    { q_de: "Die biblische Grundlage hat mir geholfen, meine Ehe auf einem neuen Fundament aufzubauen. Wir sprechen wieder — miteinander und mit Gott.", q_en: "The biblical foundation helped me rebuild my marriage on a new footing. We speak again — with each other and with God.", q_fr: "Le fondement biblique m'a aidé à reconstruire mon mariage sur de nouvelles bases. Nous nous parlons à nouveau — entre nous et avec Dieu.", n: "Thomas & Ruth" },
    { q_de: "Das gemeinsame Gebet hat Türen in mir geöffnet, die ich für verschlossen gehalten hatte. Heilung ist möglich — ich erlebe sie.", q_en: "The shared prayer opened doors in me that I thought were shut forever. Healing is possible — I am living it.", q_fr: "La prière commune a ouvert en moi des portes que je croyais fermées. La guérison est possible — je la vis.", n: "Esperanza, 45" },
  ];

  return (
    <main className="page-enter">
      <HeroCarousel slides={slides} />
      <LifestyleRail title={t(language, "Seelsorge, die im Leben ankommt — nicht nur im Gespräch.", "Pastoral care that reaches real life — not just in conversation.", "Une cure d'âme qui atteint la vraie vie — pas seulement dans la conversation.")} />

      {/* INTRO */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
            — {t(language, "Unsere Haltung", "Our Approach", "Notre posture")}
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
              "Wir glauben: Heilung geschieht, wenn ein Mensch sich vollständig angenommen fühlt — von Gott und von seinem Gegenüber. Jede unserer Formen ist nur ein Werkzeug. Das Wesentliche ist die Begegnung im Licht der Schrift.",
              "We believe healing happens when a person feels fully accepted — by God and by the one before them. Each of our forms is only a tool. What matters is the encounter in the light of Scripture.",
              "Nous croyons que la guérison arrive quand une personne se sent pleinement acceptée — par Dieu et par son interlocuteur. Chaque forme que nous offrons n'est qu'un outil. L'essentiel est la rencontre à la lumière de l'Écriture."
            )}
          </p>
        </div>
      </section>

      {/* ANGEBOTE */}
      <section className="py-32 bg-[#efe9df]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <h2 className="font-serif text-5xl md:text-6xl reveal-left">
              {language === "en" ? <>Our <em className="italic text-[#8a9a82]">Offerings</em></> : language === "fr" ? <>Nos <em className="italic text-[#8a9a82]">Offres</em></> : <>Unsere <em className="italic text-[#8a9a82]">Angebote</em></>}
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

      {/* PROZESS */}
      <section className="py-32 bg-[#f8f5ef] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
              — {t(language, "Ihr Weg bei uns", "Your journey with us", "Votre chemin avec nous")}
            </div>
            <h2 className="font-serif text-5xl md:text-6xl reveal-zoom">
              {language === "en"
                ? <>Four <em className="italic text-[#8a9a82]">steps</em> to the first encounter</>
                : language === "fr"
                ? <>Quatre <em className="italic text-[#8a9a82]">étapes</em> vers la première rencontre</>
                : <>Vier <em className="italic text-[#8a9a82]">Schritte</em> zur ersten Begegnung</>}
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

      {/* TESTIMONIALS */}
      <section className="py-32 bg-[#3a4a3f] text-[#f8f5ef] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
            — {t(language, "Stimmen aus der Begleitung", "Voices from our ministry", "Témoignages de l'accompagnement")}
          </div>
          <h2 className="font-serif text-5xl md:text-6xl mb-16 max-w-3xl reveal-zoom">
            {language === "en"
              ? <>What those we accompany <em className="italic">share</em>.</>
              : language === "fr"
              ? <>Ce que nos accompagnés <em className="italic">témoignent</em>.</>
              : <>Was unsere Begleiteten <em className="italic">erzählen</em>.</>}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((tst, i) => (
              <blockquote key={i} className="border-l-2 border-[#c9a96a] pl-6 reveal" style={{ animationDelay: `${i * 0.2}s` }}>
                <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-6">
                  "{t(language, tst.q_de, tst.q_en, tst.q_fr)}"
                </p>
                <div className="text-xs tracking-[0.3em] uppercase text-[#c9a96a]">— {tst.n}</div>
              </blockquote>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/termine" className="inline-block px-10 py-5 bg-[#c9a96a] text-[#1f2420] text-xs tracking-[0.3em] uppercase hover:bg-white transition-all duration-500">
              {t(language, "Jetzt Termin anfragen", "Request appointment now", "Demander un rendez-vous maintenant")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

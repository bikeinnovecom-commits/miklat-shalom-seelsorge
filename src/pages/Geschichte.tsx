import HeroCarousel from "../components/HeroCarousel";
import LifestyleRail from "../components/LifestyleRail";
import { useReveal } from "../hooks/useReveal";
import { useLanguage, t } from "../i18n/LanguageContext";
import { makeHeroSlides } from "../data/heroSlides";

export default function Geschichte() {
  useReveal();
  const { language } = useLanguage();
  const slides = makeHeroSlides(language);

  const timeline = [
    { y: "2004", t_de: "Die ersten Schritte",        t_en: "First steps",              t_fr: "Les premiers pas",          d_de: "Pfarrer Daniel Müller eröffnet sein erstes Seelsorgebüro in einem umgenutzten Gemeinderaum in Berlin-Mitte.", d_en: "Pastor Daniel Müller opens his first pastoral office in a repurposed community room in central Berlin.", d_fr: "Le Pasteur Daniel Müller ouvre son premier bureau pastoral dans une salle communautaire réaménagée au centre de Berlin." },
    { y: "2009", t_de: "Ehebegleitung",              t_en: "Marriage accompaniment",   t_fr: "Accompagnement conjugal",   d_de: "Das Angebot für Ehepaare in Krisen wird eingeführt — und binnen eines Jahres zur meistgesuchten Form.", d_en: "The service for couples in crisis is introduced — and within a year becomes the most sought-after offering.", d_fr: "L'accompagnement pour les couples en crise est introduit — et devient en moins d'un an l'offre la plus demandée." },
    { y: "2012", t_de: "Neue Räume am Tiergarten",  t_en: "New rooms at Tiergarten",  t_fr: "Nouveaux locaux au Tiergarten", d_de: "Ein helles Altbauensemble mit eigenem Gartenbereich wird zur neuen Heimat — ein Ort der Stille mitten in der Stadt.", d_en: "A bright historic building ensemble with its own garden becomes the new home — a place of stillness in the middle of the city.", d_fr: "Un ensemble de bâtiments anciens lumineux avec son propre jardin devient le nouveau foyer — un lieu de silence au cœur de la ville." },
    { y: "2018", t_de: "Ausbildung & Vernetzung",   t_en: "Training & Networking",    t_fr: "Formation & Réseau",        d_de: "Drei weitere Seelsorgerinnen werden ausgebildet; Kooperation mit adventistischen Gemeinden in ganz Deutschland.", d_en: "Three more pastoral counsellors are trained; cooperation with Adventist congregations throughout Germany.", d_fr: "Trois autres accompagnatrices pastorales sont formées ; coopération avec des communautés adventistes dans toute l'Allemagne." },
    { y: "2023", t_de: "Gebet-Abende & Sabbat-Retreats", t_en: "Prayer Evenings & Sabbath Retreats", t_fr: "Soirées de prière & Retraites sabbatiques", d_de: "Erste monatliche Gebets-Abende und Sabbat-Rückzüge in der märkischen Landschaft.", d_en: "First monthly prayer evenings and Sabbath retreats in the Brandenburg countryside.", d_fr: "Premières soirées de prière mensuelles et retraites sabbatiques dans la campagne brandebourgeoise." },
    { y: "2026", t_de: "Heute",                     t_en: "Today",                    t_fr: "Aujourd'hui",               d_de: "Fünf Seelsorgerinnen, vier ruhige Gesprächsräume und ein lebendiger Ort des Friedens für viele.", d_en: "Five pastoral counsellors, four quiet conversation rooms, and a vibrant place of peace for many.", d_fr: "Cinq accompagnatrices pastorales, quatre salles d'entretien calmes et un lieu vivant de paix pour beaucoup." },
  ];

  const values = [
    { t_de: "Biblische Fundierung",  t_en: "Biblical Foundation",    t_fr: "Fondement biblique",    d_de: "Alles, was wir tun, wurzelt im Wort Gottes — unserem unveränderlichen Anker.", d_en: "Everything we do is rooted in God's Word — our unchanging anchor.", d_fr: "Tout ce que nous faisons est enraciné dans la Parole de Dieu — notre ancre immuable." },
    { t_de: "Geistliche Tiefe",      t_en: "Spiritual Depth",        t_fr: "Profondeur spirituelle", d_de: "Seelsorge ist mehr als Gespräch — sie ist Begegnung im Geist.", d_en: "Pastoral care is more than conversation — it is encounter in the Spirit.", d_fr: "La cure d'âme est plus qu'une conversation — c'est une rencontre dans l'Esprit." },
    { t_de: "Nächstenliebe",         t_en: "Love of Neighbour",      t_fr: "Amour du prochain",      d_de: "Das höchste Gebot ist unser Maßstab: Liebe Gott und deinen Nächsten.", d_en: "The greatest commandment is our standard: Love God and your neighbour.", d_fr: "Le plus grand commandement est notre mesure : Aimer Dieu et son prochain." },
    { t_de: "Verschwiegenheit",      t_en: "Pastoral Secrecy",       t_fr: "Secret pastoral",        d_de: "Alles Geteilte bleibt im Schutz der Seelsorge-Beziehung.", d_en: "Everything shared remains protected within the pastoral relationship.", d_fr: "Tout ce qui est partagé reste protégé dans le cadre de la relation pastorale." },
  ];

  return (
    <main className="page-enter">
      <HeroCarousel slides={slides} />
      <LifestyleRail title={t(language, "Gesichter einer Geschichte, die noch geschrieben wird.", "Faces of a story still being written.", "Visages d'une histoire qui s'écrit encore.")} />

      {/* BRIEF */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
            — {t(language, "Ein Brief", "A Letter", "Une lettre")}
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-10 reveal-zoom">
            {language === "en"
              ? <>"We were not <em className="italic text-[#8a9a82]">founded</em> —<br />we <span className="gold-shine">grew</span>."</>
              : language === "fr"
              ? <>"Nous n'avons pas été <em className="italic text-[#8a9a82]">fondés</em> —<br />nous avons <span className="gold-shine">grandi</span>."</>
              : <>"Wir wurden <em className="italic text-[#8a9a82]">nicht gegründet</em> —<br />wir sind <span className="gold-shine">gewachsen</span>."</>}
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-[#1f2420]/75 reveal">
            {t(language,
              "Unsere Geschichte beginnt nicht mit einem Plan, sondern mit einem Ruf: Was braucht ein Mensch, um wieder aufatmen zu können? Vor über zwanzig Jahren haben wir angefangen, auf diese Frage zu antworten. Wir antworten immer noch.",
              "Our story begins not with a plan but with a call: what does a person need to breathe freely again? More than twenty years ago we began to answer that question. We are still answering it.",
              "Notre histoire ne commence pas par un plan, mais par un appel : de quoi a besoin une personne pour respirer à nouveau ? Il y a plus de vingt ans, nous avons commencé à répondre à cette question. Nous y répondons encore."
            )}
          </p>
        </div>
      </section>

      {/* CHRONIK */}
      <section className="py-32 bg-[#efe9df]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-5xl md:text-6xl reveal-zoom">
              {language === "en" ? <>Our <em className="italic text-[#8a9a82]">Chronicle</em></> : language === "fr" ? <>Notre <em className="italic text-[#8a9a82]">Chronique</em></> : <>Unsere <em className="italic text-[#8a9a82]">Chronik</em></>}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#c9a96a]/40" />
            <div className="space-y-16">
              {timeline.map((e, i) => (
                <div key={e.y} className={`relative grid md:grid-cols-2 gap-10 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"} reveal-left pl-16 md:pl-0`}>
                    <div className="font-serif text-6xl md:text-7xl text-[#c9a96a]">{e.y}</div>
                  </div>
                  <div className={`${i % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"} reveal-right pl-16 md:pl-10`}>
                    <h3 className="font-serif text-2xl md:text-3xl mb-3">{t(language, e.t_de, e.t_en, e.t_fr)}</h3>
                    <p className="text-[#1f2420]/70 font-light leading-relaxed">{t(language, e.d_de, e.d_en, e.d_fr)}</p>
                  </div>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c9a96a] border-4 border-[#efe9df]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WERTE */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="overflow-hidden h-[600px]">
              <img src="/images/pexels-polina-zimmerman-3958385.jpg" alt={t(language, "Begleitung", "Accompaniment", "Accompagnement")} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]" />
            </div>
          </div>
          <div className="reveal-right">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6">
              — {t(language, "Unsere Werte", "Our Values", "Nos valeurs")}
            </div>
            <h2 className="font-serif text-5xl md:text-6xl mb-10 leading-tight">
              {language === "en" ? <>What <em className="italic text-[#8a9a82]">sustains</em> us.</> : language === "fr" ? <>Ce qui nous <em className="italic text-[#8a9a82]">porte</em>.</> : <>Was uns <em className="italic text-[#8a9a82]">trägt</em>.</>}
            </h2>
            {values.map((v, i) => (
              <div key={v.t_de} className="border-t border-[#c9a96a]/30 py-6 reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <h3 className="font-serif text-2xl mb-2">{t(language, v.t_de, v.t_en, v.t_fr)}</h3>
                <p className="text-[#1f2420]/70 font-light">{t(language, v.d_de, v.d_en, v.d_fr)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZITAT */}
      <section className="py-32 bg-[#3a4a3f] text-[#f8f5ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="font-serif text-6xl text-[#c9a96a] mb-6">"</div>
          <blockquote className="font-serif text-3xl md:text-5xl italic leading-tight reveal-zoom">
            {language === "en"
              ? <>Every person who walks through our door carries a story that God knows. Our work is to listen — <span className="gold-shine not-italic">with his ears.</span></>
              : language === "fr"
              ? <>Chaque personne qui franchit notre porte porte une histoire que Dieu connaît. Notre mission est d'écouter — <span className="gold-shine not-italic">avec ses oreilles.</span></>
              : <>Jeder Mensch, der durch unsere Tür geht, trägt eine Geschichte, die Gott kennt. Unser Werk ist es, zuzuhören — <span className="gold-shine not-italic">mit seinen Ohren.</span></>}
          </blockquote>
          <div className="text-sm tracking-[0.3em] uppercase mt-10 text-white/60">
            — {t(language, "Pfarrer Daniel Müller", "Pastor Daniel Müller", "Pasteur Daniel Müller")}
          </div>
        </div>
      </section>
    </main>
  );
}

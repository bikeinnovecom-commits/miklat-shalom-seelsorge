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
    {
      y: "2010",
      t_de: "Master in Counseling",
      t_en: "Master's in Counseling",
      t_fr: "Master en Counseling",
      d_de: "Abschluss des Masters in Counseling und seelsorgerlicher Begleitung — Grundlage für einen ganzheitlichen Dienst am Menschen.",
      d_en: "Completion of the Master's degree in Counseling and pastoral care — the foundation for a holistic ministry to people.",
      d_fr: "Obtention du Master en relation d'aide et accompagnement — fondement d'un service pastoral global de la personne.",
    },
    {
      y: "2011–2015",
      t_de: "Begleitung in Krisen",
      t_en: "Accompaniment in Crisis",
      t_fr: "Accompagnement des personnes en détresse",
      d_de: "Begleitung von Personen in emotionaler und spiritueller Not. Einzel- und Eheberatung. Bewältigung und Lösung von Ehekonflikten.",
      d_en: "Accompaniment of people in emotional and spiritual distress. Individual and marital counselling. Mediation and resolution of marital conflicts.",
      d_fr: "Accompagnement des personnes en situation de détresse émotionnelle et spirituelle. Entretiens et conseils conjugaux. Médiation et résolution des conflits conjugaux.",
    },
    {
      y: "2016",
      t_de: "Lehrtätigkeit in Guadeloupe",
      t_en: "Teaching in Guadeloupe",
      t_fr: "Enseignement en Guadeloupe",
      d_de: "Unterricht in Counseling und Seelsorge am Institut Théologique Supérieur de Guadeloupe.",
      d_en: "Teaching courses in supportive accompaniment and pastoral care at the Institut Théologique Supérieur de Guadeloupe.",
      d_fr: "Enseignement des cours de relation d'aide et d'accompagnement à l'Institut Théologique Supérieur de Guadeloupe.",
    },
    {
      y: "2018–2020",
      t_de: "Dienst in Österreich & Deutschland",
      t_en: "Ministry in Austria & Germany",
      t_fr: "Accompagnement en Autriche et Allemagne",
      d_de: "Seelsorgerliche Begleitung von Menschen in emotionaler und spiritueller Not in Österreich und Deutschland.",
      d_en: "Pastoral accompaniment of people in emotional and spiritual distress in Austria and Germany.",
      d_fr: "Accompagnement des personnes en détresse émotionnelle et spirituelle en Autriche et en Allemagne.",
    },
    {
      y: "PhD",
      t_de: "PhD in Ministry",
      t_en: "PhD in Ministry",
      t_fr: "PhD in Ministry",
      d_de: "Promotion in Ministry mit Schwerpunkt auf postmoderne und interkulturelle Studien — Vertiefung der theologischen und kulturellen Grundlagen der Seelsorge.",
      d_en: "Doctorate in Ministry with a focus on Postmodern and Intercultural Studies — deepening the theological and cultural foundations of pastoral accompaniment.",
      d_fr: "Doctorat en Ministry avec spécialisation en études postmodernes et interculturelles — approfondissement des fondements théologiques et culturels de l'accompagnement pastoral.",
    },
    {
      y: "2020–2024",
      t_de: "Seminare zu Familienkonflikten",
      t_en: "Family Conflict Seminars",
      t_fr: "Séminaires sur les conflits familiaux",
      d_de: "Leitung von Seminaren zur Bewältigung und Lösung familiärer Konflikte — für Familien, Gemeinden und Beratungsfachkräfte.",
      d_en: "Seminars on the resolution and mediation of family conflicts — for families, congregations and counselling professionals.",
      d_fr: "Séminaires sur la gestion et la résolution des conflits familiaux — pour les familles, les communautés et les professionnels de l'accompagnement.",
    },
    {
      y: "2024–2026",
      t_de: "Gefängnisseelsorge Aschaffenburg",
      t_en: "Prison Chaplaincy Aschaffenburg",
      t_fr: "Aumônerie de prison à Aschaffenburg",
      d_de: "Seelsorgedienst im Gefängnis der Justizvollzugsanstalt Aschaffenburg — Begleitung von Inhaftierten auf dem Weg der inneren Heilung und Hoffnung.",
      d_en: "Chaplaincy service at the detention centre of Aschaffenburg — accompanying prisoners on the path of inner healing and hope.",
      d_fr: "Aumônerie de prison au centre de détention d'Aschaffenburg — accompagnement des détenus sur le chemin de la guérison intérieure et de l'espérance.",
    },
  ];

  const values = [
    { t_de: "Biblische Fundierung",  t_en: "Biblical Foundation",    t_fr: "Fondement biblique",    d_de: "Alles, was ich tue, wurzelt im Wort Gottes — meinem unveränderlichen Anker.", d_en: "Everything I do is rooted in God's Word — my unchanging anchor.", d_fr: "Tout ce que je fais est enraciné dans la Parole de Dieu — mon ancre immuable." },
    { t_de: "Geistliche Tiefe",      t_en: "Spiritual Depth",        t_fr: "Profondeur spirituelle", d_de: "Seelsorge ist mehr als Gespräch — sie ist Begegnung im Geist.", d_en: "Pastoral care is more than conversation — it is encounter in the Spirit.", d_fr: "La cure d'âme est plus qu'une conversation — c'est une rencontre dans l'Esprit." },
    { t_de: "Nächstenliebe",         t_en: "Love of Neighbour",      t_fr: "Amour du prochain",      d_de: "Das höchste Gebot als Fundament: Liebe Gott und deinen Nächsten.", d_en: "The greatest commandment as a foundation: Love God and your neighbour.", d_fr: "Le plus grand commandement comme fondement : Aimer Dieu et son prochain." },
    { t_de: "Verschwiegenheit",      t_en: "Pastoral Secrecy",       t_fr: "Secret pastoral",        d_de: "Alles Geteilte bleibt im Schutz der Seelsorge-Beziehung.", d_en: "Everything shared remains protected within the pastoral relationship.", d_fr: "Tout ce qui est partagé reste protégé dans le cadre de la relation pastorale." },
  ];

  return (
    <main className="page-enter">
      <HeroCarousel slides={slides} />
      <LifestyleRail title={t(language, "Über die Wunden von gestern hinaus schreibt sich deine Geschichte weiter.", "Beyond yesterday's wounds, your story is still being written.", "Au-delà des blessures d'hier, ton histoire continue de s'écrire.")} />

      {/* BRIEF */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-6 reveal">
            — {t(language, "Ein Brief", "A Letter", "Une lettre")}
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-10 reveal-zoom">
            {language === "en"
              ? <>"I did not arise as a project — I grew from a <span className="gold-shine">deep inner need</span>."</>
              : language === "fr"
              ? <>"Je ne suis pas né d'un projet — je suis né d'un <span className="gold-shine">besoin profond</span>."</>
              : <>"Ich bin nicht als Projekt entstanden – sondern aus einem <span className="gold-shine">tiefen Bedürfnis</span> heraus gewachsen."</>}
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-[#1f2420]/75 reveal">
            {t(language,
              "Meine Geschichte beginnt nicht mit einem Plan, sondern mit einem Ruf: Was braucht ein Mensch, um wieder atmen zu können? Vor mehr als zwanzig Jahren habe ich begonnen, auf diese Frage eine Antwort zu suchen. Heute noch antworte ich jeden Tag darauf.",
              "My story begins not with a plan but with a call: what does a person need to breathe again? More than twenty years ago I began to seek an answer to that question. To this day I answer it every day.",
              "Mon histoire ne commence pas par un plan, mais par un appel : de quoi a besoin une personne pour respirer à nouveau ? Il y a plus de vingt ans, j'ai commencé à chercher une réponse à cette question. Aujourd'hui encore, j'y réponds chaque jour."
            )}
          </p>
        </div>
      </section>

      {/* CHRONIK */}
      <section className="py-32 bg-[#efe9df]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-4 reveal">
              Master in Counseling
            </div>
            <h2 className="font-serif text-5xl md:text-6xl reveal-zoom">
              {language === "en" ? <>My <em className="italic text-[#8a9a82]">Chronicle</em></> : language === "fr" ? <>Ma <em className="italic text-[#8a9a82]">Chronique</em></> : <>Meine <em className="italic text-[#8a9a82]">Chronik</em></>}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#c9a96a]/40" />
            <div className="space-y-16">
              {timeline.map((e, i) => (
                <div key={e.y} className={`relative grid md:grid-cols-2 gap-10 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                  <div className={`md:text-right ${i % 2 === 0 ? "" : "md:text-left"} reveal-left pl-16 md:pl-0 flex ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"} items-center`}>
                    <div className="font-serif text-5xl text-[#c9a96a]/30 select-none">✦</div>
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
              — {t(language, "Meine Werte", "My Values", "Mes valeurs")}
            </div>
            <h2 className="font-serif text-5xl md:text-6xl mb-10 leading-tight">
              {language === "en" ? <>What <em className="italic text-[#8a9a82]">sustains</em> me.</> : language === "fr" ? <>Ce qui me <em className="italic text-[#8a9a82]">porte</em>.</> : <>Was mich <em className="italic text-[#8a9a82]">trägt</em>.</>}
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
              ? <>&ldquo;Every person who comes to me carries a story that God knows. My calling is to listen — and to give each person <span className="gold-shine not-italic">my full attention.</span>&rdquo;</>
              : language === "fr"
              ? <>« Chaque personne qui vient me voir porte une histoire que Dieu connaît. Ma mission est de prêter une <span className="gold-shine not-italic">oreille attentive.</span> »</>
              : <>„Jeder Mensch, der zu mir kommt, trägt eine Geschichte, die Gott kennt. Meine Berufung ist es, hinzuhören — und jedem Menschen <span className="gold-shine not-italic">meine volle Aufmerksamkeit zu schenken.</span>"</>}
          </blockquote>
          <div className="text-sm tracking-[0.3em] uppercase mt-10 text-white/60">
            — {t(language, "Pasteur Félix Hélan", "Pastor Félix Hélan", "Pasteur Félix Hélan")}
          </div>
        </div>
      </section>
    </main>
  );
}

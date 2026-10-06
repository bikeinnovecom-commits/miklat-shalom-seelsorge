import type { Slide } from "../components/HeroCarousel";
import { t } from "../i18n/LanguageContext";
import type { Language } from "../i18n/LanguageContext";

/** Les 8 slides du carrousel principal — partagés sur toutes les pages */
export function makeHeroSlides(lang: Language): Slide[] {
  return [
    {
      img: "/images/pexels-shvets-production-7176029.jpg",
      eyebrow: t(lang, "01 · Seelsorge-Gespräch",       "01 · Pastoral Care",           "01 · Cure d'âme"),
      title: lang === "en"
        ? <>Where the soul finds <em className="gold-shine not-italic">shelter</em>.</>
        : lang === "fr"
        ? <>Là où l'âme <em className="gold-shine not-italic">trouve refuge</em>.</>
        : <>Wo die Seele <em className="gold-shine not-italic">Geborgenheit</em> findet.</>,
      subtitle: t(lang,
        "Ein geschützter Raum für alles, was die Seele beschäftigt — ohne Wertung, ohne Eile, in Gottes Gegenwart.",
        "A protected space for everything that troubles the soul — without judgment, without hurry, in God's presence.",
        "Un espace protégé pour tout ce qui préoccupe l'âme — sans jugement, sans précipitation, en la présence de Dieu."
      ),
    },
    {
      img: "/images/caswi-lake-7316684_1920.jpg",
      eyebrow: t(lang, "02 · Biblische Lebensberatung", "02 · Biblical Counseling",     "02 · Conseil biblique"),
      title: lang === "en"
        ? <>God's Word as <em className="gold-shine not-italic">compass</em>.</>
        : lang === "fr"
        ? <>La Parole de Dieu comme <em className="gold-shine not-italic">boussole</em>.</>
        : <>Gottes Wort als <em className="gold-shine not-italic">Kompass</em>.</>,
      subtitle: t(lang,
        "Die Heilige Schrift als lebendige Orientierung — für Entscheidungen, Beziehungen und Lebensfragen.",
        "Holy Scripture as living guidance — for decisions, relationships, and life's questions.",
        "La Sainte Écriture comme orientation vivante — pour les décisions, les relations et les questions de la vie."
      ),
    },
    {
      img: "/images/tumisu-divorce-6930723_1920.jpg",
      imgPos: "15% center",
      eyebrow: t(lang, "03 · Ehebegleitung",            "03 · Marriage Support",        "03 · Accompagnement conjugal"),
      title: lang === "en"
        ? <>Love that can be <em className="gold-shine not-italic">renewed</em>.</>
        : lang === "fr"
        ? <>L'amour qui peut être <em className="gold-shine not-italic">renouvelé</em>.</>
        : <>Liebe, die <em className="gold-shine not-italic">erneuert</em> werden kann.</>,
      subtitle: t(lang,
        "Für Paare, die neu zueinander finden möchten — auf dem Fundament von Gottes Wort und gegenseitigem Vertrauen.",
        "For couples seeking to find each other again — on the foundation of God's Word and mutual trust.",
        "Pour les couples qui souhaitent se retrouver — sur le fondement de la Parole de Dieu et de la confiance mutuelle."
      ),
    },
    {
      img: "/images/joelmonteil-mountain-5360913_1920.jpg",
      eyebrow: t(lang, "04 · Gebet & Innere Heilung",   "04 · Prayer & Inner Healing",  "04 · Prière & Guérison intérieure"),
      title: lang === "en"
        ? <>Healing through <em className="gold-shine not-italic">prayer</em>.</>
        : lang === "fr"
        ? <>Guérison par la <em className="gold-shine not-italic">prière</em>.</>
        : <>Heilung durch <em className="gold-shine not-italic">Gebet</em>.</>,
      subtitle: t(lang,
        "Intercessorisches Gebet und geistliche Begleitung — für die Heilung tiefer emotionaler und seelischer Wunden.",
        "Intercessory prayer and spiritual accompaniment — for healing deep emotional and soul wounds.",
        "Prière d'intercession et accompagnement spirituel — pour la guérison de blessures émotionnelles et spirituelles profondes."
      ),
    },
    {
      img: "/images/pexels-cottonbro-4098176.jpg",
      eyebrow: t(lang, "05 · Krisenbegleitung",         "05 · Crisis Care",             "05 · Accompagnement en crise"),
      title: lang === "en"
        ? <>In crisis, <em className="gold-shine not-italic">not alone</em>.</>
        : lang === "fr"
        ? <>Dans la crise, <em className="gold-shine not-italic">pas seul</em>.</>
        : <>In der Krise <em className="gold-shine not-italic">nicht allein</em>.</>,
      subtitle: t(lang,
        "Wenn das Leben aus den Fugen gerät, braucht die Seele einen Anker. Wir sind da — auch in der dunkelsten Stunde.",
        "When life falls apart, the soul needs an anchor. We are there — even in the darkest hour.",
        "Quand la vie s'effondre, l'âme a besoin d'une ancre. Nous sommes là — même dans l'heure la plus sombre."
      ),
    },
    {
      img: "/images/2148759181.jpg",
      eyebrow: t(lang, "06 · Trauerbegleitung",         "06 · Grief Accompaniment",     "06 · Accompagnement du deuil"),
      title: lang === "en"
        ? <>Grief may <em className="gold-shine not-italic">exist</em>.</>
        : lang === "fr"
        ? <>Le deuil a le droit <em className="gold-shine not-italic">d'être</em>.</>
        : <>Trauer darf <em className="gold-shine not-italic">sein</em>.</>,
      subtitle: t(lang,
        "Der Schmerz des Verlustes braucht Zeit und Raum. Wir begleiten Sie durch die Trauer — mit Würde und Mitgefühl.",
        "The pain of loss needs time and space. We walk with you through grief — with dignity and compassion.",
        "La douleur du deuil a besoin de temps et d'espace. Nous vous accompagnons dans le deuil — avec dignité et compassion."
      ),
    },
    {
      img: "/images/pexels-andres-ayrton-6578784.jpg",
      eyebrow: t(lang, "07 · Spirituelle Begleitung",   "07 · Spiritual Accompaniment", "07 · Accompagnement spirituel"),
      title: lang === "en"
        ? <>Deepening <em className="gold-shine not-italic">faith</em>.</>
        : lang === "fr"
        ? <>Approfondir la <em className="gold-shine not-italic">foi</em>.</>
        : <>Den Glauben <em className="gold-shine not-italic">vertiefen</em>.</>,
      subtitle: t(lang,
        "Adventistische Glaubensbegleitung für Menschen, die ihren Weg mit Gott neu entdecken oder vertiefen möchten.",
        "Adventist faith accompaniment for people seeking to rediscover or deepen their walk with God.",
        "Accompagnement de foi adventiste pour ceux qui souhaitent redécouvrir ou approfondir leur chemin avec Dieu."
      ),
    },
    {
      img: "/images/pexels-kampus-8430297.jpg",
      eyebrow: t(lang, "08 · Familienbegleitung",       "08 · Family Support",          "08 · Accompagnement familial"),
      title: lang === "en"
        ? <>Family — a place of <em className="gold-shine not-italic">grace</em>.</>
        : lang === "fr"
        ? <>La famille — un lieu de <em className="gold-shine not-italic">grâce</em>.</>
        : <>Familie — ein Ort der <em className="gold-shine not-italic">Gnade</em>.</>,
      subtitle: t(lang,
        "Begleitung für Familien in schwierigen Phasen — damit Eltern und Kinder wieder zueinander finden.",
        "Accompaniment for families in difficult seasons — so that parents and children can find their way back to each other.",
        "Accompagnement pour les familles dans les phases difficiles — pour que parents et enfants se retrouvent."
      ),
    },
  ];
}

import { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import { useReveal } from "../hooks/useReveal";
import { useLanguage, t } from "../i18n/LanguageContext";
import { makeHeroSlides } from "../data/heroSlides";

const MONTHS = {
  de: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
  en: ["January","February","March","April","May","June","July","August","September","October","November","December"],
  fr: ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],
};
const WEEKDAYS = {
  de: ["Mo","Di","Mi","Do","Fr","Sa","So"],
  en: ["Mo","Tu","We","Th","Fr","Sa","Su"],
  fr: ["Lu","Ma","Me","Je","Ve","Sa","Di"],
};

function getFirstDayOfMonth(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return (d + 6) % 7; // ISO Monday=0
}

export default function Termine() {
  useReveal();
  const { language } = useLanguage();
  const slides = makeHeroSlides(language);

  const today = new Date();
  const [year, setYear]   = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay    = getFirstDayOfMonth(year, month);
  const isToday     = (d: number) => d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  const isPast      = (d: number) => new Date(year, month, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const isSabbath   = (d: number) => new Date(year, month, d).getDay() === 6;

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); setSelected(null); setSelectedTime(null); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); setSelected(null); setSelectedTime(null); };

  const times = ["09:00","10:00","11:00","14:00","15:00","16:00","17:00"];
  const pricingRows = [
    { t_de: "Erstgespräch (15 Min.)",       t_en: "Initial conversation (15 min.)",   t_fr: "Entretien initial (15 min.)",     price: t(language, "Kostenlos", "Free", "Gratuit") },
    { t_de: "Einzelsitzung (60 Min.)",       t_en: "Individual session (60 min.)",     t_fr: "Séance individuelle (60 min.)",   price: "€ 80" },
    { t_de: "Ehegespräch (90 Min.)",         t_en: "Marriage session (90 min.)",       t_fr: "Entretien conjugal (90 min.)",    price: "€ 120" },
    { t_de: "Gebet & Heilung (60 Min.)",     t_en: "Prayer & Healing (60 min.)",       t_fr: "Prière & guérison (60 min.)",    price: "€ 60" },
    { t_de: "Begleitung auf Spendenbasis",   t_en: "Donation-based accompaniment",     t_fr: "Accompagnement par donation",     price: t(language, "nach Vereinbarung", "by arrangement", "selon accord") },
  ];

  return (
    <main className="page-enter">
      <HeroCarousel slides={slides} />

      {/* CALENDAR */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-start">
          {/* LEFT: Calendar */}
          <div className="lg:col-span-7 reveal-left">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5">
              — {t(language, "Verfügbare Zeiten", "Available times", "Horaires disponibles")}
            </div>
            <h2 className="font-serif text-4xl md:text-6xl mb-12">
              {language === "en"
                ? <>Choose your <em className="italic text-[#8a9a82]">date</em>.</>
                : language === "fr"
                ? <>Choisissez votre <em className="italic text-[#8a9a82]">date</em>.</>
                : <>Wählen Sie Ihren <em className="italic text-[#8a9a82]">Termin</em>.</>}
            </h2>

            <div className="bg-white border border-[#c9a96a]/20 p-8">
              {/* Month navigation */}
              <div className="flex items-center justify-between mb-8">
                <button onClick={prevMonth} className="w-10 h-10 border border-[#c9a96a]/40 flex items-center justify-center hover:bg-[#c9a96a] hover:text-white transition-all" aria-label={t(language, "Vorheriger Monat", "Previous month", "Mois précédent")}>←</button>
                <div className="font-serif text-2xl">{MONTHS[language][month]} {year}</div>
                <button onClick={nextMonth} className="w-10 h-10 border border-[#c9a96a]/40 flex items-center justify-center hover:bg-[#c9a96a] hover:text-white transition-all" aria-label={t(language, "Nächster Monat", "Next month", "Mois suivant")}>→</button>
              </div>

              {/* Weekdays */}
              <div className="grid grid-cols-7 mb-2">
                {WEEKDAYS[language].map((d) => (
                  <div key={d} className="text-center text-[10px] tracking-[0.2em] uppercase text-[#8a9a82] py-2">{d}</div>
                ))}
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => {
                  const past = isPast(d);
                  const sab  = isSabbath(d);
                  return (
                    <button
                      key={d}
                      disabled={past || sab}
                      onClick={() => { setSelected(d); setSelectedTime(null); setConfirmed(false); }}
                      className={`aspect-square flex items-center justify-center text-sm transition-all duration-300 rounded-sm
                        ${selected === d        ? "bg-[#c9a96a] text-white font-semibold"
                          : isToday(d)          ? "border border-[#c9a96a] text-[#c9a96a] font-semibold"
                          : sab                 ? "text-[#c9a96a]/40 cursor-not-allowed"
                          : past                ? "text-[#1f2420]/25 cursor-not-allowed"
                          :                       "hover:bg-[#c9a96a]/15 text-[#1f2420]"}`}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex gap-6 text-xs text-[#1f2420]/60">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-[#c9a96a]/40 inline-block" />
                  {t(language, "Sabbat (nicht verfügbar)", "Sabbath (unavailable)", "Sabbat (indisponible)")}
                </span>
              </div>
            </div>

            {/* Time picker */}
            {selected && (
              <div className="mt-8 reveal">
                <div className="text-sm tracking-[0.2em] uppercase text-[#1f2420]/70 mb-4">
                  {t(language, "Uhrzeit wählen für", "Choose time for", "Choisir l'heure pour")}{" "}
                  {selected}. {MONTHS[language][month]}
                </div>
                <div className="flex flex-wrap gap-3">
                  {times.map((ti) => (
                    <button
                      key={ti}
                      onClick={() => { setSelectedTime(ti); setConfirmed(false); }}
                      className={`px-5 py-3 text-sm border transition-all duration-300 ${
                        selectedTime === ti
                          ? "bg-[#3a4a3f] text-white border-[#3a4a3f]"
                          : "border-[#c9a96a]/40 hover:border-[#c9a96a]"
                      }`}
                    >
                      {ti}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Confirm */}
            {selected && selectedTime && !confirmed && (
              <button
                onClick={() => setConfirmed(true)}
                className="mt-8 px-8 py-4 bg-[#c9a96a] text-[#1f2420] text-xs tracking-[0.3em] uppercase hover:bg-[#3a4a3f] hover:text-white transition-all duration-500"
              >
                {t(language, "Termin verbindlich anfragen", "Confirm appointment request", "Confirmer la demande de rendez-vous")}
              </button>
            )}

            {confirmed && (
              <div className="mt-8 p-6 bg-[#3a4a3f]/10 border-l-4 border-[#c9a96a] reveal">
                <p className="font-serif text-lg text-[#3a4a3f]">
                  {language === "en"
                    ? <>✓ Request for <strong>{MONTHS[language][month]} {selected}, {year}</strong> at <strong>{selectedTime}</strong> sent. We will reply within 24 hours.</>
                    : language === "fr"
                    ? <>✓ Demande pour le <strong>{selected} {MONTHS[language][month]} {year}</strong> à <strong>{selectedTime}</strong> envoyée. Nous vous répondrons dans les 24 heures.</>
                    : <>✓ Anfrage für den <strong>{selected}. {MONTHS[language][month]} {year}</strong> um <strong>{selectedTime}</strong> gesendet. Wir melden uns innerhalb von 24 Stunden.</>}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: Info + Pricing */}
          <div className="lg:col-span-5 reveal-right">
            <div className="bg-[#3a4a3f] text-[#f8f5ef] p-10 mb-8">
              <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5">
                {t(language, "Informationen", "Information", "Informations")}
              </div>
              <h3 className="font-serif text-3xl mb-6">
                {language === "en"
                  ? <>Before your <em className="italic">appointment</em></>
                  : language === "fr"
                  ? <>Avant votre <em className="italic">rendez-vous</em></>
                  : <>Vor Ihrem <em className="italic">Termin</em></>}
              </h3>
              <ul className="space-y-4 text-white/80 font-light leading-relaxed text-sm">
                {[
                  [t(language, "Alle Gespräche unterliegen der Schweigepflicht.", "All conversations are subject to pastoral secrecy.", "Tous les entretiens sont soumis au secret pastoral.")],
                  [t(language, "Sabbatstunden (Fr. 18:00 – Sa. 18:00) sind für Stille reserviert.", "Sabbath hours (Fri 6 pm – Sat 6 pm) are reserved for stillness.", "Les heures du Sabbat (ven. 18h – sam. 18h) sont réservées au silence.")],
                  [t(language, "Erste Gespräche sind immer kostenlos und unverbindlich.", "Initial conversations are always free and non-binding.", "Les entretiens initiaux sont toujours gratuits et sans engagement.")],
                  [t(language, "Sprachen: Deutsch, Französisch, Englisch.", "Languages: German, French, English.", "Langues : allemand, français, anglais.")],
                ].map(([item], i) => (
                  <li key={i} className="flex gap-3"><span className="text-[#c9a96a] mt-1">—</span><span>{item}</span></li>
                ))}
              </ul>
            </div>

            <div className="border border-[#c9a96a]/30 p-8">
              <h3 className="font-serif text-2xl mb-6">
                {t(language, "Honorarübersicht", "Fee Schedule", "Grille honoraires")}
              </h3>
              <div className="space-y-4">
                {pricingRows.map((row, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-[#c9a96a]/20 pb-3">
                    <span className="text-sm font-light text-[#1f2420]/80">{t(language, row.t_de, row.t_en, row.t_fr)}</span>
                    <span className="font-serif text-lg text-[#c9a96a]">{row.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#1f2420]/50 mt-6 font-light">
                {t(language,
                  "Soziale Ermäßigungen möglich. Kein Mensch wird wegen finanzieller Grenzen abgewiesen.",
                  "Social reductions available. No one is turned away due to financial limitations.",
                  "Des réductions sociales sont possibles. Personne n'est refusé pour des raisons financières."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

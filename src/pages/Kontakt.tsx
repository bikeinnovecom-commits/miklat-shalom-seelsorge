import { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import { useReveal } from "../hooks/useReveal";
import { useLanguage, t } from "../i18n/LanguageContext";
import { makeHeroSlides } from "../data/heroSlides";

export default function Kontakt() {
  useReveal();
  const { language } = useLanguage();
  const slides = makeHeroSlides(language);

  const [form, setForm] = useState({ vorname: "", nachname: "", email: "", telefon: "", thema: "einzelseelsorge", nachricht: "", consent: false });
  const [sent, setSent] = useState(false);

  const change = (field: string, value: string | boolean) => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const themaOptions = [
    { value: "einzelseelsorge", t_de: "Einzelseelsorge",      t_en: "Individual pastoral care", t_fr: "Cure d'âme individuelle" },
    { value: "biblisch",        t_de: "Biblische Beratung",    t_en: "Biblical counseling",      t_fr: "Conseil biblique" },
    { value: "ehe",             t_de: "Ehebegleitung",         t_en: "Marriage accompaniment",   t_fr: "Accompagnement conjugal" },
    { value: "gebet",           t_de: "Gebet & Heilung",       t_en: "Prayer & healing",         t_fr: "Prière & guérison" },
    { value: "sonstiges",       t_de: "Sonstiges",             t_en: "Other",                    t_fr: "Autre" },
  ];

  return (
    <main className="page-enter">
      <HeroCarousel slides={slides} />

      {/* FORM + INFO */}
      <section className="py-32 bg-[#f8f5ef]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">

          {/* Contact form */}
          <div className="reveal-left">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5">
              — {t(language, "Kontaktformular", "Contact form", "Formulaire de contact")}
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-12">
              {language === "en"
                ? <>Write to <em className="italic text-[#8a9a82]">us</em>.</>
                : language === "fr"
                ? <>Écrivez-<em className="italic text-[#8a9a82]">nous</em>.</>
                : <>Schreiben Sie <em className="italic text-[#8a9a82]">uns</em>.</>}
            </h2>

            {sent ? (
              <div className="p-8 bg-[#3a4a3f]/10 border-l-4 border-[#c9a96a]">
                <p className="font-serif text-2xl text-[#3a4a3f] mb-3">
                  {t(language, "✓ Nachricht erhalten.", "✓ Message received.", "✓ Message reçu.")}
                </p>
                <p className="text-[#1f2420]/70 font-light">
                  {t(language,
                    "Vielen Dank für Ihr Vertrauen. Wir antworten innerhalb von 24 Stunden — mit der Sorgfalt, die Ihre Seele verdient.",
                    "Thank you for your trust. We will reply within 24 hours — with the care your soul deserves.",
                    "Merci pour votre confiance. Nous répondrons dans les 24 heures — avec le soin que votre âme mérite."
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-[#1f2420]/60 mb-2">
                      {t(language, "Vorname", "First name", "Prénom")} *
                    </label>
                    <input
                      required
                      value={form.vorname}
                      onChange={e => change("vorname", e.target.value)}
                      className="w-full border border-[#c9a96a]/40 bg-transparent px-4 py-3 focus:outline-none focus:border-[#c9a96a] transition-colors"
                      placeholder={t(language, "Ihr Vorname", "Your first name", "Votre prénom")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-[#1f2420]/60 mb-2">
                      {t(language, "Nachname", "Last name", "Nom")} *
                    </label>
                    <input
                      required
                      value={form.nachname}
                      onChange={e => change("nachname", e.target.value)}
                      className="w-full border border-[#c9a96a]/40 bg-transparent px-4 py-3 focus:outline-none focus:border-[#c9a96a] transition-colors"
                      placeholder={t(language, "Ihr Nachname", "Your last name", "Votre nom")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#1f2420]/60 mb-2">
                    {t(language, "E-Mail-Adresse", "Email address", "Adresse e-mail")} *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => change("email", e.target.value)}
                    className="w-full border border-[#c9a96a]/40 bg-transparent px-4 py-3 focus:outline-none focus:border-[#c9a96a] transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#1f2420]/60 mb-2">
                    {t(language, "Telefon (optional)", "Phone (optional)", "Téléphone (facultatif)")}
                  </label>
                  <input
                    value={form.telefon}
                    onChange={e => change("telefon", e.target.value)}
                    className="w-full border border-[#c9a96a]/40 bg-transparent px-4 py-3 focus:outline-none focus:border-[#c9a96a] transition-colors"
                    placeholder="+49 30 …"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#1f2420]/60 mb-2">
                    {t(language, "Thema", "Subject", "Sujet")} *
                  </label>
                  <select
                    value={form.thema}
                    onChange={e => change("thema", e.target.value)}
                    className="w-full border border-[#c9a96a]/40 bg-[#f8f5ef] px-4 py-3 focus:outline-none focus:border-[#c9a96a] transition-colors"
                  >
                    {themaOptions.map(o => (
                      <option key={o.value} value={o.value}>
                        {t(language, o.t_de, o.t_en, o.t_fr)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-[#1f2420]/60 mb-2">
                    {t(language, "Ihre Nachricht", "Your message", "Votre message")} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.nachricht}
                    onChange={e => change("nachricht", e.target.value)}
                    className="w-full border border-[#c9a96a]/40 bg-transparent px-4 py-3 focus:outline-none focus:border-[#c9a96a] transition-colors resize-none"
                    placeholder={t(language, "Erzählen Sie uns, was Sie bewegt…", "Tell us what moves you…", "Dites-nous ce qui vous touche…")}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={e => change("consent", e.target.checked)}
                    className="mt-1 accent-[#c9a96a]"
                    id="consent"
                  />
                  <label htmlFor="consent" className="text-sm text-[#1f2420]/70 font-light leading-relaxed">
                    {t(language,
                      "Ich stimme der vertraulichen Verarbeitung meiner Angaben zu.",
                      "I consent to the confidential processing of my information.",
                      "J'accepte le traitement confidentiel de mes informations."
                    )}
                  </label>
                </div>

                <button type="submit" className="px-8 py-4 bg-[#c9a96a] text-[#1f2420] text-xs tracking-[0.3em] uppercase hover:bg-[#3a4a3f] hover:text-white transition-all duration-500">
                  {t(language, "Nachricht senden", "Send message", "Envoyer le message")}
                </button>
              </form>
            )}
          </div>

          {/* Info block */}
          <div className="reveal-right space-y-8">
            <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5">
              — {t(language, "Besuchen Sie uns", "Visit us", "Nous rendre visite")}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              {t(language, "Im Herzen von", "In the heart of", "Au cœur de")}{" "}
              <em className="italic text-[#8a9a82]">Berlin</em>.
            </h2>
            <p className="text-lg text-[#1f2420]/70 font-light leading-relaxed">
              {t(language,
                "Tiergartenufer 15 · 10785 Berlin · Direkt am Landwehrkanal.",
                "Tiergartenufer 15 · 10785 Berlin · Right on the Landwehr Canal.",
                "Tiergartenufer 15 · 10785 Berlin · Directement au bord du Landwehrkanal."
              )}
            </p>

            <div className="overflow-hidden h-72">
              <img
                src="/images/joelmonteil-mountain-5360913_1920.jpg"
                alt={t(language, "Miklat Shalom Außenansicht", "Miklat Shalom exterior", "Extérieur Miklat Shalom")}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { t_de: "Telefon",      t_en: "Phone",          t_fr: "Téléphone",   v: "+49 30 123 456 78" },
                { t_de: "E-Mail",       t_en: "Email",          t_fr: "E-mail",      v: "info@miklat-shalom.de" },
                { t_de: "Bürozeiten",   t_en: "Office hours",   t_fr: "Horaires",    v: t(language, "Mo–Fr 9–18 Uhr", "Mon–Fri 9 am–6 pm", "Lun–Ven 9h–18h") },
                { t_de: "Sabbat",       t_en: "Sabbath",        t_fr: "Sabbat",      v: t(language, "Ruhetag — Stille", "Day of rest — Stillness", "Jour de repos — Silence") },
              ].map(row => (
                <div key={row.t_de} className="border-t border-[#c9a96a]/30 pt-5">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96a] mb-1">
                    {t(language, row.t_de, row.t_en, row.t_fr)}
                  </div>
                  <div className="text-[#1f2420] font-light">{row.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-32 bg-[#3a4a3f] text-[#f8f5ef] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="font-serif text-6xl text-[#c9a96a] mb-6">"</div>
          <blockquote className="font-serif text-3xl md:text-4xl italic leading-tight reveal-zoom">
            {language === "en"
              ? <>Your first step towards us is an act of courage. <span className="gold-shine not-italic">We receive it with dignity.</span></>
              : language === "fr"
              ? <>Votre premier pas vers nous est un acte de courage. <span className="gold-shine not-italic">Nous l'accueillons avec dignité.</span></>
              : <>Ihr erster Schritt zu uns ist ein Akt des Mutes. <span className="gold-shine not-italic">Wir empfangen ihn mit Würde.</span></>}
          </blockquote>
        </div>
      </section>
    </main>
  );
}

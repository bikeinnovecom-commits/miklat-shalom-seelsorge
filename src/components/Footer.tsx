import { Link } from "react-router-dom";
import { useLanguage, t } from "../i18n/LanguageContext";

function FooterEmblem() {
  return (
    <svg viewBox="0 0 100 100" className="w-14 h-14 mb-6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#1f2420" stroke="#c9a96a" strokeWidth="2.5" strokeOpacity="0.5" />
      <path d="M50 72 C50 72 34 58 34 44 C34 35 41 28 50 28 C59 28 66 35 66 44 C66 58 50 72 50 72Z" fill="none" stroke="#c9a96a" strokeWidth="1.8" opacity="0.7" />
      <ellipse cx="42" cy="40" rx="6" ry="3.5" fill="#c9a96a" transform="rotate(-30 42 40)" opacity="0.7" />
      <ellipse cx="58" cy="40" rx="6" ry="3.5" fill="#c9a96a" transform="rotate(30 58 40)" opacity="0.7" />
      <ellipse cx="44" cy="52" rx="6" ry="3.5" fill="#c9a96a" transform="rotate(-15 44 52)" opacity="0.55" />
      <ellipse cx="56" cy="52" rx="6" ry="3.5" fill="#c9a96a" transform="rotate(15 56 52)" opacity="0.55" />
      <line x1="50" y1="28" x2="50" y2="72" stroke="#c9a96a" strokeWidth="1.2" opacity="0.4" />
    </svg>
  );
}

export default function Footer() {
  const { language } = useLanguage();

  const navLinks = [
    { to: "/",           label: t(language, "Startseite",        "Home",          "Accueil") },
    { to: "/begleitung", label: t(language, "Unsere Begleitung", "Our Ministry",  "Notre accompagnement") },
    { to: "/geschichte", label: t(language, "Unsere Geschichte", "Our Story",     "Notre histoire") },
    { to: "/termine",    label: t(language, "Terminkalender",    "Appointments",  "Rendez-vous") },
    { to: "/kontakt",    label: t(language, "Kontakt",           "Contact",       "Contact") },
  ];

  return (
    <footer className="bg-[#1f2420] text-[#efe9df] pt-24 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
           style={{ backgroundImage: "radial-gradient(#c9a96a 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
        <div className="grid md:grid-cols-3 gap-14 pb-16 border-b border-white/10">
          <div className="md:col-span-2">
            <FooterEmblem />
            <div className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              {t(language, "Ein Ort, an dem", "A place where", "Un lieu où")}{" "}
              <span className="gold-shine italic">
                {t(language, "die Seele", "the soul", "l'âme")}
              </span>{" "}
              {t(language, "Atem findet.", "can breathe.", "respire.")}
            </div>
            <p className="text-white/60 max-w-md font-light leading-relaxed">
              {t(language,
                "Miklat Shalom — ein Heiligtum des Friedens. Wir begleiten Menschen in Krisen, Übergängen und auf der Suche nach geistlicher Tiefe, getragen von biblischer Weisheit und herzlicher adventistischer Nächstenliebe.",
                "Miklat Shalom — a sanctuary of peace. We walk alongside people through crises, transitions, and spiritual searching, rooted in biblical wisdom and heartfelt Adventist love for one's neighbour.",
                "Miklat Shalom — un sanctuaire de paix. Nous accompagnons les personnes dans les crises, les transitions et la quête de profondeur spirituelle, portés par la sagesse biblique et l'amour du prochain adventiste."
              )}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#c9a96a] mb-5">
              {t(language, "Navigation", "Navigation", "Navigation")}
            </h4>
            <ul className="space-y-3 text-white/70 font-light">
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="link-ul">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs tracking-widest uppercase text-white/40">
          <div>{t(language, "© 2026 Miklat Shalom — Alle Rechte vorbehalten", "© 2026 Miklat Shalom · All rights reserved", "© 2026 Miklat Shalom · Tous droits réservés")}</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="link-ul">{t(language, "Impressum", "Legal notice", "Mentions légales")}</a>
            <a href="#" className="link-ul">{t(language, "Datenschutz", "Privacy", "Confidentialité")}</a>
            <a href="#" className="link-ul">{t(language, "Schweigepflicht", "Pastoral secrecy", "Secret pastoral")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

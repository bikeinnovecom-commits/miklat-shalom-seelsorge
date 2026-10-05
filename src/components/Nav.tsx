import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage, t } from "../i18n/LanguageContext";

function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#1f2420" stroke="#c9a96a" strokeWidth="2.5" />
      <path d="M50 72 C50 72 34 58 34 44 C34 35 41 28 50 28 C59 28 66 35 66 44 C66 58 50 72 50 72Z" fill="none" stroke="#c9a96a" strokeWidth="1.8" />
      <ellipse cx="42" cy="40" rx="6" ry="3.5" fill="#c9a96a" transform="rotate(-30 42 40)" opacity="0.85" />
      <ellipse cx="58" cy="40" rx="6" ry="3.5" fill="#c9a96a" transform="rotate(30 58 40)" opacity="0.85" />
      <ellipse cx="44" cy="52" rx="6" ry="3.5" fill="#c9a96a" transform="rotate(-15 44 52)" opacity="0.7" />
      <ellipse cx="56" cy="52" rx="6" ry="3.5" fill="#c9a96a" transform="rotate(15 56 52)" opacity="0.7" />
      <line x1="50" y1="28" x2="50" y2="72" stroke="#c9a96a" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

export default function Nav() {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const links = [
    { to: "/",           label: t(language, "Startseite",        "Home",         "Accueil") },
    { to: "/begleitung", label: t(language, "Unsere Begleitung", "Our Ministry", "Notre accompagnement") },
    { to: "/geschichte", label: t(language, "Unsere Geschichte", "Our Story",    "Notre histoire") },
    { to: "/termine",    label: t(language, "Terminkalender",    "Appointments", "Rendez-vous") },
    { to: "/kontakt",    label: t(language, "Kontakt",           "Contact",      "Contact") },
  ];

  // Fermer le menu + remonter en haut à chaque changement de route
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [loc.pathname]);

  // Bloquer le scroll body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 40);
    onS();
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);

  const close = () => setOpen(false);

  const handleLink = (to: string) => {
    close();
    // Si déjà sur la page, forcer remonter en haut
    if (loc.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-[#f8f5ef]/95 backdrop-blur-xl border-b border-[#c9a96a]/20 py-3" : "bg-transparent py-6"
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={() => handleLink("/")} className="flex items-center gap-3 group">
            <Emblem className="w-11 h-11 transition-transform duration-700 group-hover:rotate-180 group-hover:scale-110" />
            <div className="leading-tight">
              <div className={`font-serif text-xl md:text-2xl tracking-wide ${scrolled ? "text-[#1f2420]" : "text-white"}`}>
                Miklat Shalom
              </div>
              <div className={`text-[10px] tracking-[0.3em] uppercase ${scrolled ? "text-[#8a9a82]" : "text-white/70"}`}>
                {t(language, "Seelsorge & Geistliche Begleitung", "Pastoral Care & Spiritual Accompaniment", "Cure d'âme & Accompagnement spirituel")}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-9">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => handleLink(l.to)}
                className={({ isActive }) =>
                  `link-ul text-sm tracking-[0.15em] uppercase transition-colors ${
                    scrolled
                      ? isActive ? "text-[#c9a96a]" : "text-[#1f2420] hover:text-[#c9a96a]"
                      : isActive ? "text-[#c9a96a]" : "text-white hover:text-[#c9a96a]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop right: lang + CTA */}
          <div className="hidden xl:flex items-center gap-4">
            <LanguageSwitcher light={!scrolled} />
            <Link
              to="/termine"
              onClick={() => handleLink("/termine")}
              className={`inline-block px-5 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500 border ${
                scrolled
                  ? "border-[#1f2420] text-[#1f2420] hover:bg-[#1f2420] hover:text-[#f8f5ef]"
                  : "border-white text-white hover:bg-white hover:text-[#1f2420]"
              }`}
            >
              {t(language, "Termin anfragen", "Request appointment", "Demander un rendez-vous")}
            </Link>
          </div>

          {/* Hamburger / X button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className={`xl:hidden w-10 h-10 flex flex-col justify-center items-end gap-[6px] ${scrolled ? "text-[#1f2420]" : "text-white"}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${open ? "w-7 rotate-45 translate-y-[7.5px]" : "w-7"}`} />
            <span className={`block h-[1.5px] bg-current transition-all duration-300 ${open ? "w-0 opacity-0" : "w-7"}`} />
            <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${open ? "w-7 -rotate-45 -translate-y-[7.5px]" : "w-5"}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu — backdrop overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 xl:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu — drawer */}
      <div className={`fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-[#f8f5ef] shadow-2xl xl:hidden flex flex-col transform transition-transform duration-400 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Header du drawer */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#c9a96a]/20">
          <div className="font-serif text-lg text-[#1f2420]">Miklat Shalom</div>
          <button onClick={close} className="w-9 h-9 flex items-center justify-center text-[#1f2420]" aria-label="Fermer">
            <span className="block w-6 h-[1.5px] bg-current rotate-45 absolute" />
            <span className="block w-6 h-[1.5px] bg-current -rotate-45 absolute" />
          </button>
        </div>

        {/* Sélecteur de langue */}
        <div className="px-6 py-4 border-b border-[#c9a96a]/20">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#8a9a82] mb-3">
            {t(language, "Sprache", "Language", "Langue")}
          </div>
          <LanguageSwitcher />
        </div>

        {/* Liens */}
        <nav className="flex-1 px-6 py-6 space-y-1 overflow-y-auto">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => handleLink(l.to)}
              className={({ isActive }) =>
                `flex items-center gap-3 py-4 text-sm tracking-[0.2em] uppercase border-b border-[#c9a96a]/15 transition-colors ${
                  isActive ? "text-[#c9a96a]" : "text-[#1f2420] hover:text-[#c9a96a]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`w-1 h-1 rounded-full ${isActive ? "bg-[#c9a96a]" : "bg-transparent"}`} />
                  {l.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA en bas du drawer */}
        <div className="px-6 py-6 border-t border-[#c9a96a]/20">
          <Link
            to="/termine"
            onClick={() => handleLink("/termine")}
            className="block w-full py-4 text-center text-xs tracking-[0.3em] uppercase bg-[#c9a96a] text-[#1f2420] hover:bg-[#3a4a3f] hover:text-white transition-all duration-500"
          >
            {t(language, "Termin anfragen", "Request appointment", "Demander un rendez-vous")}
          </Link>
        </div>
      </div>
    </>
  );
}

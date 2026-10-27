import { useReveal } from "../hooks/useReveal";
import { useLanguage, t } from "../i18n/LanguageContext";

export default function Impressum() {
  useReveal();
  const { language } = useLanguage();

  return (
    <main className="page-enter bg-[#f8f5ef] min-h-screen pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
          — {t(language, "Rechtliche Angaben", "Legal Information", "Informations légales")}
        </div>
        <h1 className="font-serif text-5xl md:text-6xl mb-16 reveal-zoom">
          {t(language, "Impressum", "Legal Notice", "Mentions légales")}
        </h1>

        <div className="space-y-12 text-[#1f2420]/80 font-light leading-relaxed">

          {/* Verantwortlicher */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "Angaben gemäß § 5 TMG", "Information pursuant to § 5 TMG", "Informations conformément au § 5 TMG")}
            </h2>
            <div className="border-l-2 border-[#c9a96a] pl-6 space-y-1">
              <p className="font-medium text-[#1f2420]">Félix Hélan</p>
              <p>{t(language,
                "Pastor der Adventgemeinde Aschaffenburg · Master in Seelsorge · Doktor der Missiologie",
                "Pastor of the Adventist Church of Aschaffenburg · Master's in Counselling · Doctor of Missiology",
                "Pasteur de l'Église adventiste d'Aschaffenburg · Master en Relation d'Aide · Docteur en Missiologie"
              )}</p>
              <p>Strietwaldstrasse 83</p>
              <p>63741 Aschaffenburg, Deutschland</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "Kontakt", "Contact", "Contact")}
            </h2>
            <div className="space-y-2">
              <p>
                <span className="text-[#c9a96a] text-xs tracking-widest uppercase mr-3">
                  {t(language, "Telefon", "Phone", "Téléphone")}
                </span>
                +49 159 04860061
              </p>
              <p>
                <span className="text-[#c9a96a] text-xs tracking-widest uppercase mr-3">E-Mail</span>
                <span className="italic text-[#1f2420]/50">
                  {t(language, "Demnächst verfügbar", "Coming soon", "Bientôt disponible")}
                </span>
              </p>
            </div>
          </section>

          {/* Inhalt */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "Inhalt des Angebots", "Nature of the Service", "Nature du service")}
            </h2>
            <p>
              {t(language,
                "Dieses Angebot umfasst ausschließlich kostenfreie, ehrenamtliche Seelsorge und geistliche Begleitung auf biblischer Grundlage. Es besteht keinerlei kommerzielle Absicht. Es handelt sich um ein privates, nicht gewerbliches Angebot einer Einzelperson.",
                "This service consists exclusively of free, voluntary pastoral care and spiritual accompaniment on a biblical basis. There is no commercial intent whatsoever. This is a private, non-commercial offer by an individual.",
                "Ce service comprend exclusivement un accompagnement pastoral et une cure d'âme gratuits et bénévoles sur une base biblique. Il n'y a aucune intention commerciale. Il s'agit d'une offre privée et non commerciale d'un particulier."
              )}
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "Haftungsausschluss", "Disclaimer", "Clause de non-responsabilité")}
            </h2>
            <p className="mb-4">
              {t(language,
                "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.",
                "The content of this website has been compiled with the utmost care. However, no guarantee can be given for the accuracy, completeness or currency of the content.",
                "Le contenu de ce site a été élaboré avec le plus grand soin. Cependant, aucune garantie ne peut être donnée quant à l'exactitude, l'exhaustivité ou l'actualité du contenu."
              )}
            </p>
            <p>
              {t(language,
                "Dieses Angebot stellt keine Psychotherapie, keine medizinische Behandlung und keine rechtliche Beratung dar. Bei ernsthaften psychischen Krisen wenden Sie sich bitte an einen Arzt oder eine psychotherapeutische Fachkraft.",
                "This service does not constitute psychotherapy, medical treatment or legal advice. In cases of serious mental health crises, please consult a doctor or psychotherapist.",
                "Ce service ne constitue pas une psychothérapie, un traitement médical ou un conseil juridique. En cas de crise de santé mentale grave, veuillez consulter un médecin ou un psychothérapeute."
              )}
            </p>
          </section>

          {/* Urheberrecht */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "Urheberrecht", "Copyright", "Droits d'auteur")}
            </h2>
            <p>
              {t(language,
                "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
                "The content and works on this website created by the site operator are subject to German copyright law. Contributions by third parties are identified as such. Reproduction, editing, distribution and any form of use beyond the limits of copyright law require the written consent of the respective author or creator.",
                "Les contenus et œuvres créés par l'opérateur du site sont soumis au droit d'auteur allemand. Les contributions de tiers sont identifiées comme telles. La reproduction, le traitement, la distribution et toute forme d'utilisation au-delà des limites du droit d'auteur nécessitent le consentement écrit de l'auteur ou du créateur concerné."
              )}
            </p>
          </section>

        </div>

        {/* Footer note */}
        <div className="mt-20 pt-8 border-t border-[#c9a96a]/30 text-xs text-[#1f2420]/40 tracking-widest uppercase reveal">
          © 2026 Miklat Shalom · Pastor Félix Hélan
        </div>
      </div>
    </main>
  );
}

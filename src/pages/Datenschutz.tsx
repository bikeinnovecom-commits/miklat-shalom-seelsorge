import { useReveal } from "../hooks/useReveal";
import { useLanguage, t } from "../i18n/LanguageContext";

export default function Datenschutz() {
  useReveal();
  const { language } = useLanguage();

  return (
    <main className="page-enter bg-[#f8f5ef] min-h-screen pt-40 pb-32">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-xs tracking-[0.4em] uppercase text-[#c9a96a] mb-5 reveal">
          — {t(language, "Ihre Rechte & Ihre Daten", "Your rights & your data", "Vos droits & vos données")}
        </div>
        <h1 className="font-serif text-5xl md:text-6xl mb-4 reveal-zoom">
          {t(language, "Datenschutzerklärung", "Privacy Policy", "Politique de confidentialité")}
        </h1>
        <p className="text-sm text-[#1f2420]/50 mb-16 reveal">
          {t(language, "Gemäß DSGVO (EU) 2016/679", "In accordance with GDPR (EU) 2016/679", "Conformément au RGPD (UE) 2016/679")}
        </p>

        <div className="space-y-12 text-[#1f2420]/80 font-light leading-relaxed">

          {/* 1. Verantwortlicher */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "1. Verantwortlicher", "1. Data Controller", "1. Responsable du traitement")}
            </h2>
            <div className="border-l-2 border-[#c9a96a] pl-6 space-y-1">
              <p className="font-medium text-[#1f2420]">Félix Hélan</p>
              <p>{t(language,
                "Pastor der Adventgemeinde Aschaffenburg · Doktor der Missiologie",
                "Pastor of the Adventist Church of Aschaffenburg · Doctor of Missiology",
                "Pasteur de l'Église adventiste d'Aschaffenburg · Docteur en Missiologie"
              )}</p>
              <p>Strietwaldstrasse 83 · 63741 Aschaffenburg, Deutschland</p>
              <p>{t(language, "Telefon", "Phone", "Téléphone")} : +49 159 04860061</p>
              <p>E-Mail : <span className="italic text-[#1f2420]/60">{t(language, "Demnächst verfügbar", "Coming soon", "Bientôt disponible")}</span></p>
            </div>
          </section>

          {/* 2. Welche Daten */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "2. Erhobene Daten", "2. Data Collected", "2. Données collectées")}
            </h2>
            <p className="mb-4">
              {t(language,
                "Diese Website erhebt ausschließlich Daten, die Sie freiwillig über das Kontaktformular oder den Terminkalender eingeben:",
                "This website only collects data that you voluntarily enter via the contact form or the appointment calendar:",
                "Ce site ne collecte que les données que vous saisissez volontairement via le formulaire de contact ou le calendrier de rendez-vous :"
              )}
            </p>
            <ul className="space-y-2 pl-4">
              {[
                t(language, "Vorname und Nachname", "First and last name", "Prénom et nom"),
                t(language, "E-Mail-Adresse", "Email address", "Adresse e-mail"),
                t(language, "Telefonnummer (optional)", "Phone number (optional)", "Numéro de téléphone (facultatif)"),
                t(language, "Inhalt Ihrer Nachricht", "Content of your message", "Contenu de votre message"),
                t(language, "Gewünschter Gesprächsthema (Kontaktformular)", "Preferred topic of conversation (contact form)", "Sujet d'entretien souhaité (formulaire de contact)"),
                t(language, "Gewünschtes Datum und Uhrzeit (Terminkalender)", "Preferred date and time (appointment calendar)", "Date et heure souhaitées (calendrier de rendez-vous)"),
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#c9a96a] mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#1f2420]/60">
              {t(language,
                "Es werden keine Tracking-Cookies, keine Analyse-Tools (Google Analytics etc.) und keine sozialen Plugins verwendet.",
                "No tracking cookies, no analytics tools (Google Analytics etc.) and no social media plugins are used.",
                "Aucun cookie de suivi, aucun outil d'analyse (Google Analytics, etc.) et aucun plug-in de réseau social ne sont utilisés."
              )}
            </p>
          </section>

          {/* 3. Zweck */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "3. Zweck der Datenverarbeitung", "3. Purpose of Data Processing", "3. Finalité du traitement")}
            </h2>
            <p>
              {t(language,
                "Ihre Daten werden ausschließlich verwendet, um Ihre Kontaktanfrage oder Terminbuchung zu beantworten und den seelsorgerlichen Begleitungsprozess zu koordinieren. Eine Weitergabe an Dritte findet nicht statt.",
                "Your data is used solely to respond to your contact request or appointment booking and to coordinate the pastoral accompaniment process. Your data is not shared with third parties.",
                "Vos données sont utilisées exclusivement pour répondre à votre demande de contact ou à votre réservation de rendez-vous et pour coordonner le processus d'accompagnement pastoral. Vos données ne sont pas transmises à des tiers."
              )}
            </p>
          </section>

          {/* 4. Rechtsgrundlage */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "4. Rechtsgrundlage", "4. Legal Basis", "4. Base juridique")}
            </h2>
            <p>
              {t(language,
                "Die Verarbeitung Ihrer Daten erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch das Absenden des Formulars erteilen.",
                "The processing of your data is based on your express consent (Art. 6(1)(a) GDPR), which you give by submitting the form.",
                "Le traitement de vos données est fondé sur votre consentement exprès (art. 6, par. 1, point a, RGPD), que vous accordez en soumettant le formulaire."
              )}
            </p>
          </section>

          {/* 5. Speicherdauer */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "5. Speicherdauer", "5. Retention Period", "5. Durée de conservation")}
            </h2>
            <p>
              {t(language,
                "Ihre Daten werden nur so lange gespeichert, wie es für die Koordination des Begleitungsprozesses notwendig ist, und spätestens nach Abschluss der Begleitung oder auf Ihren ausdrücklichen Wunsch hin gelöscht.",
                "Your data is stored only for as long as necessary to coordinate the accompaniment process, and deleted at the latest upon completion of the accompaniment or at your express request.",
                "Vos données sont conservées uniquement pendant la durée nécessaire à la coordination du processus d'accompagnement, et supprimées au plus tard à l'issue de l'accompagnement ou sur votre demande expresse."
              )}
            </p>
          </section>

          {/* 6. Rechte */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "6. Ihre Rechte", "6. Your Rights", "6. Vos droits")}
            </h2>
            <p className="mb-4">
              {t(language,
                "Gemäß DSGVO haben Sie jederzeit das Recht auf:",
                "Under the GDPR, you have the right at any time to:",
                "Conformément au RGPD, vous disposez à tout moment du droit :"
              )}
            </p>
            <ul className="space-y-2 pl-4">
              {(language === "de" ? [
                "Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)",
                "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                "Löschung Ihrer Daten (Art. 17 DSGVO)",
                "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Widerruf Ihrer Einwilligung jederzeit ohne Angabe von Gründen",
              ] : language === "en" ? [
                "Access to your stored data (Art. 15 GDPR)",
                "Rectification of inaccurate data (Art. 16 GDPR)",
                "Erasure of your data (Art. 17 GDPR)",
                "Restriction of processing (Art. 18 GDPR)",
                "Withdrawal of consent at any time without giving reasons",
              ] : [
                "Accès à vos données conservées (art. 15 RGPD)",
                "Rectification des données inexactes (art. 16 RGPD)",
                "Effacement de vos données (art. 17 RGPD)",
                "Limitation du traitement (art. 18 RGPD)",
                "Retrait de votre consentement à tout moment et sans justification",
              ]).map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#c9a96a] mt-1 shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              {t(language,
                "Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an: info@miklat-shalom.de",
                "To exercise your rights, please contact: info@miklat-shalom.de",
                "Pour exercer vos droits, veuillez contacter : info@miklat-shalom.de"
              )}
            </p>
          </section>

          {/* 7. Aufsichtsbehörde */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "7. Aufsichtsbehörde", "7. Supervisory Authority", "7. Autorité de contrôle")}
            </h2>
            <p className="mb-4">
              {t(language,
                "Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren:",
                "You have the right to lodge a complaint with the competent data protection supervisory authority:",
                "Vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente :"
              )}
            </p>
            <div className="border-l-2 border-[#c9a96a] pl-6 space-y-1 text-sm">
              <p className="font-medium text-[#1f2420]">Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</p>
              <p>Promenade 18 · 91522 Ansbach</p>
              <p>
                <a href="https://www.lda.bayern.de" target="_blank" rel="noopener noreferrer" className="text-[#c9a96a] hover:underline">
                  www.lda.bayern.de
                </a>
              </p>
            </div>
          </section>

          {/* 8. Hosting */}
          <section className="reveal">
            <h2 className="font-serif text-2xl text-[#1f2420] mb-4">
              {t(language, "8. Hosting", "8. Hosting", "8. Hébergement")}
            </h2>
            <p>
              {t(language,
                "Diese Website wird über Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA) gehostet. Die Datenübertragung erfolgt über eine verschlüsselte HTTPS-Verbindung. Es gelten die Datenschutzbestimmungen von Vercel: ",
                "This website is hosted by Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA). Data transmission is via encrypted HTTPS connection. Vercel's privacy policy applies: ",
                "Ce site est hébergé par Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA). La transmission des données s'effectue via une connexion HTTPS chiffrée. La politique de confidentialité de Vercel s'applique : "
              )}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#c9a96a] hover:underline">
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>

        </div>

        {/* Footer note */}
        <div className="mt-20 pt-8 border-t border-[#c9a96a]/30 text-xs text-[#1f2420]/40 tracking-widest uppercase reveal">
          {t(language, "Stand: Oktober 2026 · Pastor Félix Hélan", "Last updated: October 2026 · Pastor Félix Hélan", "Mise à jour : octobre 2026 · Pasteur Félix Hélan")}
        </div>
      </div>
    </main>
  );
}

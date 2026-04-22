import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy – Dr. Antonio Balestra",
  description: "Informativa sull'uso dei cookie ai sensi del D.Lgs. 196/2003, del D.Lgs. 69/2012 e del Regolamento UE 2016/679 (GDPR).",
};

type Cookie = {
  nome: string;
  fornitore: string;
  finalità: string;
  durata: string;
};

const cookieTable: { categoria: string; descrizione: string; cookies: Cookie[] }[] = [
  {
    categoria: "Tecnici / Funzionali",
    descrizione: "Necessari per il corretto funzionamento del sito. Non richiedono consenso.",
    cookies: [
      { nome: "cookie_consent_choice", fornitore: "Questo sito", finalità: "Salva la scelta di consenso dell'utente", durata: "180 giorni" },
    ],
  },
  {
    categoria: "Analytics (solo con consenso)",
    descrizione: "Raccolgono dati aggregati sull'utilizzo del sito per migliorare l'esperienza utente.",
    cookies: [
      { nome: "_ga", fornitore: "Google Analytics", finalità: "Distingue gli utenti unici", durata: "2 anni" },
      { nome: "_ga_*", fornitore: "Google Analytics", finalità: "Mantiene lo stato della sessione", durata: "2 anni" },
    ],
  },
  {
    categoria: "Marketing / Profilazione (solo con consenso)",
    descrizione: "Utilizzati per mostrare annunci pertinenti su piattaforme di terze parti.",
    cookies: [
      { nome: "_gcl_au", fornitore: "Google Ads", finalità: "Tracciamento conversioni pubblicitarie", durata: "90 giorni" },
      { nome: "_fbp", fornitore: "Meta (Facebook)", finalità: "Identificazione del browser per annunci", durata: "90 giorni" },
      { nome: "_fbc", fornitore: "Meta (Facebook)", finalità: "Registra i click su annunci Facebook", durata: "2 anni" },
    ],
  },
  {
    categoria: "Tag Management (solo con consenso)",
    descrizione: "Utilizzati da Google Tag Manager per gestire i tag di tracciamento.",
    cookies: [
      { nome: "_gtm_*", fornitore: "Google Tag Manager", finalità: "Gestione dei tag di tracciamento", durata: "Sessione" },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-primary-700 font-medium">Cookie Policy</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-primary-700 mb-2">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Ultimo aggiornamento: aprile 2025</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">Cosa sono i cookie?</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web salvano nel tuo browser quando li visiti.
              Vengono usati per far funzionare il sito correttamente, ricordare le tue preferenze e, con il tuo consenso,
              raccogliere informazioni statistiche e di marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">Come gestiamo il consenso</h2>
            <p>
              Al primo accesso al sito viene mostrato un banner che ti permette di <strong>accettare</strong> o <strong>rifiutare</strong> i cookie non tecnici.
              I cookie analytics, marketing e di tag management vengono attivati <strong>solo dopo il tuo consenso esplicito</strong>.
              Puoi modificare o revocare la tua scelta in qualsiasi momento cancellando i cookie dal browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">Cookie utilizzati su questo sito</h2>

            {cookieTable.map((group) => (
              <div key={group.categoria} className="mb-8">
                <h3 className="text-base font-semibold text-primary-600 mb-1">{group.categoria}</h3>
                <p className="text-sm text-gray-500 mb-3">{group.descrizione}</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-primary-50 text-primary-700">
                      <tr>
                        <th className="text-left p-3 border border-gray-200">Nome</th>
                        <th className="text-left p-3 border border-gray-200">Fornitore</th>
                        <th className="text-left p-3 border border-gray-200">Finalità</th>
                        <th className="text-left p-3 border border-gray-200">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.cookies.map((c) => (
                        <tr key={c.nome} className="border-b border-gray-100">
                          <td className="p-3 border border-gray-200 font-mono text-xs">{c.nome}</td>
                          <td className="p-3 border border-gray-200">{c.fornitore}</td>
                          <td className="p-3 border border-gray-200">{c.finalità}</td>
                          <td className="p-3 border border-gray-200 whitespace-nowrap">{c.durata}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">Cookie di terze parti</h2>
            <p>I servizi di terze parti hanno proprie informative cookie:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              <li>
                <strong>Google Analytics / Ads / GTM:</strong>{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  policies.google.com/privacy
                </a>
              </li>
              <li>
                <strong>Meta (Facebook/Instagram):</strong>{" "}
                <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  facebook.com/privacy/policy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">Come disabilitare i cookie dal browser</h2>
            <p>Puoi gestire o eliminare i cookie direttamente dalle impostazioni del tuo browser:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">Contatti</h2>
            <p>
              Per qualsiasi domanda relativa a questa Cookie Policy contatta il Titolare:{" "}
              <a href="mailto:dott.antoniobalestra@gmail.com" className="text-primary-600 hover:underline">
                dott.antoniobalestra@gmail.com
              </a>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex gap-4">
          <Link href="/privacy-policy" className="text-primary-600 hover:underline text-sm font-medium">
            → Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-primary-600 text-sm transition-colors">
            ← Torna alla home
          </Link>
        </div>

      </div>
    </main>
  );
}

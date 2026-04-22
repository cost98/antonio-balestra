import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Dr. Antonio Balestra",
  description: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-24">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-primary-700 font-medium">Privacy Policy</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-primary-700 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Ultimo aggiornamento: aprile 2025</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">1. Titolare del trattamento</h2>
            <p>
              Titolare del trattamento dei dati è il <strong>Dr. Antonio Balestra</strong>, Biologo Nutrizionista.<br />
              E-mail: <a href="mailto:dott.antoniobalestra@gmail.com" className="text-primary-600 hover:underline">dott.antoniobalestra@gmail.com</a><br />
              Telefono: <a href="tel:+393317882547" className="text-primary-600 hover:underline">331 788 2547</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">2. Dati raccolti</h2>
            <p>Il sito può raccogliere le seguenti categorie di dati:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate, orario di accesso (raccolti automaticamente dai log del server).</li>
              <li><strong>Dati forniti volontariamente:</strong> nome, indirizzo e-mail, numero di telefono e qualsiasi altra informazione inserita nel modulo di contatto.</li>
              <li><strong>Dati di tracciamento (solo con consenso):</strong> cookie analytics (Google Analytics GA4), cookie pubblicitari (Google Ads, Meta Pixel) e cookie di Google Tag Manager.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">3. Finalità e basi giuridiche del trattamento</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-primary-50 text-primary-700">
                  <tr>
                    <th className="text-left p-3 border border-gray-200">Finalità</th>
                    <th className="text-left p-3 border border-gray-200">Base giuridica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 border border-gray-200">Risposta alle richieste di contatto</td>
                    <td className="p-3 border border-gray-200">Esecuzione di misure precontrattuali (art. 6 par. 1 lett. b GDPR)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 border border-gray-200">Statistiche di navigazione (Google Analytics)</td>
                    <td className="p-3 border border-gray-200">Consenso (art. 6 par. 1 lett. a GDPR)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 border border-gray-200">Marketing e remarketing (Google Ads, Meta Pixel)</td>
                    <td className="p-3 border border-gray-200">Consenso (art. 6 par. 1 lett. a GDPR)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Sicurezza e prevenzione delle frodi</td>
                    <td className="p-3 border border-gray-200">Legittimo interesse (art. 6 par. 1 lett. f GDPR)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">4. Terze parti e trasferimenti extra-UE</h2>
            <p>I dati possono essere condivisi con i seguenti fornitori:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Google LLC</strong> (Analytics, Ads, Tag Manager) – trasferimento negli USA con garanzie adeguate (Data Privacy Framework EU-USA).</li>
              <li><strong>Meta Platforms Ireland Ltd.</strong> (Meta Pixel) – trasferimento negli USA con garanzie adeguate (Data Privacy Framework EU-USA).</li>
              <li><strong>Provider di hosting</strong> – per l&apos;erogazione del sito web.</li>
            </ul>
            <p className="mt-2">Nessun dato viene venduto a terzi.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">5. Conservazione dei dati</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dati di contatto: conservati per il tempo necessario a gestire la richiesta e per un massimo di 2 anni.</li>
              <li>Dati analytics/marketing: secondo le policy dei rispettivi fornitori (di norma 13-26 mesi).</li>
              <li>Il consenso ai cookie è registrato per 180 giorni.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">6. Diritti dell&apos;interessato</h2>
            <p>Ai sensi degli artt. 15-22 GDPR hai il diritto di:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Accedere ai tuoi dati personali;</li>
              <li>Ottenere la rettifica o la cancellazione;</li>
              <li>Limitare o opporti al trattamento;</li>
              <li>Richiedere la portabilità dei dati;</li>
              <li>Revocare il consenso in qualsiasi momento (senza pregiudicare la liceità del trattamento precedente);</li>
              <li>Proporre reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">www.garanteprivacy.it</a>).</li>
            </ul>
            <p className="mt-2">
              Per esercitare i tuoi diritti scrivi a:{" "}
              <a href="mailto:dott.antoniobalestra@gmail.com" className="text-primary-600 hover:underline">dott.antoniobalestra@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary-700 mb-3">7. Modifiche alla presente informativa</h2>
            <p>
              Il Titolare si riserva il diritto di aggiornare questa informativa. Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex gap-4">
          <Link href="/cookie-policy" className="text-primary-600 hover:underline text-sm font-medium">
            → Cookie Policy
          </Link>
          <Link href="/" className="text-gray-500 hover:text-primary-600 text-sm transition-colors">
            ← Torna alla home
          </Link>
        </div>

      </div>
    </main>
  );
}

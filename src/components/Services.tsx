import { FaAppleAlt, FaHeartbeat, FaCapsules, FaClipboardList, FaRuler, FaFlask, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: <FaClipboardList className="text-5xl" />,
      title: "Valutazione Nutrizionale Clinica Completa",
      description: "Analisi approfondita dello stato nutrizionale con valutazione clinica personalizzata.",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      icon: <FaAppleAlt className="text-5xl" />,
      title: "Dietoterapia Personalizzata",
      description: "Piani alimentari su misura per le tue necessità cliniche e obiettivi di salute.",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
    },
    {
      icon: <FaHeartbeat className="text-5xl" />,
      title: "Follow-up Nutrizionali e Monitoraggio Clinico",
      description: "Controlli periodici e monitoraggio clinico per verificare i progressi terapeutici.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      icon: <FaCapsules className="text-5xl" />,
      title: "Integrazione Nutraceutica Mirata",
      description: "Prescrizione mirata di integratori e nutraceutici solo quando clinicamente indicati.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      icon: <FaFlask className="text-5xl" />,
      title: "Analisi della Composizione Corporea",
      description: "Valutazione dettagliata di massa muscolare, massa grassa e idratazione corporea.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
    },
    {
      icon: <FaRuler className="text-5xl" />,
      title: "Valutazioni Antropometriche e Misurazioni Cliniche",
      description: "Misurazioni fisiche e antropometriche per il monitoraggio dello stato nutrizionale.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
    },
  ];

  const strumenti = [
    {
      title: "Calorimetria Indiretta (COSMED)",
      description: "Questo esame misura con precisione il metabolismo basale, ovvero il dispendio energetico a riposo. È fondamentale per elaborare un piano nutrizionale accurato, evitando stime imprecise e garantendo un apporto calorico perfettamente calibrato sulle reali necessità del corpo.",
      benefits: ["Piano nutrizionale personalizzato", "Analisi precisa del dispendio energetico", "Obiettivi di peso più raggiungibili"],
      image: "/images/gallery/placeholder-600x400.png",
      color: "primary"
    },
    {
      title: "Bioimpedenziometria AKERN",
      description: "Attraverso la bioimpedenziometria, analizziamo in dettaglio la composizione corporea: massa magra, massa grassa, e stato di idratazione. Questo ci permette di monitorare i cambiamenti qualitativi del corpo, andando oltre il semplice peso sulla bilancia.",
      benefits: ["Valutazione massa grassa e magra", "Controllo dello stato di idratazione", "Monitoraggio progressi qualitativo"],
      image: "/images/gallery/placeholder-600x400.png",
      color: "secondary"
    },
    {
      title: "Plicometro",
      description: "La plicometria è una tecnica semplice e non invasiva per stimare il grasso sottocutaneo in specifici distretti corporei. È un dato utile per valutare la distribuzione del grasso e monitorare l'efficacia del percorso nutrizionale nel tempo.",
      benefits: ["Stima del grasso sottocutaneo", "Analisi della distribuzione adiposa", "Metodo non invasivo e rapido"],
      image: "/images/gallery/placeholder-600x400.png",
      color: "primary"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">SERVIZI PROFESSIONALI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Cosa Posso Fare <span className="gradient-text">Per Te</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Offro consulenze nutrizionali cliniche personalizzate, basate su un approccio multidisciplinare e su evidenze scientifiche, finalizzate alla prevenzione, alla gestione delle patologie e al miglioramento della qualità della vita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon with Gradient */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow text-sm">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Scopri di più</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-bl-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Prenota una Consulenza</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Strumenti Section */}
        <div className="mt-32">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-primary-100 rounded-full mb-4">
              <span className="text-primary-600 font-semibold text-sm">TECNOLOGIE AVANZATE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Strumenti <span className="gradient-text">in Studio</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Utilizzo tecnologie all&apos;avanguardia per garantire una valutazione precisa e un monitoraggio efficace del tuo percorso.
            </p>
          </div>

          <div className="space-y-20">
            {strumenti.map((strumento, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={strumento.image}
                    alt={strumento.title}
                    width={600}
                    height={400}
                    unoptimized
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${strumento.color}-900/60 to-transparent`}></div>
                </div>
                
                {/* Content */}
                <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{strumento.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{strumento.description}</p>
                  <ul className="space-y-3">
                    {strumento.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <FaCheckCircle className={`text-${strumento.color}-500 mr-3 flex-shrink-0`} />
                        <span className="text-gray-800">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

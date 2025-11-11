import { FaCheckCircle, FaClipboardList, FaUserCheck, FaPills, FaChartLine } from "react-icons/fa";

export default function Method() {
  const steps = [
    {
      number: "01",
      icon: <FaClipboardList className="text-4xl" />,
      title: "Anamnesi Dettagliata",
      description: "Valutazione completa della storia clinica, esami ematici e strumentali per una diagnosi accurata.",
      color: "from-blue-400 to-blue-600",
    },
    {
      number: "02",
      icon: <FaUserCheck className="text-4xl" />,
      title: "Piano Personalizzato",
      description: "Sviluppo di un piano alimentare su misura basato sulle esigenze metaboliche e cliniche del paziente.",
      color: "from-green-400 to-green-600",
    },
    {
      number: "03",
      icon: <FaPills className="text-4xl" />,
      title: "Integrazione Nutraceutica",
      description: "Prescrizione mirata di integratori per ottimizzare la risposta terapeutica e supportare il metabolismo.",
      color: "from-purple-400 to-purple-600",
    },
    {
      number: "04",
      icon: <FaChartLine className="text-4xl" />,
      title: "Monitoraggio Continuo",
      description: "Follow-up regolari per valutare i progressi e adattare il piano nutrizionale alle necessità in evoluzione.",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section id="method" className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 animate-gradient"></div>
      
      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 text-white">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="font-semibold text-sm">🎯 IL MIO APPROCCIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Un Metodo in <span className="text-yellow-300">4 Step</span>
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
            Un approccio multidisciplinare che unisce scienza, esperienza clinica e attenzione personalizzata per risultati duraturi.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-full h-1 -ml-4">
                    <div className="w-full h-full bg-gradient-to-r from-white/40 to-transparent"></div>
                  </div>
                )}

                <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-white/40">
                  {/* Number Badge */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-all duration-500">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed">{step.description}</p>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 hover:border-white/40 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-8 text-center text-white">Perché Scegliere il Mio Approccio</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaCheckCircle className="text-3xl" />,
                  title: "Collaborazione con Specialisti",
                  description: "Lavoro in team con medici, ortopedici e altri professionisti della salute per un approccio integrato.",
                },
                {
                  icon: <FaCheckCircle className="text-3xl" />,
                  title: "Evidenze Scientifiche",
                  description: "Protocolli basati su ricerche e studi clinici aggiornati dalle migliori università internazionali.",
                },
                {
                  icon: <FaCheckCircle className="text-3xl" />,
                  title: "Educazione del Paziente",
                  description: "Counseling nutrizionale per rendere il paziente autonomo nelle scelte alimentari quotidiane.",
                },
                {
                  icon: <FaCheckCircle className="text-3xl" />,
                  title: "Supporto Continuo",
                  description: "Disponibilità per domande e aggiustamenti del piano durante tutto il percorso terapeutico.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-yellow-300 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg mb-2">{benefit.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Inizia il Tuo Percorso</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

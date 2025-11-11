import { FaHeartbeat, FaWeight, FaBrain, FaHeart, FaDna, FaStethoscope } from "react-icons/fa";

export default function Pathologies() {
  const pathologies = [
    {
      icon: <FaHeartbeat className="text-4xl" />,
      title: "Diabete Tipo 1 e 2",
      description: "Gestione nutrizionale per il controllo glicemico ottimale e prevenzione delle complicazioni.",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      patients: "200+",
    },
    {
      icon: <FaWeight className="text-4xl" />,
      title: "Obesità e Sovrappeso",
      description: "Programmi personalizzati per la perdita di peso sostenibile e il miglioramento metabolico.",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
      patients: "150+",
    },
    {
      icon: <FaStethoscope className="text-4xl" />,
      title: "Sindrome Metabolica",
      description: "Interventi nutrizionali per ipertensione, dislipidemia e resistenza insulinica.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      patients: "100+",
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Malattie Cardiovascolari",
      description: "Diete cardioprotettive per la prevenzione e il supporto terapeutico.",
      gradient: "from-rose-500 to-red-500",
      bgGradient: "from-rose-50 to-red-50",
      patients: "80+",
    },
    {
      icon: <FaBrain className="text-4xl" />,
      title: "Patologie Neurologiche",
      description: "Protocolli di dieta chetogenica per epilessia e malattie neurodegenerative.",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      patients: "50+",
    },
    {
      icon: <FaDna className="text-4xl" />,
      title: "Disturbi Gastrointestinali",
      description: "Piani alimentari per colite, gastrite, reflusso e altre patologie digestive.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      patients: "120+",
    },
  ];

  return (
    <section id="pathologies" className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-red-100 rounded-full mb-4">
            <span className="text-red-600 font-semibold text-sm">🏥 AREE DI SPECIALIZZAZIONE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Patologie <span className="gradient-text">Trattate</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Approccio nutrizionale personalizzato e basato su evidenze scientifiche per diverse condizioni cliniche.
          </p>
        </div>

        {/* Pathologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pathologies.map((pathology, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pathology.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-8">
                {/* Icon with Gradient */}
                <div className={`w-20 h-20 bg-gradient-to-br ${pathology.gradient} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {pathology.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {pathology.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {pathology.description}
                </p>

                {/* Stats Badge */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 group-hover:border-transparent transition-colors">
                  <span className="text-sm text-gray-500 group-hover:text-gray-700">Pazienti trattati</span>
                  <div className={`px-4 py-2 bg-gradient-to-r ${pathology.gradient} text-white font-bold rounded-full text-sm shadow-lg`}>
                    {pathology.patients}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pathology.gradient} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-700`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <p className="text-gray-700 text-lg font-medium">
              Non trovi la tua condizione? Contattami per una consulenza personalizzata.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Richiedi Informazioni</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

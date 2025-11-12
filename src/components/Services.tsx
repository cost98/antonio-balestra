import { FaAppleAlt, FaHeartbeat, FaCapsules, FaUserMd } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaHeartbeat className="text-5xl" />,
      title: "Nutrizione per Diabetici",
      description: "Piani alimentari personalizzati per il controllo glicemico e la prevenzione delle complicazioni del diabete.",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
    },
    {
      icon: <FaUserMd className="text-5xl" />,
      title: "Piede Diabetico",
      description: "Gestione nutrizionale specializzata per pazienti con ulcere e complicazioni del piede diabetico.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: <FaCapsules className="text-5xl" />,
      title: "Integratori Nutraceutici",
      description: "Prescrizione di integratori mirati per ottimizzare la risposta terapeutica e supportare il metabolismo.",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
    },
    {
      icon: <FaAppleAlt className="text-5xl" />,
      title: "Dieta Chetogenica",
      description: "Protocolli di dieta chetogenica per diabete, epilessia farmaco-resistente e malattie neurodegenerative.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
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
            Consulenze nutrizionali personalizzate con un approccio multidisciplinare basato su evidenze scientifiche e anni di esperienza clinica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow">
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
      </div>
    </section>
  );
}

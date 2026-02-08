import { FaHospital, FaUserMd, FaBrain, FaSpa, FaHandsHelping, FaStethoscope } from "react-icons/fa";
import { GiSpinalCoil } from "react-icons/gi";

export default function Collaborations() {
  const hospital = {
    name: "ASST Santi Paolo e Carlo di Milano",
    description: "Collaborazione attiva in regime di intramoenia allargata",
    areas: [
      {
        icon: <FaStethoscope className="text-3xl" />,
        name: "Diabetologia",
        gradient: "from-red-500 to-pink-500",
      },
      {
        icon: <GiSpinalCoil className="text-3xl" />,
        name: "Ortopedia",
        gradient: "from-blue-500 to-cyan-500",
      },
    ],
  };

  const team = [
    {
      icon: <FaBrain className="text-4xl" />,
      role: "Psicologa",
      specialization: "Disturbi del Comportamento Alimentare (DCA)",
      description: "Supporto psicologico specializzato per la gestione dei disturbi alimentari.",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
    },
    {
      icon: <FaSpa className="text-4xl" />,
      role: "Sociologa",
      specialization: "Mindful Eating",
      description: "Percorso strutturato integrato per un approccio consapevole all'alimentazione.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      role: "Osteopata",
      specialization: "Medicina Manuale",
      description: "Trattamenti osteopatici per il benessere muscolo-scheletrico integrato.",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
    },
    {
      icon: <FaUserMd className="text-4xl" />,
      role: "Ozonoterapeuta",
      specialization: "Ossigeno-Ozono Terapia",
      description: "Trattamenti innovativi con ozono medicale per diverse applicazioni terapeutiche.",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
  ];

  return (
    <section id="collaborations" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-200/20 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">RETE PROFESSIONALE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Collaborazioni e <span className="gradient-text">Rete Interdisciplinare</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Un approccio integrato che unisce competenze multidisciplinari per una cura completa e personalizzata del paziente.
          </p>
        </div>

        {/* NOVACLIN Highlight */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">NOVACLIN</h3>
            <p className="text-gray-600 mb-4">Studio Associato - Fondatore</p>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              {hospital.description} con l&apos;<span className="font-semibold">{hospital.name}</span>, garantendo un percorso di cura integrato e di eccellenza.
            </p>
          </div>

          {/* Hospital Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hospital.areas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{area.name}</h4>
                    <p className="text-gray-600 text-sm">Area di collaborazione</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Team NOVACLIN
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professionisti specializzati che lavorano in sinergia per offrire un supporto completo e multidimensionale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon with Gradient */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    {member.icon}
                  </div>

                  {/* Role & Specialization */}
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                      {member.role}
                    </h4>
                    <p className={`font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent text-lg`}>
                      {member.specialization}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Decorative Corner Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.gradient} opacity-5 rounded-bl-full transform group-hover:scale-150 transition-transform duration-700`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

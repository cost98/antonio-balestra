import { FaGraduationCap, FaHospital, FaAward, FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const milestones = [
    {
      icon: <FaHospital className="text-3xl" />,
      title: "ASST Milano",
      description: "Ambulatorio Piede Diabetico",
      year: "2023",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Laurea Magistrale",
      description: "Alimentazione e Nutrizione",
      year: "2024",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Certificazione TOEIC",
      description: "Inglese livello B2-C1",
      year: "2023",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-primary-600 font-semibold text-sm">IL PROFESSIONISTA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Chi <span className="gradient-text">Sono</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/gallery/IMG_8913.JPG"
                  alt="Dr. Antonio Balestra"
                  width={800}
                  height={1000}
                  unoptimized
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 hover-lift hidden md:block">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Pazienti Assistiti</div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  Dr. Antonio Balestra
                </h3>
                <p className="text-xl text-primary-600 font-semibold">
                  Nutrizionista Clinico Specializzato
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Specializzato in <strong>alimentazione e nutrizione umana</strong>, con particolare focus su pazienti diabetici e patologie metaboliche complesse.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Attualmente lavoro presso l&apos;<strong className="text-primary-600">ASST Santi Paolo e Carlo</strong> di Milano, nel reparto di Ortopedia e Traumatologia, dove mi occupo dell&apos;ambulatorio <strong>Piede Diabetico</strong>, collaborando con un team multidisciplinare.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Esperienza", value: "10+ anni" },
                  { label: "Specializzazioni", value: "5+" },
                  { label: "Pubblicazioni", value: "3" },
                  { label: "Lingue", value: "IT, EN" },
                ].map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-4 text-center hover:shadow-md transition-all">
                    <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Milestones Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Percorso Formativo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Year Badge */}
                    <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg transform group-hover:rotate-12 transition-all">
                      {milestone.year}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-xl flex items-center justify-center text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                      {milestone.icon}
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>

                  {/* Connection Line */}
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-1 -ml-3">
                      <div className="w-6 h-1 bg-gradient-to-r from-primary-300 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Research Focus */}
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-10 md:p-12 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <FaGraduationCap className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold">Focus di Ricerca</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              La mia tesi di laurea magistrale si è concentrata sullo <strong>studio osservazionale prospettico clinico sul trattamento delle ulcere nel piede diabetico</strong>, integrando la dieta con l&apos;uso di integratori nutraceutici.
            </p>
            <p className="text-white/80 text-base">
              Un approccio innovativo che unisce nutrizione clinica e terapia integrata, con risultati pubblicati in collaborazione con l&apos;Università di Milano e Harvard University.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

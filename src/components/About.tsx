import { FaGraduationCap, FaHospital, FaAward, FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const milestones = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Laurea Triennale in Scienze Biomediche",
      description: "Università degli Studi di Pavia\nTesi in: Applicazione della dieta chetogenica nel diabete, nell'epilessia farmaco-resistente e nelle patologie neurodegenerative",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Tirocinio curricolare in Biochimica Clinica",
      description: "Università degli Studi di Pavia",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Laurea Magistrale in Alimentazione e Nutrizione Umana",
      description: "Università degli Studi di Milano\nTesi in: Dietoterapia e integrazione della vitamina D in pazienti affetti da piede diabetico",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Master di II livello in Nutrizione Clinica",
      description: "Università degli Studi di Pavia\nTesi in: Gestione nutrizionale del paziente diabetico con anemia",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaHospital className="text-3xl" />,
      title: "Iscrizione all'Albo dei Biologi della Lombardia",
      description: "Riconoscimento professionale",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: "Studente di Medicina e Chirurgia",
      description: "Università degli Studi di Milano",
      color: "from-pink-500 to-rose-500",
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
            <span className="text-primary-600 font-semibold text-sm tracking-widest">IL PROFESSIONISTA</span>
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
                  src="/images/gallery/IMG_8913.webp"
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
                  Sono fondatore di <strong className="text-primary-600">AGMEDICA</strong>, poliambulatorio che opera con una collaborazione attiva in regime di <strong>intramoenia allargata</strong> con l&apos;<strong className="text-primary-600">ASST Santi Paolo e Carlo</strong> di Milano, in particolare per <strong>Diabetologia</strong> e <strong>Ortopedia</strong>.
                </p>
              </div>

            </div>
          </div>

          {/* Milestones Timeline */}
          <div className="mt-24 pt-16">
            <h3 className="text-3xl font-bold text-center mb-12">Percorso Formativo</h3>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                Il mio percorso accademico si è articolato attraverso una <strong>laurea triennale in Scienze Biomediche</strong> con una tesi sull&apos;applicazione della dieta chetogenica nel diabete, nell&apos;epilessia farmaco-resistente e nelle patologie neurodegenerative, un tirocinio in Biochimica Clinica, una <strong>laurea magistrale in Alimentazione e Nutrizione Umana</strong> con tesi sulla dietoterapia e integrazione della vitamina D nei pazienti con piede diabetico, e un <strong>master di II livello in Nutrizione Clinica</strong> focalizzato sulla gestione nutrizionale del paziente diabetico con anemia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color.replace('from-', 'from-').replace('to-', 'to-').replace(/500/g, '50')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-8 h-full flex flex-col">
                    <div className={`w-20 h-20 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      {milestone.icon}
                    </div>
                    
                    <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors flex-grow">{milestone.title}</h4>
                    <p className="text-gray-600 leading-relaxed flex-grow text-sm whitespace-pre-line">{milestone.description}</p>
                  </div>

                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className={`w-full h-full bg-gradient-to-br ${milestone.color} rounded-bl-full`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const locations = [
    { city: "Milano", address: "ASST Santi Paolo e Carlo" },
    { city: "Pavia", address: "Via Cascinazza 15" },
    { city: "Brescia", address: "Studio Medico Privato" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-primary-700 font-semibold text-sm">PRENOTA LA TUA VISITA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Entra in <span className="gradient-text">Contatto</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Compila il form o contattami direttamente. Rispondo personalmente a ogni richiesta entro 24 ore per fornirti tutte le informazioni di cui hai bisogno.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden h-full flex flex-col">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"></div>

                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-3xl font-bold mb-2">Invia un Messaggio</h3>
                  <p className="text-gray-600 mb-8">Compila il form e ti risponderò entro 24 ore</p>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                            Nome e Cognome *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            placeholder="Mario Rossi"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                            Telefono *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            placeholder="+39 123 456 7890"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                          placeholder="mario.rossi@email.com"
                        />
                      </div>

                      <div className="flex-1 flex flex-col">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                          Messaggio *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={8}
                          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none flex-1"
                          placeholder="Descrivimi brevemente la tua situazione o cosa vorresti sapere..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-5 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-lg mt-auto"
                      >
                        <FaPaperPlane />
                        <span>Invia Messaggio</span>
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-12 flex-1 flex flex-col justify-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                        <FaCheckCircle className="text-5xl text-green-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">Messaggio Inviato!</h4>
                      <p className="text-gray-600 text-lg">
                        Ti risponderò al più presto. Grazie per avermi contattato!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar Info - 2 columns */}
            <div className="lg:col-span-2 space-y-6 flex flex-col">
              {/* Contact Cards */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border-2 border-gray-100 hover:border-primary-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <FaPhone className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Chiamami</h4>
                    <a
                      href="tel:+393393284926"
                      className="text-primary-600 hover:text-primary-700 font-bold text-xl block hover:scale-105 transition-transform"
                    >
                      +39 339 328 4926
                    </a>
                    <p className="text-sm text-gray-600 mt-2 font-medium">Lun-Ven 9:00-18:00</p>
                    <p className="text-xs text-gray-500 mt-1">Preferibile orario mattutino</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border-2 border-gray-100 hover:border-primary-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <FaEnvelope className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Scrivimi</h4>
                    <a
                      href="mailto:info@antoniobalestra.it"
                      className="text-primary-600 hover:text-primary-700 font-semibold text-base block break-all hover:scale-105 transition-transform"
                    >
                      info@antoniobalestra.it
                    </a>
                    <p className="text-sm text-gray-600 mt-2 font-medium">Risposta entro 24h</p>
                    <p className="text-xs text-gray-500 mt-1">Consulenza anche via email</p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-2xl shadow-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <h4 className="font-bold text-xl">Le Mie Sedi</h4>
                </div>
                <div className="space-y-3">
                  {locations.map((location, index) => (
                    <div key={index} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 hover:bg-white/25 transition-all border border-white/20">
                      <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-2xl text-primary-300" />
                        <div>
                          <p className="font-bold text-lg">{location.city}</p>
                          <p className="text-sm text-white/90 font-medium">{location.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/70 mt-4 bg-white/10 p-3 rounded-lg">
                  Le visite vengono organizzate su appuntamento in base alla sede più comoda per te
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-primary-200 transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <FaClock className="text-xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">Disponibilità</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-4 border border-primary-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-900">Lun - Ven</span>
                      <span className="text-primary-600 font-bold text-lg">9:00 - 18:00</span>
                    </div>
                    <p className="text-xs text-gray-600">Visite in tutte le sedi</p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-gray-900">Sabato</span>
                      <span className="text-primary-600 font-bold">Su richiesta</span>
                    </div>
                    <p className="text-xs text-gray-600">Disponibilità limitata</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 bg-primary-50 p-3 rounded-lg border border-primary-200">
                  Prenota con anticipo per avere più scelta di orari
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

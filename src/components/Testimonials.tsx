"use client";

import { useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria R.",
      condition: "Diabete Tipo 2",
      rating: 5,
      text: "Il Dr. Balestra ha cambiato la mia vita. Grazie al suo piano alimentare personalizzato ho finalmente il diabete sotto controllo e mi sento più energica. Un professionista eccezionale!",
      avatar: "👩",
      result: "-12kg in 6 mesi",
    },
    {
      name: "Giuseppe L.",
      condition: "Piede Diabetico",
      rating: 5,
      text: "Professionalità e competenza eccezionali. Il supporto nutrizionale è stato fondamentale per la guarigione della mia ulcera. Consiglio vivamente il Dr. Balestra a chiunque!",
      avatar: "👨",
      result: "Ulcera guarita",
    },
    {
      name: "Laura S.",
      condition: "Obesità",
      rating: 5,
      text: "Approccio umano e scientifico insieme. Ho perso 15 kg in modo sano e sostenibile, senza mai sentirmi affamata. Un percorso che ha migliorato non solo il mio peso ma tutta la mia salute!",
      avatar: "👩‍🦰",
      result: "-15kg in 8 mesi",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-yellow-100 rounded-full mb-4">
            <span className="text-yellow-700 font-semibold text-sm">⭐ TESTIMONIANZE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Cosa Dicono di Me <span className="gradient-text">I Miei Pazienti</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            La soddisfazione e i risultati dei miei pazienti sono la mia più grande motivazione.
          </p>
        </div>

        {/* Featured Testimonial (Large) */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 md:p-16 hover:shadow-3xl transition-all duration-500">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-10 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
              <FaQuoteLeft className="text-3xl text-white" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-5xl shadow-xl">
                  {testimonials[activeIndex].avatar}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex gap-1 justify-center md:justify-start mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-2xl" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-xl leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </p>

                {/* Info */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-primary-600 font-medium">{testimonials[activeIndex].condition}</p>
                  </div>
                  
                  <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full shadow-lg">
                    {testimonials[activeIndex].result}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 justify-center mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2 justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                index === activeIndex ? "ring-4 ring-primary-500" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.condition}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <p className="text-gray-600 text-sm line-clamp-3">{testimonial.text}</p>

              <div className="mt-4 pt-4 border-t">
                <span className="text-green-600 font-semibold text-sm">{testimonial.result}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg mb-6 font-medium">Vuoi ottenere risultati come questi?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Prenota la Tua Prima Visita</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

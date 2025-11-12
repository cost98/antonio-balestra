"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    
    handleResize(); // Set initial value
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 animate-gradient"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary-300/30 to-primary-400/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-secondary-300/30 to-secondary-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testo */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="inline-block">
              <span className="text-primary-600 font-medium text-sm uppercase tracking-wider">Nutrizionista Clinico</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Dr. Antonio<br />
              <span className="gradient-text">Balestra</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Trasforma la tua salute attraverso<br className="hidden md:block" />
              <span className="text-primary-600">la scienza della nutrizione</span>
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Specializzato in <strong>nutrizione per diabetici</strong>, <strong>piede diabetico</strong> e 
              piani alimentari personalizzati. Approccio multidisciplinare basato su evidenze scientifiche.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-full overflow-hidden shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Prenota Visita
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              
              <a
                href="#about"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-full border-2 border-primary-600 hover:bg-primary-50 transition-all hover:scale-105 shadow-md"
              >
                Chi Sono
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Pazienti</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">Anni Esperienza</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Soddisfazione</div>
              </div>
            </div>
          </div>

          {/* Immagine */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glass Card Effect - solo desktop */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm rounded-3xl transform rotate-6"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl lg:hover:shadow-3xl transition-all duration-500 lg:hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay"></div>
                <Image
                  src="/images/gallery/IMG_8909.JPG"
                  alt="Dr. Antonio Balestra"
                  width={600}
                  height={800}
                  unoptimized
                  className="w-full h-auto object-cover"
                  style={{
                    transform: isDesktop ? `translateY(${scrollY * 0.1}px)` : 'none',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

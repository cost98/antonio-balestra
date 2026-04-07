import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Top Section */}
        <div className="mb-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="max-w-2xl">
            <Image
              src="/images/logos/logo_esteso.webp"
              alt="Dr. Antonio Balestra"
              width={220}
              height={68}
              unoptimized
              className="h-16 w-auto brightness-0 invert mb-6"
            />
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Trasforma la tua salute attraverso la scienza della nutrizione. 
              Approccio personalizzato basato su evidenze scientifiche.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin />, href: "#" },
                { icon: <FaFacebook />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-primary-500"
                  aria-label="Social media"
                >
                  <span className="text-lg text-white">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navigazione</h4>
            <ul className="space-y-3">
              {[
                { label: "Chi sono", href: "#about" },
                { label: "Servizi", href: "#services" },
                { label: "Patologie", href: "#pathologies" },
                { label: "Metodo", href: "#method" },
                { label: "Testimonianze", href: "#testimonials" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contatti</h4>
            <div className="space-y-4">
              <a href="tel:+393393284926" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <FaPhone className="text-primary-400 group-hover:text-white text-sm" />
                </div>
                <span>339 328 4926</span>
              </a>
              <a href="mailto:dottantoniobalestra@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <FaEnvelope className="text-primary-400 group-hover:text-white text-sm" />
                </div>
                <span>dottantoniobalestra@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Sedi</h4>
            <div className="space-y-3">
              {[
                { city: "Opera (Milano)", address: "Via Giacomo Leopardi 3", maps: "https://maps.google.com/?q=Via+Giacomo+Leopardi+3,+Opera,+Milano" },
                { city: "Piacenza", address: "Vicolo Buffalari 2A", maps: "https://maps.google.com/?q=Vicolo+Buffalari+2A,+Piacenza" },
                { city: "San Genesio (Pavia)", address: "life&sport STUDIO – Via E. Fermi 2", maps: "https://maps.google.com/?q=life+%26+sport+STUDIO+Via+E.+Fermi+2+San+Genesio+ed+Uniti+PV" },
              ].map((loc) => (
                <a
                  key={loc.city}
                  href={loc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary-500 transition-colors">
                    <FaMapMarkerAlt className="text-primary-400 group-hover:text-white text-sm" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{loc.city}</p>
                    <p className="text-sm text-gray-400">{loc.address}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Dr. Antonio Balestra. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-primary-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

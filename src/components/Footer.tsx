import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo e Descrizione */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
              <Image
                src="/images/logos/logo_esteso.png"
                alt="Dr. Antonio Balestra"
                width={180}
                height={56}
                unoptimized
                className="h-14 w-auto relative brightness-0 invert hover:scale-105 transition-transform"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Nutrizionista clinico specializzato in nutrizione per diabetici e piani alimentari personalizzati basati su evidenze scientifiche.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaLinkedin />, href: "#", color: "hover:bg-blue-600" },
                { icon: <FaFacebook />, href: "#", color: "hover:bg-blue-500" },
                { icon: <FaInstagram />, href: "#", color: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-11 h-11 bg-white/10 backdrop-blur-sm text-white rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg ${social.color} border border-white/10`}
                  aria-label="Social media"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></span>
              Contatti
            </h3>
            <div className="space-y-4 text-gray-300 text-sm">
              {[
                { icon: <FaPhone />, text: "339 328 4926", href: "tel:+393393284926" },
                { icon: <FaEnvelope />, text: "info@antoniobalestra.it", href: "mailto:info@antoniobalestra.it" },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 group hover:text-primary-400 transition-all"
                >
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 transition-all border border-white/10">
                    {contact.icon}
                  </div>
                  <span className="font-medium">{contact.text}</span>
                </a>
              ))}
              <div className="flex items-start gap-3 pt-2">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary-400 flex-shrink-0 border border-white/10">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-gray-300 font-medium leading-relaxed">
                  Via Cascinazza 15<br />
                  27100 Pavia, Italia
                </span>
              </div>
            </div>
          </div>

          {/* Link Rapidi */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></span>
              Link Rapidi
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                { label: "Chi sono", href: "#about" },
                { label: "Servizi", href: "#services" },
                { label: "Patologie", href: "#pathologies" },
                { label: "Metodo", href: "#method" },
                { label: "Contatti", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 hover:translate-x-2 transition-all inline-flex items-center gap-3 group font-medium"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:scale-150 transition-transform"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Dr. Antonio Balestra - Tutti i diritti riservati</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-primary-400 transition-colors font-medium">Privacy Policy</Link>
              <span className="text-gray-600">•</span>
              <Link href="#" className="hover:text-primary-400 transition-colors font-medium">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Chi sono", href: "#about" },
    { label: "Servizi", href: "#services" },
    { label: "Patologie", href: "#pathologies" },
    { label: "Metodo", href: "#method" },
    { label: "Collaborazioni", href: "#collaborations" },
    { label: "Contatti", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-white/80 backdrop-blur-sm shadow-sm py-4"
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/images/logos/logo_AB.svg"
                alt="Dr. Antonio Balestra"
                width={48}
                height={48}
                unoptimized
                className={`transition-all duration-500 ${
                  isScrolled ? "h-10" : "h-12"
                } w-auto group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-700 hover:text-primary-600 transition-colors font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href="tel:+393393284926"
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              Prenota
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
              isMenuOpen
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-screen opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all font-medium rounded-xl mx-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <a
                href="tel:+393393284926"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-4 rounded-full hover:shadow-lg transition-all font-semibold"
              >
                <FaPhone />
                <span>Prenota Visita</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

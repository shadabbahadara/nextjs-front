"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Rooms & Suites", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Dining", href: "#dining" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className={`font-display text-xl font-semibold tracking-[0.15em] transition-colors duration-300 ${
              scrolled ? "text-[#1B3D2F]" : "text-white"
            }`}
          >
            THE MOUNTAIN FRONT
          </span>
          <span
            className={`text-[9px] tracking-[0.35em] font-light transition-colors duration-300 ${
              scrolled ? "text-[#C9A96E]" : "text-[#E8D5A3]"
            }`}
          >
            RESORT &nbsp;·&nbsp; RESTAURANT &nbsp;·&nbsp; SPA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] font-medium transition-colors duration-300 hover:text-[#C9A96E] ${
                scrolled ? "text-[#1B3D2F]" : "text-white/90"
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <a
            href="https://analysishms.com/hotels/163"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-6 py-2.5 text-xs tracking-[0.15em] font-medium bg-[#C9A96E] text-white hover:bg-[#a8873e] transition-colors duration-300"
          >
            BOOK NOW
          </a>  
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${
            scrolled ? "text-[#1B3D2F]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 py-4">
          <div className="flex flex-col px-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1B3D2F] text-xs tracking-[0.15em] py-3 border-b border-gray-50 hover:text-[#C9A96E] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <a
              href="https://analysishms.com/hotels/163"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 text-xs tracking-[0.15em] text-center font-medium bg-[#C9A96E] text-white hover:bg-[#a8873e] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

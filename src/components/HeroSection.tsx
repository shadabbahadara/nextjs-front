"use client";

import { useState } from "react";
import { ChevronDown, Calendar, Users, Search } from "lucide-react";

export default function HeroSection() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults");

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero/hero.JPG')",
        }}
      />

      {/* Layered Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65" />

      {/* Decorative vertical lines */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-white/20" />
        <span className="text-white/30 text-[9px] tracking-[0.4em] rotate-90 whitespace-nowrap my-4">
          NAINITAL · UTTARAKHAND
        </span>
        <div className="w-px h-24 bg-white/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        <p className="text-[#E8D5A3] text-[10px] tracking-[0.5em] mb-5 font-light">
          JIM CORBETT NATIONAL PARK, RAMNAGAR · NAINITAL · UTTARAKHAND · INDIA
        </p>

        <h1 className="font-display text-white font-semibold leading-none mb-2">
          <span className="block text-[clamp(2.4rem,7vw,6rem)] tracking-[0.12em]">
            THE MOUNTAIN FRONT
          </span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#C9A96E]" />
          <span className="font-display text-white/90 text-base md:text-xl font-light italic tracking-wide">
            Resort &nbsp;&middot;&nbsp; Restaurant &nbsp;&middot;&nbsp; SPA
          </span>
          <div className="h-px w-16 bg-[#C9A96E]" />
        </div>

        <p className="text-white/70 text-base md:text-lg font-light tracking-wide max-w-lg mx-auto leading-relaxed">
          Where the silence of the mountains becomes the loudest luxury
        </p>
      </div>

      {/* Booking Widget */}
      <div
        id="booking"
        className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-10 md:mt-14"
      >
        <div className="bg-black/30 backdrop-blur-md border border-white/15 p-5 md:p-7">
          <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase text-center mb-5">
            Check Availability
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Check In */}
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-[10px] tracking-[0.3em] uppercase flex items-center gap-2">
                <Calendar size={11} />
                Check In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors placeholder:text-white/30"
              />
            </div>

            {/* Check Out */}
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-[10px] tracking-[0.3em] uppercase flex items-center gap-2">
                <Calendar size={11} />
                Check Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-[10px] tracking-[0.3em] uppercase flex items-center gap-2">
                <Users size={11} />
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
              >
                <option value="1 Adult" className="bg-[#1B3D2F] text-white">
                  1 Adult
                </option>
                <option value="2 Adults" className="bg-[#1B3D2F] text-white">
                  2 Adults
                </option>
                <option
                  value="2 Adults, 1 Child"
                  className="bg-[#1B3D2F] text-white"
                >
                  2 Adults, 1 Child
                </option>
                <option
                  value="2 Adults, 2 Children"
                  className="bg-[#1B3D2F] text-white"
                >
                  2 Adults, 2 Children
                </option>
                <option value="3 Adults" className="bg-[#1B3D2F] text-white">
                  3 Adults
                </option>
              </select>
            </div>

            {/* CTA */}
            <button className="flex items-center justify-center gap-2 bg-[#C9A96E] hover:bg-[#a8873e] text-white px-4 py-3 text-xs tracking-[0.2em] font-medium transition-colors duration-300 mt-auto">
              <Search size={14} />
              CHECK AVAILABILITY
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
        <span className="text-white/30 text-[9px] tracking-[0.4em]">
          SCROLL
        </span>
        <ChevronDown
          size={16}
          className="text-white/40 animate-bounce"
        />
      </div>
    </section>
  );
}

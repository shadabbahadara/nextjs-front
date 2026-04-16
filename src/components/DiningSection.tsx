"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";


const restaurantImages = [
  "/images/dining/Vayanjan%20Restaurant/dinning1.JPG",
  "/images/dining/Vayanjan%20Restaurant/dinning2.JPG",
  "/images/dining/Vayanjan%20Restaurant/dinning3.JPG",
  "/images/dining/Vayanjan%20Restaurant/dinning4.JPG",
  "/images/dining/Vayanjan%20Restaurant/dinning5.JPG",
  "/images/dining/Vayanjan%20Restaurant/300A1629.JPG",
  "/images/dining/Vayanjan%20Restaurant/300A1640.JPG",
  "/images/dining/Vayanjan%20Restaurant/300A1917.JPG",
  "/images/dining/Vayanjan%20Restaurant/300A1922.JPG",
];

const venues = [
  { name: "Vayanjan Restaurant", type: "Multi-Cuisine Restaurant", hours: "7 AM – 11 PM" },
];

export default function DiningSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const prev = () => setActive((i) => (i === 0 ? restaurantImages.length - 1 : i - 1));
  const next = () => setActive((i) => (i === restaurantImages.length - 1 ? 0 : i + 1));

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setInterval(() => setActive((i) => (i === restaurantImages.length - 1 ? 0 : i + 1)), 5000);
        } else {
          if (timer) clearInterval(timer);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} id="dining" className="bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Image Side - Slider */}
          <div className="relative h-[420px] lg:h-[600px] min-h-[420px] overflow-hidden">
            {restaurantImages.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === active ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={img}
                  alt={`Vayanjan Restaurant photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-9 h-9 flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white w-9 h-9 flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              &#8594;
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
              {restaurantImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "bg-white w-4" : "bg-white/50 w-1.5"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Side */}
          <div className="bg-white px-10 md:px-16 py-16 md:py-20 flex flex-col justify-center">
            <p className="text-[#C9A96E] text-[10px] tracking-[0.45em] uppercase mb-5">
              Culinary Excellence
            </p>
            <h2 className="font-display text-[#1B3D2F] text-5xl md:text-6xl leading-tight mb-6">
              Taste the
              <br />
              <span className="italic font-normal">Mountains</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#C9A96E] mb-8" />

            <p className="text-[#5A5A5A] leading-relaxed mb-5 text-sm">
              Vayanjan — meaning &lsquo;food&rsquo; in Sanskrit — is our celebration of Kumaoni
              flavours and mountain produce. We work closely with local farmers
              of the Nainital foothills, foraging seasonal herbs and sourcing
              organic ingredients to bring authenticity to every plate.
            </p>
            <p className="text-[#5A5A5A] leading-relaxed mb-10 text-sm">
              From hearty Pahadi breakfasts and wood-fire grilled lunches to
              candlelit dinners under a canopy of stars, every meal at The
              Mountain Front is a quiet ceremony — a celebration of place and
              people.
            </p>

            {/* Venues List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {venues.map((venue) => (
                <div
                  key={venue.name}
                  className="border-l-2 border-[#C9A96E] pl-4"
                >
                  <div className="font-display text-[#1B3D2F] text-base font-medium leading-tight">
                    {venue.name}
                  </div>
                  <div className="text-[#8C7B6B] text-xs mt-0.5">
                    {venue.type}
                  </div>
                  <div className="text-[#B0A090] text-[10px] mt-0.5 tracking-wide">
                    {venue.hours}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-4 bg-[#1B3D2F] text-white px-10 py-4 text-xs tracking-[0.25em] hover:bg-[#0F2117] transition-colors duration-300 w-fit"
            >
              EXPLORE MENUS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

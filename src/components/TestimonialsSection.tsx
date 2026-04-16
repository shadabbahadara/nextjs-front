"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Priya Mehta",
    role: "Travel Writer, Condé Nast",
    quote:
      "The Mountain Front is not merely a resort — it is a philosophy. The mountains here don't just form a backdrop; they become a part of you. The most transformative stay of my life.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    stay: "Royal Himalayan Suite",
  },
  {
    id: 2,
    name: "James Harrington",
    role: "CEO, Meridian Capital",
    quote:
      "I've stayed at the finest resorts across Europe and Asia. The Mountain Front stands apart — the silence, the service, the sheer beauty of the setting. We return every winter without fail.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80",
    stay: "Valley Villa",
  },
  {
    id: 3,
    name: "Ayesha & Rohan Singhania",
    role: "Honeymooners from Mumbai",
    quote:
      "We celebrated our honeymoon here and couldn't have dreamed of a more perfect setting. The private plunge pool at sunrise, dinner under the stars — every moment was magical.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=120&q=80",
    stay: "Alpine Suite",
  },
  {
    id: 4,
    name: "Dr. Lena Fischer",
    role: "Wellness Coach, Vienna",
    quote:
      "The SPA at The Mountain Front is the finest high-altitude wellness experience I have encountered globally. The Himalayan stone ritual is something that should be on every traveller's list.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
    stay: "Forest Canopy Room",
  },
];

const awards = [
  { name: "Forbes", label: "5-Star Award 2025" },
  { name: "Condé Nast", label: "Top Resort in India" },
  { name: "Vogue India", label: "Best Luxury Escape" },
  { name: "Travel+Leisure", label: "World's Best 2024" },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const t = testimonials[active];

  return (
    <section className="bg-[#F3EFE8] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-[10px] tracking-[0.45em] uppercase mb-4">
            Guest Stories
          </p>
          <h2 className="font-display text-[#1B3D2F] text-5xl md:text-6xl">
            Voices of the{" "}
            <span className="italic font-normal">Mountain</span>
          </h2>
          <div className="w-14 h-0.5 bg-[#C9A96E] mx-auto mt-6" />
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 md:p-14 relative">
            {/* Quote mark */}
            <div className="font-display text-[120px] leading-none text-[#C9A96E]/15 absolute top-4 left-8 select-none">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-[#C9A96E] text-[#C9A96E]"
                />
              ))}
            </div>

            <blockquote className="font-display text-[#1B3D2F] text-xl md:text-2xl leading-relaxed italic mb-8 relative z-10">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#1B3D2F] text-sm tracking-wide">
                    {t.name}
                  </div>
                  <div className="text-[#8C7B6B] text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[9px] tracking-[0.3em] text-[#8C7B6B] uppercase">
                  Stayed in
                </div>
                <div className="text-[#C9A96E] text-xs mt-0.5 font-medium">
                  {t.stay}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${
                    i === active
                      ? "w-8 h-1.5 bg-[#C9A96E]"
                      : "w-2 h-1.5 bg-[#1B3D2F]/20 hover:bg-[#C9A96E]/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 border border-[#1B3D2F]/20 flex items-center justify-center text-[#1B3D2F] hover:bg-[#1B3D2F] hover:text-white transition-colors duration-200"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 border border-[#1B3D2F]/20 flex items-center justify-center text-[#1B3D2F] hover:bg-[#1B3D2F] hover:text-white transition-colors duration-200"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Awards Bar */}
        {/* <div className="mt-20 border-t border-[#DDD7CE] pt-14">
          <p className="text-center text-[#8C7B6B] text-[10px] tracking-[0.4em] uppercase mb-10">
            Recognition &amp; Awards
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {awards.map((a) => (
              <div key={a.name} className="flex flex-col items-center gap-2">
                <div className="font-display text-[#1B3D2F] text-xl font-semibold italic">
                  {a.name}
                </div>
                <div className="text-[#8C7B6B] text-[10px] tracking-[0.25em] uppercase">
                  {a.label}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

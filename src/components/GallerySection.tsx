"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const galleryImages = [
  { src: "/images/gallery/300A1607.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1688.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1693.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1726.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1748.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1753.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1769%20(2).JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1773.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1789.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1793.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1800.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1804.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1813.jpg", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1870.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1897.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1903.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1915.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1918.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1943.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1951.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1963.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1965.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/300A1968.JPG", alt: "The Mountain Front" },
  { src: "/images/gallery/DJI_20260325194933_0039_D.JPG", alt: "Aerial view of The Mountain Front" },
  { src: "/images/gallery/DJI_20260325201302_0052_D.JPG", alt: "Aerial view of The Mountain Front" },
  { src: "/images/gallery/DJI_20260325201824_0060_D%20(1).JPG", alt: "Resort and surrounding forest" },
  { src: "/images/gallery/DJI_20260325202740_0074_D.JPG", alt: "Valley at dusk" },
  { src: "/images/gallery/DJI_20260325202750_0076_D.JPG", alt: "Hillside landscape" },
  { src: "/images/gallery/DJI_20260325204546_0086_D.JPG", alt: "Mountain landscape at dusk" },
  { src: "/images/gallery/DJI_20260325204641_0090_D.JPG", alt: "Sunset panorama" },
  { src: "/images/gallery/DJI_20260325204913_0097_D.JPG", alt: "Dusk over the valley" },
  { src: "/images/gallery/DJI_20260325231005_0147_D.JPG", alt: "Night aerial of the resort" },
  { src: "/images/gallery/DJI_20260325232826_0170_D.JPG", alt: "Valley and foothills at night" },
  { src: "/images/gallery/DJI_20260325232943_0172_D.JPG", alt: "Aerial panorama of the grounds" },
  { src: "/images/gallery/DJI_20260325233142_0177_D.JPG", alt: "Night sky overview" },
];

export default function GallerySection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const prev = () => setActive((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const next = () => setActive((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setInterval(() => setActive((i) => (i === galleryImages.length - 1 ? 0 : i + 1)), 5000);
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
    <section ref={sectionRef} id="gallery" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#C9A96E] text-[10px] tracking-[0.45em] uppercase mb-4">
              Visual Journey
            </p>
            <h2 className="font-display text-[#1B3D2F] text-5xl md:text-6xl">
              Life at{" "}
              <span className="italic font-normal">The Mountain Front</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 text-[#1B3D2F] text-xs tracking-[0.2em] border-b border-[#1B3D2F] pb-px hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors duration-300 self-start md:self-auto mb-1"
          >
            VIEW FULL GALLERY &rarr;
          </Link>
        </div>

        {/* Slider */}
        <div className="relative h-[380px] md:h-[560px] overflow-hidden">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === active ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <span className="text-white text-xs tracking-[0.2em] uppercase">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            &#8594;
          </button>

          {/* Counter */}
          <div className="absolute top-4 right-4 z-20 bg-black/40 text-white text-[10px] tracking-widest px-3 py-1.5">
            {String(active + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5 flex-wrap px-8">
            {galleryImages.map((_, i) => (
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

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#8C7B6B] text-xs tracking-[0.3em] uppercase mb-3">
            Follow Our Story
          </p>
          <a
            href="#"
            className="font-display text-[#1B3D2F] text-xl italic hover:text-[#C9A96E] transition-colors duration-300"
          >
            @themountainfront
          </a>
        </div>
      </div>
    </section>
  );
}

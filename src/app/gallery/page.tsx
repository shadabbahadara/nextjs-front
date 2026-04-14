"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "all", label: "All Photos" },
  { id: "aerial", label: "Aerial Views" },
  { id: "pebbles", label: "Pebbles Cottage" },
  { id: "pines", label: "Pines & Teak" },
  { id: "dining", label: "Vayanjan Restaurant" },
  { id: "resort", label: "Resort & Grounds" },
  { id: "activities", label: "Activities & Nature" },
];

interface Photo {
  src: string;
  alt: string;
  category: string;
}

const photos: Photo[] = [
  // Aerial Views
  { src: "/images/gallery/DJI_20260325194933_0039_D.JPG", alt: "Aerial – The Mountain Front from above", category: "aerial" },
  { src: "/images/gallery/DJI_20260325201302_0052_D.JPG", alt: "Aerial – Resort and surroundings", category: "aerial" },
  { src: "/images/gallery/DJI_20260325201824_0060_D%20(1).JPG", alt: "Aerial – Forest canopy overhead", category: "aerial" },
  { src: "/images/gallery/DJI_20260325202740_0074_D.JPG", alt: "Aerial – Valley at dusk", category: "aerial" },
  { src: "/images/gallery/DJI_20260325202750_0076_D.JPG", alt: "Aerial – Hillside landscape", category: "aerial" },
  { src: "/images/gallery/DJI_20260325204546_0086_D.JPG", alt: "Aerial – Golden hour from above", category: "aerial" },
  { src: "/images/gallery/DJI_20260325204641_0090_D.JPG", alt: "Aerial – Sunset panorama", category: "aerial" },
  { src: "/images/gallery/DJI_20260325204913_0097_D.JPG", alt: "Aerial – Dusk over the valley", category: "aerial" },
  { src: "/images/gallery/DJI_20260325231005_0147_D.JPG", alt: "Aerial – Night view of the resort", category: "aerial" },
  { src: "/images/gallery/DJI_20260325232826_0170_D.JPG", alt: "Aerial – Night foothills", category: "aerial" },
  { src: "/images/gallery/DJI_20260325232943_0172_D.JPG", alt: "Aerial – Grounds at night", category: "aerial" },
  { src: "/images/gallery/DJI_20260325233142_0177_D.JPG", alt: "Aerial – Night sky overview", category: "aerial" },

  // Pebbles Cottage
  { src: "/images/rooms/Pebbles%20Cottage/300A1535.JPG", alt: "Pebbles Cottage – Interior", category: "pebbles" },
  { src: "/images/rooms/Pebbles%20Cottage/300A1543.JPG", alt: "Pebbles Cottage – Bedroom", category: "pebbles" },
  { src: "/images/rooms/Pebbles%20Cottage/300A1550.JPG", alt: "Pebbles Cottage – Detail", category: "pebbles" },
  { src: "/images/misc/300A1536.JPG", alt: "Pebbles Cottage – View 1", category: "pebbles" },
  { src: "/images/misc/300A1540.JPG", alt: "Pebbles Cottage – View 2", category: "pebbles" },
  { src: "/images/misc/300A1544.JPG", alt: "Pebbles Cottage – View 3", category: "pebbles" },
  { src: "/images/misc/300A1548.JPG", alt: "Pebbles Cottage – View 4", category: "pebbles" },
  { src: "/images/misc/300A1554.JPG", alt: "Pebbles Cottage – View 5", category: "pebbles" },
  { src: "/images/misc/300A1560.JPG", alt: "Pebbles Cottage – View 6", category: "pebbles" },
  { src: "/images/misc/300A1566.JPG", alt: "Pebbles Cottage – View 7", category: "pebbles" },
  { src: "/images/misc/300A1572.JPG", alt: "Pebbles Cottage – View 8", category: "pebbles" },
  { src: "/images/misc/300A1578.JPG", alt: "Pebbles Cottage – View 9", category: "pebbles" },
  { src: "/images/misc/300A1584.JPG", alt: "Pebbles Cottage – View 10", category: "pebbles" },
  { src: "/images/misc/300A1590.JPG", alt: "Pebbles Cottage – View 11", category: "pebbles" },
  { src: "/images/misc/300A1596.JPG", alt: "Pebbles Cottage – View 12", category: "pebbles" },
  { src: "/images/misc/300A1602.JPG", alt: "Pebbles Cottage – View 13", category: "pebbles" },
  { src: "/images/misc/300A1608.JPG", alt: "Pebbles Cottage – View 14", category: "pebbles" },
  { src: "/images/misc/300A1614.JPG", alt: "Pebbles Cottage – View 15", category: "pebbles" },
  { src: "/images/misc/300A1620.JPG", alt: "Pebbles Cottage – View 16", category: "pebbles" },
  { src: "/images/misc/300A1626.JPG", alt: "Pebbles Cottage – View 17", category: "pebbles" },

  // Pines & Teak
  { src: "/images/rooms/Pines%20%26%20Teak/300A1789.JPG", alt: "Pines & Teak – Interior", category: "pines" },
  { src: "/images/rooms/Pines%20%26%20Teak/300A1800.JPG", alt: "Pines & Teak – Bedroom", category: "pines" },
  { src: "/images/rooms/Pines%20%26%20Teak/300A1805.JPG", alt: "Pines & Teak – Lounge", category: "pines" },
  { src: "/images/rooms/Pines%20%26%20Teak/300A1816.JPG", alt: "Pines & Teak – Detail", category: "pines" },
  { src: "/images/misc/300A1790.JPG", alt: "Pines & Teak – View 1", category: "pines" },
  { src: "/images/misc/300A1793.JPG", alt: "Pines & Teak – View 2", category: "pines" },
  { src: "/images/misc/300A1796.JPG", alt: "Pines & Teak – View 3", category: "pines" },
  { src: "/images/misc/300A1799.JPG", alt: "Pines & Teak – View 4", category: "pines" },
  { src: "/images/misc/300A1802.JPG", alt: "Pines & Teak – View 5", category: "pines" },
  { src: "/images/misc/300A1807.JPG", alt: "Pines & Teak – View 6", category: "pines" },
  { src: "/images/misc/300A1811.JPG", alt: "Pines & Teak – View 7", category: "pines" },
  { src: "/images/misc/300A1815.JPG", alt: "Pines & Teak – View 8", category: "pines" },
  { src: "/images/misc/300A1819.JPG", alt: "Pines & Teak – View 9", category: "pines" },
  { src: "/images/misc/300A1822.JPG", alt: "Pines & Teak – View 10", category: "pines" },
  { src: "/images/misc/300A1824.JPG", alt: "Pines & Teak – View 11", category: "pines" },

  // Vayanjan Restaurant
  { src: "/images/dining/Vayanjan%20Restaurant/300A1629.JPG", alt: "Vayanjan – Restaurant interior", category: "dining" },
  { src: "/images/dining/Vayanjan%20Restaurant/300A1640.JPG", alt: "Vayanjan – Table setting", category: "dining" },
  { src: "/images/dining/Vayanjan%20Restaurant/300A1826.JPG", alt: "Vayanjan – Dining area", category: "dining" },
  { src: "/images/dining/Vayanjan%20Restaurant/300A1914.JPG", alt: "Vayanjan – Food presentation", category: "dining" },
  { src: "/images/dining/Vayanjan%20Restaurant/300A1917.JPG", alt: "Vayanjan – Cuisine", category: "dining" },
  { src: "/images/dining/Vayanjan%20Restaurant/300A1922.JPG", alt: "Vayanjan – Ambiance", category: "dining" },
  { src: "/images/misc/300A1631.JPG", alt: "Vayanjan – View 1", category: "dining" },
  { src: "/images/misc/300A1635.JPG", alt: "Vayanjan – View 2", category: "dining" },
  { src: "/images/misc/300A1637.JPG", alt: "Vayanjan – View 3", category: "dining" },
  { src: "/images/misc/300A1641.JPG", alt: "Vayanjan – View 4", category: "dining" },
  { src: "/images/misc/300A1645.JPG", alt: "Vayanjan – View 5", category: "dining" },
  { src: "/images/misc/300A1649.JPG", alt: "Vayanjan – View 6", category: "dining" },
  { src: "/images/misc/300A1827.JPG", alt: "Vayanjan – View 7", category: "dining" },
  { src: "/images/misc/300A1831.JPG", alt: "Vayanjan – View 8", category: "dining" },
  { src: "/images/misc/300A1835.JPG", alt: "Vayanjan – View 9", category: "dining" },
  { src: "/images/misc/300A1840.JPG", alt: "Vayanjan – View 10", category: "dining" },

  // Resort & Grounds
  { src: "/images/misc/300A1653.JPG", alt: "Resort grounds – View 1", category: "resort" },
  { src: "/images/misc/300A1660.JPG", alt: "Resort grounds – View 2", category: "resort" },
  { src: "/images/misc/300A1667.JPG", alt: "Resort grounds – View 3", category: "resort" },
  { src: "/images/misc/300A1674.JPG", alt: "Resort grounds – View 4", category: "resort" },
  { src: "/images/misc/300A1681.JPG", alt: "Resort grounds – View 5", category: "resort" },
  { src: "/images/misc/300A1688.JPG", alt: "Resort grounds – View 6", category: "resort" },
  { src: "/images/misc/300A1694.JPG", alt: "Resort grounds – View 7", category: "resort" },
  { src: "/images/misc/300A1695.JPG", alt: "Resort grounds – View 8", category: "resort" },
  { src: "/images/misc/300A1702.JPG", alt: "Resort grounds – View 9", category: "resort" },
  { src: "/images/misc/300A1710.JPG", alt: "Resort grounds – View 10", category: "resort" },
  { src: "/images/misc/300A1718.JPG", alt: "Resort grounds – View 11", category: "resort" },
  { src: "/images/misc/300A1726.JPG", alt: "Resort grounds – View 12", category: "resort" },
  { src: "/images/misc/300A1734.JPG", alt: "Resort grounds – View 13", category: "resort" },
  { src: "/images/misc/300A1742.JPG", alt: "Resort grounds – View 14", category: "resort" },
  { src: "/images/misc/300A1750.JPG", alt: "Resort grounds – View 15", category: "resort" },
  { src: "/images/misc/300A1758.JPG", alt: "Resort grounds – View 16", category: "resort" },
  { src: "/images/misc/300A1766.JPG", alt: "Resort grounds – View 17", category: "resort" },
  { src: "/images/misc/300A1774.JPG", alt: "Resort grounds – View 18", category: "resort" },
  { src: "/images/misc/300A1781.JPG", alt: "Resort grounds – View 19", category: "resort" },
  { src: "/images/misc/300A1787.JPG", alt: "Resort grounds – View 20", category: "resort" },

  // Activities & Nature
  { src: "/images/misc/300A1845.JPG", alt: "Activities – View 1", category: "activities" },
  { src: "/images/misc/300A1851.JPG", alt: "Activities – View 2", category: "activities" },
  { src: "/images/misc/300A1857.JPG", alt: "Activities – View 3", category: "activities" },
  { src: "/images/misc/300A1863.JPG", alt: "Activities – View 4", category: "activities" },
  { src: "/images/misc/300A1869.JPG", alt: "Activities – View 5", category: "activities" },
  { src: "/images/misc/300A1875.JPG", alt: "Activities – View 6", category: "activities" },
  { src: "/images/misc/300A1881.JPG", alt: "Activities – View 7", category: "activities" },
  { src: "/images/misc/300A1888.JPG", alt: "Activities – View 8", category: "activities" },
  { src: "/images/misc/300A1895.JPG", alt: "Activities – View 9", category: "activities" },
  { src: "/images/misc/300A1902.JPG", alt: "Activities – View 10", category: "activities" },
  { src: "/images/misc/300A1909.JPG", alt: "Nature – View 1", category: "activities" },
  { src: "/images/misc/300A1940.JPG", alt: "Nature – View 2", category: "activities" },
  { src: "/images/misc/300A1947.JPG", alt: "Nature – View 3", category: "activities" },
  { src: "/images/misc/300A1954.JPG", alt: "Nature – View 4", category: "activities" },
  { src: "/images/misc/300A1960.JPG", alt: "Nature – View 5", category: "activities" },
  { src: "/images/misc/300A1965.JPG", alt: "Nature – View 6", category: "activities" },
  { src: "/images/misc/300A1970.JPG", alt: "Nature – View 7", category: "activities" },
  { src: "/images/misc/300A1975.JPG", alt: "Nature – View 8", category: "activities" },
  { src: "/images/misc/300A1978.JPG", alt: "Nature – View 9", category: "activities" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const currentLabel =
    categories.find((c) => c.id === activeCategory)?.label ?? "All Photos";

  return (
    <main className="bg-[#0F2117] min-h-screen">
      {/* Top Nav */}
      <div className="px-6 py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-white text-lg font-semibold tracking-[0.15em]">
              THE MOUNTAIN FRONT
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#C9A96E] mt-0.5">
              RESORT &nbsp;·&nbsp; RESTAURANT &nbsp;·&nbsp; SPA
            </span>
          </Link>
          <Link
            href="/"
            className="text-white/50 text-xs tracking-[0.2em] hover:text-[#C9A96E] transition-colors"
          >
            &larr; BACK TO HOME
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="pt-14 pb-12 px-6 text-center">
        <p className="text-[#C9A96E] text-[10px] tracking-[0.45em] uppercase mb-4">
          Visual Journey
        </p>
        <h1 className="font-display text-white text-5xl md:text-7xl">
          Our{" "}
          <span className="italic font-normal">Gallery</span>
        </h1>
        <div className="w-14 h-0.5 bg-[#C9A96E] mx-auto mt-6" />
        <p className="text-white/40 mt-5 text-sm max-w-lg mx-auto leading-relaxed">
          Captured moments from The Mountain Front — aerial views, rooms,
          cuisine, and the natural beauty of Kaladhungi, Nainital.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="sticky top-0 z-20 bg-[#0F2117]/95 backdrop-blur-sm border-b border-white/10 px-4">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max mx-auto justify-center">
            {categories.map((cat) => {
              const count =
                cat.id === "all"
                  ? photos.length
                  : photos.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-[10px] tracking-[0.2em] whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? "bg-[#C9A96E] text-white"
                      : "text-white/50 hover:text-white border border-white/10 hover:border-white/30"
                  }`}
                >
                  {cat.label.toUpperCase()}
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                      activeCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-white/40"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white/70 text-sm tracking-[0.2em] uppercase">
            {currentLabel}
          </h2>
          <span className="text-white/30 text-xs">
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {filtered.map((img, i) => (
            <div
              key={`${activeCategory}-${i}`}
              className={`group relative overflow-hidden bg-[#1B3D2F]/40 ${
                i === 0 && activeCategory === "all" ? "col-span-2" : ""
              }`}
              style={{
                aspectRatio: i === 0 && activeCategory === "all" ? "16/9" : "4/3",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-center justify-center">
                <span className="text-white/0 group-hover:text-white/80 text-[10px] tracking-[0.15em] transition-all duration-300 text-center px-4">
                  {img.alt}
                </span>
              </div>
              <div className="absolute bottom-2 right-2 text-[8px] tracking-widest text-white/0 group-hover:text-white/50 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-8 px-6 text-center mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-3 border border-[#C9A96E] text-[#C9A96E] px-8 py-3 text-xs tracking-[0.25em] hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
        >
          &larr; BACK TO HOME
        </Link>
      </div>
    </main>
  );
}

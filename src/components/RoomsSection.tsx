"use client";

import { useState } from "react";
import Image from "next/image";
import { Mountain, Bath, Coffee, Wifi } from "lucide-react";
import type { ReactNode } from "react";

interface Room {
  id: number;
  name: string;
  category: string;
  description: string;
  images: string[];
  amenities: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Pebbles Cottage",
    category: "Cottage",
    description:
      "A charming stone cottage nestled amidst the lush gardens of The Mountain Front. The natural pebble facade, warm interiors, and private balcony create an intimate retreat for those who treasure the calm of the countryside.",
    images: [
      "/images/rooms/Pebbles%20Cottage/300A1535.JPG",
      "/images/rooms/Pebbles%20Cottage/300A1543.JPG",
      "/images/rooms/Pebbles%20Cottage/300A1550.JPG",
    ],
    amenities: ["Garden View", "Private Verandah", "King Bed", "En-suite Bath"],
  },
  {
    id: 2,
    name: "Pines & Teak",
    category: "Suite",
    description:
      "Surrounded by towering trees. This suite is a celebration of natural elegance, Warm tones, handcrafted furniture, and forest vistas create a space that is both luxurious and deeply rooted in nature.",
    images: [
      "/images/rooms/Pines%20%26%20Teak/300A1789.JPG",
      "/images/rooms/Pines%20%26%20Teak/300A1800.JPG",
      "/images/rooms/Pines%20%26%20Teak/300A1805.JPG",
      "/images/rooms/Pines%20%26%20Teak/300A1816.JPG",
    ],
    amenities: ["Forest View", "Queen Bed", "Rain Shower", "Fridge"],
  },
];

const amenityIcons: Record<string, ReactNode> = {
  "Garden View": <Mountain size={13} />,
  "Forest View": <Mountain size={13} />,
  "Private Verandah": <Wifi size={13} />,
  "Teak Interiors": <Wifi size={13} />,
  "King Bed": <Coffee size={13} />,
  "En-suite Bath": <Bath size={13} />,
  "Rain Shower": <Bath size={13} />,
};

function RoomCard({ room }: { room: Room }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="group overflow-hidden border border-[#EDE8E0] hover:border-[#C9A96E] transition-colors duration-300">
      {/* Main Image */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <Image
          src={room.images[activeImg]}
          alt={`${room.name} - photo ${activeImg + 1}`}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 left-4 bg-[#C9A96E] text-white text-[9px] px-3 py-1.5 tracking-[0.2em]">
          {room.category.toUpperCase()}
        </div>
        <div className="absolute top-4 right-4 bg-black/40 text-white text-[9px] px-2.5 py-1 tracking-widest">
          {activeImg + 1} / {room.images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-1.5 px-4 pt-3">
        {room.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveImg(i)}
            className={`relative h-14 flex-1 overflow-hidden transition-all duration-200 ${
              i === activeImg
                ? "ring-2 ring-[#C9A96E]"
                : "opacity-55 hover:opacity-100"
            }`}
            aria-label={`View photo ${i + 1}`}
          >
            <Image
              src={img}
              alt={`${room.name} thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-7 md:p-8">
        <h3 className="font-display text-[#1B3D2F] text-2xl leading-tight mb-3">
          {room.name}
        </h3>
        <p className="text-[#5A5A5A] text-sm leading-relaxed mb-5">
          {room.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((amenity) => (
            <span
              key={amenity}
              className="flex items-center gap-1.5 text-[11px] text-[#1B3D2F] bg-[#F3EFE8] px-3 py-1.5 leading-none"
            >
              {amenityIcons[amenity] ?? <Wifi size={13} />}
              {amenity}
            </span>
          ))}
        </div>
        <a
          href="#booking"
          className="inline-flex items-center gap-2 text-[11px] text-[#1B3D2F] tracking-[0.2em] border-b border-[#1B3D2F] pb-px hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors duration-300"
        >
          BOOK THIS ROOM &rarr;
        </a>
      </div>
    </div>
  );
}

export default function RoomsSection() {
  return (
    <section id="rooms" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#C9A96E] text-[10px] tracking-[0.45em] uppercase mb-4">
            Accommodations
          </p>
          <h2 className="font-display text-[#1B3D2F] text-5xl md:text-6xl">
            Our{" "}
            <span className="italic font-normal">Sanctuaries</span>
          </h2>
          <div className="w-14 h-0.5 bg-[#C9A96E] mx-auto mt-6" />
          <p className="text-[#5A5A5A] mt-6 max-w-xl mx-auto leading-relaxed text-sm">
            Each accommodation is a private world - designed to harmonise with
            the natural landscape while delivering every modern comfort.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        <div className="text-center mt-14">
          <a
            href="#booking"
            className="inline-flex items-center gap-4 bg-[#1B3D2F] text-white px-12 py-4 text-xs tracking-[0.25em] hover:bg-[#0F2117] transition-colors duration-300"
          >
            CHECK ROOM AVAILABILITY
          </a>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

// Only JPG files — DNG (RAW) files cannot be displayed in browsers
const galleryImages = [
  {
    src: "/images/gallery/DJI_20260325201302_0052_D.JPG",
    alt: "Aerial view of The Mountain Front",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery/DJI_20260325201824_0060_D%20(1).JPG",
    alt: "Resort and surrounding forest",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/DJI_20260325204546_0086_D.JPG",
    alt: "Mountain landscape at dusk",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/DJI_20260325231005_0147_D.JPG",
    alt: "Night aerial of the resort",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/DJI_20260325232826_0170_D.JPG",
    alt: "Valley and foothills at night",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery/DJI_20260325232943_0172_D.JPG",
    alt: "Aerial panorama of the grounds",
    span: "col-span-2 row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-24 px-6">
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
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[#1B3D2F] text-xs tracking-[0.2em] border-b border-[#1B3D2F] pb-px hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors duration-300 self-start md:self-auto mb-1"
          >
            VIEW FULL GALLERY &rarr;
          </a>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1B3D2F]/0 group-hover:bg-[#1B3D2F]/40 transition-all duration-300 flex items-end p-5">
                <span className="text-white text-xs tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.alt.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
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

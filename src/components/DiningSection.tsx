import Image from "next/image";

const restaurantImages = [
  "/images/dining/Vayanjan%20Restaurant/300A1629.JPG",
  "/images/dining/Vayanjan%20Restaurant/300A1640.JPG",
  "/images/dining/Vayanjan%20Restaurant/300A1826.JPG",
  "/images/dining/Vayanjan%20Restaurant/300A1914.JPG",
];

const venues = [
  { name: "Vayanjan Restaurant", type: "Multi-Cuisine Restaurant", hours: "7am – 10:30pm" },
];

export default function DiningSection() {
  return (
    <section id="dining" className="bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Image Side - 2x2 photo collage */}
          <div className="grid grid-cols-2 h-[420px] lg:h-auto min-h-[500px] gap-1">
            {restaurantImages.map((img, i) => (
              <div key={i} className="relative overflow-hidden">
                <Image
                  src={img}
                  alt={`Vayanjan Restaurant photo ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
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

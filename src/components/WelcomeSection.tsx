import Image from "next/image";

const stats = [
  { value: "52", label: "Luxury Suites" },
  { value: "3,500m", label: "Elevation" },
  { value: "12", label: "Spa Rituals" },
  { value: "25+", label: "Years of Hospitality" },
];

export default function WelcomeSection() {
  return (
    <section id="about" className="bg-[#F8F4ED] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#C9A96E] text-[10px] tracking-[0.45em] uppercase mb-5">
              Welcome to The Mountain Front
            </p>
            <h2 className="font-display text-[#1B3D2F] text-5xl md:text-6xl leading-tight mb-6">
              A Sanctuary
              <br />
              <span className="italic font-normal">Above the Clouds</span>
            </h2>
            <div className="w-14 h-0.5 bg-[#C9A96E] mb-8" />
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-5">
              Nestled in the foothills of Kaladhungi near Nainital, The Mountain
              Front is a retreat where nature meets contemporary elegance. Every
              detail — from the hand-crafted wood interiors to the curated
              experiences — is thoughtfully designed for your comfort.
            </p>
            <p className="text-[#5A5A5A] leading-relaxed mb-10 text-sm">
              Surrounded by snow-capped peaks, emerald cedar forests, and
              glacial rivers, our resort offers an unparalleled haven for those
              who seek both adventure and stillness. Come, let the mountains
              restore what the world has taken.
            </p>
            <a
              href="#rooms"
              className="inline-flex items-center gap-4 border border-[#1B3D2F] text-[#1B3D2F] px-8 py-3.5 text-xs tracking-[0.25em] hover:bg-[#1B3D2F] hover:text-white transition-all duration-300"
            >
              DISCOVER OUR STORY
            </a>
          </div>

          {/* Right: Stacked Images */}
          <div className="relative">
            <div className="relative h-[440px] md:h-[520px] w-full">
              <Image
                src="/images/gallery/DJI_20260325204913_0097_D.JPG"
                alt="The Mountain Front Resort exterior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Inset decorative border */}
              <div className="absolute inset-4 border border-white/30 pointer-events-none" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-8 -left-8 bg-[#1B3D2F] text-white p-7 z-10">
              <div className="font-display text-4xl font-semibold leading-none">
                25+
              </div>
              <div className="text-[10px] tracking-[0.3em] text-[#E8D5A3] mt-2 leading-relaxed">
                YEARS OF
                <br />
                EXCELLENCE
              </div>
            </div>

            {/* Floating quote card */}
            <div className="absolute -top-6 -right-4 bg-[#C9A96E] text-white p-5 max-w-[180px] z-10 hidden md:block">
              <div className="font-display text-2xl italic leading-tight text-white/90">
                &ldquo;5-Star
                <br />
                Himalayan
                <br />
                Living&rdquo;
              </div>
              <div className="text-[9px] tracking-widest mt-2 text-white/70">
                — Forbes Travel Guide
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-24 border border-[#DDD7CE]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-10 px-8 text-center ${
                i < stats.length - 1 ? "border-r border-[#DDD7CE]" : ""
              }`}
            >
              <div className="font-display text-4xl md:text-5xl text-[#1B3D2F] font-semibold mb-2">
                {stat.value}
              </div>
              <div className="text-[#8C7B6B] text-[10px] tracking-[0.3em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

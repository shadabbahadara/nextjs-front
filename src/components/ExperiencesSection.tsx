import Image from "next/image";

interface Experience {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  tag: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Nature Walks",
    description:
      "Guided walks through the forest trails of Kaladhungi — every path reveals a new story of the wild.",
    image: "/images/misc/300A1940.JPG",
    duration: "2–4 hrs",
    tag: "Adventure",
  },
  {
    id: 2,
    title: "Bonfire Evenings",
    description:
      "Unwind under a canopy of stars with a crackling bonfire, live folk music, and warm Pahadi hospitality.",
    image: "/images/misc/300A1950.JPG",
    duration: "2–3 hrs",
    tag: "Leisure",
  },
  {
    id: 3,
    title: "Sunrise Yoga",
    description:
      "Begin each day with an open-air yoga session as golden light filters through the trees.",
    image: "/images/misc/300A1960.JPG",
    duration: "1–2 hrs",
    tag: "Wellness",
  },
  {
    id: 4,
    title: "Bird Watching",
    description:
      "The Kaladhungi forests are home to hundreds of species — a paradise for birding enthusiasts.",
    image: "/images/misc/300A1965.JPG",
    duration: "Half Day",
    tag: "Nature",
  },
  {
    id: 5,
    title: "Jungle Safari",
    description:
      "Venture into the Jim Corbett buffer zone for thrilling wildlife encounters with expert naturalists.",
    image: "/images/misc/300A1968.JPG",
    duration: "3–5 hrs",
    tag: "Adventure",
  },
  {
    id: 6,
    title: "Spa & Wellness",
    description:
      "Rejuvenate with curated spa rituals using local herbs and traditional Kumaoni healing techniques.",
    image: "/images/misc/300A1972.JPG",
    duration: "1–3 hrs",
    tag: "Wellness",
  },
];

const tagColors: Record<string, string> = {
  Adventure: "bg-[#1B3D2F]",
  Wellness: "bg-[#C9A96E]",
  Nature: "bg-[#4A6741]",
  Leisure: "bg-[#7A5C3A]",
};

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="bg-[#1B3D2F] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#C9A96E] text-[10px] tracking-[0.45em] uppercase mb-4">
              Activities &amp; Adventures
            </p>
            <h2 className="font-display text-white text-5xl md:text-6xl">
              Immersive
              <br />
              <span className="italic font-normal">Experiences</span>
            </h2>
          </div>
          <div className="md:max-w-xs">
            <div className="w-10 h-0.5 bg-[#C9A96E] mb-4 hidden md:block" />
            <p className="text-white/50 leading-relaxed text-sm">
              From heart-racing alpine pursuits to deep restorative rituals,
              every Mountain Front experience is designed to forge a profound connection
              with these mountains.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-72 md:h-80">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Tag */}
                <div
                  className={`absolute top-4 right-4 text-white text-[9px] tracking-[0.2em] px-2.5 py-1.5 ${
                    tagColors[exp.tag] ?? "bg-[#1B3D2F]"
                  }`}
                >
                  {exp.tag.toUpperCase()}
                </div>
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
                  <span className="text-[#C9A96E] text-[9px] tracking-[0.3em]">
                    {exp.duration.toUpperCase()}
                  </span>
                </div>
                <h3 className="font-display text-white text-xl mb-2 leading-tight">
                  {exp.title}
                </h3>
                <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-300">
                  <p className="text-white/65 text-xs leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#C9A96E] text-[10px] tracking-[0.2em]">
                    LEARN MORE &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-4 border border-[#C9A96E] text-[#C9A96E] px-10 py-4 text-xs tracking-[0.25em] hover:bg-[#C9A96E] hover:text-white transition-all duration-300"
          >
            EXPLORE ALL EXPERIENCES
          </a>
        </div>
      </div>
    </section>
  );
}

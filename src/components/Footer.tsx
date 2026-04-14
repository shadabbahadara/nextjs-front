import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Rooms & Suites", href: "#rooms" },
    { label: "Experiences", href: "#experiences" },
    { label: "Dining", href: "#dining" },
    { label: "Spa & Wellness", href: "#" },
    { label: "Weddings & Events", href: "#" },
    { label: "Gallery", href: "#gallery" },
  ],
  info: [
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  policies: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cancellation Policy", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F2117] text-white">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#C9A96E] text-[10px] tracking-[0.45em] uppercase mb-3">
                Stay Connected
              </p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">
                Let the Mountains
                <br />
                <span className="italic font-normal">Find You</span>
              </h3>
              <p className="text-white/40 text-sm mt-3 leading-relaxed max-w-sm">
                Subscribe for exclusive offers, seasonal events, and stories
                from high altitude.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/8 border border-white/15 text-white placeholder:text-white/30 px-5 py-3.5 text-sm focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
              <button className="bg-[#C9A96E] hover:bg-[#a8873e] text-white px-8 py-3.5 text-xs tracking-[0.2em] font-medium transition-colors duration-300 whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="font-display text-2xl font-semibold tracking-[0.12em] text-white">
                THE MOUNTAIN FRONT
              </div>
              <div className="text-[9px] tracking-[0.35em] text-[#C9A96E] mt-1">
                RESORT &nbsp;·&nbsp; RESTAURANT &nbsp;·&nbsp; SPA
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              A sanctuary of luxury and stillness at 3,500 metres above sea
              level, deep in the heart of the Himalayas.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3 text-white/50 text-xs">
                <MapPin size={13} className="mt-0.5 text-[#C9A96E] flex-shrink-0" />
                <span className="leading-relaxed">
                  Village Padampur Dolia, Tehsil Kaladhungi,
                  <br />
                  Distt. Nainital, Uttarakhand, India
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-xs">
                <Phone size={13} className="text-[#C9A96E] flex-shrink-0" />
                <a href="tel:+911800123456" className="hover:text-[#C9A96E] transition-colors">
                  +91 1800 123 456
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-xs">
                <Mail size={13} className="text-[#C9A96E] flex-shrink-0" />
                <a href="mailto:hello@themountainfront.com" className="hover:text-[#C9A96E] transition-colors">
                  hello@themountainfront.com
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[
                {
                  label: "Instagram",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  svg: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
              ].map(({ label, svg }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] text-[#C9A96E] uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-xs hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] text-[#C9A96E] uppercase mb-6">
              Information
            </h4>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-xs hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies + Reservations */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] text-[#C9A96E] uppercase mb-6">
              Policies
            </h4>
            <ul className="space-y-3 mb-10">
              {footerLinks.policies.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-xs hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-[10px] tracking-[0.35em] text-[#C9A96E] uppercase mb-4">
              Reservations
            </h4>
            <a
              href="#booking"
              className="inline-block border border-[#C9A96E] text-[#C9A96E] px-5 py-2.5 text-[10px] tracking-[0.2em] hover:bg-[#C9A96E] hover:text-white transition-colors duration-300"
            >
              BOOK A STAY
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[11px]">
            &copy; {new Date().getFullYear()} The Mountain Front Resort &amp; SPA. All rights reserved.
          </p>
          <p className="text-white/20 text-[11px]">
            Crafted with care in the mountains
          </p>
        </div>
      </div>
    </footer>
  );
}

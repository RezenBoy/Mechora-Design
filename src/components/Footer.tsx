import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Structural Steel Detailing",
  "Mechanical Design",
  "Piping Design",
  "CAD Drafting",
  // "Engineering Documentation",
];

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <svg width="26" height="26" viewBox="0 0 30 30" fill="none">
                <rect x="1" y="1" width="28" height="28" rx="2" stroke="#2E86DE" strokeWidth="1.4" />
                <path d="M8 22V8L15 22L22 8V22" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-heading text-base font-bold text-white">
                MECHORA <span className="text-accent">DESIGNS</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Transforming ideas into precise engineering designs — structural,
              mechanical and documentation support for industry.
            </p>
            <div className="mt-5 flex gap-3">
              {[FiLinkedin, FiTwitter, FiFacebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-accent hover:text-accent focus-ring"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <FiMail className="text-accent" /> hello@mechoradesigns.com.au
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-accent" /> +61 2 8000 1234
              </li>
              <li className="flex items-center gap-2.5">
                <FiMapPin className="text-accent" /> Sydney, NSW, Australia
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Mechora Designs. All rights reserved.
      </div>
    </footer>
  );
}

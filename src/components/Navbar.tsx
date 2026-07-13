import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./ui/Button";
import Logo from "../assets/brandLogo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#why-us" },
  { label: "About", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-[0_4px_24px_-8px_rgba(11,31,51,0.15)]" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2.5 focus-ring rounded-sm">
          <img
            src={Logo}
            alt="Mechora Designs"
            className="h-14 w-auto object-contain"
          />
          <span className={`font-heading text-lg font-bold tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>
            MECHORA <span className={scrolled ? "text-secondary" : "text-accent"}>DESIGNS</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`group relative text-sm font-medium tracking-wide focus-ring rounded-sm ${scrolled ? "text-ink/80 hover:text-secondary" : "text-white/90 hover:text-white"
                  }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant={scrolled ? "primary" : "outline"} as="a" href="#contact" className="!py-2.5 !px-5 !text-xs">
            Request Quote
          </Button>
        </div>

        <button
          aria-label="Toggle navigation menu"
          className={`focus-ring rounded-sm lg:hidden ${scrolled ? "text-primary" : "text-white"}`}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white px-6 py-6 lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-ink/80 hover:text-secondary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="primary" as="a" href="#contact" className="mt-5 w-full !py-2.5 !text-xs" onClick={() => setOpen(false)}>
            Request Quote
          </Button>
        </div>
      )}
    </header>
  );
}

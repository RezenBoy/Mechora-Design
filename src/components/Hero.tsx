import { motion } from "framer-motion";
import Button from "./ui/Button";
import { FiArrowRight } from "react-icons/fi";
import heroBackdrop from "../assets/images/steel-structure.jpg";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "100%", label: "Accuracy Focus" },
  { value: "On-Time", label: "Delivery Record" },
  { value: "ISO/AS", label: "Standards Aligned" },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-28 pb-20">
      {/* Industrial backdrop: real structural-steel photography, blueprint grid overlay for the signature technical layer */}
      <img
        src={heroBackdrop}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" aria-hidden="true" />
      <svg
        className="absolute bottom-0 left-0 w-full opacity-[0.18]"
        viewBox="0 0 1440 260"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 260 L120 100 L240 260 L360 100 L480 260 L600 100 L720 260 L840 100 L960 260 L1080 100 L1200 260 L1320 100 L1440 260"
          stroke="#2E86DE"
          strokeWidth="2"
        />
        <path d="M0 260 H1440" stroke="#2E86DE" strokeWidth="2" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-sm border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            Engineering Design &amp; Detailing — AUS/NZ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Engineering Design Solutions Built with{" "}
            <span className="text-accent">Precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Professional CAD drafting, structural steel detailing, mechanical design and
            piping systems for Australian industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" as="a" href="#contact" icon={<FiArrowRight />}>
              Request a Quote
            </Button>
            <Button variant="outline" as="a" href="#services">
              Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l border-white/15 pl-4">
                <div className="font-heading text-xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-xs leading-snug text-slate-400">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: signature floating blueprint card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            className="relative rounded-sm border border-accent/25 bg-[#0e2740] p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
            style={{ animation: "float-y 6s ease-in-out infinite" }}
          >
            <div className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-accent/80">
              <span>DWG. NO. MD-2201-A</span>
              <span>REV. C</span>
            </div>
            <BlueprintDrawing />
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-widest text-slate-400">
              <div>Scale 1:50</div>
              <div className="text-center">AS 4100 / NCC</div>
              <div className="text-right">Checked: MD</div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-sm border border-line bg-white px-5 py-3 shadow-[0_20px_40px_-16px_rgba(11,31,51,0.3)] sm:block">
            <div className="font-heading text-sm font-bold text-primary">150+ Projects</div>
            <div className="text-[11px] text-ink/50">International Standards Compliant</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BlueprintDrawing() {
  return (
    <svg viewBox="0 0 380 260" fill="none" className="w-full">
      <rect x="40" y="40" width="220" height="140" stroke="#2E86DE" strokeWidth="1.4" />
      <line x1="40" y1="110" x2="260" y2="110" className="dim-line" strokeDasharray="4 3" />
      <line x1="150" y1="40" x2="150" y2="180" className="dim-line" strokeDasharray="4 3" />

      {/* dimension line top */}
      <line x1="40" y1="24" x2="260" y2="24" stroke="#2E86DE" strokeWidth="1" />
      <line x1="40" y1="18" x2="40" y2="30" stroke="#2E86DE" strokeWidth="1" />
      <line x1="260" y1="18" x2="260" y2="30" stroke="#2E86DE" strokeWidth="1" />
      <text x="150" y="16" textAnchor="middle" fill="#2E86DE" fontSize="9" fontFamily="monospace">
        2400 mm
      </text>

      {/* dimension line right */}
      <line x1="284" y1="40" x2="284" y2="180" stroke="#2E86DE" strokeWidth="1" />
      <line x1="278" y1="40" x2="290" y2="40" stroke="#2E86DE" strokeWidth="1" />
      <line x1="278" y1="180" x2="290" y2="180" stroke="#2E86DE" strokeWidth="1" />
      <text x="300" y="112" textAnchor="middle" fill="#2E86DE" fontSize="9" fontFamily="monospace" transform="rotate(90 300 112)">
        1600 mm
      </text>

      {/* bolt / node markers */}
      {[
        [40, 40],
        [260, 40],
        [40, 180],
        [260, 180],
        [150, 40],
        [150, 180],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#0B1F33" stroke="#2E86DE" strokeWidth="1" />
      ))}

      {/* section markers */}
      <circle cx="150" cy="110" r="14" stroke="#2E86DE" strokeWidth="1.2" fill="#0B1F33" />
      <text x="150" y="107" textAnchor="middle" fill="#2E86DE" fontSize="9" fontFamily="monospace">A</text>
      <text x="150" y="117" textAnchor="middle" fill="#2E86DE" fontSize="7" fontFamily="monospace">01</text>

      <text x="40" y="210" fill="#93a3b8" fontSize="9" fontFamily="monospace">
        GENERAL ARRANGEMENT — STRUCTURAL FRAME
      </text>
      <text x="40" y="224" fill="#5c6b81" fontSize="8" fontFamily="monospace">
        MATERIAL: 250 GRADE STEEL
      </text>
    </svg>
  );
}

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import SectionTitle from "./ui/SectionTitle";

const points = [
  "Precision CAD Modeling",
  "International Standards",
  "Cost-Effective Solutions",
  "Experienced Engineering Team",
  "Fast, Reliable Delivery",
  "Clear, Reliable Documentation",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-card py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm border border-line bg-primary">
            <div className="absolute inset-0 blueprint-grid" />
            <TrussIllustration />
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-sm border border-line bg-white px-5 py-4 shadow-[0_20px_44px_-18px_rgba(11,31,51,0.3)] sm:right-6">
            <div className="font-heading text-2xl font-bold text-primary">12+</div>
            <div className="text-[11px] text-ink/50">Years of Combined Engineering Experience</div>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <SectionTitle
            align="left"
            eyebrow="Why Mechora Designs"
            title="Engineering Judgement Behind Every Drawing"
            description="We combine disciplined CAD workflow with real engineering review, so every drawing set arrives fabrication-ready, standards-compliant and on schedule."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {points.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-sm border border-line px-4 py-3.5"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <FiCheck size={13} />
                </span>
                <span className="text-sm font-medium text-ink/80">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrussIllustration() {
  return (
    <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" fill="none">
      <g stroke="#2E86DE" strokeWidth="1.6" opacity="0.85">
        <line x1="60" y1="440" x2="60" y2="120" />
        <line x1="340" y1="440" x2="340" y2="120" />
        <line x1="60" y1="120" x2="340" y2="120" />
        {Array.from({ length: 6 }).map((_, i) => {
          const y = 160 + i * 55;
          return <line key={i} x1="60" y1={y} x2="340" y2={y} opacity="0.35" />;
        })}
        {Array.from({ length: 5 }).map((_, i) => {
          const x1 = 60 + i * 56;
          return (
            <line key={`d-${i}`} x1={x1} y1="120" x2={x1 + 56} y2="440" opacity="0.5" />
          );
        })}
      </g>
      <g fill="#2E86DE">
        <circle cx="60" cy="120" r="4" />
        <circle cx="340" cy="120" r="4" />
        <circle cx="60" cy="440" r="4" />
        <circle cx="340" cy="440" r="4" />
      </g>
    </svg>
  );
}

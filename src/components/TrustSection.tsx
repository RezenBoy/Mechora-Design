import { motion } from "framer-motion";
import {
  FiTarget,
  FiGlobe,
  FiUsers,
  FiClock,
  FiFileText,
  FiFlag,
} from "react-icons/fi";

const items = [
  { icon: FiTarget, label: "Precision Engineering" },
  { icon: FiGlobe, label: "International Standards" },
  { icon: FiUsers, label: "Experienced Engineers" },
  { icon: FiClock, label: "Fast Turnaround" },
  { icon: FiFileText, label: "Quality Documentation" },
  { icon: FiFlag, label: "Australian Industry Ready" },
];

export default function TrustSection() {
  return (
    <section className="border-b border-line bg-card py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-10 text-center font-mono text-xs uppercase tracking-[0.25em] text-ink/40">
          Trusted Engineering Design Partner
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-secondary">
                <item.icon size={20} />
              </div>
              <span className="text-xs font-medium leading-snug text-ink/70">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

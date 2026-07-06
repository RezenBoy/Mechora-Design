import { motion } from "framer-motion";
import {
  GiMining,
  GiCrane,
  GiFactory,
  GiOilDrum,
  GiPylon,
  GiFactoryArm,
  GiGears,
} from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import SectionTitle from "./ui/SectionTitle";

const industries = [
  { icon: GiMining, label: "Mining" },
  { icon: GiCrane, label: "Construction" },
  { icon: GiFactory, label: "Manufacturing" },
  { icon: GiOilDrum, label: "Oil & Gas" },
  { icon: GiPylon, label: "Infrastructure" },
  { icon: GiFactoryArm, label: "Industrial Plants" },
  { icon: FiPackage, label: "Warehouse Facilities" },
  { icon: GiGears, label: "Heavy Engineering" },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-dark py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          dark
          eyebrow="Sectors We Serve"
          title="Industries Relying on Our Engineering Design"
          description="Our documentation supports project teams across Australia's heaviest and most demanding industrial sectors."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              className="group flex flex-col items-center gap-4 rounded-sm border border-white/10 bg-white/[0.03] px-4 py-9 text-center transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.06]"
            >
              <ind.icon size={34} className="text-accent transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="text-sm font-medium text-slate-200">{ind.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

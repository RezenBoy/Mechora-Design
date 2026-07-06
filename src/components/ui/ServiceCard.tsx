import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  index: number;
  code: string;
}

export default function ServiceCard({ icon: Icon, title, description, index, code }: ServiceCardProps) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col gap-5 rounded-sm border border-line bg-card p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-24px_rgba(11,31,51,0.25)] hover:border-accent focus-ring"
    >
      <span className="absolute right-6 top-6 font-mono text-[11px] tracking-widest text-ink/30">
        {code}
      </span>
      <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-primary/[0.05] text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
        <Icon size={26} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-primary font-heading">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">{description}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
        Learn more
        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </span>
    </motion.a>
  );
}

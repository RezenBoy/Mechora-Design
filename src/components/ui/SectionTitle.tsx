import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-14`}
    >
      <div
        className={`inline-flex items-center gap-2 text-xs font-mono font-medium tracking-[0.2em] uppercase mb-4 ${
          dark ? "text-accent" : "text-secondary"
        }`}
      >
        <span className={`h-px w-6 ${dark ? "bg-accent" : "bg-secondary"}`} />
        {eyebrow}
      </div>
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight tracking-tight ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-slate-300" : "text-ink/70"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

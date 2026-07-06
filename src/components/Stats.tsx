import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 150, suffix: "+", label: "Projects Completed" },
  { target: 60, suffix: "+", label: "Clients Served" },
  { target: 12, suffix: "+", label: "Years Experience" },
  { target: 8, suffix: "", label: "Industries Served" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <div ref={ref} className="font-heading text-4xl font-bold text-white sm:text-5xl">
      {value}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-primary py-20">
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <Counter target={s.target} suffix={s.suffix} />
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-slate-400">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

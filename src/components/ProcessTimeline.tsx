import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const steps = [
  { step: "01", title: "Consultation", desc: "Understanding project scope, standards and delivery timeline." },
  { step: "02", title: "Planning", desc: "Scheduling drafting stages against your project milestones." },
  { step: "03", title: "CAD Design", desc: "Producing 2D/3D models and drawings to specification." },
  { step: "04", title: "Review", desc: "Internal engineering review against tolerances and standards." },
  { step: "05", title: "Quality Check", desc: "Cross-checked documentation for accuracy and completeness." },
  { step: "06", title: "Final Delivery", desc: "Fabrication-ready drawing packages delivered on schedule." },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Our Engineering Workflow"
          title="A Disciplined Process, Start to Delivery"
          description="Every project moves through the same structured stages — the same rigor a structural drawing set goes through before it reaches the shop floor."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-line lg:left-1/2 lg:top-4 lg:h-px lg:w-full" />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-6 lg:gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pl-12 lg:pl-0 lg:text-center"
              >
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-secondary bg-card font-mono text-xs font-bold text-secondary lg:relative lg:mx-auto lg:mb-5">
                  {s.step}
                </div>
                <h3 className="font-heading text-base font-semibold text-primary">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

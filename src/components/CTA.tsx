import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-dark py-24 text-center">
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold leading-tight text-white sm:text-4xl"
        >
          Let&apos;s Build Smarter Engineering Solutions Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-base text-slate-400"
        >
          Tell us about your structural, mechanical or documentation requirements —
          our engineers will get back to you with a clear, no-obligation quote.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9"
        >
          <Button variant="primary" as="a" href="mailto:hello@mechoradesigns.com.au" icon={<FiArrowRight />}>
            Get Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

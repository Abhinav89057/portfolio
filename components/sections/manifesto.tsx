"use client";

import { motion, useReducedMotion } from "framer-motion";
import { manifesto } from "@/data/profile";

export function Manifesto() {
  const reduce = useReducedMotion();
  return (
    <section id="thinking" className="scroll-mt-20 border-t border-line py-24 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="sr-only">How I think</h2>
        <ol className="space-y-6 md:space-y-8">
          {manifesto.map((line, i) => (
            <li key={line} className="overflow-hidden">
              <motion.p
                className="display text-[clamp(2rem,6.4vw,5.6rem)]"
                initial={reduce ? false : { y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

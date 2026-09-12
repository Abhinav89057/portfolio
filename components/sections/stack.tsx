"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stackGroups } from "@/data/stack";

export function Stack() {
  const reduce = useReducedMotion();
  return (
    <section id="stack" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="display text-4xl sm:text-5xl md:text-6xl">The stack, by job.</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">Grouped by what each part does in a system. Not a count, not a cloud.</p>
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((g, i) => (
            <motion.div
              key={g.title}
              className="border-t border-line-strong pt-4"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="display text-2xl">{g.title}</h3>
              <ul className="mt-4 space-y-1.5 text-sm text-muted md:text-base">
                {g.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

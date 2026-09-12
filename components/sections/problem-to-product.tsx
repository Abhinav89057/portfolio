"use client";

import { motion, useReducedMotion } from "framer-motion";
import { engineering, problems, systemOutputs } from "@/data/profile";

function Connector() {
  const reduce = useReducedMotion();
  const draw = {
    initial: reduce ? false : { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, amount: 0.8 },
    transition: { duration: 0.9, ease: "easeOut" as const },
  };
  return (
    <div aria-hidden className="flex items-center justify-center py-2 lg:py-0 lg:pt-16">
      <svg className="hidden h-6 w-12 lg:block" viewBox="0 0 48 24">
        <motion.path d="M0 12 H40 M34 6 l6 6 -6 6" fill="none" stroke="var(--accent)" strokeWidth="1.25" {...draw} />
      </svg>
      <svg className="h-12 w-6 lg:hidden" viewBox="0 0 24 48">
        <motion.path d="M12 0 V40 M6 34 l6 6 6-6" fill="none" stroke="var(--accent)" strokeWidth="1.25" {...draw} />
      </svg>
    </div>
  );
}

export function ProblemToProduct() {
  const reduce = useReducedMotion();
  return (
    <section id="approach" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="display text-4xl sm:text-5xl md:text-6xl">From problem to product.</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          What arrives is rarely a spec. It is a plant that quotes in Excel and plans on the phone. The work is turning that into a system that holds.
        </p>

        <div className="mt-14 grid gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-4">
          <div>
            <h3 className="display-wide text-sm text-muted">Real-world problem</h3>
            <ul className="mt-5 space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-center gap-3 text-base md:text-lg">
                  <span className="size-2 shrink-0 border border-line-strong" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <Connector />

          <div>
            <h3 className="display-wide text-sm text-muted">Engineering</h3>
            <ol className="relative mt-5">
              <motion.span
                aria-hidden
                className="absolute bottom-3 left-[3px] top-3 w-px origin-top bg-accent"
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              {engineering.map((s, i) => (
                <motion.li
                  key={s}
                  className="relative flex items-center gap-4 py-2 pl-6 text-lg md:text-xl"
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: i * 0.18 }}
                >
                  <span className="absolute left-0 size-[7px] bg-accent" aria-hidden />
                  <span className="display">{s}</span>
                </motion.li>
              ))}
            </ol>
          </div>

          <Connector />

          <div>
            <h3 className="display-wide text-sm text-muted">System</h3>
            <ul className="mt-5 grid grid-cols-2 gap-px border border-line bg-line">
              {systemOutputs.map((o, i) => (
                <motion.li
                  key={o}
                  className="bg-surface px-4 py-4 text-sm font-medium md:text-base"
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.07 }}
                >
                  {o}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

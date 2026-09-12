"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { estimo } from "@/data/products";
import { cn } from "@/lib/utils";

const n = estimo.stages.length;
const num = (i: number) => String(i + 1).padStart(2, "0");

export function Estimo() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.55", "end 0.55"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(n - 1, Math.floor(v * n))));

  return (
    <section id="estimo" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="display-wide text-sm text-muted">Flagship</p>
        <h2 className="display mt-3 text-[clamp(4rem,15vw,11rem)]">{estimo.name}</h2>
        <p className="display mt-4 max-w-3xl text-2xl text-fg sm:text-3xl md:text-4xl">{estimo.tagline}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{estimo.summary}</p>
        <p className="mt-6 max-w-2xl text-base text-fg md:text-lg">This isn&apos;t a dashboard project. This is a business operating system.</p>

        {/* Scroll-driven pipeline. Scroll is the only thing that moves it. */}
        <div ref={ref} className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[17rem_1fr] lg:gap-16">
          <div className="sticky top-16 z-10 -mx-5 border-b border-line bg-bg/90 px-5 py-3 backdrop-blur-md lg:hidden">
            <p className="text-xs text-muted">Stage {num(active)} of {num(n - 1)}</p>
            <p className="mt-0.5 truncate text-sm font-medium">{estimo.stages[active].name}</p>
          </div>

          <ol className="sticky top-28 hidden self-start lg:block" aria-label="Estimo stages">
            <span className="absolute bottom-2 left-[3px] top-2 w-px bg-line" aria-hidden />
            <motion.span aria-hidden className="absolute bottom-2 left-[3px] top-2 w-px origin-top bg-accent" style={{ scaleY: reduce ? 1 : scrollYProgress }} />
            {estimo.stages.map((s, i) => (
              <li key={s.name} className={cn("relative flex items-baseline gap-4 py-2 pl-6 transition-colors duration-300", i === active ? "text-fg" : "text-muted")}>
                <span className={cn("absolute left-0 top-1/2 size-[7px] -translate-y-1/2 transition-colors duration-300", i <= active ? "bg-accent" : "bg-line-strong")} aria-hidden />
                <span className="font-mono text-[11px]">{num(i)}</span>
                <span className="text-sm font-medium">{s.name}</span>
              </li>
            ))}
          </ol>

          <ol>
            {estimo.stages.map((s, i) => (
              <li key={s.name} className="flex min-h-[38vh] flex-col justify-center border-b border-line py-10 last:border-b-0 lg:min-h-[44vh]">
                <motion.div
                  initial={reduce ? false : { opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.6, margin: "-10% 0px" }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-mono text-xs text-accent">{num(i)}</p>
                  <h3 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">{s.name}</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">{s.desc}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid gap-10 border-t border-line pt-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h3 className="display text-2xl md:text-3xl">Under the hood</h3>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {estimo.underTheHood.map((f) => (
                <div key={f.k} className="grid gap-1 py-3 sm:grid-cols-[7rem_1fr] sm:gap-4">
                  <dt className="text-sm text-muted">{f.k}</dt>
                  <dd className="text-sm md:text-base">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="display text-2xl md:text-3xl">One codebase, every device</h3>
            <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
              <div className="bg-surface p-5">
                <p className="text-xs text-muted">Before</p>
                <p className="mt-2 text-sm md:text-base">{estimo.rebuild.before}</p>
              </div>
              <div className="bg-surface p-5">
                <p className="text-xs text-accent">After</p>
                <p className="mt-2 text-sm md:text-base">{estimo.rebuild.after}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { intelligence } from "@/data/products";

function Layers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className="relative">
      <span className="absolute bottom-6 left-1/2 top-6 w-px -translate-x-1/2 bg-line-strong" aria-hidden />
      {inView && !reduce && (
        <span className="absolute bottom-6 left-1/2 top-6 w-px -translate-x-1/2" aria-hidden>
          <motion.span
            className="absolute left-1/2 size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
            initial={{ top: "0%", opacity: 0 }}
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
          />
        </span>
      )}
      <ol className="relative space-y-5">
        {intelligence.layers.map((l, i) => (
          <li key={l} className="flex justify-center">
            <span className="panel min-w-[14rem] px-5 py-3 text-center text-sm font-medium md:text-base" style={{ borderColor: i === intelligence.layers.length - 1 ? "var(--accent)" : undefined }}>
              {l}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Intelligence() {
  return (
    <section id="intelligence" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <h2 className="display text-4xl sm:text-5xl md:text-6xl">And then I add intelligence.</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            When traditional software isn&apos;t enough, I experiment with AI, agents, LLMs and automation to make systems more capable. AI is integrated into real software systems, not treated as a chatbot demo.
          </p>
          <h3 className="display mt-10 text-2xl md:text-3xl">{intelligence.name}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{intelligence.summary}</p>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {intelligence.facts.map((f) => (
              <div key={f.k} className="grid gap-1 py-3 sm:grid-cols-[7rem_1fr] sm:gap-4">
                <dt className="text-sm text-muted">{f.k}</dt>
                <dd className="text-sm md:text-base">{f.v}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
            {intelligence.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
        <Layers />
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { lab, type LabStatus } from "@/data/products";
import { cn } from "@/lib/utils";

const dot: Record<LabStatus, string> = {
  Building: "bg-accent pulse-dot",
  Experimental: "border border-accent",
  Shipped: "bg-accent",
  Abandoned: "bg-line-strong",
};

export function Lab() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  return (
    <section id="lab" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="display text-4xl sm:text-5xl md:text-6xl">Things I build because I&apos;m curious.</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">Experiments and internal tools. What I tried, what happened, what I learned.</p>

        <ul className="mt-12 border-t border-line">
          {lab.map((e, i) => {
            const isOpen = open === i;
            const id = `lab-${i}`;
            return (
              <li key={e.name} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={id}
                  className="grid w-full gap-1 py-5 text-left sm:grid-cols-[8rem_1fr] sm:gap-6 md:py-6"
                >
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <span className={cn("size-2 shrink-0 rounded-full", dot[e.status])} aria-hidden />
                    {e.status}
                  </span>
                  <span>
                    <span className={cn("block text-lg font-medium md:text-xl", e.status === "Abandoned" && "line-through decoration-line-strong")}>{e.name}</span>
                    <span className="mt-1 block text-sm text-muted md:text-base">{e.line}</span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={id}
                      key="body"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <dl className="grid gap-6 pb-6 text-sm leading-relaxed sm:grid-cols-3 sm:pl-[calc(8rem+1.5rem)] md:text-base">
                        <div><dt className="text-muted">What I tried</dt><dd className="mt-1">{e.tried}</dd></div>
                        <div><dt className="text-muted">What happened</dt><dd className="mt-1">{e.happened}</dd></div>
                        <div><dt className="text-muted">What I learned</dt><dd className="mt-1">{e.learned}</dd></div>
                      </dl>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

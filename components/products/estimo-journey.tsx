"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { estimoModules } from "@/data/products";
import { cn } from "@/lib/utils";

// Walks through Estimo stage by stage; auto-advances until the visitor interacts.
export function EstimoJourney() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const stage = estimoModules[i];

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % estimoModules.length), 3200);
    return () => clearInterval(id);
  }, [paused, reduce]);

  return (
    <div className="card overflow-hidden rounded-3xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted md:px-6">
        <span>Estimo · sales to dispatch to MIS</span>
        <span className="hidden sm:inline">
          {String(i + 1).padStart(2, "0")} / {String(estimoModules.length).padStart(2, "0")}
        </span>
      </div>

      <ol className="grid grid-cols-4 border-b border-line md:grid-cols-8" aria-label="Estimo stages">
        {estimoModules.map((m, n) => (
          <li key={m.name} className="border-r border-line last:border-r-0 md:[&:nth-child(4)]:border-r">
            <button
              type="button"
              onClick={() => { setI(n); setPaused(true); }}
              onFocus={() => { setI(n); setPaused(true); }}
              aria-current={n === i}
              className={cn("relative flex min-h-16 w-full flex-col items-start justify-between px-3 py-2.5 text-left transition-colors", n === i ? "bg-accent-dim" : "hover:bg-surface-2")}
            >
              <span className={cn("font-mono text-[10px]", n === i ? "text-accent" : "text-muted")}>{String(n + 1).padStart(2, "0")}</span>
              <span className="text-[11px] font-medium leading-tight md:text-xs">{m.name.split(" & ")[0]}</span>
              {n === i && !paused && !reduce && (
                <motion.span key={i} className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 3.2, ease: "linear" }} aria-hidden />
              )}
            </button>
          </li>
        ))}
      </ol>

      <div className="grid gap-6 p-5 md:grid-cols-[1fr_1.4fr] md:p-8">
        <AnimatePresence mode="wait">
          <motion.div key={stage.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="md:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">Stage {String(i + 1).padStart(2, "0")}</p>
            <h4 className="display mt-2 text-2xl md:text-4xl">{stage.name}</h4>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted md:text-lg">{stage.desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

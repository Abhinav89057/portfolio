"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { siteStack } from "@/data/stack";

const EVENT = "engineer:set";
export const setEngineer = (on: boolean) => window.dispatchEvent(new CustomEvent(EVENT, { detail: on }));

const spec = [
  { k: "Frontend", v: siteStack.slice(0, 3).join(" · ") },
  { k: "Styling", v: "Tailwind CSS 4, design tokens in CSS variables" },
  { k: "Animation", v: "Framer Motion, SVG, reduced motion respected" },
  { k: "Architecture", v: "Component-driven, all content in /data" },
  { k: "Rendering", v: "Static, responsive from 320px" },
  { k: "Deployment", v: "Vercel, from GitHub main" },
];

function useEngineer() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const h = (e: Event) => setOn((e as CustomEvent<boolean>).detail);
    window.addEventListener(EVENT, h);
    return () => window.removeEventListener(EVENT, h);
  }, []);
  return on;
}

export function EngineerToggle() {
  const on = useEngineer();
  return (
    <button type="button" onClick={() => setEngineer(!on)} aria-pressed={on} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent">
      <span className="size-2 rounded-full border border-accent" style={{ background: on ? "var(--accent)" : "transparent" }} aria-hidden />
      Engineer mode {on ? "on" : "off"}
    </button>
  );
}

// Reveals how the portfolio itself is built. Annotates every section with its id.
export function EngineerMode() {
  const on = useEngineer();
  useEffect(() => {
    document.documentElement.dataset.engineer = on ? "on" : "off";
  }, [on]);

  return (
    <AnimatePresence>
      {on && (
        <motion.aside
          role="dialog"
          aria-label="Portfolio system"
          className="panel fixed bottom-4 left-4 z-40 w-[min(20rem,calc(100vw-2rem))] p-4 font-mono text-xs"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <p className="text-accent">portfolio.system</p>
            <button type="button" onClick={() => setEngineer(false)} aria-label="Close engineer mode" className="inline-flex size-8 items-center justify-center text-muted hover:text-fg">
              <X className="size-4" />
            </button>
          </div>
          <dl className="mt-3 space-y-2">
            {spec.map((s) => (
              <div key={s.k} className="grid grid-cols-[6rem_1fr] gap-2">
                <dt className="text-muted">{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[6rem_1fr] gap-2">
              <dt className="text-muted">Status</dt>
              <dd className="flex items-center gap-2"><span className="pulse-dot size-1.5 rounded-full bg-accent" aria-hidden />ONLINE</dd>
            </div>
          </dl>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

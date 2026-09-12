"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { projects, type Project } from "@/data/products";
import { cn } from "@/lib/utils";

// Device and cloud, kept in sync. Packets travel both ways.
function SyncDiagram() {
  const reduce = useReducedMotion();
  const packet = (from: number, to: number, delay: number) =>
    reduce ? {} : { cx: [from, to], opacity: [0, 1, 1, 0], transition: { duration: 2.2, delay, repeat: Infinity, repeatDelay: 1.4, ease: "linear" as const } };
  return (
    <svg viewBox="0 0 320 96" className="mt-6 h-auto w-full max-w-xs" role="img" aria-label="Device database syncs both ways with Supabase">
      <rect x="4" y="24" width="96" height="48" fill="var(--surface)" stroke="var(--line-strong)" />
      <text x="52" y="45" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--fg)" fontFamily="var(--font-geist-sans)">Device</text>
      <text x="52" y="61" textAnchor="middle" fontSize="10" fill="var(--muted)" fontFamily="var(--font-geist-mono)">Dexie</text>
      <rect x="220" y="24" width="96" height="48" fill="var(--surface)" stroke="var(--line-strong)" />
      <text x="268" y="45" textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--fg)" fontFamily="var(--font-geist-sans)">Cloud</text>
      <text x="268" y="61" textAnchor="middle" fontSize="10" fill="var(--muted)" fontFamily="var(--font-geist-mono)">Supabase</text>
      <path d="M100 40 H220 M100 56 H220" stroke="var(--line-strong)" strokeWidth="1" />
      <text x="160" y="34" textAnchor="middle" fontSize="9" fill="var(--muted)" fontFamily="var(--font-geist-mono)">last write wins</text>
      <text x="160" y="70" textAnchor="middle" fontSize="9" fill="var(--muted)" fontFamily="var(--font-geist-mono)">soft deletes</text>
      <motion.circle r="3" cy="40" fill="var(--accent)" initial={{ cx: 100, opacity: 0 }} animate={packet(100, 220, 0.2)} />
      <motion.circle r="3" cy="56" fill="var(--accent)" initial={{ cx: 220, opacity: 0 }} animate={packet(220, 100, 1.4)} />
    </svg>
  );
}

function ProjectRow({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const id = `project-${p.id}-details`;
  return (
    <article id={p.id} className="scroll-mt-24 grid gap-6 border-t border-line py-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:py-14">
      <div>
        <p className="text-sm text-muted">{p.kind}</p>
        <h3 className="display mt-2 text-3xl sm:text-4xl md:text-5xl">{p.name}</h3>
        {p.id === "khetflow" && <SyncDiagram />}
        <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          {p.stack.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
      <div>
        <p className="text-lg leading-relaxed md:text-xl">{p.summary}</p>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent"
        >
          {open ? "Hide details" : "Show details"}
          <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={id}
              key="details"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <dl className="mt-4 space-y-6 border-t border-line pt-6 text-sm leading-relaxed md:text-base">
                {p.problem && (
                  <div>
                    <dt className="text-muted">Problem</dt>
                    <dd className="mt-1">{p.problem}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-muted">What was built</dt>
                  <dd className="mt-1">
                    <ul className="space-y-1.5">
                      {p.built.map((b) => (
                        <li key={b} className="flex gap-3"><span className="mt-2.5 size-[6px] shrink-0 bg-accent" aria-hidden />{b}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                {p.why && (
                  <div>
                    <dt className="text-muted">Why it mattered</dt>
                    <dd className="mt-1">{p.why}</dd>
                  </div>
                )}
                {p.role && (
                  <div>
                    <dt className="text-muted">My part</dt>
                    <dd className="mt-1">{p.role}</dd>
                  </div>
                )}
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="display text-4xl sm:text-5xl md:text-6xl">More systems.</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">Different problems, same approach. Only projects that exist, with no invented numbers.</p>
        <div className="mt-12">
          {projects.map((p) => <ProjectRow key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}

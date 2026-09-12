"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { setEngineer } from "@/components/engineer-mode";

const EVENT = "palette:open";
export const openPalette = () => window.dispatchEvent(new Event(EVENT));

type Entry = { label: string; group: string; href?: string; run?: () => void };

const entries: Entry[] = [
  { label: "Estimo", href: "#estimo", group: "Navigate" },
  { label: "From problem to product", href: "#approach", group: "Navigate" },
  { label: "More systems", href: "#work", group: "Navigate" },
  { label: "KhetFlow", href: "#khetflow", group: "Projects" },
  { label: "Indus CRM", href: "#crm", group: "Projects" },
  { label: "Intelligence", href: "#intelligence", group: "Navigate" },
  { label: "Stack", href: "#stack", group: "Navigate" },
  { label: "Lab", href: "#lab", group: "Navigate" },
  { label: "How I think", href: "#thinking", group: "Navigate" },
  { label: "Experience", href: "#experience", group: "Navigate" },
  { label: "Contact", href: "#contact", group: "Navigate" },
  { label: "Engineer mode", group: "System", run: () => setEngineer(true) },
];

const sudo: Entry = { label: "Access granted. Engineer mode enabled.", group: "root", run: () => setEngineer(true) };

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (s === "sudo abhinav") return [sudo];
    return s ? entries.filter((x) => x.label.toLowerCase().includes(s)) : entries;
  }, [q]);

  const show = () => {
    setQ("");
    setIdx(0);
    setOpen(true);
  };

  useEffect(() => {
    const onOpen = () => show();
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
      if ((e.key === "/" && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        show();
      }
    };
    window.addEventListener(EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const go = (e: Entry) => {
    setOpen(false);
    e.run?.();
    if (e.href) document.querySelector(e.href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-[12vh] backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div
            role="dialog"
            aria-modal
            aria-label="Search the system"
            className="panel w-full max-w-lg overflow-hidden shadow-2xl"
            initial={{ y: -12, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -12, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
              if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, results.length - 1)); }
              if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
              if (e.key === "Enter" && results[idx]) go(results[idx]);
            }}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search className="size-4 text-muted" aria-hidden />
              <input autoFocus value={q} onChange={(e) => { setQ(e.target.value); setIdx(0); }} placeholder="Search the system…" aria-label="Search" className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted" />
              <kbd className="border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">ESC</kbd>
            </div>
            <ul role="listbox" className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">Nothing found.</li>}
              {results.map((r, i) => (
                <li key={r.label} role="option" aria-selected={i === idx}>
                  <button type="button" onMouseEnter={() => setIdx(i)} onClick={() => go(r)} className={cn("flex w-full items-center justify-between px-3 py-2.5 text-left text-sm", i === idx ? "bg-accent-dim text-fg" : "text-muted")}>
                    <span className="flex items-center gap-2"><ArrowRight className="size-3.5 text-accent" aria-hidden />{r.label}</span>
                    <span className="font-mono text-[10px] text-muted">{r.group}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

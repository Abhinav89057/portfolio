"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const EVENT = "palette:open";
export const openPalette = () => window.dispatchEvent(new Event(EVENT));

const entries = [
  { label: "About", href: "#about", group: "Navigate" },
  { label: "How I work", href: "#process", group: "Navigate" },
  { label: "Skills", href: "#skills", group: "Navigate" },
  { label: "Products", href: "#products", group: "Navigate" },
  { label: "Experience", href: "#experience", group: "Navigate" },
  { label: "Contact", href: "#contact", group: "Navigate" },
  ...products.map((p) => ({ label: p.name, href: `#${p.id}`, group: "Products" })),
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
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

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[12vh] backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div
            role="dialog"
            aria-modal
            aria-label="Search portfolio"
            className="card w-full max-w-lg overflow-hidden rounded-xl shadow-2xl"
            initial={{ y: -12, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -12, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
              if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, results.length - 1)); }
              if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
              if (e.key === "Enter" && results[idx]) go(results[idx].href);
            }}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search className="size-4 text-muted" aria-hidden />
              <input autoFocus value={q} onChange={(e) => { setQ(e.target.value); setIdx(0); }} placeholder="Search Abhinav's portfolio…" aria-label="Search" className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted" />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">ESC</kbd>
            </div>
            <ul role="listbox" className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">Nothing found.</li>}
              {results.map((r, i) => (
                <li key={r.href} role="option" aria-selected={i === idx}>
                  <button type="button" onMouseEnter={() => setIdx(i)} onClick={() => go(r.href)} className={cn("flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm", i === idx ? "bg-accent-dim text-fg" : "text-muted")}>
                    <span className="flex items-center gap-2"><ArrowRight className="size-3.5 text-accent" aria-hidden />{r.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{r.group}</span>
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

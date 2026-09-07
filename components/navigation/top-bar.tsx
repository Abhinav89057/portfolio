"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Command, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { openPalette } from "@/components/command-palette/command-palette";
import { LocalTime } from "@/components/ui/local-time";

const links = [
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#skills", label: "Skills" },
  { href: "#products", label: "Products" },
  { href: "#experience", label: "Experience" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const sync = () => setDark(document.documentElement.dataset.theme === "dark");
    const id = requestAnimationFrame(sync);
    return () => cancelAnimationFrame(id);
  }, []);
  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
    setDark(!dark);
  };
  return (
    <button type="button" onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:text-fg">
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 transition-colors", (scrolled || open) && "border-b border-line bg-bg/85 backdrop-blur-md")}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="display text-xl">Abhinav</Link>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted lg:inline">Local / <LocalTime /></span>
        </div>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button type="button" onClick={openPalette} className="hidden min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-3 font-mono text-xs text-muted transition-colors hover:text-fg md:inline-flex" aria-label="Open command palette">
            <Command className="size-3.5" aria-hidden /> K
          </button>
          <ThemeToggle />
          <a href="#contact" className="hidden min-h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg transition-colors hover:bg-accent md:inline-flex">Contact now</a>
          <button type="button" className="inline-flex size-11 items-center justify-center md:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line px-5 py-3 md:hidden">
          {[...links, { href: "#contact", label: "Contact" }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block min-h-11 py-3 text-base">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

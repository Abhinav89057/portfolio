"use client";

import { useState } from "react";
import { process } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function HowIWork() {
  const [active, setActive] = useState(0);
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Process</p>
          <h2 className="display mt-4 text-3xl sm:text-5xl md:text-6xl">How I work</h2>
        </Reveal>
        <ol className="mt-12 grid gap-2 md:grid-cols-5">
          {process.map((s, i) => (
            <li key={s.n}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={active === i}
                className={cn("card lift flex min-h-44 w-full flex-col rounded-xl p-4 text-left", active === i ? "border-accent" : "hover:border-accent/40")}
              >
                <span className="font-mono text-[11px] text-accent">{s.n}</span>
                <span className="mt-3 text-base font-medium leading-snug">{s.title}</span>
                <span className={cn("mt-3 text-sm leading-relaxed text-muted transition-opacity md:opacity-0", active === i && "md:opacity-100")}>{s.body}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

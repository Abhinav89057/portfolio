"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { SystemFlow } from "./system-flow";
import { Magnetic } from "@/components/ui/magnetic";
import { LocalTime } from "@/components/ui/local-time";

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const rise = (delay: number) => ({
    initial: reduce ? false : { y: "110%" },
    animate: { y: 0 },
    transition: { duration: 0.9, delay, ease },
  });
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      className="relative overflow-hidden pt-28 md:pt-36"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      <div className="spot" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          <div>
            <h1 className="display text-[clamp(2.75rem,7.6vw,6.4rem)]">
              {profile.hero.statement.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.08em]">
                  <motion.span className="block" {...rise(0.1 + i * 0.14)}>{line}</motion.span>
                </span>
              ))}
            </h1>
            <motion.p {...fade(0.5)} className="display-wide mt-7 text-sm text-fg md:text-base">
              {profile.roleLine}
            </motion.p>
            <motion.p {...fade(0.6)} className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {profile.hero.intro}
            </motion.p>
            <motion.div {...fade(0.7)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <a href="#estimo" className="inline-flex min-h-12 items-center justify-center gap-2 bg-fg px-6 text-sm font-medium text-bg transition-colors hover:bg-accent">
                  Explore my work <ArrowDown className="size-4" aria-hidden />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#approach" className="inline-flex min-h-12 items-center justify-center border border-line-strong px-6 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent">
                  Explore the system
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <SystemFlow />
          </div>
        </div>

        {/* Title block, the way an engineering drawing carries one in the corner. */}
        <motion.dl {...fade(0.95)} className="panel mt-16 grid grid-cols-2 md:mt-24 md:grid-cols-[auto_1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 flex items-center gap-4 border-b border-line p-4 md:col-span-1 md:border-b-0 md:border-r">
            <dt className="sr-only">Portrait</dt>
            <dd><Image src={profile.photo} alt={`Portrait of ${profile.name}`} width={96} height={120} priority className="h-24 w-20 shrink-0 object-cover object-[center_20%]" /></dd>
            <dd className="md:hidden">
              <span className="display block text-xl">{profile.name}</span>
              <span className="mt-1 block text-sm text-muted">{profile.role}</span>
            </dd>
          </div>
          <div className="hidden p-4 md:block md:border-r md:border-line">
            <dt className="text-xs text-muted">Name</dt>
            <dd className="display mt-1 text-xl">{profile.name}</dd>
            <dd className="mt-1 text-sm text-muted">{profile.role}</dd>
          </div>
          <div className="border-b border-r border-line p-4 md:border-b-0">
            <dt className="text-xs text-muted">Based</dt>
            <dd className="mt-1 text-sm font-medium">{profile.location}</dd>
            <dd className="mt-1 text-xs text-muted"><LocalTime seconds={false} /></dd>
          </div>
          <div className="border-b border-line p-4 md:border-b-0 md:border-r">
            <dt className="text-xs text-muted">Company</dt>
            <dd className="mt-1 text-sm font-medium">{profile.company}</dd>
            <dd className="mt-1 text-xs text-muted">Since {profile.since}</dd>
          </div>
          <div className="col-span-2 flex items-center gap-2 p-4 md:col-span-1">
            <span className="pulse-dot size-2 rounded-full bg-accent" aria-hidden />
            <div>
              <dt className="text-xs text-muted">Status</dt>
              <dd className="mt-1 text-sm font-medium">Building Estimo. Open to hard problems.</dd>
            </div>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}

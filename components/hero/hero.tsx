"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { metaBar, profile, stats } from "@/data/profile";
import { GithubIcon } from "@/components/ui/brand-icons";

const badges = [
  { k: "Flagship", v: "Estimo · ERP for printing & packaging", pos: "-left-4 top-8 md:-left-10" },
  { k: "Commits", v: `${stats[1].value.toLocaleString("en-IN")}+ on the flagship repo`, pos: "-right-3 top-1/2 md:-right-8" },
  { k: "Since", v: `${profile.since} · ${profile.company}`, pos: "-left-2 bottom-20 md:-left-8" },
];

function PhotoCard() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 16 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 16 });

  return (
    <motion.div
      className="relative mx-auto w-full max-w-sm [perspective:1200px] lg:max-w-none"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
    >
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="card relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-accent/10">
        <Image src={profile.photo} alt={`Portrait of ${profile.name}`} fill priority sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover object-[center_20%]" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-14 text-white">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/90">
            <span className="pulse-dot size-1.5 rounded-full bg-emerald-400" aria-hidden /> Open to interesting problems
          </p>
        </div>
      </motion.div>
      {badges.map((b, i) => (
        <motion.div
          key={b.k}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
          className={`card float absolute ${b.pos} max-w-[14rem] rounded-xl px-3 py-2 shadow-lg`}
          style={{ animationDelay: `${i * 1.3}s` }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{b.k}</p>
          <p className="text-xs font-medium leading-snug">{b.v}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="glow -left-32 top-20 bg-accent/25" aria-hidden />
      <div className="glow -right-24 top-1/3 bg-sky-300/30 [animation-delay:-6s]" aria-hidden />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.div {...fade(0.05)} className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Image src={profile.avatar} alt="" width={64} height={64} priority className="size-14 rounded-full border border-line bg-surface md:size-16" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:tracking-[0.3em]">
                  {profile.role} · {profile.company}
                </p>
                <p className="mt-1 text-sm text-muted md:text-base">{profile.roleLine}</p>
              </div>
            </motion.div>

            <h1 className="display mt-8 text-[clamp(3.25rem,14vw,8rem)] leading-[0.9]">
              {profile.name.split(" ").map((w, i) => (
                <motion.span key={w} {...fade(0.15 + i * 0.12)} className="block">
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p {...fade(0.5)} className="display mt-8 bg-gradient-to-r from-accent to-sky-500 bg-clip-text text-2xl text-transparent md:text-4xl">
              {profile.headline[0]} {profile.headline[1]}
            </motion.p>
            <motion.p {...fade(0.6)} className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {profile.intro}
            </motion.p>
            <motion.div {...fade(0.7)} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#products" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-fg px-6 text-sm font-medium text-bg transition-colors hover:bg-accent">
                See what I build <ArrowDown className="size-4" aria-hidden />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent">
                <GithubIcon className="size-4" /> GitHub <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </motion.div>
          </div>

          <motion.div {...fade(0.4)} className="px-4 md:px-8 lg:px-4">
            <PhotoCard />
          </motion.div>
        </div>

        <motion.ul {...fade(0.9)} className="mt-16 grid grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-24">
          {metaBar.map((m) => (
            <li key={m.top} className="py-5 sm:px-6 sm:text-center first:sm:pl-0 last:sm:pr-0">
              <p className="font-mono text-xs uppercase tracking-[0.2em]">{m.top}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{m.sub}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

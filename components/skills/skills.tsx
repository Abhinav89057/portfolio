import { marquee, skillGroups } from "@/data/stack";
import { Reveal } from "@/components/ui/reveal";

export function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-3" aria-hidden>
      <div className={`${reverse ? "marquee-reverse" : "marquee"} flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-muted`}>
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t} <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <>
      <div className="border-y border-line">
        <Marquee items={marquee} />
        <Marquee items={[...marquee].reverse()} reverse />
      </div>
      <section id="skills" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Skills & expertise</p>
            <h2 className="display mt-4 max-w-4xl text-3xl sm:text-5xl md:text-6xl">Systems, not screens.</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{skillGroups.flatMap((g) => g.items).length} tools in production use, grouped by what they are for.</p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.n} delay={i * 0.08} className="card lift flex flex-col rounded-2xl p-6">
              <span className="font-mono text-[11px] text-accent">{g.n}</span>
              <h3 className="display mt-3 text-2xl">{g.title}</h3>
              <p className="mt-2 text-sm text-muted">{g.blurb}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-accent" aria-hidden>—</span>
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}

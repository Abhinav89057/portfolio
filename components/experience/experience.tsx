import { experienceBullets, profile } from "@/data/profile";
import { marquee } from "@/data/stack";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Background & capability</p>
          <h2 className="display mt-4 text-3xl sm:text-5xl md:text-6xl">Experience</h2>
        </Reveal>

        <Reveal delay={0.1} className="card lift mt-12 rounded-3xl p-6 md:p-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h3 className="display text-2xl md:text-3xl">{profile.role}</h3>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {profile.company} · {profile.since} – Present
            </p>
          </div>
          <ul className="mt-8 grid gap-x-10 gap-y-3 md:grid-cols-2">
            {experienceBullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted md:text-base">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="text-fg">Stack</span> · {marquee.join(" · ")}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 text-center">
          <p className="display text-2xl sm:text-4xl md:text-5xl">
            Every system here
            <br />
            <span className="text-accent">runs in production.</span>
          </p>
          <p className="mt-4 text-muted">Real plants, real quotes, real dispatches.</p>
        </Reveal>
      </div>
    </section>
  );
}

import { profile, stats } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";

export function Foundation() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Background</p>
            <h2 className="display mt-4 text-3xl sm:text-5xl md:text-6xl">Foundation</h2>
            <p className="mt-5 text-muted md:text-lg">
              Formal education built the base.
              <br />
              Live production systems built the expertise.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-line border-y border-line">
              <li className="py-5">
                <p className="text-lg font-medium">{profile.education}</p>
                <p className="mt-1 text-sm text-muted">Programming fundamentals, databases and software engineering.</p>
              </li>
              <li className="py-5">
                <p className="text-lg font-medium">
                  {profile.role}, {profile.company}
                </p>
                <p className="mt-1 text-sm text-muted">{profile.since} to present. Printing and packaging ERP, CRM, AI assistants, internal tooling.</p>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14">
          <ul className="card lift grid grid-cols-2 divide-line rounded-2xl md:grid-cols-4 md:divide-x">
            {stats.map((s) => (
              <li key={s.label} className="p-6 text-center md:p-8">
                <p className="display text-4xl md:text-5xl">
                  <Counter value={s.value} />
                  {s.suffix && <span className="text-accent">{s.suffix}</span>}
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em]">{s.label}</p>
                <p className="mt-1 font-mono text-[10px] text-muted">{s.sub}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

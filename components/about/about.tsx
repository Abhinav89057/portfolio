import Image from "next/image";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";

const facts = [
  { k: "Based", v: profile.location },
  { k: "Since", v: profile.since },
  { k: "Company", v: profile.company },
  { k: "Education", v: "BCA" },
  { k: "Focus", v: "ERP · AI · Full-stack" },
  { k: "Languages", v: "C#, TypeScript, SQL, Python" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">About</p>
          <h2 className="display mx-auto mt-4 max-w-4xl text-3xl sm:text-5xl md:text-6xl">
            {profile.aboutStatements[0]}
            <br />
            <span className="text-accent">{profile.aboutStatements[1]}</span>
          </h2>
          <p className="mt-5 text-muted md:text-lg">{profile.aboutTagline}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="card lift relative overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="absolute -right-16 -top-16 size-48 rounded-full bg-accent/15 blur-3xl" aria-hidden />
            <div className="relative flex items-center gap-4">
              <Image src={profile.avatar} alt="" width={96} height={96} className="size-20 rounded-2xl border border-line bg-surface md:size-24" />
              <div>
                <p className="display text-2xl">{profile.firstName}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">{profile.role}</p>
              </div>
            </div>
            <dl className="relative mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-line pt-6">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{f.k}</dt>
                  <dd className="mt-1 text-sm font-medium">{f.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <ul className="space-y-3">
                {profile.aboutLines.map((l, i) => (
                  <li key={i} className={i === profile.aboutLines.length - 1 ? "display text-xl text-fg md:text-2xl" : "text-lg leading-relaxed text-muted md:text-xl"}>
                    {l}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="card lift rounded-2xl p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">The journey</p>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted md:text-base">
                {profile.journey.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

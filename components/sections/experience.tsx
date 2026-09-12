import { experienceBullets, profile } from "@/data/profile";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="display text-4xl sm:text-5xl md:text-6xl">Experience</h2>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="display text-3xl">{profile.company}</p>
            <p className="mt-2 text-lg">{profile.role}</p>
            <p className="mt-1 text-sm text-muted">{profile.sinceShort} — Present · {profile.location}</p>
            <p className="mt-8 text-sm text-muted">Education</p>
            <p className="mt-1">{profile.education}</p>
          </div>
          <ul className="space-y-4">
            {experienceBullets.map((b) => (
              <li key={b} className="flex gap-4 text-sm leading-relaxed md:text-base">
                <span className="mt-2.5 size-[6px] shrink-0 bg-accent" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <h3 className="display text-2xl md:text-3xl">Where this comes from</h3>
          <div className="mt-6 grid gap-6 text-base leading-relaxed text-muted md:grid-cols-3 md:text-lg">
            {profile.journey.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

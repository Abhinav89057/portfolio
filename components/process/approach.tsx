import { Reveal } from "@/components/ui/reveal";

const words = ["Observe", "Model", "Design", "Then build."];

const rows: { label: string; boxes: { t: string; s?: string }[] }[] = [
  { label: "Clients", boxes: [{ t: "Web ERP", s: "Next.js 16" }, { t: "Mobile PWA", s: "same pages" }, { t: "Android / iOS", s: "Capacitor" }] },
  { label: "API", boxes: [{ t: "ASP.NET Web API", s: "C# · .NET 4.8 → 10" }, { t: "Auth", s: "NextAuth · JWT" }, { t: "AI assistants", s: "Semantic Kernel" }] },
  { label: "Engine", boxes: [{ t: "Costing & workflow engine", s: "material · machine · process · approvals · planning" }] },
  { label: "Data", boxes: [{ t: "SQL Server", s: "multi-company" }, { t: "Realtime", s: "SignalR" }, { t: "Integrations", s: "email · S3 · Graph" }] },
];

export function Approach() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <h2 className="display text-4xl sm:text-6xl md:text-7xl">
            {words.map((w, i) => (
              <span key={w} className={["block", i === 1 && "text-fg/70", i === 2 && "text-fg/45", i === 3 && "text-accent"].filter(Boolean).join(" ")}>
                {w}
              </span>
            ))}
          </h2>
          <p className="mt-8 max-w-md leading-relaxed text-muted md:text-lg">
            I start by mapping how the plant actually quotes, plans and ships, and what data each step needs, before writing the feature.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Architecture map · Estimo</p>
          <div className="mt-4 space-y-2">
            {rows.map((r, ri) => (
              <div key={r.label}>
                <div className="grid gap-2 sm:[grid-template-columns:var(--cols)]" style={{ "--cols": `repeat(${r.boxes.length}, minmax(0, 1fr))` } as React.CSSProperties}>
                  {r.boxes.map((b) => (
                    <div key={b.t} className="card min-w-0 rounded-lg p-3 [overflow-wrap:anywhere]">
                      <p className="font-mono text-[11px] uppercase tracking-wider">{b.t}</p>
                      {b.s && <p className="mt-1 font-mono text-[10px] text-muted">{b.s}</p>}
                    </div>
                  ))}
                </div>
                {ri < rows.length - 1 && (
                  <div className="flex justify-center py-1" aria-hidden>
                    <svg width="12" height="18" viewBox="0 0 12 18"><path d="M6 0v14" stroke="var(--accent)" strokeWidth="1.5" /><path d="M2 12l4 5 4-5" fill="none" stroke="var(--accent)" strokeWidth="1.5" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

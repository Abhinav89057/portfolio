import { otherSystems, products } from "@/data/products";
import { Reveal } from "@/components/ui/reveal";
import { EstimoJourney } from "./estimo-journey";

function Overview({ facts }: { facts: { k: string; v: string }[] }) {
  return (
    <dl className="card rounded-2xl p-6 md:p-8">
      {facts.map((f) => (
        <div key={f.k} className="grid gap-1 border-t border-line py-4 text-sm first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[6.5rem_1fr] sm:gap-3">
          <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{f.k}</dt>
          <dd>{f.v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Product showcase</p>
          <h2 className="display mt-4 text-4xl sm:text-6xl md:text-8xl">Products</h2>
          <p className="mx-auto mt-5 max-w-xl text-muted md:text-lg">What I build at Indus Analytics. One ERP product, the AI layer on it, and the platform work underneath.</p>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {products.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={p.id} id={p.id} className="scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center">
                <Reveal className={flip ? "order-2" : "order-2 lg:order-1"}>
                  <Overview facts={p.facts} />
                </Reveal>
                <Reveal delay={0.1} className={flip ? "order-1" : "order-1 lg:order-2"}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">{p.index}</p>
                  <h3 className="display mt-3 break-words text-3xl sm:text-4xl md:text-5xl">{p.name}</h3>
                  <p className="mt-2 text-lg text-muted">{p.kicker}</p>
                  <p className="mt-5 leading-relaxed text-muted">{p.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2"><span className="text-accent" aria-hidden>—</span>{pt}</li>
                    ))}
                  </ul>
                  <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">{p.stack.join(" · ")}</p>
                </Reveal>

                {p.id === "estimo" && (
                  <Reveal delay={0.15} className="order-3 lg:col-span-2">
                    <EstimoJourney />
                  </Reveal>
                )}
              </article>
            );
          })}
        </div>

        <Reveal className="mt-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Other systems</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherSystems.map((s) => (
              <li key={s.n} className="card lift flex flex-col rounded-2xl p-5">
                <span className="font-mono text-[11px] text-accent">{s.n}</span>
                <h3 className="mt-2 text-lg font-medium">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">{s.stack.map((t) => <li key={t} className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted">{t}</li>)}</ul>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-20 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Why these systems matter</p>
          <p className="display mx-auto mt-4 max-w-3xl text-xl sm:text-2xl md:text-4xl">
            Most software digitises a form.
            <br />
            <span className="text-accent">This runs the plant.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

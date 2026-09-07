"use client";

import { useState } from "react";
import { ArrowUpRight, FileText, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { LocalTime } from "@/components/ui/local-time";

const steps = [
  { n: "01", t: "You reach out", d: "Email or WhatsApp. I reply within a working day." },
  { n: "02", t: "Quick call", d: "We map the workflow and where it hurts." },
  { n: "03", t: "Clear plan", d: "Scope, approach and timeline in writing." },
];

const types = ["ERP / business platform", "Costing or workflow automation", "AI assistant on existing data", "Web or mobile app", "Something else"];

function RequestForm() {
  const [type, setType] = useState(types[0]);
  const [name, setName] = useState("");
  const [brief, setBrief] = useState("");
  const body = `Project type: ${type}\nName: ${name}\n\n${brief}`;
  const mail = `mailto:${profile.email}?subject=${encodeURIComponent(`Project request: ${type}`)}&body=${encodeURIComponent(body)}`;
  const wa = profile.whatsapp ? `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(body)}` : null;

  return (
    <form className="card rounded-2xl p-5 font-mono text-sm md:p-6" onSubmit={(e) => e.preventDefault()}>
      <p className="text-[11px] uppercase tracking-[0.3em] text-muted">project.init() — new request</p>
      <label className="mt-5 block text-xs text-muted">
        › project_type
        <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 min-h-11 w-full rounded-md border border-line bg-bg px-3 text-fg outline-none focus:border-accent">
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="mt-4 block text-xs text-muted">
        › your_name
        <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="mt-1 min-h-11 w-full rounded-md border border-line bg-bg px-3 text-fg outline-none focus:border-accent" />
      </label>
      <label className="mt-4 block text-xs text-muted">
        › project_brief
        <textarea value={brief} onChange={(e) => setBrief(e.target.value)} rows={4} className="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 text-fg outline-none focus:border-accent" />
      </label>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <a href={mail} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-fg px-5 text-bg transition-colors hover:bg-accent">
          <Mail className="size-4" aria-hidden /> send_via_email
        </a>
        {wa && (
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-line bg-surface px-5 transition-colors hover:border-accent hover:text-accent">
            <MessageCircle className="size-4" aria-hidden /> send_via_whatsapp
          </a>
        )}
      </div>
      <p className="mt-3 text-[11px] text-muted">{"// opens your mail or WhatsApp with the request pre-filled. Nothing is stored here."}</p>
    </form>
  );
}

export function Contact() {
  const channels = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    ...(profile.whatsapp ? [{ icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}` }] : []),
    { icon: LinkedinIcon, label: "LinkedIn", href: profile.linkedin },
    { icon: GithubIcon, label: "GitHub", href: profile.github },
    { icon: FileText, label: "Resume", href: profile.resumeFile },
  ];

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Get in touch</p>
          <h2 className="display mt-4 text-3xl sm:text-5xl md:text-7xl">
            Have a complex problem?
            <br />
            <span className="text-accent">Let&apos;s turn it into a system.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted md:text-lg">A process that needs software, an ERP that needs a module, or data that needs an assistant on top of it.</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">What happens next</p>
              <ol className="mt-4 divide-y divide-line border-y border-line">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-4 py-4">
                    <span className="font-mono text-xs text-accent">{s.n}</span>
                    <div>
                      <p className="font-medium">{s.t}</p>
                      <p className="text-sm text-muted">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">Direct channels</p>
              <ul className="mt-4 space-y-1">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-3 text-sm hover:text-accent">
                      <c.icon className="size-4 text-muted" aria-hidden /> {c.label} <ArrowUpRight className="size-3.5 text-muted" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <RequestForm />
          </Reveal>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl border-t border-line px-5 pt-8 md:px-8">
        <dl className="grid gap-4 font-mono text-[11px] uppercase tracking-[0.2em] sm:grid-cols-3">
          <div><dt className="text-muted">Local time</dt><dd className="mt-1"><LocalTime seconds={false} /></dd></div>
          <div><dt className="text-muted">Status</dt><dd className="mt-1 flex items-center gap-2"><span className="pulse-dot size-1.5 rounded-full bg-accent" aria-hidden />building_estimo · open_to_talk</dd></div>
          <div><dt className="text-muted">Based</dt><dd className="mt-1">indore_in · {profile.company.toLowerCase().replace(" ", "_")}</dd></div>
        </dl>
        <p className="display mt-8 break-all pb-8 text-2xl text-muted/60 sm:text-3xl md:text-5xl">{profile.email}</p>
      </footer>
    </section>
  );
}

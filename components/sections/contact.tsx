import { ArrowUpRight, FileText, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { siteStack } from "@/data/stack";
import { Magnetic } from "@/components/ui/magnetic";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { LocalTime } from "@/components/ui/local-time";
import { EngineerToggle } from "@/components/engineer-mode";

export function Contact() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="display text-[clamp(2.75rem,8vw,7rem)]">Got a difficult problem?</h2>
        <p className="mt-6 max-w-xl text-lg text-muted md:text-2xl">Let&apos;s build something useful.</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Magnetic>
            <a href={`mailto:${profile.email}`} className="inline-flex min-h-12 items-center justify-center gap-2 bg-fg px-6 text-sm font-medium text-bg transition-colors hover:bg-accent">
              <Mail className="size-4" aria-hidden /> Get in touch
            </a>
          </Magnetic>
          <Magnetic>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border border-line-strong px-6 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
              <GithubIcon className="size-4" /> GitHub <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Magnetic>
          <Magnetic>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border border-line-strong px-6 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
              <LinkedinIcon className="size-4" /> LinkedIn <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </Magnetic>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <li><a href={`mailto:${profile.email}`} className="hover:text-fg">{profile.email}</a></li>
          {profile.whatsapp && (
            <li><a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-fg"><MessageCircle className="size-3.5" aria-hidden /> WhatsApp</a></li>
          )}
          <li><a href={profile.resumeFile} className="inline-flex items-center gap-1.5 hover:text-fg"><FileText className="size-3.5" aria-hidden /> Resume</a></li>
        </ul>
      </div>

      <footer className="mt-20 border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr] md:px-8">
          <div>
            <p className="display text-2xl md:text-3xl">This website is also a system.</p>
            <p className="mt-3 text-sm text-muted">Built with {siteStack.slice(0, 2).join(", ")} and engineering obsession. Deployed from GitHub main.</p>
            <p className="mt-6 text-xs text-muted">© {year} {profile.name}</p>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-xs text-muted">Local time</dt>
              <dd className="mt-1"><LocalTime seconds={false} /></dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Status</dt>
              <dd className="mt-1 flex items-center gap-2"><span className="pulse-dot size-1.5 rounded-full bg-accent" aria-hidden />Online</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs text-muted">For technical visitors</dt>
              <dd className="mt-1"><EngineerToggle /></dd>
            </div>
          </dl>
        </div>
      </footer>
    </section>
  );
}

import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Approach } from "@/components/process/approach";
import { HowIWork } from "@/components/process/how-i-work";
import { Reveal } from "@/components/ui/reveal";
import { Foundation } from "@/components/foundation/foundation";
import { Skills } from "@/components/skills/skills";
import { Products } from "@/components/products/products";
import { Experience } from "@/components/experience/experience";
import { Contact } from "@/components/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Approach />
      <HowIWork />
      <section className="border-t border-line py-24 md:py-36">
        <Reveal className="mx-auto max-w-6xl px-5 text-center md:px-8">
          <h2 className="display text-3xl sm:text-5xl md:text-7xl">
            I don&apos;t ship features.
            <br />
            <span className="text-accent">I ship working systems.</span>
          </h2>
          <p className="mt-6 text-muted md:text-lg">Software that matches how the business runs, and stays simple for the person using it.</p>
        </Reveal>
      </section>
      <Foundation />
      <Skills />
      <Products />
      <Experience />
      <Contact />
    </>
  );
}

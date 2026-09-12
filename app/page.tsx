import { Hero } from "@/components/hero/hero";
import { ProblemToProduct } from "@/components/sections/problem-to-product";
import { Estimo } from "@/components/sections/estimo";
import { Projects } from "@/components/sections/projects";
import { Intelligence } from "@/components/sections/intelligence";
import { Stack } from "@/components/sections/stack";
import { Lab } from "@/components/sections/lab";
import { Manifesto } from "@/components/sections/manifesto";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemToProduct />
      <Estimo />
      <Projects />
      <Intelligence />
      <Stack />
      <Lab />
      <Manifesto />
      <Experience />
      <Contact />
    </>
  );
}

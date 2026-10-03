import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function About() {
  return (
    <Section id="sobre" eyebrow="02 — Sobre" title="Quem eu sou">
      <p className="max-w-2xl text-lg text-ink-soft">{site.about}</p>
    </Section>
  );
}
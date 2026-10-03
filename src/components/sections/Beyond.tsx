import { Section } from "@/components/ui/Section";
import { Starfield } from "@/components/ui/Starfield";
import { hobbies } from "@/data/hobbies";

export function Beyond() {
  return (
    <Section
      id="alem-da-tecnologia"
      dark
      eyebrow="04 — Além da tecnologia"
      title="O que me move fora da tela"
      className="relative overflow-hidden"
    >
      <Starfield />

      <div className="relative grid gap-10 sm:grid-cols-3">
        {hobbies.map((hobby) => (
          <div key={hobby.label} className="border-l border-night-line pl-5">
            <p className="font-serif text-xl text-night-ink">{hobby.label}</p>
            <p className="mt-2 text-sm text-night-ink-soft">{hobby.note}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
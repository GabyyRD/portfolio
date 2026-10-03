import { Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function Contact() {
  return (
    <Section id="contato" eyebrow="05 — Contato" title="Vamos conversar?">
      <p className="max-w-xl text-lg text-ink-soft">
        Estou aberta a oportunidades de estágio em Dados, BI e Engenharia de
        Dados. Se quiser trocar uma ideia, me encontra em um desses lugares:
      </p>

      <div className="mt-8 flex flex-wrap gap-6">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 text-ink transition-colors duration-200 hover:text-accent"
        >
          <Mail size={18} />
          {site.email}
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-ink transition-colors duration-200 hover:text-accent"
        >
          <LinkedinIcon size={18} />
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-ink transition-colors duration-200 hover:text-accent"
        >
          <GithubIcon size={18} />
          GitHub
        </a>
      </div>
    </Section>
  );
}
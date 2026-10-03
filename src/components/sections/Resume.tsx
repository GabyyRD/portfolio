import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { experience, education, technologies } from "@/data/resume";
import { site } from "@/data/site";

export function Resume() {
  return (
    <Section id="curriculo" eyebrow="" title="Currículo">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="mb-6 font-mono text-sm uppercase tracking-wide text-ink-soft">
            Experiência
          </h3>
          <ul className="flex flex-col gap-8">
            {experience.map((exp) => (
              <li key={`${exp.place}-${exp.period}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="font-medium text-ink">{exp.role}</p>
                  <p className="font-mono text-xs text-ink-soft">{exp.period}</p>
                </div>
                <p className="text-sm text-ink-soft">{exp.place}</p>
                <p className="mt-1 text-sm text-ink-soft">{exp.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-wide text-ink-soft">
              Educação
            </h3>
            <p className="font-medium text-ink">{education.degree}</p>
            <p className="text-sm text-ink-soft">{education.institution}</p>
            <p className="text-sm text-ink-soft">{education.status}</p>
          </div>

          <div>
            <h3 className="mb-6 font-mono text-sm uppercase tracking-wide text-ink-soft">
              Tecnologias
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Button href={site.resumeUrl} variant="primary" external>
          Ver currículo completo
        </Button>
      </div>
    </Section>
  );
}
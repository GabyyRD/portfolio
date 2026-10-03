import { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className={`scroll-mt-20 py-20 md:py-28 ${
        dark ? "bg-night text-night-ink" : ""
      } ${className}`}
    >
      <Container>
        {eyebrow && (
          <p
            className={`mb-3 font-mono text-sm tracking-wide ${
              dark ? "text-night-ink-soft" : "text-ink-soft"
            }`}
          >
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 id={`${id}-title`} className="mb-10 font-serif text-3xl md:text-4xl">
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
}
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DataPulse } from "@/components/ui/DataPulse";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen scroll-mt-20 flex-col justify-center pt-24"
    >
      <Container>
        <p className="mb-4 font-mono text-sm text-ink-soft">
          {site.role} — {site.focus}
        </p>

        <h1
          className="font-serif leading-[1.05]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
        >
          {site.name}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink-soft md:text-xl">
          {site.tagline}
        </p>

        <p className="mt-6 font-mono text-sm text-ink-soft">
          {site.stack.join(" · ")}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={site.github} variant="primary" external>
            GitHub
          </Button>
          <Button href={site.linkedin} external>
            LinkedIn
          </Button>
          <Button href={site.resumeUrl} external>
            Currículo
          </Button>
        </div>

        <div className="mt-16">
          <DataPulse />
        </div>
      </Container>
    </section>
  );
}
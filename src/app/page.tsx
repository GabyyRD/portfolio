import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <main>
      <Section id="teste" eyebrow="Fase 3 — Teste" title="Design system">
        <p className="max-w-xl text-ink-soft">
          Se você está vendo este texto em Geist, o título acima em
          Instrument Serif, o fundo em tom de papel e esta caixa de texto
          em cinza suave, o design system está funcionando.
        </p>
      </Section>

      <Section id="noite" dark eyebrow="Fase 3 — Teste" title="Seção escura">
        <p className="max-w-xl text-night-ink-soft">
          Esta é a seção com fundo azul-noite que vamos usar em
          &ldquo;Além da tecnologia&rdquo;.
        </p>
      </Section>
    </main>
  );
}
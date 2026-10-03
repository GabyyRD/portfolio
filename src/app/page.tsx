import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Resume } from "@/components/sections/Resume";
import { Beyond } from "@/components/sections/Beyond";
import { Contact } from "@/components/sections/Contact";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Resume />
        </Reveal>
        <Reveal>
          <Beyond />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
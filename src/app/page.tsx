import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}
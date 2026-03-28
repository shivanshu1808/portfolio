import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { SystemDesignMindset } from "@/components/portfolio/SystemDesignMindset";
import { Achievements } from "@/components/portfolio/Achievements";
import { GitHubStats } from "@/components/portfolio/GitHubStats";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <SystemDesignMindset />
        <Achievements />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { BuiltWith } from "@/components/BuiltWith";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <BuiltWith />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

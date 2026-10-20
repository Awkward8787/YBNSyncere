import { About } from "./components/About.tsx";
import { BrandLine } from "./components/BrandLine.tsx";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { Management } from "./components/Management.tsx";
import { Music } from "./components/Music.tsx";
import { NotifyForm } from "./components/NotifyForm.tsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#artist-name">
        Skip to content
      </a>
      <main id="content">
        <Hero />
        <Music />
        <About />
        <BrandLine />
        <Management />
        <NotifyForm />
      </main>
      <Footer />
    </>
  );
}

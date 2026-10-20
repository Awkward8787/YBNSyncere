import { Bio } from "./components/Bio.tsx";
import { Credit } from "./components/Credit.tsx";
import { Footer } from "./components/Footer.tsx";
import { Hero } from "./components/Hero.tsx";
import { Music } from "./components/Music.tsx";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Music />
        <Bio />
        <Credit />
      </main>
      <Footer />
    </>
  );
}

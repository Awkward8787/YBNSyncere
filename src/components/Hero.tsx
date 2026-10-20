import { site } from "../content/site.ts";
import { ImageSlot } from "./ImageSlot.tsx";

export function Hero() {
  return (
    <section className="hero-shell" id="top" aria-labelledby="artist-name">
      <div className="hero-grain" aria-hidden="true" />
      <div className="wrap hero-layout">
        <nav className="mast" aria-label="On this page">
          <a className="brand" href="#top">
            {site.hero.mark}
          </a>
          <ul className="nav-list">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 className="wordmark" id="artist-name" tabIndex={-1}>
              <span className="wordmark-primary">{site.hero.namePrimary}</span>
              <span className="wordmark-secondary">{site.hero.nameSecondary}</span>
            </h1>
            <p className="tagline">{site.hero.tagline}</p>
            <p className="project-line">{site.hero.project}</p>
            <p className="hero-meta">{site.hero.meta}</p>
          </div>
          <ImageSlot slot={site.hero.portrait} priority className="hero-portrait" />
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { site } from "../content/site.ts";
import { Web } from "../lib/web.ts";
import { ImageSlot } from "./ImageSlot.tsx";

export function Hero() {
  const [hasPhoto, setHasPhoto] = useState(false);
  const cta = Web.firstLive([site.hero.cta, site.hero.presave]);

  return (
    <section className="hero" aria-labelledby="artist-name">
      <ImageSlot slot={site.hero.portrait} kind="hero" priority onReady={setHasPhoto} />
      {hasPhoto ? <div className="hero-scrim" aria-hidden="true" /> : null}
      <div className="hero-copy">
        <h1 className="wordmark" id="artist-name">
          {site.wordmark.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero-line">{site.hero.line}</p>
        {hasPhoto && cta ? (
          <a className="text-link" href={cta.href}>
            {cta.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}

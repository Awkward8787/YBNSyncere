import { site } from "../content/site.ts";

export function Bio() {
  return (
    <section className="bio" aria-label="Biography">
      <div className="wrap">
        <div className="bio-copy">
          {site.bio.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

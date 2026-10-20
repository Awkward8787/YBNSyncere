import { site } from "../content/site.ts";
import { Copy } from "../lib/copy.ts";
import { ImageSlot } from "./ImageSlot.tsx";

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <p className="section-kicker">
          <span>Chapter {site.about.chapter}</span>
          <span aria-hidden="true">/</span>
          <span>{site.about.kicker}</span>
        </p>
        <div className="about-grid">
          <ImageSlot slot={site.about.portrait} className="about-frame" />
          <div>
            <h2 id="about-title">{site.about.title}</h2>
            {site.about.paragraphs.map((paragraph) => {
              const line = Copy.todo(paragraph);
              return (
                <p key={paragraph}>
                  {line.flagged ? <strong className="todo-flag">TODO</strong> : null}
                  {line.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

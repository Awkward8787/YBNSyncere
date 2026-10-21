import { site } from "../content/site.ts";
import { Web } from "../lib/web.ts";
import { ImageSlot } from "./ImageSlot.tsx";

export function Music() {
  const { release } = site;
  const embed = Web.embed(release.embedUrl);

  return (
    <section className="music" aria-labelledby="music-title">
      <div className="wrap music-layout">
        <ImageSlot slot={release.cover} kind="cover" />
        <div className="music-copy">
          <h2 id="music-title">{release.title}</h2>
          <p className="meta">
            {release.subtitle}. {release.book}.
          </p>
          {release.tracks.length === 0 ? (
            <p>{release.tracklistPending}</p>
          ) : (
            <ol className="tracks">
              {release.tracks.map((track) => (
                <li key={`${track.numeral}-${track.title}`}>
                  <span>{track.numeral}</span>
                  <span>{track.title}</span>
                  {track.duration ? <span>{track.duration}</span> : null}
                </li>
              ))}
            </ol>
          )}
          {embed ? (
            <iframe
              className="embed"
              src={embed}
              title={`${release.title} player`}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <p>{release.listenPending}</p>
          )}
        </div>
      </div>
    </section>
  );
}

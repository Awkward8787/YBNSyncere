import { site } from "../content/site.ts";
import { Web } from "../lib/web.ts";
import { ImageSlot } from "./ImageSlot.tsx";
import { TextLink } from "./TextLink.tsx";

export function Music() {
  const { release } = site;
  const embed = Web.embed(release.embedUrl);

  return (
    <section className="section music" id="music" aria-labelledby="music-title">
      <div className="wrap">
        <p className="section-kicker">
          <span>Chapter {site.music.chapter}</span>
          <span aria-hidden="true">/</span>
          <span>{site.music.kicker}</span>
        </p>
        <div className="music-layout">
          <ImageSlot slot={release.cover} kind="cover" className="cover-frame" />
          <div className="music-copy">
            <h2 id="music-title">{release.title}</h2>
            <p className="release-status">{release.statusLabel}</p>
            <p className="lede">{release.lede}</p>

            <h3 className="subhead">Streaming</h3>
            <ul className="services">
              {release.streaming.map((link) => (
                <li key={link.label}>
                  <TextLink link={link} pending="Soon" />
                </li>
              ))}
            </ul>

            <h3 className="subhead">Tracklist</h3>
            <table className="tracklist">
              <caption className="visually-hidden">Tracklist for {release.title}</caption>
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Title</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {release.tracks.length === 0 ? (
                  <tr>
                    <td className="track-num" aria-hidden="true">
                      —
                    </td>
                    <td className="track-pending" colSpan={1}>
                      Forthcoming
                    </td>
                    <td className="track-time">—:—</td>
                  </tr>
                ) : (
                  release.tracks.map((track) => (
                    <tr key={`${track.numeral}-${track.title}`}>
                      <td className="track-num">{track.numeral}</td>
                      <td>{track.title}</td>
                      <td className="track-time">{track.duration || "—"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            <h3 className="subhead" id="player-label">
              {release.playerLabel}
            </h3>
            <div className="player-bay" role="region" aria-labelledby="player-label">
              {embed ? (
                <iframe
                  className="player-frame"
                  src={embed}
                  title={`${release.title} player`}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <p className="player-pending">{release.playerPending}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

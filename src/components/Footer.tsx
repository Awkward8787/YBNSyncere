import { site } from "../content/site.ts";
import { Web } from "../lib/web.ts";
import { TextLink } from "./TextLink.tsx";

const year = new Date().getFullYear();

export function Footer() {
  const linksLive = Web.anyLive(site.socials);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <p className="footer-name">Sincere the GodSon</p>
          <ul className="socials">
            {site.socials.map((link) => (
              <li key={link.label}>
                <TextLink link={link} pending="link forthcoming" variant="social" />
              </li>
            ))}
          </ul>
        </div>
        {linksLive ? null : <p className="footer-note">Social links forthcoming.</p>}
        <div className="colophon">
          <p>© {year} Sincere the GodSon</p>
          <p>
            {site.management.kicker} {site.management.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

import { site } from "../content/site.ts";
import { Web } from "../lib/web.ts";

export function Footer() {
  const socials = site.socials.flatMap((link) => {
    const href = Web.external(link.href);
    return href ? [{ label: link.label, href }] : [];
  });
  const email = Web.email(site.contact);

  return (
    <footer className="footer">
      <div className="wrap footer-row">
        {socials.length > 0 ? (
          <ul className="socials">
            {socials.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        ) : null}
        {email ? <a href={`mailto:${email}`}>{email}</a> : null}
        <p className="meta">© {site.year}</p>
      </div>
    </footer>
  );
}

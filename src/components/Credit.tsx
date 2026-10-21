import { site } from "../content/site.ts";
import { Web } from "../lib/web.ts";
import { ImageSlot } from "./ImageSlot.tsx";

export function Credit() {
  const href = Web.external(site.management.href);
  const line = site.management.line;

  return (
    <section className="credit" aria-label="Management">
      <div className="wrap credit-row">
        <ImageSlot slot={site.management.logo} kind="logo" />
        {href ? (
          <a className="text-link" href={href}>
            {line}
          </a>
        ) : (
          <p>{line}</p>
        )}
      </div>
    </section>
  );
}

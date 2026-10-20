import type { ExternalLink } from "../content/site.ts";
import { Web } from "../lib/web.ts";

type Props = {
  link: ExternalLink;
  pending: string;
  variant?: "service" | "social";
};

export function TextLink({ link, pending, variant = "service" }: Props) {
  const href = Web.external(link.href);

  if (!href) {
    return (
      <span className={`text-link ${variant} is-pending`}>
        <span>{link.label}</span>
        {variant === "service" ? (
          <span className="text-link-state">{pending}</span>
        ) : (
          <span className="visually-hidden">, {pending}</span>
        )}
      </span>
    );
  }

  return (
    <a className={`text-link ${variant}`} href={href} target="_blank" rel="noreferrer noopener">
      {link.label}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}

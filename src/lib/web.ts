import type { ExternalLink } from "../content/site.ts";

export class Web {
  static url(raw: string): URL | null {
    const value = raw.trim();
    if (!value) return null;
    try {
      return new URL(value);
    } catch {
      return null;
    }
  }

  static external(raw: string): string | null {
    const url = Web.url(raw);
    if (!url || url.protocol !== "https:") return null;
    return url.toString();
  }

  static firstLive(links: readonly ExternalLink[]): ExternalLink | null {
    for (const link of links) {
      const href = Web.external(link.href);
      if (href) return { label: link.label, href };
    }
    return null;
  }

  static email(raw: string): string | null {
    const value = raw.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return null;
    return value;
  }

  static embed(raw: string): string | null {
    const url = Web.url(raw);
    if (!url || url.protocol !== "https:") return null;
    if (url.hostname === "open.spotify.com") return Web.spotify(url);
    if (url.hostname === "embed.music.apple.com") return url.toString();
    if (url.hostname === "audiomack.com" || url.hostname === "www.audiomack.com") {
      if (!url.pathname.startsWith("/embed/")) return null;
      return url.toString();
    }
    return null;
  }

  private static spotify(url: URL): string | null {
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts[0] === "embed" && parts.length >= 3) return url.toString();
    const kind = parts[0];
    const id = parts[1];
    if (!id) return null;
    if (kind !== "album" && kind !== "track" && kind !== "playlist") return null;
    return `https://open.spotify.com/embed/${kind}/${id}`;
  }
}

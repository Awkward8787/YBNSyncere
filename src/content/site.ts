/**
 * Public copy and slots for the artist site.
 *
 * Photographs — drop files at these public paths. WebP is tried first, then JPG.
 * Every photo is rendered in black and white. Do not commit stand-in photos of a person.
 *   public/images/hero.webp|jpg         studio portrait, portrait orientation
 *   public/images/about.webp|jpg        casual portrait
 *   public/images/cover.webp|jpg        jacket art for The Book of Sincere
 *   public/images/brand-world.webp|jpg  optional; hidden until the file exists
 *
 * Tracks — append real entries to release.tracks:
 *   { numeral: "I", title: "Title", duration: "3:12" }
 *
 * Streaming — set href to an https URL. Empty href stays inert.
 * Player — set release.embedUrl to an https embed from Spotify, Apple Music, or YouTube.
 *   https://open.spotify.com/embed/album/…  (album/track/playlist URLs are normalized)
 *   https://embed.music.apple.com/…
 *   https://www.youtube.com/embed/…
 * Notify — set notify.endpoint to an https URL that accepts POST { "email": "…" }.
 *   http://localhost is allowed for local tests. An empty endpoint sends nothing.
 */

export type MediaSlot = {
  sources: readonly string[];
  alt: string;
  pendingAlt: string;
  pendingLabel: string;
};

export type PageLink = {
  label: string;
  href: string;
};

export type ExternalLink = {
  label: string;
  href: string;
};

export type Track = {
  numeral: string;
  title: string;
  duration?: string;
};

export type ReleaseStatus = "coming-soon" | "released";

export type NotifyMessages = {
  inert: string;
  ok: string;
  error: string;
  invalid: string;
};

export type SiteContent = {
  hero: {
    mark: string;
    namePrimary: string;
    nameSecondary: string;
    tagline: string;
    project: string;
    meta: string;
    portrait: MediaSlot;
  };
  nav: readonly PageLink[];
  music: {
    chapter: string;
    kicker: string;
  };
  release: {
    title: string;
    status: ReleaseStatus;
    statusLabel: string;
    lede: string;
    cover: MediaSlot;
    streaming: readonly ExternalLink[];
    tracks: readonly Track[];
    embedUrl: string;
    playerLabel: string;
    playerPending: string;
  };
  about: {
    chapter: string;
    kicker: string;
    title: string;
    portrait: MediaSlot;
    paragraphs: readonly string[];
  };
  brand: {
    line: string;
    image: MediaSlot;
  };
  management: {
    kicker: string;
    name: string;
  };
  notify: {
    heading: string;
    body: string;
    endpoint: string;
    messages: NotifyMessages;
  };
  socials: readonly ExternalLink[];
};

export const site: SiteContent = {
  hero: {
    mark: "YBN SYNCERE",
    namePrimary: "Sincere",
    nameSecondary: "the GodSon",
    tagline: "Contemporary soul, composed like a book.",
    project: "The Book of Sincere — Coming Soon",
    meta: "Volume I  ·  Debut",
    portrait: {
      sources: ["images/hero.webp", "images/hero.jpg"],
      alt: "Sincere the GodSon seated in a black double-breasted suit against a grey studio backdrop.",
      pendingAlt: "Studio portrait forthcoming. Empty black and white frame.",
      pendingLabel: "Plate I",
    },
  },
  nav: [
    { label: "Music", href: "#music" },
    { label: "About", href: "#about" },
    { label: "Notify", href: "#notify" },
  ],
  music: {
    chapter: "I",
    kicker: "The Music",
  },
  release: {
    title: "The Book of Sincere",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    lede: "The debut is not streaming yet.",
    cover: {
      sources: ["images/cover.webp", "images/cover.jpg"],
      alt: "Cover art for The Book of Sincere.",
      pendingAlt: "Cover art for The Book of Sincere. Artwork not yet added.",
      pendingLabel: "The Book of Sincere",
    },
    streaming: [
      { label: "Spotify", href: "" },
      { label: "Apple Music", href: "" },
      { label: "YouTube", href: "" },
    ],
    tracks: [],
    embedUrl: "",
    playerLabel: "Player",
    playerPending: "The embedded player appears here when a release URL is set.",
  },
  about: {
    chapter: "II",
    kicker: "The Artist",
    title: "Sincere the GodSon",
    portrait: {
      sources: ["images/about.webp", "images/about.jpg"],
      alt: "Sincere the GodSon, casual portrait.",
      pendingAlt: "Portrait forthcoming. Empty black and white frame.",
      pendingLabel: "Plate II",
    },
    paragraphs: [
      "TODO: Replace this with the approved biography. Origin, credits, and figures stay out until they are supplied.",
    ],
  },
  brand: {
    line: "Made for a king.",
    image: {
      sources: ["images/brand-world.webp", "images/brand-world.jpg"],
      alt: "1990 Cadillac Brougham GodSon Edition.",
      pendingAlt: "Brand photograph not yet added.",
      pendingLabel: "Brand",
    },
  },
  management: {
    kicker: "Signed to",
    name: "Loaded Sound Management",
  },
  notify: {
    heading: "When it is out",
    body: "Leave an email for the release of The Book of Sincere.",
    endpoint: "",
    messages: {
      inert: "The list is not connected yet.",
      ok: "Noted. You will hear when it is out.",
      error: "That address could not be saved.",
      invalid: "Enter a valid email address.",
    },
  },
  socials: [
    { label: "Instagram", href: "" },
    { label: "TikTok", href: "" },
    { label: "YouTube", href: "" },
    { label: "X", href: "" },
  ],
};

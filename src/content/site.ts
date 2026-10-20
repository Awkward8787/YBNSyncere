/**
 * Public copy and slots.
 *
 * Hero photograph — public/images/hero.webp or .jpg
 *   Shown full-bleed in black and white. Until the file exists, the hero is type only.
 * Cover — public/images/cover.webp or .jpg
 *   Square jacket, shown as supplied (gold stays in the file). Until then, a typeset title.
 * Management logo — public/images/management.webp or .jpg
 *   Optional. Hidden until the file exists.
 *
 * Links render only when href is an https URL.
 * The player renders only when embedUrl is a Spotify, Apple Music, or Audiomack embed.
 * Leave hero.cta.href and hero.presave.href empty to show no button.
 */

export type MediaSlot = {
  sources: readonly string[];
  alt: string;
  pendingAlt: string;
  pendingLabel: string;
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

export type SiteContent = {
  wordmark: readonly string[];
  hero: {
    line: string;
    portrait: MediaSlot;
    cta: ExternalLink;
    presave: ExternalLink;
  };
  release: {
    title: string;
    subtitle: string;
    book: string;
    cover: MediaSlot;
    tracks: readonly Track[];
    embedUrl: string;
    tracklistPending: string;
    listenPending: string;
  };
  bio: {
    paragraphs: readonly string[];
  };
  management: {
    line: string;
    href: string;
    logo: MediaSlot;
  };
  contact: string;
  socials: readonly ExternalLink[];
  year: number;
};

export const site: SiteContent = {
  wordmark: ["Sincere", "the GodSon"],
  hero: {
    line: "The Book of Syncere. Debut project, coming soon.",
    portrait: {
      sources: ["images/hero.webp", "images/hero.jpg"],
      alt: "Sincere the GodSon seated in a black double-breasted suit against a grey studio backdrop.",
      pendingAlt: "Portrait not yet added.",
      pendingLabel: "",
    },
    cta: { label: "Instagram", href: "" },
    presave: { label: "Pre-save", href: "" },
  },
  release: {
    title: "The Book of Syncere",
    subtitle: "Chozen Anomaly",
    book: "Book I",
    cover: {
      sources: ["images/cover.webp", "images/cover.jpg"],
      alt: "Cover art for The Book of Syncere.",
      pendingAlt: "Title page for The Book of Syncere. Cover art not yet added.",
      pendingLabel: "The Book of Syncere",
    },
    tracks: [],
    embedUrl: "",
    tracklistPending: "Tracklist revealed on release.",
    listenPending: "Listen here on release day.",
  },
  bio: {
    paragraphs: [
      "TODO: Replace this with the approved biography. Origin, credits, and figures stay out until they are supplied.",
    ],
  },
  management: {
    line: "Managed by Loaded Sound Management",
    href: "",
    logo: {
      sources: ["images/management.webp", "images/management.jpg"],
      alt: "Loaded Sound Management.",
      pendingAlt: "Logo not yet added.",
      pendingLabel: "",
    },
  },
  contact: "",
  socials: [
    { label: "Instagram", href: "" },
    { label: "TikTok", href: "" },
    { label: "YouTube", href: "" },
    { label: "X", href: "" },
  ],
  year: 2026,
};

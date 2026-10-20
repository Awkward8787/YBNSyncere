# SYNCERE the GodSon

Static site for YBNSyncere. Copy, image slots, and links live in [`src/content/site.ts`](src/content/site.ts).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build writes `dist/`. Host that folder on any static host. There is no backend.

`vite.config.ts` uses the default base `/`. For a subdirectory host, set `base` and rebuild. Image paths honor `import.meta.env.BASE_URL`.

## Photographs

Drop files at the paths below. WebP is preferred; JPG is the fallback. Do not commit stand-in photos of a person. Until a file exists, that slot stays empty or typeset.

- `public/images/hero.webp` or `public/images/hero.jpg` — studio portrait. It is the full-bleed background behind the title, forced to grayscale. `portrait.objectPosition` in `site.ts` keeps the face clear of the type, and a dark scrim holds the cream title at WCAG AA. Until the file exists, the hero is type only.
- `public/images/cover.webp` or `public/images/cover.jpg` — square cover for The Book of Syncere. Shown in color, so gold that is already in the file stays in the file. Until then, the slot is a typeset title on paper.
- `public/images/management.webp` or `public/images/management.jpg` — optional logo. Hidden until the file exists.

## Release and links

In `src/content/site.ts`:

- Replace the biography paragraphs. The current sentence is a placeholder marked TODO.
- Append real tracks to `release.tracks`. Until then the page says “Tracklist revealed on release.”
- Set `release.embedUrl` to a Spotify, Apple Music, or Audiomack embed URL. Any other value, including an empty string, shows “Listen here on release day.”
- Set `hero.cta.href` or `hero.presave.href` to an `https` URL to show one link on the hero, and only after the portrait file is present.
- Set `management.href`, `contact`, and social `href` values to real `https` URLs or an email. Empty values are omitted.

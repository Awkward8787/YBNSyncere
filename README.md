# Sincere the GodSon

Static site for YBNSyncere. Copy, image slots, streaming links, and the notify endpoint live in [`src/content/site.ts`](src/content/site.ts).

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

Drop files at the paths below. WebP is preferred; JPG is the fallback. The page renders them in black and white. Do not commit stand-in photos of a person — empty frames stay in place until the files exist.

- `public/images/hero.webp` or `public/images/hero.jpg` — studio portrait, portrait orientation
- `public/images/about.webp` or `public/images/about.jpg` — casual portrait
- `public/images/cover.webp` or `public/images/cover.jpg` — jacket art
- `public/images/brand-world.webp` or `public/images/brand-world.jpg` — optional; hidden until present

## Release, socials, notify

In `src/content/site.ts`:

- Append tracks to `release.tracks`.
- Set streaming `href` values to `https` URLs.
- Set `release.embedUrl` to a Spotify, Apple Music, or YouTube embed URL.
- Set social `href` values the same way. Empty links stay visible and inert.
- Leave `notify.endpoint` empty to keep the email form inert. When set, the form POSTs JSON `{ "email": "listener@example.com" }` and sends nothing until the request succeeds.

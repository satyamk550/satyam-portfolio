# Cinematic Developer Portfolio

A dark cinematic React + Vite portfolio built around a magenta/red editorial portrait.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Replace links

Edit `src/main.jsx` and replace the placeholder email/GitHub/LinkedIn links.

## Character animation

The hero uses `public/assets/character-animation.mp4` as a scroll-controlled timeline. The video is deliberately silent and is scrubbed with the page scroll.

If you later generate a better AI image-to-video clip, replace:

`public/assets/character-animation.mp4`

with the new clip while keeping the same filename.

Start/end reference images are also included:

- `portrait-start.png`
- `portrait-end.png`

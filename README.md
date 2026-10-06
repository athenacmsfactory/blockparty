# Blockparty

Herbruikbare statische design-template gebouwd met **Vite** + vanilla **HTML/CSS/JS**.

Geïnspireerd op de visuele taal van [digitalconstructionday.be](https://digitalconstructionday.be) — alle code hier is een eigen implementatie.

## Componenten

| Component | Beschrijving |
|---|---|
| **Split Hero** | 4-kwadrant fullscreen hero met merk-, partner- en CTA-panelen |
| **Marquee Strip** | Twee rijen oneindige beeldstrips, tegengestelde richting (pure CSS) |
| **Kaartstapel** | Gestapelde kaarten met drag-to-swipe + shuffle-knop (Pointer Events) |
| **Accordion** | FAQ-stijl met CSS grid-row transitie en exclusief-open modus |
| **Site Header** | Fixed header, hamburger voor mobiel, underline hover-animatie |
| **Site Footer** | 4-kolom grid met dot-patroon achtergrond |

## Quickstart

```bash
git clone https://github.com/KarelTestSpecial/blockparty.git
cd blockparty
pnpm install
pnpm dev        # → http://localhost:5173
```

## Design Tokens

Alle waarden leven in `src/styles/tokens.css`:

| Token | Voorbeeld |
|---|---|
| `--c-cyan` | `#22e0e0` |
| `--c-peri` | `#9999ff` |
| `--c-pale` | `#d9fbfb` |
| `--fs-display` | `clamp(3rem, 6vw + 1rem, 5.5rem)` |
| `--ease` | `cubic-bezier(0.22, 0.61, 0.36, 1)` |

## Font

Zelfgehost variabel woff2: **Bricolage Grotesque** (OFL). Gewicht 200–800, optical size 12–96.

## Build & Deploy

```bash
pnpm build      # → dist/
pnpm preview    # → http://localhost:4173
```

GitHub Pages deployment via `.github/workflows/deploy.yml` (automatisch bij push naar `main`).

## Licentie

MIT — zie [LICENSE](./LICENSE).

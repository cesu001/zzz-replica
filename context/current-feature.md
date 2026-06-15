# Current Feature

## Status

<!-- Not Started|In Progress|Completed -->

Not Started

## Goals

<!-- Bullet points of what success looks like -->

## Notes

<!-- Additional context, constraints, or details -->

## History

<!-- Keep this updated. Earliest to latest -->

- **Project Setup** — Installed shadcn/ui (Tailwind v4), lucide-react, and react-icons to bootstrap the ZZZ replica project.
- **Phase 01 — Header** — Fixed navbar with scroll-aware logo swap (large→small), desktop nav with hover/active effects and 更多/追蹤我們 dropdowns, mobile RWD layout with logo and download button only.
- **Phase 02 — Banner** — Full-width banner below header with left-margin alignment on desktop. Play button (desktop middle-left, mobile right-edge white tag) opens YouTube modal. Download badge with scale+rotate shake on hover. Platform icons grid with QR code (bottom-right, desktop). leftOver.png bottom-left. Header logo updated with fade+scale transition on scroll.
- **Phase 03 — Character Section** — Character section with 9 characters, embla carousel for head thumbnail selection, diagonal clip-path layout (white/yellow-green/black zones), faction background images, scroll-in slide-from-right entrance animation, character-switch slide transition with separate far/near distances for watermark+name vs other elements, vw-based scaling for consistent layout across all viewport sizes.
- **Phase 04 — News Carousel** — News section with shadcn Carousel showing 6 items from `lib/db/carousel.ts`. Dot-only navigation (no arrows), active dot highlighted in #c8ff00. Date + title below image (desktop only). 查看更多 button desktop inline / mobile fixed at bottom. Title text (新聞資訊/NEWS & INFO/03) slides in from right; carousel slides up from bottom — both reverse on scroll-out via IntersectionObserver.
- **Phase 05 — Footer** — Black footer with white tag-shaped go-to-top button (hangs from top border, centered mobile / left-offset desktop). Pre-registration form on desktop (xl) with phone + email inputs, terms checkbox, 立即預約 button. Promo text "搶先預約享好禮" on lg+. Mobile "事前預約" circular button opens a shadcn Dialog modal with the same form. Social icons row (9 platforms), legal links, copyright text.

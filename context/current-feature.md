# Current Feature: RWD Fix — Header & Banner Mid-Viewport Scaling

## Status

<!-- Not Started|In Progress|Completed -->

In Progress

## Goals

- Desktop layout (large screens, ~xl/1280px+) and mobile layout (~md/768px and below) remain exactly as-is
- At intermediate viewport widths (768px–1280px), the header and banner scale gracefully without overflow, collision, or jarring layout jumps
- Header: `px-65` desktop padding scales down at mid-widths so the nav items aren't crushed or clipped
- Header: nav items, logo, and right-side controls remain properly spaced at all widths between mobile and desktop
- Banner: `md:mx-60` left margin scales proportionally at mid-widths so the image isn't awkwardly offset
- Banner: absolute-positioned elements (play button, download badge, platform icons, leftOver image) stay within bounds at mid-widths
- No change to the desktop breakpoint visual and no change to the mobile breakpoint visual

## Notes

- Current breakpoint is `md` (768px) for switching between mobile and desktop layouts — this is the target to keep
- Header desktop padding is `md:px-65` (260px horizontal) — needs intermediate step(s)
- Banner desktop left margin is `md:mx-60` (240px) — needs intermediate step(s)
- Keep all existing behavior: scroll-aware logo swap, dropdowns, YouTube modal, download badge hover animation
- Only adjust spacing/layout classes; do not restructure the component hierarchy

## History

- **Project Setup** — Installed shadcn/ui (Tailwind v4), lucide-react, and react-icons to bootstrap the ZZZ replica project.
- **Phase 01 — Header** — Fixed navbar with scroll-aware logo swap (large→small), desktop nav with hover/active effects and 更多/追蹤我們 dropdowns, mobile RWD layout with logo and download button only.
- **Phase 02 — Banner** — Full-width banner below header with left-margin alignment on desktop. Play button (desktop middle-left, mobile right-edge white tag) opens YouTube modal. Download badge with scale+rotate shake on hover. Platform icons grid with QR code (bottom-right, desktop). leftOver.png bottom-left. Header logo updated with fade+scale transition on scroll.
- **Phase 03 — Character Section** — Character section with 9 characters, embla carousel for head thumbnail selection, diagonal clip-path layout (white/yellow-green/black zones), faction background images, scroll-in slide-from-right entrance animation, character-switch slide transition with separate far/near distances for watermark+name vs other elements, vw-based scaling for consistent layout across all viewport sizes.
- **Phase 04 — News Carousel** — News section with shadcn Carousel showing 6 items from `lib/db/carousel.ts`. Dot-only navigation (no arrows), active dot highlighted in #c8ff00. Date + title below image (desktop only). 查看更多 button desktop inline / mobile fixed at bottom. Title text (新聞資訊/NEWS & INFO/03) slides in from right; carousel slides up from bottom — both reverse on scroll-out via IntersectionObserver.
- **Phase 05 — Footer** — Black footer with white tag-shaped go-to-top button (hangs from top border, centered mobile / left-offset desktop). Pre-registration form on desktop (xl) with phone + email inputs, terms checkbox, 立即預約 button. Promo text "搶先預約享好禮" on lg+. Mobile "事前預約" circular button opens a shadcn Dialog modal with the same form. Social icons row (9 platforms), legal links, copyright text.

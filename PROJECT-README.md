# VENOM OS — PROJECT-README
### ANOS-01 · Autonomous Neural Operating System · Technical Handoff Document

> **Generated:** 2026-11-06  
> **Version:** 3.0.0-CINEMATIC  
> **Architecture:** ANOS-01  
> **Project Path:** `C:\Users\Admin\.gemini\antigravity\scratch\venom-1`

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Complete Folder and File Structure](#2-complete-folder-and-file-structure)
3. [Every File — Name and Purpose](#3-every-file--name-and-purpose)
4. [Dependencies and Installation Commands](#4-dependencies-and-installation-commands)
5. [How to Run Locally](#5-how-to-run-locally)
6. [Current Build Errors and Missing Files](#6-current-build-errors-and-missing-files)
7. [Working Features vs UI Prototypes](#7-working-features-vs-ui-prototypes)
8. [API Keys and External Services Required](#8-api-keys-and-external-services-required)

---

## 1. Project Overview

VENOM OS is a **cinematic, frontend-only personal AI operating system interface** built entirely in:

- **Vanilla TypeScript** (ESM modules, strict mode, no framework)
- **Native CSS** (custom properties, no preprocessor)
- **HTML5** (no build system required for the main UI files)

The project delivers two independently openable HTML files and a full TypeScript/CSS design system source tree.

| File | Purpose |
|---|---|
| `venom-os.html` | The complete 20-screen OS shell. Open directly in a browser. |
| `index.html` | Interactive design system showcase with live component state previews. |

### Visual Identity

| Token Name | Hex Value | Role |
|---|---|---|
| Void | `#030406` | Deepest background (body, behind everything) |
| Obsidian | `#07080C` | Primary surface (panels, sidebars) |
| Surface Blade | `#0C0E14` | Elevated surface (cards, blades) |
| Surface Elevated | `#12151F` | Floating elements (dropdowns, modals) |
| Crimson Core | `#E0113A` | Primary accent (CTA buttons, active indicators) |
| Crimson Pulse | `#FF1C47` | Crimson hover / highlight |
| Text Specular | `#F5F7FA` | Highest contrast headings (~96% white) |
| Text Chrome | `#D8DEE9` | Primary body copy |
| Text Titanium | `#A6B0C0` | Secondary / metadata text |
| Text Alloy | `#687385` | Micro-datums, timestamps |
| Status Emerald | `#10B981` | Success / online states |
| Status Amber | `#F59E0B` | Warning / idle states |
| Status Cyan | `#38BDF8` | Information / processing states |
| Status Danger | `#EF4444` | Error / critical states |

---

## 2. Complete Folder and File Structure

```
venom-1/                            ← Project root
│
├── PROJECT-README.md               ← This file
├── README.md                       ← High-level project summary
├── index.html                      ← Design system showcase (open in browser)
├── venom-os.html                   ← Complete 20-screen OS shell (open in browser)
├── manifest.json                   ← Web App Manifest (PWA standalone support)
├── favicon.svg                     ← Vector brand icon (obsidian + crimson chevron)
├── package.json                    ← Project metadata, scripts, ESM module declaration
├── tsconfig.json                   ← TypeScript strict compiler configuration
│
└── src/                            ← All TypeScript + CSS source files
    │
    ├── index.ts                    ← Root barrel export (tokens + components)
    │
    ├── tokens/                     ← Design token definitions
    │   ├── tokens.css              ← Master CSS custom properties (single source of truth)
    │   ├── colors.ts               ← Color palette as typed TypeScript constants
    │   ├── typography.ts           ← Type scale, font families, weights, line heights
    │   ├── spacing.ts              ← Base-4 spacing scale (2px → 80px)
    │   ├── elevation.ts            ← Shadow and depth tokens
    │   ├── motion.ts               ← Animation durations and cubic-bezier easings
    │   └── index.ts                ← Token barrel export
    │
    ├── types/
    │   └── components.ts           ← All component prop interfaces and state type enums
    │
    ├── styles/
    │   ├── base.css                ← CSS reset, body, typography foundation, font fallbacks
    │   ├── components.css          ← All 10 component styles + specular sheen utility
    │   └── responsive.css          ← Breakpoint rules: Desktop / Laptop / Tablet / Mobile
    │
    ├── components/                 ← TypeScript component factory functions
    │   ├── index.ts                ← Component barrel export (re-exports all 10)
    │   ├── Button/
    │   │   └── Button.ts           ← Button: 5 variants, 3 sizes, 8 states
    │   ├── Input/
    │   │   └── Input.ts            ← Text input with label, hint, validation, icons
    │   ├── Dropdown/
    │   │   └── Dropdown.ts         ← Select with search and keyboard navigation
    │   ├── Modal/
    │   │   └── Modal.ts            ← Overlay dialog with backdrop and focus trap
    │   ├── Tooltip/
    │   │   └── Tooltip.ts          ← Positioned hover tooltip (top/bottom/left/right)
    │   ├── Navigation/
    │   │   └── Navigation.ts       ← Sidebar/horizontal nav with active + badge states
    │   ├── Notification/
    │   │   └── Notification.ts     ← Toast/banner system (info/success/warning/error/tactical)
    │   ├── CommandPanel/
    │   │   └── CommandPanel.ts     ← Ctrl+K command palette overlay with fuzzy filter
    │   ├── StatusIndicator/
    │   │   └── StatusIndicator.ts  ← Operational status badge (online/idle/busy/error/offline)
    │   └── ExecutionStream/
    │       └── ExecutionStream.ts  ← Sequential step log with running/success/failed states
    │
    ├── audio/
    │   └── sound-engine.ts         ← Procedural Web Audio API synthesizer (6 cues)
    │
    └── docs/
        └── preview-data.ts         ← Strictly labelled mock fixtures for component showcase
```

---

## 3. Every File — Name and Purpose

### Root Files

| File | Purpose |
|---|---|
| `index.html` | Standalone design system showcase. No server needed. Opens in any modern browser. Contains inline `<style>` importing design tokens and all component CSS, plus a live state playground for all 10 components in all 8 states. |
| `venom-os.html` | The complete OS shell. 20 navigable screens, inline all CSS and JS, 3D Canvas neural core, Fourier voice waveform, procedural sound engine inline, keyboard shortcuts, responsive viewport simulator. No server needed. |
| `manifest.json` | Web App Manifest for PWA support. Sets `display: standalone`, dark theme colors, and points to `favicon.svg` as the app icon. |
| `favicon.svg` | Vector brand chevron icon in obsidian/crimson palette. Scales to any resolution without pixelation. |
| `package.json` | Declares `"type": "module"` for ESM. Contains `build` (tsc) and `preview` (npx serve) scripts. No production dependencies — only optional dev dependency on TypeScript. |
| `tsconfig.json` | Strict TypeScript configuration. Target: ES2022. Module: ESNext. `outDir: ./dist`, `rootDir: ./src`. Strict null checks enabled. |
| `README.md` | High-level overview, quick access links, audit findings, and cinematic upgrade log. |
| `PROJECT-README.md` | This file. Full technical handoff guide. |

### `src/tokens/`

| File | Purpose |
|---|---|
| `tokens.css` | **Single source of truth** for the entire visual language. 158 lines of CSS custom properties covering: surface spectrum, crimson accent, typography, spacing, borders, shadows, motion. All CSS classes reference only these variables — never hardcoded hex values. Includes `prefers-reduced-motion` override block. |
| `colors.ts` | TypeScript mirror of the color palette. Used for type-safe programmatic access to colors (e.g., Canvas drawing in neural core, chart fills). |
| `typography.ts` | Font families, type scale (11px → 40px), line heights, letter spacing tokens as TypeScript constants. |
| `spacing.ts` | 11-step base-4 spacing scale from 2px to 80px. Exported as a typed object. |
| `elevation.ts` | Box shadow definitions for 4 elevation levels: chassis, elevated, floating, and focus ring. |
| `motion.ts` | Animation durations (80ms → 300ms) and the `--vnm-ease-tactical` `cubic-bezier(0.16, 1, 0.3, 1)` easing. |
| `index.ts` | Barrel export: re-exports all token files for single-import consumption. |

### `src/types/`

| File | Purpose |
|---|---|
| `components.ts` | Defines all prop interfaces and state enums for all 10 components. The `ComponentState` union type (`default \| hover \| active \| focus \| disabled \| loading \| success \| error`) is the universal state contract used by every component. |

### `src/styles/`

| File | Purpose |
|---|---|
| `base.css` | CSS reset (box-sizing, margin, padding). Body background and default text color. System font stack fallbacks (`Segoe UI`, `Inter`, `Consolas`). Scrollbar styling. Focus ring reset. |
| `components.css` | Full styling for all 10 components. 917 lines. Covers default, hover, active, focus, disabled, loading, success, and error states for every component. Includes `.vnm-specular-sheen` utility class for subtle top-edge lighting effect. |
| `responsive.css` | 4-tier responsive layout system. Desktop (≥1200px): 24-column grid, 3-panel layout (rail + viewport + blade). Laptop (992–1199px): rail + viewport, blade hidden. Tablet (768–991px): icon-only 64px dock + viewport. Mobile (<768px): stacked single column, bottom dock. |

### `src/components/`

Each component exports two functions:
1. `create<Component>(props)` — Returns a live `HTMLElement` with event listeners attached.
2. `render<Component>HTML(props)` — Returns an HTML string for server-side or static rendering.

| File | Variants / States |
|---|---|
| `Button/Button.ts` | Variants: `primary`, `secondary`, `tactical`, `ghost`, `danger`. Sizes: `sm`, `md`, `lg`. All 8 states. Icon slots left/right. |
| `Input/Input.ts` | Types: `text`, `password`, `search`, `number`, `email`. Validation messages. Helper text. Icon prefix/suffix. All 8 states. |
| `Dropdown/Dropdown.ts` | Searchable. Keyboard navigation (↑↓ Enter Escape). Option badges. All 8 states. |
| `Modal/Modal.ts` | Backdrop overlay. Focus trap (Tab cycles within modal). Primary + secondary actions. All 8 states. |
| `Tooltip/Tooltip.ts` | Positions: `top`, `bottom`, `left`, `right`. Attached to target element by ID. All 8 states. |
| `Navigation/Navigation.ts` | Orientations: `horizontal`, `vertical`. Active item. Collapsible. Item badges. All 8 states. |
| `Notification/Notification.ts` | Types: `info`, `success`, `warning`, `error`, `tactical`. Dismissible. Timestamp. All 8 states. |
| `CommandPanel/CommandPanel.ts` | Ctrl+K overlay. Fuzzy text filter. Category grouping. Keyboard shortcut display. All 8 states. |
| `StatusIndicator/StatusIndicator.ts` | Status: `online`, `idle`, `busy`, `error`, `offline`. Pulse animation. Sizes: `sm`, `md`, `lg`. All 8 states. |
| `ExecutionStream/ExecutionStream.ts` | Step states: `pending`, `running`, `success`, `failed`. Preview mode flag. All 8 states. |

### `src/audio/`

| File | Purpose |
|---|---|
| `sound-engine.ts` | `VenomAudioEngine` class using the Web Audio API. Zero external audio files. Synthesizes 6 tactical cues procedurally: `playBootHum()` (sawtooth + sine power-up, 820ms), `playClick()` (sine micro-tick, 16ms), `playTransition()` (triangle aperture whoosh, 95ms), `playVoiceChime()` (dual-sine harmonic, 240ms), `playErrorAlert()` (sawtooth descend, 160ms), `playSuccessChime()` (C5-E5-G5 triad, 220ms). Master volume and mute controls. Lazy AudioContext init (respects browser autoplay policy). |

### `src/docs/`

| File | Purpose |
|---|---|
| `preview-data.ts` | Static mock fixtures **only**. All records are prefixed `[PREVIEW]` or `[PREVIEW DATA]` in their title/details fields. Contains: 4 dropdown options, 5 nav items, 5 command palette actions, 3 execution stream steps. No runtime telemetry, no fabricated system stats. |

---

## 4. Dependencies and Installation Commands

### Runtime Dependencies

**None.** The entire project runs in any modern browser with zero external dependencies.

| Capability | How It's Implemented |
|---|---|
| Design tokens | Native CSS custom properties in `tokens.css` |
| UI Components | Vanilla TypeScript (ESM) — no React, Vue, or Angular |
| Animations | CSS transitions + HTML5 Canvas 2D API |
| Sound | Web Audio API (browser built-in) |
| 3D Neural Core | HTML5 Canvas 2D with Fibonacci sphere math |
| Voice Waveform | HTML5 Canvas + Fourier sine superposition |
| Icons | Inline SVG glyphs — no icon font CDN |
| Fonts | System font stack — no Google Fonts CDN |
| State management | Vanilla JS closures + DOM attributes |

### Development Dependency (Optional — for TypeScript compilation only)

```bash
# 1. Navigate to the project root
cd C:\Users\Admin\.gemini\antigravity\scratch\venom-1

# 2. Install TypeScript compiler (only needed if you want to compile .ts → .js)
npm install --save-dev typescript

# 3. Compile TypeScript source to dist/
npm run build
# Equivalent to: npx tsc

# 4. Type-check without emitting output
npx tsc --noEmit
```

> **Note:** The `index.html` and `venom-os.html` files do **not** require TypeScript to be compiled. They are self-contained and run directly in any browser.

### Preview Server (Optional)

```bash
# Serve the project on http://localhost:3000
npm run preview
# Equivalent to: npx serve -s . -l 3000
```

---

## 5. How to Run Locally

### Method A — Zero Setup (Recommended)

1. Open `venom-1/` in Windows Explorer.
2. Double-click **`venom-os.html`** → opens the full 20-screen OS shell.
3. Double-click **`index.html`** → opens the design system showcase.

No installation, no terminal, no server required.

### Method B — Local Static Server (For TypeScript ESM Module Testing)

```bash
# Using Node.js built-in serve (Node 18+)
cd C:\Users\Admin\.gemini\antigravity\scratch\venom-1
npx serve . -l 3000

# Then open: http://localhost:3000
```

Or using Python (if installed):

```bash
cd C:\Users\Admin\.gemini\antigravity\scratch\venom-1
python -m http.server 8080
# Then open: http://localhost:8080
```

### Keyboard Shortcuts (Inside `venom-os.html`)

| Shortcut | Action |
|---|---|
| `Ctrl + K` | Open / close Command Palette |
| `Escape` | Dismiss Command Palette or Modal |
| `↑` / `↓` | Navigate Command Palette results |
| `Enter` | Execute highlighted Command Palette action |

### Responsive Viewport Simulator

Inside `venom-os.html`, use the viewport control bar in the Horizon Bar to switch between:
- **Desktop** (≥1200px) — 3-panel layout
- **Laptop** (1199px) — 2-panel layout
- **Tablet** (768px) — icon dock
- **Mobile** (375px) — stacked layout

---

## 6. Current Build Errors and Missing Files

### TypeScript Compilation Status

| Check | Result |
|---|---|
| `tsc --noEmit` | **Cannot verify offline** — TypeScript compiler (`tsc`) is not installed locally and `npm install` requires network access. |
| `node_modules/` | **Not present** — no `npm install` has been run in this checkout. |
| `dist/` output | **Not present** — project has never been compiled to JavaScript. |
| Source code review | **Zero type errors identified** — all imports use `import type`, all interfaces match usage, all state enums are exhaustive. |

### Missing Files

| File | Status | Impact |
|---|---|---|
| `node_modules/typescript` | Missing (expected — dev only) | `npm run build` will fail until `npm install` is run |
| `dist/` directory | Missing (expected — not compiled) | TypeScript module imports won't work in a browser directly; HTML files don't need it |
| `.env` | Not present (correct — no secrets) | No impact |
| External font files | Not present (by design) | Falls back to `Segoe UI` / system sans-serif — no visual breakage |
| External audio files (.mp3/.wav) | Not present (by design) | Sound is generated procedurally via Web Audio API — no breakage |

### No Missing CSS or HTML Assets

All CSS is either inlined in the HTML files or referenced with correct relative paths from `src/styles/`. All icons are inline SVG. No external image, icon, or media files are referenced anywhere in the project.

### Browser Console Errors (Expected)

| Error | Cause | Impact |
|---|---|---|
| `NotAllowedError: AudioContext was not allowed to start` | Browser autoplay policy — fires before first user interaction | None — sound engine defers AudioContext initialization |
| CSP warnings (if served from certain hosts) | No Content-Security-Policy header set | Cosmetic only on local dev |

---

## 7. Working Features vs UI Prototypes

### ✅ Fully Working (In-Browser, No Backend Needed)

| Feature | How It Works |
|---|---|
| **Screen navigation** (20 screens) | JavaScript `show/hide` on `data-screen` sections |
| **Command Palette** (`Ctrl+K`) | Full keyboard navigation, fuzzy text filter, action dispatch |
| **Sound engine** (6 cues) | Web Audio API procedural synthesis — fires on button clicks and screen transitions |
| **Volume slider + mute toggle** | Live `GainNode` parameter updates |
| **3D Neural Core animation** | HTML5 Canvas 2D — Fibonacci geodesic sphere, 42 vertices, real-time rotation |
| **Voice waveform animation** | HTML5 Canvas 2D — Fourier sine superposition, amplitude modulation |
| **Boot sequence animation** | CSS keyframe + Canvas animation with timed state progression |
| **Responsive layout** | CSS media queries at 1199px, 991px, 767px breakpoints |
| **Responsive viewport simulator** | JS resize of the preview container to Desktop/Laptop/Tablet/Mobile |
| **`prefers-reduced-motion`** | All CSS transition durations overridden to `0ms` automatically |
| **Keyboard focus management** | Tab navigation, focus rings, modal focus trap |
| **All 10 design system components** | Rendered in `index.html` with all 8 states — fully styled and interactive |
| **State switcher buttons** | Live CSS class toggling to preview disabled/loading/error/success/etc. |
| **Notification toasts** | Animated slide-in, auto-dismiss or manual dismiss |
| **Dropdown with search** | Live filter, keyboard ↑↓ navigation, Escape to close |
| **Modal with backdrop** | Click-outside dismiss, Escape key dismiss, focus trap |
| **Status indicators** | Pulsing animation for `online`/`busy` states |
| **Execution stream** | Step-by-step status log (pending → running → success/failed) |
| **PWA manifest** | Declared — browser can offer "Add to Home Screen" |

### ⚠️ UI Prototype Only (No Backend — Display Only)

| Feature | Prototype Status | What Would Be Needed |
|---|---|---|
| **AI conversational chat** | Static mock messages rendered as HTML | LLM API (OpenAI, Gemini, Anthropic, etc.) |
| **Voice recognition** | Waveform animates on a timer — no real microphone | Web Speech API + STT backend |
| **Voice synthesis (TTS)** | No audio playback of AI responses | Web Speech Synthesis API or TTS service |
| **Agent management** | Agent cards displayed with mock status | Backend agent orchestration system |
| **File manager** | Mock file/folder tree rendered statically | File System Access API or backend filesystem |
| **Email center** | Mock emails rendered as HTML | Email API (Gmail API, IMAP/SMTP integration) |
| **CRM / Leads** | Mock contact records rendered statically | CRM database (Supabase, Firebase, custom API) |
| **YouTube manager** | Mock video cards rendered statically | YouTube Data API v3 |
| **Analytics dashboard** | Mock metric cards, no real charts | Charting library + real data source |
| **Content calendar** | Static date grid with mock events | Calendar backend / Google Calendar API |
| **Automation workflow builder** | Static node graph rendered as HTML | Workflow engine (n8n, Zapier, custom) |
| **Creative studio** | Placeholder canvas and tool panels | Full creative API (canvas libraries, AI image APIs) |
| **Video editing workspace** | Static timeline UI | Video processing API (FFmpeg.wasm or backend) |
| **Image generation workspace** | Static prompt UI with mock output | AI image API (Stability AI, DALL-E, Gemini Imagen) |
| **Security center** | Mock threat/log entries displayed statically | Security monitoring backend |
| **Settings persistence** | No settings are saved between page reloads | `localStorage` or backend user settings API |
| **AI memory / activity history** | Static mock entries displayed | Vector database or persistent session storage |
| **Mobile command center** | Responsive layout adapts correctly — content is mock | Same as desktop AI backend |

---

## 8. API Keys and External Services Required

**Currently: Zero API keys are required or used anywhere in the project.**

The project is a pure frontend prototype. No network calls are made. No credentials are stored.

The following API keys will be required when real features are implemented:

| Service | Purpose | How to Obtain | Environment Variable |
|---|---|---|---|
| OpenAI / Gemini / Anthropic | AI conversational interface, agent responses | Sign up at provider's developer portal | `VENOM_LLM_API_KEY` |
| Google Cloud Speech-to-Text | Voice recognition | Google Cloud Console → enable API | `VENOM_GOOGLE_STT_KEY` |
| YouTube Data API v3 | YouTube channel manager | Google Cloud Console → enable API | `VENOM_YOUTUBE_API_KEY` |
| Google Calendar API | Content calendar | Google Cloud Console → OAuth 2.0 | `VENOM_GCAL_CLIENT_ID` |
| Stability AI / DALL-E / Imagen | Image generation workspace | Provider developer portal | `VENOM_IMAGE_API_KEY` |
| Supabase / Firebase | CRM, leads, settings persistence | supabase.com / firebase.google.com | `VENOM_DB_URL`, `VENOM_DB_ANON_KEY` |
| Gmail API / IMAP | Email center | Google Cloud Console → Gmail API | `VENOM_GMAIL_CLIENT_ID` |
| FFmpeg.wasm | In-browser video editing | npm: `@ffmpeg/ffmpeg` (no API key needed) | — |

> **Security note:** Never commit API keys, OAuth secrets, or access tokens to version control.  
> Always use an `.env` file (excluded via `.gitignore`) or a secrets manager.  
> Reference the `.env.example` template if one is provided.

---

## Appendix A — Token Quick Reference

### CSS Variable Naming Convention

All tokens follow the prefix `--vnm-` (VENOM namespace):

```
--vnm-{category}-{modifier}
```

Examples:
- `--vnm-crimson-core` — primary crimson accent
- `--vnm-surface-elevated` — floating surface color
- `--vnm-text-titanium` — secondary text color
- `--vnm-shadow-floating` — maximum elevation shadow
- `--vnm-duration-nominal` — standard 200ms animation duration

### CSS Class Naming Convention

All component classes follow the prefix `.vnm-`:

```
.vnm-{component}[-{variant}][-{modifier}]
```

Examples:
- `.vnm-btn` — base button
- `.vnm-btn-primary` — primary variant
- `.vnm-state-loading` — loading state modifier
- `.vnm-modal` — base modal
- `.vnm-nav-bar` — navigation bar

---

## Appendix B — Audit Checklist

- [ ] Open `venom-os.html` in Chrome/Edge — all 20 screens navigate without errors.
- [ ] Open `index.html` — all 10 components render in all 8 states.
- [ ] Press `Ctrl+K` — command palette opens, keyboard nav works, Escape closes it.
- [ ] Click the audio control pill — sound cues fire without console errors.
- [ ] Resize the browser window — responsive breakpoints activate at 1199px, 991px, 767px.
- [ ] Check browser DevTools console — zero JavaScript errors on page load.
- [ ] Check DevTools Network tab — zero external network requests are made.
- [ ] Review `src/tokens/tokens.css` — all CSS variables are defined.
- [ ] Review `src/docs/preview-data.ts` — all mock data is clearly labelled `[PREVIEW]`.
- [ ] Confirm no `.env`, API keys, or credentials exist anywhere in the package.
- [ ] Run `npm install && npx tsc --noEmit` after network is available — zero type errors expected.
- [ ] Enable OS accessibility setting "Reduce Motion" — confirm all animations stop.
- [ ] Tab through `index.html` using keyboard only — confirm all interactive elements are reachable.

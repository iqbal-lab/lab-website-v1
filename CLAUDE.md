# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server
npm run build     # Production build (Cloudflare Pages)
npm run preview   # Preview production build locally
npm run lint      # Check formatting (Prettier) and code quality (ESLint)
npm run format    # Auto-format all files
```

## Architecture

This is a **SvelteKit** static site for the Iqbal Lab (algorithmic/microbial genomics research). It deploys to Cloudflare Pages via `@sveltejs/adapter-cloudflare`.

**Key files:**
- `src/lib/config.js` — central config: lab name, navbar links, social media. Start here for content changes.
- `src/routes/+layout.svelte` — root layout with navbar and footer
- `svelte.config.js` — configures mdsvex (Markdown) and Cloudflare adapter

**Path alias:** `$components` → `src/components/`

### Routing

SvelteKit file-based routing under `src/routes/`:
- `+page.svelte` — regular page
- `+page.md` — Markdown page (auto-rendered via mdsvex with `BlogPost.svelte` layout)

### Markdown blog posts

Create `.md` files anywhere under `src/routes/` with front matter:
```markdown
---
title: My Post
date: 2024-01-15
---
Content here with full syntax highlighting support.
```

The `BlogPost.svelte` component is automatically applied as the layout for all `.md` files.

### Styling

Uses [Sveltestrap](https://sveltestrap.js.org/) (Bootstrap 5 wrappers for Svelte). Prettier config uses tabs, double quotes, 120-char line width.

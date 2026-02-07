# Job Portfolio (Astro + Tailwind + Cloudflare Pages)

3-page static portfolio site for job search, based on design comps.

## Stack

- TypeScript
- Astro
- Tailwind CSS
- Cloudflare Pages

## URL
- https://job-portfolio-593.pages.dev/

## Pages

- `/` : portfolio summary landing page
- `/experience` : professional experience details
- `/skills` : skills and professional mindset

## Source files (`src/`)

- `src/components/BrandIdentity.astro` : ブランド表示（アイコン、名前、肩書き）を描画する共通UI。
- `src/components/FooterSection.astro` : フッターの外枠レイアウトを共通化するコンポーネント。
- `src/components/NavLinks.astro` : ナビゲーションリンク群を配列から描画する共通コンポーネント。
- `src/components/SocialLinks.astro` : SNS/外部リンク群を配列から描画する共通コンポーネント。
- `src/components/StickyHeader.astro` : 固定ヘッダーの外枠レイアウトを共通化するコンポーネント。
- `src/layouts/BaseLayout.astro` : 全ページ共通のHTML骨格（`<head>`、フォント、`<body>`）を提供するレイアウト。
- `src/pages/index.astro` : トップページ（概要、強み、経歴サマリー、実績）を表示するルート。
- `src/pages/experience.astro` : 職務経歴の詳細ページ（タイムライン形式）。
- `src/pages/skills.astro` : スキル・マインドセットの詳細ページ。
- `src/styles/global.css` : Tailwind読み込みと全体共通スタイル（スクロールバー、タイムライン補助など）。

## Local development

Node.js 20 LTS is required.

```bash
nvm use
npm install
npm run dev
```

## Build

```bash
nvm use
npm run build
```

## Cloudflare Pages setup

1. Push this directory to a GitHub repository.
2. In Cloudflare Dashboard, create a new Pages project from that GitHub repository.
3. Build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy.

## Search indexing control

This project is configured to discourage indexing:

- `public/robots.txt` -> `Disallow: /`
- `<meta name="robots" content="noindex,nofollow">` in layout
- `public/_headers` -> `X-Robots-Tag: noindex, nofollow, noarchive`

Note: noindex is a strong request to crawlers, but not an authentication mechanism.

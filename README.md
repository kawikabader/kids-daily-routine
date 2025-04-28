# Kids Daily Routine App

A [Next.js](https://nextjs.org) app to help toddlers follow a daily routine using images and sound cues.

https://kawikabader.github.io/kids-daily-routine/

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

⸻

# 🛠 Build & Deploy (GitHub Pages)

This app uses static export and is deployable on GitHub Pages.

1. Configure next.config.js

Make sure it includes the proper basePath and assetPrefix:

```javascript
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/kids-daily-routine' : '',
    assetPrefix: isProd ? '/kids-daily-routine' : '',
    images: {

        unoptimized: true

    }
};

export default nextConfig;
```

2. Add deploy scripts to package.json

```json
"scripts": {
  "dev": "next dev", 
  "build": "next build", 
  "deploy": "gh-pages -d out"
}
```

Install gh-pages:

```bash
pnpm add -D gh-pages
```

3. Deploy to GitHub Pages

```bash
pnpm build
pnpm deploy
```

Enable GitHub Pages in your repo:
* Go to Settings > Pages
* Set the source to the gh-pages branch, root directory

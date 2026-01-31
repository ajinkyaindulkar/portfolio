# Ajinkya Indulkar - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features light/dark mode, smooth animations, and optimized for GitHub Pages deployment.

## Live Demo

[View Portfolio](https://ajinkya-indulkar.github.io/ajinkya-portfolio)

## Features

- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Mode**: Automatic system preference detection with manual toggle
- **Smooth Animations**: Scroll-triggered animations using Framer Motion
- **SEO Optimized**: Meta tags, OpenGraph, sitemap, and robots.txt
- **Fast Performance**: Static export optimized for GitHub Pages
- **Easy to Customize**: All content in a single `resume.ts` file

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

```
ajinkya-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/            # React components
│   ├── ui/               # UI components
│   ├── navigation.tsx    # Header navigation
│   ├── theme-provider.tsx # Dark mode provider
│   └── theme-toggle.tsx   # Theme toggle button
├── data/                  # Data files
│   └── resume.ts         # All portfolio content
├── lib/                   # Utilities
│   └── utils.ts          # Helper functions
├── sections/              # Page sections
│   ├── hero.tsx
│   ├── about.tsx
│   ├── experience.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── education.tsx
│   ├── contact.tsx
│   └── footer.tsx
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions
│   └── deploy.yml        # Deployment workflow
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ajinkya-indulkar/ajinkya-portfolio.git
cd ajinkya-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All portfolio content is stored in `data/resume.ts`. Simply edit this file to update:

- Personal information
- Work experience
- Projects
- Skills
- Education
- Certifications
- Contact details

### Placeholders to Update

Search for these placeholders in the codebase and replace with your actual information:

- Update GitHub URL in `data/resume.ts`
- Add project repository URLs
- Update certification dates and verification URLs
- Add custom OpenGraph image (optional)

## Deployment

### GitHub Pages (Automated)

1. Push your code to GitHub
2. Go to **Settings > Pages** in your repository
3. Set **Source** to "GitHub Actions"
4. The workflow will automatically deploy on every push to `main`

### Manual Deployment

1. Update `next.config.js` with your repository name:
```javascript
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name/',
```

2. Build the project:
```bash
npm run build
```

3. The static files will be in the `dist` folder.

## License

This project is open source and available under the MIT License.

---

Built with ❤️ by Ajinkya Indulkar

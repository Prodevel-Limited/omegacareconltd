# Omega Care Con Ltd Website

Professional website for Omega Care Con Ltd (OCCL), a leading provider of residential care home and hospital staffing services in the UK.

## 🚀 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro          # Site navigation
│   │   ├── Footer.astro          # Footer with company info
│   │   ├── Hero.astro            # Hero section component
│   │   ├── ServiceCard.astro     # Reusable service card
│   │   ├── ContactForm.astro     # Contact form with validation
│   │   └── Button.astro          # Branded button component
│   ├── layouts/
│   │   └── Layout.astro          # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # About OCCL
│   │   ├── services.astro        # Services overview
│   │   └── contact.astro         # Contact page
│   └── styles/
│       └── global.css            # Global styles and Tailwind
└── package.json
```

## 🎨 Design System

### Brand Colors
- **Primary Burgundy**: `#B71C42` - Main brand color for CTAs and accents
- **Dark Gray**: `#1F2937` - Body text and headings
- **Light Gray**: `#F3F4F6` - Backgrounds and cards

### Typography
- **Font Family**: Gilroy (with system font fallbacks)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)

### UX Principles (Don Norman's 7 Principles)
1. **Visibility** - Clear navigation and CTAs throughout
2. **Feedback** - Visual responses on all interactions
3. **Constraints** - Form validation and guided user flows
4. **Mapping** - Intuitive icon and layout relationships
5. **Consistency** - Unified design patterns across pages
6. **Affordance** - Clear interactive element indicators
7. **Error Prevention** - Inline validation and clear labels

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`            | Installs dependencies                            |
| `yarn dev`                | Starts local dev server at `localhost:4321`      |
| `yarn build`              | Build your production site to `./dist/`          |
| `yarn preview`            | Preview your build locally, before deploying     |
| `yarn astro ...`          | Run CLI commands like `astro add`, `astro check` |

## 📦 Technologies

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: Ready for Vercel, Netlify, or any static host

## 🌐 Pages

- **Homepage** (`/`) - Hero, services overview, about preview, CTA
- **About** (`/about`) - Company mission, values, team info
- **Services** (`/services`) - Detailed service offerings and process
- **Contact** (`/contact`) - Contact form and information

## 🎯 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags
- ✅ Accessible (WCAG AA compliance)
- ✅ Fast page loads with Astro
- ✅ Form validation
- ✅ Smooth animations and transitions
- ✅ Professional brand consistency

## 📝 Notes

- Gilroy font files should be placed in `public/fonts/` directory
- Contact form currently has client-side validation only (backend integration needed for production)
- All images should be optimized before adding to `public/` directory

## 🔧 Customization

To update brand colors, modify:
- `tailwind.config.cjs` - Tailwind color definitions
- `src/styles/global.css` - CSS custom properties

## 📄 License

© 2025 Omega Care Con Ltd. All rights reserved.

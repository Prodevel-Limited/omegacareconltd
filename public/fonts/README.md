# Gilroy Font Files

## Current Fonts

✅ **Installed:**
- `Gilroy-Light.otf` (300 weight)
- `Gilroy-ExtraBold.otf` (800 weight)

## Recommended Additional Weights

For the best typography experience across the website, consider adding:

- `Gilroy-Regular.otf` (400 weight) - for body text
- `Gilroy-Medium.otf` (500 weight) - for emphasis
- `Gilroy-SemiBold.otf` (600 weight) - for subheadings
- `Gilroy-Bold.otf` (700 weight) - for headings

## Current Setup

The website is configured to use:
- **Gilroy Light** (300) for light text
- **Gilroy ExtraBold** (800) for heavy emphasis
- **Montserrat** (Google Fonts) as fallback for other weights
- **System fonts** as final fallback

## File Formats

- ✅ `.otf` (OpenType) - Currently in use, works well
- 📦 `.woff2` - Recommended for production (smaller file size, better compression)
- 📦 `.woff` - Fallback for older browsers

## Converting Fonts to Web Formats

To optimize loading speed, you can convert your `.otf` files to `.woff2` and `.woff` using:

**Online Tools:**
- [Transfonter](https://transfonter.org/) - Best for batch conversion
- [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator) - Advanced options

**Settings:**
- Enable `.woff2` and `.woff` formats
- Keep hinting
- Enable `font-display: swap`

After conversion, update `/src/layouts/Layout.astro` to reference the new file formats.

## Note

The website will work perfectly with the current fonts! Montserrat (Google Fonts) provides excellent fallback coverage for any missing weights.

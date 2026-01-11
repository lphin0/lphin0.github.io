# Favicon Setup

Your website is configured to support multiple favicon formats for optimal browser and device compatibility.

## Required Files

Place the following files in the `static/` directory:

1. **favicon.webp** - WebP format favicon (already exists)
2. **favicon.ico** - ICO format for older browsers
3. **favicon-16x16.png** - 16x16 PNG for small icons
4. **favicon-32x32.png** - 32x32 PNG for standard icons
5. **apple-touch-icon.png** - 180x180 PNG for iOS devices
6. **favicon-192x192.png** - 192x192 PNG for Android/PWA
7. **favicon-512x512.png** - 512x512 PNG for high-res PWA icons

## Generating Favicons

You can generate all required favicon sizes from a single source image using online tools:

- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Favicon Generator](https://www.favicon-generator.org/)

Upload your source image (preferably square, 512x512 or larger) and download the generated files, then place them in the `static/` directory.

## Configuration

The theme color for PWA can be customized in `config.toml`:

```toml
[params]
  themeColor = "ffffff"  # Hex color code without #
```

## PWA Support

The `manifest.json` file is included for Progressive Web App (PWA) support, allowing your site to be installed as an app on supported devices.
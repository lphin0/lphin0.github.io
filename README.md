# LPhin Portfolio - Hugo Site

A retro pixel-art themed portfolio website built with Hugo static site generator.

## Features

- **Retro pixel-art theme** with 'Press Start 2P' font
- **Responsive design** for mobile, tablet, and desktop
- **Blog section** with pagination (3 posts per page)
- **Projects section** with grid layout
- **Social media meta tags** (Open Graph, Twitter Card)
- **Mobile navigation menu** with smooth scrolling
- **Easy content management** using markdown files

## Prerequisites

- [Hugo](https://gohugo.io/installation/) (version 0.112.0 or higher)
- Git

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/lphin0.github.io.git
cd lphin0.github.io
```

2. Install Hugo (if not already installed):
```bash
# On macOS with Homebrew
brew install hugo

# On Linux
sudo apt-get install hugo

# On Windows (using Chocolatey)
choco install hugo-extended
```

## Development

1. Start the Hugo development server:
```bash
hugo server
```

2. Open your browser and navigate to:
```
http://localhost:1313
```

The site will automatically rebuild when you make changes to content or templates.

## Creating Content

### New Blog Post

Create a new blog post using the archetype:
```bash
hugo new blog/my-new-post.md
```

This will create a file at `content/blog/my-new-post.md` with the following front matter:

```toml
---
title: "My New Post"
date: 2024-01-01
summary: "A brief summary of this blog post for social media previews"
type: "blog"
---
```

Edit the content in markdown format. To add images:

1. Place your image in `static/pictures/`
2. Name it using the format: `YYYY-MM-DD-number.avif`
3. Reference it in your post:
```markdown
![Alt text](/pictures/2024-01-01-1.avif)
```

### New Project

Create a new project using the archetype:
```bash
hugo new projects/my-new-project.md
```

This will create a file at `content/projects/my-new-project.md` with the following front matter:

```toml
---
title: "My New Project"
description: "A brief description of this project"
type: "projects"
---
```

Edit the content in markdown format.

### Updating About Section

Edit the about section content in `content/_index.md`.

### Updating Site Configuration

Edit `config.toml` to change:
- Site title and description
- Social links (email, GitHub, LinkedIn, Twitter)
- Pagination settings
- Base URL for deployment

## Building for Production

Build the static site:
```bash
hugo
```

This will generate the static files in the `public/` directory.

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a new file at `.github/workflows/hugo.yml`:
```yaml
name: Deploy Hugo site to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          
      - name: Build
        run: hugo --minify
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

2. Push your changes to GitHub. The site will be automatically deployed.

### Option 2: Manual Deployment

1. Build the site:
```bash
hugo
```

2. Push the `public/` directory to your GitHub Pages repository:
```bash
cd public
git init
git add .
git commit -m "Deploy to GitHub Pages"
git push -f git@github.com:yourusername/yourusername.github.io.git main
```

## Project Structure

```
lphin0.github.io/
├── archetypes/          # Content templates
│   ├── blog.md          # Blog post template
│   └── project.md       # Project template
├── content/             # Site content
│   ├── _index.md        # Homepage content
│   ├── blog/            # Blog posts
│   └── projects/        # Projects
├── layouts/             # HTML templates
│   ├── _default/
│   │   ├── baseof.html  # Base template
│   │   └── single.html  # Single page template
│   ├── index.html       # Homepage template
│   └── partials/        # Reusable components
│       ├── head.html
│       ├── header.html
│       └── footer.html
├── static/              # Static assets
│   ├── styles.css       # Stylesheet
│   ├── script.js        # JavaScript
│   └── pictures/        # Images
├── config.toml          # Site configuration
└── README.md
```

## Customization

### Styling

Edit `static/styles.css` to customize the site's appearance. Key CSS variables are defined at the top:

```css
:root {
    --bg-primary: #0d0d1a;
    --bg-secondary: #1a1a2e;
    --text-primary: #eaeaea;
    --accent: #e94560;
    /* ... */
}
```

### JavaScript

Edit `static/script.js` to modify navigation behavior and pagination.

### Templates

Modify templates in the `layouts/` directory to change the site structure and HTML output.

## Troubleshooting

### Site not building

Check that you have the correct version of Hugo installed:
```bash
hugo version
```

### Images not loading

Ensure images are in the `static/pictures/` directory and referenced with the correct path:
```markdown
![Alt text](/pictures/filename.avif)
```

### Social media previews not working

Check that meta tags are generated correctly in the HTML output. Ensure you have a `summary` field in your blog post front matter.

## License

This project uses multiple licenses for different components:

- **Code (Hugo templates, CSS, JavaScript):** MIT License - see [LICENSE](LICENSE)
- **Content (blog posts, images, project descriptions, released projects):** CC BY-NC-SA 4.0 - see [LICENSE-CONTENT.md](LICENSE-CONTENT.md)
  - Applies to: Files in Releases, `content/` and `static/content/`
- **Favicons:** CC BY-NC-SA 4.0 - see [LICENSE-CONTENT.md](LICENSE-CONTENT.md)
  - Applies to: `static/favicon*`, `static/apple-touch-icon.png`, `static/web-app-manifest-*.png`
- **Font (Departure Mono):** SIL Open Font License 1.1 - see [static/fonts/DepartureMono-LICENSE](static/fonts/DepartureMono-LICENSE)

For commercial use of blog content or released projects, please contact: nhanphan98@protonmail.com

## Credits

- Built with [Hugo](https://gohugo.io/)
- Fonts:
  - [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) by CodeMan38
  - [VT323](https://fonts.google.com/specimen/VT323) by Peter Hull
  - [Departure Mono](https://github.com/helenazhang/DepartureMono) by Helena Zhang (SIL OFL 1.1)
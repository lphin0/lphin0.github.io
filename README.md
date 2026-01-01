# Game Developer Portfolio

A modern, game developer-themed portfolio and blog built with HTML, CSS, and JavaScript. Perfect for GitHub Pages deployment.

## Features

- 🎮 **Game Developer Theme**: Neon colors, pixel-inspired design elements, and gaming aesthetics
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🚀 **Fast Loading**: Pure HTML/CSS/JS - no build process required
- 📝 **Blog System**: Easy-to-manage blog posts with custom styling
- 🎨 **Modern Design**: Smooth animations, hover effects, and visual polish
- 🔗 **Easy Navigation**: Smooth scrolling and mobile-friendly menu

## Sections

- **Hero**: Eye-catching introduction with animated text
- **About**: Personal information and skill visualization
- **Projects**: Showcase of game development projects
- **Blog**: Game development tutorials and articles
- **Contact**: Contact form and social links

## Customization

### Personal Information

Edit `index.html` to update:
- Your name and tagline in the hero section
- About section text
- Skills and their levels
- Project details
- Contact information
- Social media links

### Adding Blog Posts

1. Create a new HTML file in the `blog/` directory (e.g., `blog/3.html`)
2. Copy the structure from `blog/post-template.html`
3. Add your content to the blog post
4. Update the `blogPosts` array in `script.js` to include your new post

### Styling

Edit `styles.css` to customize:
- Color scheme (modify CSS variables in `:root`)
- Animations and transitions
- Layout and spacing
- Typography

## Deployment

### GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select the main branch as source
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain

1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## File Structure

```
.
├── index.html          # Main portfolio page
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
├── blog/               # Blog posts directory
│   ├── 1.html         # Blog post example 1
│   ├── 2.html         # Blog post example 2
│   └── post-template.html  # Template for new posts
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Credits

Built with vanilla HTML, CSS, and JavaScript - no frameworks required!

## License

This project is open source and available under the MIT License.
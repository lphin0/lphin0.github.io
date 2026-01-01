// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Godot Engine",
        date: "2024-01-15",
        description: "A comprehensive guide to setting up your first Godot project and understanding the core concepts of this powerful open-source game engine.",
        tags: ["Godot", "Tutorial", "Beginner"],
        readTime: "8 min read"
    },
    {
        id: 2,
        title: "Creating Stunning Visual Effects with Shaders",
        date: "2024-01-10",
        description: "Learn how to create mesmerizing visual effects using custom shaders in game development. From simple color grading to complex particle systems.",
        tags: ["Shaders", "Visual Effects", "Advanced"],
        readTime: "12 min read"
    },
    {
        id: 3,
        title: "Procedural Generation in Game Development",
        date: "2024-01-05",
        description: "Explore the world of procedural generation and how to create infinite, unique game content through algorithms and randomization techniques.",
        tags: ["Procedural", "Algorithms", "Design"],
        readTime: "10 min read"
    },
    {
        id: 4,
        title: "Optimizing Game Performance",
        date: "2023-12-28",
        description: "Essential tips and techniques for optimizing your game's performance, from code optimization to asset management and rendering techniques.",
        tags: ["Performance", "Optimization", "Best Practices"],
        readTime: "15 min read"
    },
    {
        id: 5,
        title: "Building a Physics-Based Game",
        date: "2023-12-20",
        description: "A deep dive into creating physics-based gameplay mechanics, from rigid body dynamics to collision detection and response systems.",
        tags: ["Physics", "Gameplay", "Mechanics"],
        readTime: "11 min read"
    },
    {
        id: 6,
        title: "The Art of Game Design Patterns",
        date: "2023-12-15",
        description: "Understanding and implementing common design patterns in game development to create more maintainable and scalable game code.",
        tags: ["Design Patterns", "Architecture", "Code Quality"],
        readTime: "9 min read"
    }
];

// Render Blog Posts
function renderBlogPosts() {
    const blogGrid = document.getElementById('blog-posts');
    
    blogPosts.forEach(post => {
        const blogCard = document.createElement('article');
        blogCard.className = 'blog-card';
        
        blogCard.innerHTML = `
            <div class="blog-image">
                <div class="blog-image-placeholder">🎮</div>
            </div>
            <div class="blog-content">
                <div class="blog-date">${formatDate(post.date)} • ${post.readTime}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-description">${post.description}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="blog/${post.id}.html" class="blog-link">Read More →</a>
            </div>
        `;
        
        blogGrid.appendChild(blogCard);
    });
}

// Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
    
    // Reset the form
    this.reset();
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 15, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 15, 0.95)';
    }
});

// Typing Effect for Hero Subtitle
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    
    // Add typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        typeWriter(heroSubtitle, originalText, 30);
    }
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = 'var(--text-color)';
            });
            if (navLink) {
                navLink.style.color = 'var(--primary-color)';
            }
        }
    });
});
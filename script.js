// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Pagination functionality
function setupPagination(containerId, paginationId, itemsPerPage) {
    const container = document.getElementById(containerId);
    const pagination = document.getElementById(paginationId);
    
    if (!container || !pagination) return;
    
    const items = container.querySelectorAll(`.${containerId === 'blog-list' ? 'blog-item' : 'project-card'}`);
    const prevBtn = pagination.querySelector('.prev');
    const nextBtn = pagination.querySelector('.next');
    const pageInfo = pagination.querySelector('.pagination-info');
    
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    
    // Hide pagination if there's only one page
    if (totalPages <= 1) {
        pagination.style.opacity = '0.3';
        pagination.style.pointerEvents = 'none';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }
    
    function updatePage() {
        items.forEach(item => {
            const itemPage = parseInt(item.dataset.page);
            if (itemPage === currentPage) {
                item.style.display = containerId === 'blog-list' ? 'block' : 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePage();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePage();
        }
    });
    
    updatePage();
}

// Initialize pagination
setupPagination('blog-list', 'blog-pagination', 3);
setupPagination('projects-grid', 'projects-pagination', 2);
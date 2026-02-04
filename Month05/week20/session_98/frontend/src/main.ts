import { LoadMoreButton } from '@/components/LoadMore';
import { CommentForm } from '@/components/CommentForm';
import { ShareButtons } from '@/components/ShareButtons';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Django + TypeScript SSR initialized');

    // Initialize components based on page
    initializeComponents();
});

function initializeComponents(): void {
    // Load More Button (Home page)
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        new LoadMoreButton('load-more-btn', 'posts-container');
    }

    // Comment Form (Post detail page)
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        new CommentForm('comment-form');
    }

    // Share Buttons (Post detail page)
    const shareSection = document.getElementById('share-section');
    if (shareSection) {
        new ShareButtons('share-section');
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Image lazy loading fallback
    if (!('loading' in HTMLImageElement.prototype)) {
        loadLazyImages();
    }

    // Add animation to cards on scroll
    observeCards();
}

function loadLazyImages(): void {
    const images = document.querySelectorAll('img[loading="lazy"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));
}

function observeCards(): void {
    const cards = document.querySelectorAll('.post-card, .featured-card');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach(card => observer.observe(card));
}

// Export for potential use in templates
declare global {
    interface Window {
        app: {
            loadMoreBtn?: LoadMoreButton;
        };
    }
}

window.app = {};

import { api } from '@/utils/api';
import type { Post } from '@/types';

export class LoadMoreButton {
    private button: HTMLButtonElement;
    private container: HTMLElement;
    private currentPage: number;
    private loading = false;
    private category?: string;

    constructor(buttonId: string, containerId: string) {
        this.button = document.getElementById(buttonId) as HTMLButtonElement;
        this.container = document.getElementById(containerId) as HTMLElement;
        this.currentPage = parseInt(this.button?.dataset.page || '2');
        this.category = this.button?.dataset.category;

        if (this.button) {
            this.init();
        }
    }

    private init(): void {
        this.button.addEventListener('click', () => this.loadMore());
    }

    private async loadMore(): Promise<void> {
        if (this.loading) return;

        this.loading = true;
        this.button.textContent = 'Ачаалж байна...';
        this.button.disabled = true;

        try {
            const response = await api.getPosts(this.currentPage, this.category);

            response.results.forEach(post => {
                this.container.appendChild(this.createPostCard(post));
            });

            this.currentPage++;

            if (!response.next) {
                this.button.remove();
            } else {
                this.button.textContent = 'Илүү ихийг үзэх';
                this.button.disabled = false;
            }
        } catch (error) {
            console.error('Load more error:', error);
            this.button.textContent = 'Алдаа гарлаа. Дахин оролдох';
            this.button.disabled = false;
        } finally {
            this.loading = false;
        }
    }

    private createPostCard(post: Post): HTMLElement {
        const article = document.createElement('article');
        article.className = 'post-card';
        article.dataset.postId = post.id.toString();

        article.innerHTML = `
      ${post.featured_image ? `<img src="${post.featured_image}" alt="${post.title}" loading="lazy">` : ''}
      <div class="card-body">
        <span class="category">${post.category_name || 'Ангилалгүй'}</span>
        <h3><a href="/post/${post.slug}/">${post.title}</a></h3>
        <p>${this.truncateWords(post.excerpt, 15)}</p>
        <div class="card-footer">
          <span class="author">✍️ ${post.author_name}</span>
          <span class="views">👁️ ${post.views}</span>
        </div>
      </div>
    `;

        // Animation
        article.style.opacity = '0';
        article.style.transform = 'translateY(20px)';

        requestAnimationFrame(() => {
            article.style.transition = 'opacity 0.3s, transform 0.3s';
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        });

        return article;
    }

    private truncateWords(text: string, count: number): string {
        const words = text.split(' ');
        if (words.length <= count) return text;
        return words.slice(0, count).join(' ') + '...';
    }
}

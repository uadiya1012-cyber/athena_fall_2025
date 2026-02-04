import { api } from '@/utils/api';
import type { CommentFormData } from '@/types';

export class CommentForm {
    private form: HTMLFormElement;
    private statusEl: HTMLElement;
    private postSlug: string;

    constructor(formId: string) {
        this.form = document.getElementById(formId) as HTMLFormElement;
        this.statusEl = document.getElementById('comment-status') as HTMLElement;
        this.postSlug = this.form?.dataset.postSlug || '';

        if (this.form && this.postSlug) {
            this.init();
        }
    }

    private init(): void {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    private async handleSubmit(e: Event): Promise<void> {
        e.preventDefault();

        const formData = new FormData(this.form);
        const data: CommentFormData = {
            author_name: formData.get('author_name') as string,
            author_email: formData.get('author_email') as string,
            content: formData.get('content') as string,
        };

        // Validation
        if (!data.author_name || !data.author_email || !data.content) {
            this.showStatus('Бүх талбарыг бөглөнө үү', 'error');
            return;
        }

        const submitBtn = this.form.querySelector('button[type="submit"]') as HTMLButtonElement;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Илгээж байна...';

        try {
            const response = await api.addComment(this.postSlug, data);

            this.showStatus(response.message, 'success');
            this.form.reset();

        } catch (error) {
            console.error('Comment error:', error);
            this.showStatus('Алдаа гарлаа. Дахин оролдоно уу.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Илгээх';
        }
    }

    private showStatus(message: string, type: 'success' | 'error'): void {
        this.statusEl.textContent = message;
        this.statusEl.className = `status-message status-${type}`;

        // Auto hide
        setTimeout(() => {
            this.statusEl.textContent = '';
            this.statusEl.className = '';
        }, 5000);
    }
}

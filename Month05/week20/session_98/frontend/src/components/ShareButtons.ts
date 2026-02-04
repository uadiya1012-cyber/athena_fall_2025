export class ShareButtons {
    private container: HTMLElement;
    private url: string;
    private title: string;

    constructor(containerId: string) {
        this.container = document.getElementById(containerId) as HTMLElement;
        this.url = window.location.href;
        this.title = document.title;

        if (this.container) {
            this.init();
        }
    }

    private init(): void {
        this.container.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const platform = (e.target as HTMLElement).dataset.platform;
                this.share(platform!);
            });
        });
    }

    private share(platform: string): void {
        const encodedUrl = encodeURIComponent(this.url);
        const encodedTitle = encodeURIComponent(this.title);

        switch (platform) {
            case 'twitter':
                window.open(
                    `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
                    '_blank',
                    'width=600,height=400'
                );
                break;

            case 'facebook':
                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                    '_blank',
                    'width=600,height=400'
                );
                break;

            case 'copy':
                navigator.clipboard.writeText(this.url).then(() => {
                    this.showToast('Link хуулагдлаа!');
                });
                break;
        }
    }

    private showToast(message: string): void {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }
}

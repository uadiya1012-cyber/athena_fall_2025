setTimeout(function () {
    const messages = document.querySelector('.messages');
    if (messages) {
        messages.style.transition = 'opacity 0.5s';
        messages.style.opacity = '0';
        setTimeout(() => messages.remove(), 500);
    }
}, 3000);
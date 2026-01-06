const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

const followBtn = document.querySelector('.primary');
let following = false;

followBtn.addEventListener('click', () => {
    following = !following;
    followBtn.textContent = following ? 'Following' : 'Follow';
});
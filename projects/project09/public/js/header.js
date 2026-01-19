// File: pokemonProject/js/header.js
export function renderHeaderVectors() {
    const header = document.getElementById('header');

    const wrapper = document.createElement('div');
    wrapper.className = 'header-icons';

    const img = document.createElement('img');
    img.src = 'assets/image/Pokedex-logo.svg';

    wrapper.appendChild(img);
    header.prepend(wrapper);
}

// File: pokemonProject/js/card.js
import { TYPE_ICONS, TYPE_STYLES } from './constants.js';
import { openModal } from './modal.js';

export function createCard(data) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    card.style.background = TYPE_STYLES[data.types[0].type.name].bg;

    const header = document.createElement('div');
    header.className = 'card-header';

    header.innerHTML = `
        <h2>${data.name}</h2>
        <span class="pokemon-id">#${data.id.toString().padStart(3, '0')}</span>
    `;

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper';
    imageWrapper.innerHTML = `
        <img src="${data.sprites.other['official-artwork'].front_default}">
    `;

    const typesWrapper = document.createElement('div');
    typesWrapper.className = 'types';

    data.types.forEach(t => {
        const type = t.type.name;

        const tag = document.createElement('span');
        tag.className = 'type';
        tag.dataset.type = type;
        tag.style.background = 'rgba(255,255,255,0.35)';
        tag.style.backdropFilter = 'blur(4px)';

        tag.innerHTML = `
            <img class="type-icon" src="${TYPE_ICONS[type]}">
            <span>${type}</span>
        `;

        typesWrapper.appendChild(tag);
    });



    // зүүн доод буланд нэмэлт икон нэмэх
    const extraIcon = document.createElement('img');
    extraIcon.src = './assets/image/left-ellipse.svg';
    extraIcon.className = 'extra-icon';
    extraIcon.style.position = 'absolute';
    extraIcon.style.bottom = '-10px';
    extraIcon.style.left = '-10px';
    extraIcon.style.width = '90px';
    extraIcon.style.height = '90px';

    card.appendChild(extraIcon);


    card.addEventListener('mouseenter', () => {
        card.querySelectorAll('.type').forEach(t => {
            const type = t.dataset.type;
            t.style.background = TYPE_STYLES[type].tag;
            t.style.backdropFilter = 'none';
        });
    });

    card.addEventListener('mouseleave', () => {
        card.querySelectorAll('.type').forEach(t => {
            t.style.background = 'rgba(255,255,255,0.35)';
            t.style.backdropFilter = 'blur(4px)';
        });
    });


    // Open modal on card click
    card.addEventListener('click', () => {
        openModal(data);
    });

    card.append(header, imageWrapper, typesWrapper);

    return card;
}



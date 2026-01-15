// render controller хэсэг
import { state } from './state.js';
import { createCard } from './card.js';

const main = document.getElementById('main');

export function render() {
    main.innerHTML = '';
    let list = [...state.POKEMON_DETAILS];

    if (state.CURRENT_SEARCH) {
        list = list.filter(p =>
            p.name.includes(state.CURRENT_SEARCH) ||
            p.id.toString().includes(state.CURRENT_SEARCH)
        );
    }

    if (state.SELECTED_TYPES.length) {
        list = list.filter(p =>
            p.types.some(t =>
                state.SELECTED_TYPES.includes(t.type.name)
            )
        );
    }

    switch (state.CURRENT_SORT) {
        case 'id-desc':
            list.sort((a, b) => b.id - a.id);
            break;
        case 'az':
            list.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'za':
            list.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            list.sort((a, b) => a.id - b.id);
    }

    list.forEach(p => main.appendChild(createCard(p)));
}


const filterPanel = document.getElementById('filterPanel');
const closeFilter = document.getElementById('closeFilter');


closeFilter.addEventListener('click', () => {
    filterPanel.classList.remove('open');
});

filterPanel.addEventListener('click', e => {
    e.stopPropagation();
});

document.addEventListener('click', () => {
    filterPanel.classList.remove('open');
});

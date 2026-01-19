// pokemonProject/js/filters.js
import { state } from './state.js';
import { render } from './render.js';

export function initFilters() {
    const searchInput = document.getElementById('searchInput');
    const sortDropdown = document.getElementById('sortDropdown');
    const sortLabel = document.getElementById('sortLabel');
    const sortOptions = sortDropdown.querySelectorAll('li');

    searchInput.addEventListener('input', e => {
        state.CURRENT_SEARCH = e.target.value.toLowerCase().trim();
        render();
    });

    sortOptions.forEach(option => {
        option.addEventListener('click', () => {
            state.CURRENT_SORT = option.dataset.value;
            sortLabel.textContent = option.textContent;
            sortDropdown.classList.remove('open');
            render();
        });
    });

    document
        .querySelectorAll('.filter-group input')
        .forEach(cb => {
            cb.addEventListener('change', () => {
                state.SELECTED_TYPES =
                    [...document.querySelectorAll('.filter-group input:checked')]
                        .map(i => i.value);
                // render();
            });
        });
}

const toggleBtn = sortDropdown.querySelector('.dropdown-toggle');

toggleBtn.addEventListener('click', e => {
    e.stopPropagation();
    sortDropdown.classList.toggle('open');
});

document.addEventListener('click', () => {
    sortDropdown.classList.remove('open');
});


const resetBtn = document.getElementById('resetFilters');
const applyBtn = document.getElementById('applyFilters');

resetBtn.addEventListener('click', () => {
    document
        .querySelectorAll('.filter-group input')
        .forEach(cb => cb.checked = false);

    state.SELECTED_TYPES = [];
    render();
});

applyBtn.addEventListener('click', () => {
    filterPanel.classList.remove('open');
    render();
});


const filterBtn = document.getElementById('filterBtn');
filterBtn.addEventListener('click', e => {
    e.stopPropagation();
    filterPanel.classList.toggle('open');
});
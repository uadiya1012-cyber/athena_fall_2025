// File: pokemonProject/js/api.js
import { state } from './state.js';
import { render } from './render.js';

const POKEMON_URL =
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000';

export function loadPokemons() {
    fetch(POKEMON_URL)
        .then(res => res.json())
        .then(data => fetchAllDetails(data.results));
}

function fetchAllDetails(list) {
    Promise.all(
        list.map(p => fetch(p.url).then(res => res.json()))
    ).then(results => {
        state.POKEMON_DETAILS = results;
        render();
    });
}

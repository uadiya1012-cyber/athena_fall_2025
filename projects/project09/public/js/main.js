// Main entry point for the Pokémon project
import { loadPokemons } from './api.js';
import { initFilters } from './filters.js';
import { renderHeaderVectors } from './header.js';

renderHeaderVectors();
initFilters();
loadPokemons();



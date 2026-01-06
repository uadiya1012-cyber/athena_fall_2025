console.log('Pokemon');

const mainElement = document.getElementById('main');

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';


fetch(POKEMON_URL)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        renderPokemons(data);
    })


function renderPokemons(pokemonData) {
    const resultArray = pokemonData.results;
    console.log(resultArray);
    for (let i = 0; i < resultArray.length; i++) {
        displayPokemon(resultArray[i]);
    }
}

function displayPokemon(pokemon) {
    const container = document.createElement('div');
    container.classList.add('container');

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;
    container.appendChild(pokemonName);

    findImageUrl(pokemon.url, container);

    mainElement.appendChild(container);
}

function findImageUrl(pokemonUrl, container) {
    fetch(pokemonUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.sprites.other['official-artwork'].front_default);
            const result = data.sprites.other['official-artwork'].front_default;
            const pokemonImage = document.createElement('img');
            pokemonImage.src = result;
            container.appendChild(pokemonImage);
        });
}
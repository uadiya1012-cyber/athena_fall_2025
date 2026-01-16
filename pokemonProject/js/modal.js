import { TYPE_ICONS, TYPE_STYLES } from './constants.js';

const modal = document.getElementById('pokemonModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementById('closeModal');


export async function openModal(pokemon) {
    const primaryType = pokemon.types && pokemon.types.length ? pokemon.types[0].type.name : 'normal';
    const bgStyle = (TYPE_STYLES[primaryType] && TYPE_STYLES[primaryType].bg) ? TYPE_STYLES[primaryType].bg : '#B6B6B6';

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-pokemon-card" style="background: ${bgStyle};">
                <div class="modal-left">
                    <div class="modal-image-wrapper">
                        <img src="${pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}" alt="${pokemon.name}">
                    </div>
                </div>

                <div class="modal-right">
                    <div class="modal-card-header">
                        <h2>${pokemon.name}</h2>
                        <span class="modal-pokemon-id">#${pokemon.id.toString().padStart(3, '0')}</span>
                    </div>

                    <div class="modal-types">
                        ${pokemon.types.map(t => {
        const type = t.type.name;
        const icon = TYPE_ICONS[type] ? `<img class="type-icon" src="${TYPE_ICONS[type]}">` : '';
        const badgeBg = (TYPE_STYLES[type] && (TYPE_STYLES[type].tag || TYPE_STYLES[type].bg)) ? (TYPE_STYLES[type].tag || TYPE_STYLES[type].bg) : 'rgba(255,255,255,0.25)';
        return `<span class="modal-type" style="background: ${badgeBg};">${icon}<span>${type}</span></span>`;
    }).join(' ')}
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabs -->
        <div class="tab-bar">
            <button class="tab-button active" data-tab="about">About</button>
            <button class="tab-button" data-tab="stats">Stats</button>
            <button class="tab-button" data-tab="evolution">Evolution</button>
        </div>

        <div class="tab-content">
            <div class="tab-panel" data-panel="about">
                <div class="meta about-panel">
                    <p><b>Species:</b> ${pokemon.species ? pokemon.species.name[0].toUpperCase() + pokemon.species.name.slice(1) : 'This Pokémon does not have a species.'}</p>
                    <p><b>Height:</b> ${pokemon.height}</p>
                    <p><b>Weight:</b> ${pokemon.weight}</p>
                    <p><b>Abilities:</b> ${pokemon.abilities.map(a => a.ability.name[0].toUpperCase() + a.ability.name.slice(1)).join(', ')}</p>
                </div>
            </div>

            <div class="tab-panel" data-panel="stats" style="display:none;">
                ${renderStats(pokemon.stats)}
            </div>

            <div class="tab-panel" data-panel="evolution" style="display:none;">
                <div class="evolution-grid" id="evoGrid">
                    
                    <div class="evo-items">
                    <img src="assets/vector/loader.svg" alt="Loading...">
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('open');

    // Tab switching logic (About / Stats / Evolution)
    const tabButtons = modalBody.querySelectorAll('.tab-button');
    const tabPanels = modalBody.querySelectorAll('.tab-panel');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tab = btn.dataset.tab;
            tabPanels.forEach(p => {
                p.style.display = (p.dataset.panel === tab) ? 'block' : 'none';
            });
        });
    });

    // try to match the modal's types container width to the original pokemon card's types width
    try {
        const modalTypes = modalBody.querySelector('.modal-types');
        if (modalTypes) {
            const idStr = `#${pokemon.id.toString().padStart(3, '0')}`;
            const cardIdEls = document.querySelectorAll('.pokemon-card .pokemon-id');
            let match = null;
            cardIdEls.forEach(el => { if (el.textContent.trim() === idStr) match = el; });
            if (match) {
                const cardEl = match.closest('.pokemon-card');
                const typesInCard = cardEl ? cardEl.querySelector('.types') : null;
                if (typesInCard) {
                    // copy computed width from the card types to modal types
                    modalTypes.style.width = `${typesInCard.offsetWidth}px`;
                }
            }
        }
    } catch (e) {
        // silently fail if DOM lookup isn't available
    }

    try {
        if (pokemon.species && pokemon.species.url) {
            const speciesRes = await fetch(pokemon.species.url).then(r => r.json());
            if (speciesRes && speciesRes.evolution_chain && speciesRes.evolution_chain.url) {
                const evoRes = await fetch(speciesRes.evolution_chain.url).then(r => r.json());

                const speciesList = [];
                (function traverse(node) {
                    if (!node) return;
                    if (node.species) speciesList.push(node.species);
                    if (node.evolves_to && node.evolves_to.length) {
                        node.evolves_to.forEach(child => traverse(child));
                    }
                })(evoRes.chain);


                const evoDetails = await Promise.all(
                    speciesList.map(s => fetch(`https://pokeapi.co/api/v2/pokemon/${s.name}`).then(r => r.json()).catch(() => null))
                );

                // populate the evolution grid (show all items; layout will show them side-by-side)
                const evoGrid = document.getElementById('evoGrid');
                if (evoGrid) {
                    setTimeout(() => {
                        evoGrid.innerHTML = evoDetails.map(d => {
                            if (!d) return `<div class="evo-item"><div class="evo-name">This Pokémon does not Evolve</div></div>`;
                            const img = d.sprites?.other?.['official-artwork']?.front_default || d.sprites?.front_default || '';
                            return `
                            <div class="evo-item" data-name="${d.name}">
                                <img src="${img}" alt="${d.name}">
                                <div class="evo-name">${d.name[0].toUpperCase() + d.name.slice(1)}</div>
                                <div class="evo-id">#${d.id.toString().padStart(3, '0')}</div>
                            </div>
                        `;
                        }).join('');

                        // attach click handlers to open selected evolution detail
                        const items = evoGrid.querySelectorAll('.evo-item');
                        items.forEach((item, i) => {
                            item.style.cursor = 'pointer';
                            item.addEventListener('click', () => {
                                const detail = evoDetails[i];
                                if (detail) openModal(detail);
                            });
                        });
                    }, 2000);
                }
            }
        }
    } catch (err) {
        console.error('Could not load evolution chain', err);
    }
}


function renderStats(stats) {
    return `
      <div class="stats">
        ${stats.map(s => `
          <div class="stat">
            <span>${s.stat.name.toUpperCase()}</span>
            <span class="value">${s.base_stat}</span>
            <div class="bar">
              <div class="fill" style="width:${(s.base_stat)}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
}


closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
});

modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal-backdrop')) {
        modal.classList.remove('open');
    }
});












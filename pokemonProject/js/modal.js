const modal = document.getElementById('pokemonModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementById('closeModal');


export async function openModal(pokemon) {
    // Basic info + stats + placeholder for evolution carousel
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}" width="200">
        </div>

        <div class="meta">
            <p><b>ID:</b> #${pokemon.id.toString().padStart(3, '0')}</p>
            <p><b>Height:</b> ${pokemon.height}</p>
            <p><b>Weight:</b> ${pokemon.weight}</p>

            <div class="types">
                ${pokemon.types.map(t => `<span class="type">${t.type.name}</span>`).join(' ')}
            </div>
        </div>

        <h3>Base Stats</h3>
        ${renderStats(pokemon.stats)}

        <h3>Evolution</h3>
        <div class="evolution">
            <button class="evo-prev" aria-label="Previous">‹</button>
            <div class="evo-viewport">
                <div class="evo-track" id="evoTrack">
                    <!-- evolution items will be injected here -->
                </div>
            </div>
            <button class="evo-next" aria-label="Next">›</button>
        </div>
    `;

    modal.classList.add('open');

    // Fetch and render evolution chain (if available)
    try {
        // species url is provided on the pokemon object
        if (pokemon.species && pokemon.species.url) {
            const speciesRes = await fetch(pokemon.species.url).then(r => r.json());
            if (speciesRes && speciesRes.evolution_chain && speciesRes.evolution_chain.url) {
                const evoRes = await fetch(speciesRes.evolution_chain.url).then(r => r.json());

                // traverse the chain and collect species
                const speciesList = [];
                (function traverse(node) {
                    if (!node) return;
                    if (node.species) speciesList.push(node.species);
                    if (node.evolves_to && node.evolves_to.length) {
                        node.evolves_to.forEach(child => traverse(child));
                    }
                })(evoRes.chain);

                // fetch pokemon details for each species to get artwork and id
                const evoDetails = await Promise.all(
                    speciesList.map(s => fetch(`https://pokeapi.co/api/v2/pokemon/${s.name}`).then(r => r.json()).catch(() => null))
                );

                const evoTrack = document.getElementById('evoTrack');
                evoTrack.innerHTML = evoDetails.map(d => {
                    if (!d) return `<div class="evo-item"><div class="evo-name">Unknown</div></div>`;
                    const img = d.sprites?.other?.['official-artwork']?.front_default || d.sprites?.front_default || '';
                    return `
                        <div class="evo-item">
                            <img src="${img}" alt="${d.name}">
                            <div class="evo-name">${d.name}</div>
                            <div class="evo-id">#${d.id.toString().padStart(3, '0')}</div>
                        </div>
                    `;
                }).join('');

                // slider controls
                const prev = modalBody.querySelector('.evo-prev');
                const next = modalBody.querySelector('.evo-next');
                const track = modalBody.querySelector('.evo-track');
                const items = modalBody.querySelectorAll('.evo-item');
                let index = 0;
                const visibleCount = 3; // how many items visible at once

                // make evolution items clickable to open their modal
                items.forEach((item, i) => {
                    item.style.cursor = 'pointer';
                    item.addEventListener('click', () => {
                        const detail = evoDetails[i];
                        if (detail) openModal(detail);
                    });
                });

                function update() {
                    const first = modalBody.querySelector('.evo-item');
                    const itemWidth = first ? (first.offsetWidth + 16) : 220; // include gap
                    const maxIndex = Math.max(0, items.length - visibleCount);
                    if (index < 0) index = 0;
                    if (index > maxIndex) index = maxIndex;
                    track.style.transform = `translateX(-${index * itemWidth}px)`;
                }

                next.addEventListener('click', () => { index++; update(); });
                prev.addEventListener('click', () => { index--; update(); });

                // recompute on resize and after images load
                window.addEventListener('resize', update);
                setTimeout(update, 120);
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
            <div class="bar">
              <div class="fill" style="width:${(s.base_stat / 200) * 100}%"></div>
            </div>
            <span class="value">${s.base_stat}</span>
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









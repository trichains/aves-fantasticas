import initAnimaNumber from './anima-numeros.js';

export default function initFetchAves() {
  async function fetchAves(url) {
    try {
      const resposta = await fetch(url);
      const avesJSON = await resposta.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      avesJSON.forEach((ave) => {
        const divAve = createAve(ave);
        numerosGrid.appendChild(divAve);
      });

      initAnimaNumber();
    } catch (error) {
      console.error('Erro ao buscar as aves:', error);
    }
  }

  function createAve(ave) {
    const div = document.createElement('div');
    div.classList.add('numero-ave');
    div.innerHTML = `<h3>${ave.especie}</h3><span data-numero>${ave.total}</span>`;
    return div;
  }

  fetchAves('./aves-api.json');
}

import AnimaNumeros from './anima-numeros.js';

export default function fetchAves(url, target) {
  // Cria a div contendo informações do total de aves
  function createAve(ave) {
    const div = document.createElement('div');
    div.classList.add('numero-ave');
    div.innerHTML = `<h3>${ave.especie}</h3><span data-numero>${ave.total}</span>`;
    return div;
  }

  // Preenche cada ave no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAves(ave) {
    const divAve = createAve(ave);
    numerosGrid.appendChild(divAve);
  }

  // anima os números de cada ave
  function animaAvesNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa as aves através de um arquivo json, e cria cada ave utilizando createAve
  async function criarAves() {
    try {
      // fetch, espera a resposta e transforma a resposta em json
      const resposta = await fetch(url);
      const avesJSON = await resposta.json();

      // após a transformação de um json, ativa as funções para preencher e animar os numeros
      avesJSON.forEach((ave) => preencherAves(ave));
      animaAvesNumeros();
    } catch (error) {
      console.error('Erro ao buscar as aves:', error);
    }
  }

  return criarAves();
}

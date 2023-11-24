/**
 * Inicializa tooltips em elementos com o atributo 'data-tooltip'.
 */
export default function initTooltip() {
  // Obter todos os elementos com o atributo 'data-tooltip'
  const tooltips = document.querySelectorAll('[data-tooltip]');

  // Adicionar um ouvinte de evento a cada elemento tooltip
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', handleMouseOver);
  });

  /**
   * Manipula o evento de mouseover em um elemento tooltip.
   * @param {MouseEvent} event - O objeto de evento de mouseover.
   */
  function handleMouseOver(event) {
    // Criar um elemento de tooltip box
    const tooltipBox = createTooltipBox(this);

    // Posicionar o elemento de tooltip box
    tooltipBox.style.top = `${event.pageY + 20}px`;
    tooltipBox.style.left = `${event.pageX + 20}px`;

    // Adicionar a classe 'visible' para exibir o elemento de tooltip box
    tooltipBox.classList.add('visible');

    // Adicionar um ouvinte de evento para remover o elemento de tooltip box ao sair do mouse
    this.addEventListener('mouseleave', () => {
      tooltipBox.classList.remove('visible');
      tooltipBox.remove();
    });

    // Adicionar um ouvinte de evento para atualizar a posição do elemento de tooltip box ao mover o mouse
    this.addEventListener('mousemove', (e) => {
      tooltipBox.style.top = `${e.pageY + 20}px`;
      tooltipBox.style.left = `${e.pageX + 20}px`;
    });
  }

  /**
   * Cria um elemento de tooltip box com o texto do atributo 'aria-label' de um elemento.
   * @param {HTMLElement} element - O elemento para o qual criar o tooltip box.
   * @returns {HTMLElement} - O elemento de tooltip box criado.
   */
  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}

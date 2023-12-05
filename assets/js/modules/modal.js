export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.openButton = document.querySelector(botaoAbrir);
    this.closeButton = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para o this do objeto da classe ser o objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.openButton.addEventListener('click', () => this.eventToggleModal);
    this.closeButton.addEventListener('click', () => this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  // inicializa o modal
  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}

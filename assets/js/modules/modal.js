export default function initModal() {
  const openButton = document.querySelector('[data-modal="open"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (openButton && closeButton && containerModal) {
    function toggleModal(e) {
      e.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function clickAway(e) {
      if (e.target === this) {
        toggleModal(e);
      }
    }

    openButton.addEventListener('click', toggleModal);
    closeButton.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickAway);
  }
}

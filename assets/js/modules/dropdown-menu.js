import outsideClick from './outside-click.js';

export default function initDropdownMenu() {
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  dropdowns.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e) {
    e.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['click', 'touchstart'], () => {
      this.classList.remove('ativo');
    });
  }
}

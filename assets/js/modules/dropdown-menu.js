import outsideClick from './outside-click.js';

export default function initDropdownMenus() {
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  dropdowns.forEach((dropdown) => {
    const userEvents = ['click', 'touchstart'];
    userEvents.forEach((userEvent) => {
      dropdown.addEventListener(userEvent, handleClick);
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

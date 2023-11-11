import outsideClick from './outside-click.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add('ativo');
      menuButton.classList.add('ativo');
      outsideClick(menuList, ['touchstart', 'click'], () => {
        menuList.classList.remove('ativo');
        menuButton.classList.remove('ativo');
      });
    }
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}

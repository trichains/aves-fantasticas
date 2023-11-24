import outsideClick from './outside-click.js';

export default function initMenuMobile() {
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if (menuList) {
    function openMenu(event) {
      const menuButton = event.target.closest('[data-menu="button"]');
      if (menuButton) {
        menuList.classList.add('ativo');
        menuButton.classList.add('ativo');
        outsideClick(menuList, ['touchstart', 'click'], () => {
          menuList.classList.remove('ativo');
          menuButton.classList.remove('ativo');
        });
      }
    }
    eventos.forEach((evento) => {
      document.addEventListener(evento, openMenu);
    });
  }
}

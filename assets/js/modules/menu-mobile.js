import outsideClick from './outside-click.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu(event) {
    menuList.classList.add('ativo');
    menuButton.classList.add('ativo');
  }

  menuButton.addEventListener('click', openMenu);
}
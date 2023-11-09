export default function dropdownMenu() {
  const menus = document.querySelectorAll('[data-dropdown]');
  
  menus.forEach((menu) => {
    ['click', 'touchstart'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('ativo');
    outsideClick(this, () => {
      this.classList.remove('ativo');
    });
  }
}
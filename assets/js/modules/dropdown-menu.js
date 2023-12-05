import outsideClick from './outside-click.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define touchstart e click como argumento padrao
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdown menu e adiciona a funcionalidade
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    event.classList.toggle(this.activeClass);
    outsideClick(event.currentTarget, this.events, () => {
      element.classList.remove('active');
    });
  }

  // adiciona os eventos ao dropdown menu
  addDropdownMenusEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvents();
    }
    return this;
  }
}

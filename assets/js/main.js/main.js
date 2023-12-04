/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/modules/accordion.js":
/*!****************************************!*\
  !*** ./assets/js/modules/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n\n toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n }\n  \n  // adiciona os eventos ao accordion\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener('click', () => this.toggleAccordion(item));\n    });\n  }\n  \n  // iniciar função\n  init() {\n    if (this.accordionList.length) {\n      // ativar primeiro item\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n  }\n}\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/accordion.js?");

/***/ }),

/***/ "./assets/js/modules/anima-numeros.js":
/*!********************************************!*\
  !*** ./assets/js/modules/anima-numeros.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumber)\n/* harmony export */ });\nfunction initAnimaNumber() {\r\n  function animaNumeros() {\r\n    const numberElements = document.querySelectorAll('[data-numero]');\r\n\r\n    numberElements.forEach((element) => {\r\n      const totalNumber = +element.innerText;\r\n      const increment = Math.floor(totalNumber / 100);\r\n      let start = 0;\r\n\r\n      function updateNumber() {\r\n        start += increment;\r\n        element.innerText = Math.min(start, totalNumber);\r\n\r\n        if (start < totalNumber) {\r\n          requestAnimationFrame(updateNumber);\r\n        }\r\n      }\r\n\r\n      requestAnimationFrame(updateNumber);\r\n    });\r\n  }\r\n\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains('ativo')) {\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    }\r\n  }\r\n\r\n  const observerTarget = document.querySelector('.numeros');\r\n  const observer = new MutationObserver(handleMutation);\r\n\r\n  observer.observe(observerTarget, { attributes: true });\r\n}\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/anima-numeros.js?");

/***/ }),

/***/ "./assets/js/modules/dropdown-menu.js":
/*!********************************************!*\
  !*** ./assets/js/modules/dropdown-menu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./assets/js/modules/outside-click.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n  const dropdowns = document.querySelectorAll('[data-dropdown]');\r\n\r\n  dropdowns.forEach((menu) => {\r\n    ['touchstart', 'click'].forEach((userEvent) => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n\r\n  function handleClick(e) {\r\n    e.preventDefault();\r\n    this.classList.add('ativo');\r\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['click', 'touchstart'], () => {\r\n      this.classList.remove('ativo');\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./assets/js/modules/fetch-aves.js":
/*!*****************************************!*\
  !*** ./assets/js/modules/fetch-aves.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAves)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./assets/js/modules/anima-numeros.js\");\n\n\nfunction initFetchAves() {\n  async function fetchAves(url) {\n    try {\n      const resposta = await fetch(url);\n      const avesJSON = await resposta.json();\n      const numerosGrid = document.querySelector('.numeros-grid');\n\n      avesJSON.forEach((ave) => {\n        const divAve = createAve(ave);\n        numerosGrid.appendChild(divAve);\n      });\n\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } catch (error) {\n      console.error('Erro ao buscar as aves:', error);\n    }\n  }\n\n  function createAve(ave) {\n    const div = document.createElement('div');\n    div.classList.add('numero-ave');\n    div.innerHTML = `<h3>${ave.especie}</h3><span data-numero>${ave.total}</span>`;\n    return div;\n  }\n\n  fetchAves('./aves-api.json');\n}\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/fetch-aves.js?");

/***/ }),

/***/ "./assets/js/modules/fetch-btc.js":
/*!****************************************!*\
  !*** ./assets/js/modules/fetch-btc.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBtc)\n/* harmony export */ });\nasync function fetchBtc() {\r\n  try {\r\n    const response = await fetch('https://blockchain.info/ticker');\r\n    const data = await response.json();\r\n    const btcPriceElement = document.querySelector('.btc-preco');\r\n    btcPriceElement.innerText = (100 / data.BRL.sell).toFixed(4);\r\n  } catch (error) {\r\n    console.error('Erro ao buscar o preço do BTC:', error);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/fetch-btc.js?");

/***/ }),

/***/ "./assets/js/modules/funcionamento.js":
/*!********************************************!*\
  !*** ./assets/js/modules/funcionamento.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector('[data-semana]');\r\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\r\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\r\n  const dataAgora = new Date();\r\n  const diaAgora = dataAgora.getDay();\r\n  const horarioAgora = dataAgora.getHours();\r\n\r\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\r\n\r\n  const horarioAberto =\r\n    horarioSemana[0] <= horarioAgora && horarioSemana[1] >= horarioAgora;\r\n  if (semanaAberto && horarioAberto) {\r\n    funcionamento.classList.add('aberto');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/funcionamento.js?");

/***/ }),

/***/ "./assets/js/modules/menu-mobile.js":
/*!******************************************!*\
  !*** ./assets/js/modules/menu-mobile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./assets/js/modules/outside-click.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = ['click', 'touchstart'];\r\n\r\n  if (menuList) {\r\n    function openMenu(event) {\r\n      const menuButton = event.target.closest('[data-menu=\"button\"]');\r\n      if (menuButton) {\r\n        menuList.classList.add('ativo');\r\n        menuButton.classList.add('ativo');\r\n        (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, ['touchstart', 'click'], () => {\r\n          menuList.classList.remove('ativo');\r\n          menuButton.classList.remove('ativo');\r\n        });\r\n      }\r\n    }\r\n    eventos.forEach((evento) => {\r\n      document.addEventListener(evento, openMenu);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./assets/js/modules/modal.js":
/*!************************************!*\
  !*** ./assets/js/modules/modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const openButton = document.querySelector('[data-modal=\"open\"]');\r\n  const closeButton = document.querySelector('[data-modal=\"close\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  if (openButton && closeButton && containerModal) {\r\n    function toggleModal(e) {\r\n      e.preventDefault();\r\n      containerModal.classList.toggle('ativo');\r\n    }\r\n\r\n    function clickAway(e) {\r\n      if (e.target === this) {\r\n        toggleModal(e);\r\n      }\r\n    }\r\n\r\n    openButton.addEventListener('click', toggleModal);\r\n    closeButton.addEventListener('click', toggleModal);\r\n    containerModal.addEventListener('click', clickAway);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/modal.js?");

/***/ }),

/***/ "./assets/js/modules/outside-click.js":
/*!********************************************!*\
  !*** ./assets/js/modules/outside-click.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(dropdown, events, callback) {\r\n  const html = document.documentElement;\r\n  const dataOutside = 'data-outside';\r\n\r\n  if (!dropdown.hasAttribute(dataOutside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(userEvent, handleOutsideClick);\r\n      });\r\n    });\r\n    dropdown.setAttribute(dataOutside, '');\r\n  }\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!dropdown.contains(event.target)) {\r\n      dropdown.removeAttribute(dataOutside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/outside-click.js?");

/***/ }),

/***/ "./assets/js/modules/scroll-anima.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/scroll-anima.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollAnima)\n/* harmony export */ });\nfunction initScrollAnima() {\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  if (sections.length) {\r\n    const windowMetade = window.innerHeight * 0.6;\r\n\r\n    function animaScroll() {\r\n      sections.forEach((section) => {\r\n        const sectionTop = section.getBoundingClientRect().top;\r\n        const isSectionVisible = sectionTop - windowMetade < 0;\r\n        if (isSectionVisible) section.classList.add('ativo');\r\n        else if (section.classList.contains('ativo')) {\r\n          section.classList.remove('ativo');\r\n        }\r\n      });\r\n    }\r\n\r\n    animaScroll();\r\n\r\n    window.addEventListener('scroll', animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/scroll-anima.js?");

/***/ }),

/***/ "./assets/js/modules/scroll-suave.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/scroll-suave.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: 'smooth', block: 'start' };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(e) {\r\n    e.preventDefault();\r\n    const href = e.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener('click', this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/scroll-suave.js?");

/***/ }),

/***/ "./assets/js/modules/tab-nav.js":
/*!**************************************!*\
  !*** ./assets/js/modules/tab-nav.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nclass initTabNav {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.activeClass = 'ativo';\r\n  }\r\n\r\n  // ativa a tab de acordo com o index da mesma\r\n  activeTab(index) {\r\n    this.tabContent.forEach((section) => {\r\n      section.classList.remove(this.activeClass);\r\n    });\r\n    const direcao = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.activeClass, direcao);\r\n  }\r\n\r\n  // adiciona eventos ao tab nav\r\n  addTabNavEvent() {\r\n    this.tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener('click', () => this.activeTab(index));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      // ativar primeiro item\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/tab-nav.js?");

/***/ }),

/***/ "./assets/js/modules/tooltip.js":
/*!**************************************!*\
  !*** ./assets/js/modules/tooltip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\n/**\r\n * Inicializa tooltips em elementos com o atributo 'data-tooltip'.\r\n */\r\nfunction initTooltip() {\r\n  // Obter todos os elementos com o atributo 'data-tooltip'\r\n  const tooltips = document.querySelectorAll('[data-tooltip]');\r\n\r\n  // Adicionar um ouvinte de evento a cada elemento tooltip\r\n  tooltips.forEach((tooltip) => {\r\n    tooltip.addEventListener('mouseover', handleMouseOver);\r\n  });\r\n\r\n  /**\r\n   * Manipula o evento de mouseover em um elemento tooltip.\r\n   * @param {MouseEvent} event - O objeto de evento de mouseover.\r\n   */\r\n  function handleMouseOver(event) {\r\n    // Criar um elemento de tooltip box\r\n    const tooltipBox = createTooltipBox(this);\r\n\r\n    // Posicionar o elemento de tooltip box\r\n    tooltipBox.style.top = `${event.pageY + 20}px`;\r\n    tooltipBox.style.left = `${event.pageX + 20}px`;\r\n\r\n    // Adicionar a classe 'visible' para exibir o elemento de tooltip box\r\n    tooltipBox.classList.add('visible');\r\n\r\n    // Adicionar um ouvinte de evento para remover o elemento de tooltip box ao sair do mouse\r\n    this.addEventListener('mouseleave', () => {\r\n      tooltipBox.classList.remove('visible');\r\n      tooltipBox.remove();\r\n    });\r\n\r\n    // Adicionar um ouvinte de evento para atualizar a posição do elemento de tooltip box ao mover o mouse\r\n    this.addEventListener('mousemove', (e) => {\r\n      tooltipBox.style.top = `${e.pageY + 20}px`;\r\n      tooltipBox.style.left = `${e.pageX + 20}px`;\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Cria um elemento de tooltip box com o texto do atributo 'aria-label' de um elemento.\r\n   * @param {HTMLElement} element - O elemento para o qual criar o tooltip box.\r\n   * @returns {HTMLElement} - O elemento de tooltip box criado.\r\n   */\r\n  function createTooltipBox(element) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/modules/tooltip.js?");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./assets/js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./assets/js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./assets/js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./assets/js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./assets/js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./assets/js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./assets/js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./assets/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./assets/js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_aves_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-aves.js */ \"./assets/js/modules/fetch-aves.js\");\n/* harmony import */ var _modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-btc.js */ \"./assets/js/modules/fetch-btc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-anime=\"accordion\"] dt');\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\r\ntabNav.init();\r\n\r\n(0,_modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetch_aves_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_btc_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://aves-fantasticas/./assets/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/script.js");
/******/ 	
/******/ })()
;
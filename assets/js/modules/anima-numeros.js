export default function initAnimaNumber() {
  function animaNumeros() {
    const numberElements = document.querySelectorAll('[data-numero]');

    numberElements.forEach((element) => {
      const totalNumber = +element.innerText;
      const increment = Math.floor(totalNumber / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + increment;
        element.innerText = start;
        if (start > totalNumber) {
          element.innerText = totalNumber;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}

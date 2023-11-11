export default function outsideClick(dropdown, events, callback) {
  const html = document.documentElement;
  const dataOutside = 'data-outside';

  if (!dropdown.hasAttribute(dataOutside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    dropdown.setAttribute(dataOutside, '');
  }

  function handleOutsideClick(event) {
    if (!dropdown.contains(event.target)) {
      dropdown.removeAttribute(dataOutside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';

    hamburger.setAttribute('aria-expanded', !expanded);
    menu.hidden = !menu.hidden;
    hamburger.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  });
});

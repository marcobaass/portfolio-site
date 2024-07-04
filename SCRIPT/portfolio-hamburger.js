document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const icon = document.querySelector('i');

  hamburger.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';

    hamburger.setAttribute('aria-expanded', !expanded);

    menu.hidden = !menu.hidden;

    hamburger.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');

    if (expanded) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });
});

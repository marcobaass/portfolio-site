const elements = document.querySelectorAll('.observation');
console.log(elements);

const elementOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const elementsObserver = new IntersectionObserver ((entries, elementsObserver) => {
  entries.forEach(entry => {
    console.log('Entry:', entry);
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log('Intersecting:', entry.target);
      entry.target.classList.remove('hidden');
      elementsObserver.unobserve(entry.target);
    }
  })
}, elementOptions);

elements.forEach(element => {
  elementsObserver.observe(element);
});

// --------- scroll up button -------------

document.querySelector('.up').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

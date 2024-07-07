const images = document.querySelectorAll("[data-src]");
console.log("Number of images found:", images.length);

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src) {
    return;
  }
  img.src = src;
};

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -650px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting ) {
      return;
    } else {
      console.log("Loading image:", entry.target.getAttribute("data-src"));
      preloadImage(entry.target);
      entry.target.classList.add('fullsize');
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
});

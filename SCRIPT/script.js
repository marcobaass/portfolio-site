function changeFont(element) {
  // const fontArray = ['PlaywriteES', 'Roboto', 'Bungee', 'Indie Flower', 'Passion One', 'Lobster'];
  const fontArray = ['Montserrat', 'Noto Sans', 'Open Sans', 'Raleway', 'Roboto', 'Poppins'];
  let rnd = Math.floor(Math.random() * fontArray.length);
  element.style.setProperty('--font', fontArray[rnd]);
}

document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll('.typo');
  const myName = ['M', 'A', 'R', 'C', 'O', 'B', 'A', 'A', 'S', 'S'];

  async function animateCharacter(span, char, index) {
    let isFixed = false; // Flag to track if the character is fixed

    // Initial random character assignment
    let intervalId = setInterval(() => {
      if (!isFixed) {
        const randomChar = getRandomUppercaseChar();
        if (randomChar !== char) {
          span.textContent = randomChar;
        } else {
          clearInterval(intervalId);
          span.textContent = char;
          span.style.setProperty('--font', 'Lato');
          isFixed = true;
        }
      }
    }, 50);

    // Change the font in intervals
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        if (!isFixed) {
          changeFont(span);
        }
      }, i * 250 + index * 100);
    }

    // Clear the interval after the desired time and fix the character
    return new Promise((resolve) => {
      setTimeout(() => {
        clearInterval(intervalId);
        span.textContent = char; // Set to the fixed character finally
        span.style.setProperty('--font', 'Abril Fatface'); // Set the fixed font style
        isFixed = true; // Mark the character as fixed
        resolve();
      }, 250);
    });
  }

  (async function animateName() {
    for (let i = 0; i < myName.length; i++) {
      await animateCharacter(spans[i], myName[i], i);
    }
  })();
});

function getRandomUppercaseChar() {
  let randomCharCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
  return String.fromCharCode(randomCharCode);
}

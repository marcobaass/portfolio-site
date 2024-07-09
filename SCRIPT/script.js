document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll('.typo');
  const myName = ['M', 'A', 'R', 'C', 'O', 'B', 'A', 'ß'];

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
          isFixed = true;
        }
      }
    }, 50);
  }

  (async function animateName() {
    for (let i = 0; i < myName.length; i++) {
      await animateCharacter(spans[i], myName[i], i);
    }
  })();
});

function getRandomUppercaseChar() {
  let randomCharCode = Math.floor(Math.random() * 27) + 65;
  if(randomCharCode === 91) {randomCharCode = 223};
  return String.fromCharCode(randomCharCode);
}

document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll('.typo');
  const myName = ['M', 'A', 'R', 'C', 'O', 'B', 'A', 'ß'];
  let isFixedCount = 0; // Added a counter to track fixed characters

  async function animateCharacter(span, char, index) {
    let isFixed = false;
    let i = 0;

    let intervalId = setInterval(() => {
      if (i < 30) {
        i++;
      } else {
        clearInterval(intervalId);
        span.textContent = char;
        isFixed = true;
        isFixedCount++;
        if (isFixedCount === myName.length) {
          startRandomAnimations(); // Call function to start random animations after all characters are fixed
        }
      }

      if (!isFixed) {
        const randomChar = getRandomUppercaseChar();
        if (randomChar !== char) {
          span.textContent = randomChar;
        } else {
          clearInterval(intervalId);
          span.textContent = char;
          isFixed = true;
          isFixedCount++;
          if (isFixedCount === myName.length) {
            startRandomAnimations(); // Call function to start random animations after all characters are fixed
          }
        }
      }
    }, 50);
  }

  (async function animateName() {
    for (let i = 0; i < myName.length; i++) {
      await animateCharacter(spans[i], myName[i], i);
    }
  })();

  async function animateRandomCharacter(span, char) {
    i = 0

    let intervalId = setInterval(() => {
        const randomChar = getRandomUppercaseChar();
        if (randomChar !== char && i < 10) {
          span.textContent = randomChar;
          i++;
        } else {
          clearInterval(intervalId);
          span.textContent = char;
        }

    }, 50); // Adjust the interval time if needed
  }

  function chooseRandomCharacter() {
    const i = Math.floor(Math.random() * spans.length);
    const span = spans[i];
    const char = myName[i];
    animateRandomCharacter(span, char);
  }

  function startRandomAnimations() {
    setInterval(chooseRandomCharacter, getRandomTimeInterval()); // Start random animations at intervals
  }

  function getRandomTimeInterval() {
    // Return a random interval between 1 and 5 seconds
    return Math.floor(Math.random() * 2000) + 1000;
  }
});

function getRandomUppercaseChar() {
  let randomCharCode = Math.floor(Math.random() * 27) + 65;
  if (randomCharCode === 91) { randomCharCode = 223 };
  return String.fromCharCode(randomCharCode);
}

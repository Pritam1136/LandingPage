const quotes = [
  "MERN stack developer",
  "Open source enthusiast",
  "Data structures algorithm",
];

const quoteElement = document.querySelector(".quote");

let currentQuoteIndex = 0;
let currentQuote = quotes[currentQuoteIndex];

function typeWriter() {
  const currentText = currentQuote.slice(0, currentCharIndex);
  quoteElement.textContent = currentText;
  currentCharIndex++;

  if (currentCharIndex <= currentQuote.length) {
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(changeQuote, 2000);
  }
}

function changeQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  currentQuote = quotes[currentQuoteIndex];
  currentCharIndex = 0;
  typeWriter();
}

changeQuote(); // Start the dynamic text effect

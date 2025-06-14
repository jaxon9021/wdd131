// script.js

// Input elements
const cardNumberInput = document.getElementById('card-number');
const cardHolderInput = document.getElementById('card-holder');
const expMonthInput = document.getElementById('exp-month');
const expYearInput = document.getElementById('exp-year');
const cvvInput = document.getElementById('cvv');

// Display elements
const cardNumberDisplay = document.getElementById('card-number-display');
const cardHolderDisplay = document.getElementById('card-holder-display');
const expMonthDisplay = document.getElementById('exp-month-display');
const expYearDisplay = document.getElementById('exp-year-display');
const cvvDisplay = document.getElementById('cvv-display');

// Format card number with spaces every 4 digits
function formatCardNumber(value) {
  return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}

cardNumberInput.addEventListener('input', () => {
  const formatted = formatCardNumber(cardNumberInput.value);
  cardNumberInput.value = formatted;
  cardNumberDisplay.textContent = formatted.padEnd(19, '#');
});

cardHolderInput.addEventListener('input', () => {
  cardHolderDisplay.textContent = cardHolderInput.value || 'FULL NAME';
});

expMonthInput.addEventListener('input', () => {
  expMonthDisplay.textContent = expMonthInput.value.padStart(2, '0') || 'MM';
});

expYearInput.addEventListener('input', () => {
  expYearDisplay.textContent = expYearInput.value.padStart(2, '0') || 'YY';
});

cvvInput.addEventListener('input', () => {
  cvvDisplay.textContent = cvvInput.value.replace(/./g, '*') || '***';
});

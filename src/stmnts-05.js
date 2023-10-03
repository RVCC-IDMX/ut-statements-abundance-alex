/*
 * stmnts-05.js
 * Language: javascript
 * Test: tests/stmnts-05.test.js
 * Path: src/stmnts-05.js
 * Boolean expressions for numbers
 */

/**
 * Check if a number is odd
 * @param {number} num - number to check
 * @returns {boolean} - true if num is odd, false otherwise
 */
function isOdd(num) {
  const numOdd = (num % 2);
  const oddCheck = (numOdd !== 0);
  return oddCheck;
}

/**
 * Check if a number is even
 * @param {number} num - number to check
 * @returns {boolean} - true if num is even, false otherwise
 */
function isEven(num) {
  const numEven = num % 2;
  const evenCheck = numEven == 0;
  return evenCheck;
}

/**
 * Check if a value is a number and negative
 * @param {*} value
 * @returns {boolean} - true if value is a negative number, false otherwise
 */
function isNegative(value) {
  return typeof value === 'number' && value < 0;
}

module.exports = {
  isOdd,
  isEven,
  isNegative,
};

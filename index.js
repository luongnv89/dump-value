/* jshint esversion: 6 */
const { getRandomName } = require('./components/name');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomIntRange = (min, max) => (Math.floor(min) + Math.floor(Math.random() * Math.floor(max - min)));

/**
 * Get a random character in range of: A->Z or a->z
 */
const getRandomChar = () => {
  let charCode = getRandomIntRange(65, 116);
  if (charCode > 90) charCode += 6;
  return String.fromCharCode(charCode);
};

/**
 * Get a random lower case character (in a -> z)
 */
const getRandomCharLowerCase = () => {
  let charCode = getRandomIntRange(97, 122);
  return String.fromCharCode(charCode);
};

/**
 * Get a random upper case character (in A -> Z)
 */
const getRandomCharUpperCase = () => {
  let charCode = getRandomIntRange(65, 90);
  return String.fromCharCode(charCode);
};

module.exports = { getRandomInt, getRandomIntRange, getRandomChar, getRandomCharLowerCase, getRandomCharUpperCase, getRandomName };

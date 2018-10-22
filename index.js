const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRandomIntRange = (min, max) => (Math.floor(min) + Math.floor(Math.random() * Math.floor(max)));


module.exports = { getRandomInt, getRandomIntRange };

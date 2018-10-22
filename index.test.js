const { getRandomInt, getRandomIntRange } = require('./index.js');

console.log(getRandomInt(1));
console.log(getRandomInt(0));
for (let i = 0; i < 10; i++){
	console.log(getRandomInt(10));
}

for (let i = 0; i < 10; i++){
	console.log(getRandomIntRange(10,40));
}

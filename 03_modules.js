const { john, peter } = require('./04_names');
const sayHi = require('./05_utils');
require('./07_mind_grenade');
const { person, items } = require('./06_alternative_flavor');
sayHi('susan');
sayHi(john);
sayHi(peter);
console.log(items);
console.log(person);

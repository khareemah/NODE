const EventEmmitter = require('events');

const customEmmiter = new EventEmmitter();

customEmmiter.on('response', (name, id) => {
  console.log(`data received: user ${name} with id ${id}`);
});
customEmmiter.on('response', () => {
  console.log(`some other logic here`);
});
customEmmiter.emit('response', 'john', 34);

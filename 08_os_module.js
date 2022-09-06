const os = require('os');

// info about current users

const { userInfo, uptime, type, release, totalmem, freemem } = os;

const info = {
  //   userInfo: userInfo(),
  name: type(),
  uptime: uptime(),
  release: release(),
  totalmem: totalmem(),
  freemem: freemem(),
};

console.log(info);
console.log(userInfo());
// method returns the system uptime in seconds
console.log(`The sysytem uptime is ${uptime()} seconds`);

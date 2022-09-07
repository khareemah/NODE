const { readFile, writeFile } = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise('../content/first.txt', 'utf-8');
    const second = await readFilePromise('../content/second.txt', 'utf-8');
    const res = first + '\n' + second;
    await writeFilePromise('../content/mind-grenade.txt', res);
  } catch (error) {
    console.log(error);
  }
};
start();
//refactor promise to async and await

// const start = async () => {
//   try {
//     const first = await getText('../content/first.txt');
//     const second = await getText('../content/second.txt');
//     const result = first + '\n' + second;
//     console.log(result);
//     writeFile('../content/result_async.txt', result, (err, res) => {
//       if (err) {
//         console.log(error);
//         return;
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// using the good old promises
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (error, res) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// };

// getText('./content/first.txt')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

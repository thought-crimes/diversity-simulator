const fs = require('fs');
const fsp = require('fs').promises;

// const data = fs.readFileSync(__filename);

// fs.readFile(__filename, (err, data) => {
//   console.log(data);
// });

// fsp
//   .readFile(__filename)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function main() {
  try {
    const data = await fsp.readFile(__filename);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

main();

console.log('Hello');

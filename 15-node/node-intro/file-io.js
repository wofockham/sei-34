// recreate the cat program but in JS

const fs = require('fs');

// WRONG WAY: sync: not enough callbacks
// const fileData = fs.readFileSync('flintstones.txt', 'utf-8');
// console.log( fileData );

// "RIGHT" WAY: async
// Many asynchronous Node.js functions implement The Error First Pattern
fs.readFile('flintstones.txt', 'utf-8', function (error, result) {
  if (error) {
    return console.error(error); // A bit wanky.
  }
  console.log(result);
});

console.log( 'You will probably see this first' );

// TODO: Try the Yegge problem to sum integers from a text file with node.
// TODO: Try to rewrite this using Promises.

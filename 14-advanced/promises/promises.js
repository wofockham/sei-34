// Promises are an evolution of callbacks.
//   a way to handle or process data from async sources, whenever they're ready.

const fs = require('fs');

// readfile is async
// fs.readFile('simpsons.txt', 'utf-8', (err, content) => {
//   // error first pattern
//   if (err) {
//     throw err; // dramatic exit
//   }
//
//   console.log( content );
// });

// A promise wrapper around fs.readFile
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(content);
    })
  });
};

const fileReaderPromise = readFile('simpsons.txt');
// fileReaderPromise contains an object:
// {
//   then: function () {},
//   catch: function () {}
// }
fileReaderPromise.then((content) => {
  console.log( content );
});

fileReaderPromise.catch((err) => {
  console.error('SOMETHING BAD HAPPEN', err);
});

fileReaderPromise.then(() => {
  console.log('thanks for using the program');
});

fileReaderPromise.then((c) => {
  console.log( c.toUpperCase() );
})

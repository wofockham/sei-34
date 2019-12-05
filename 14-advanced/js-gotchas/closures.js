// BAD: id can be overwritten by someone else's code:

// let id = 0;
// const nextId = function () {
//   return id++;
// };

const idMaker = function () {
  // sets up an ID variable
  let id = 0; // This will persists through a closure.

  // We return a function which can still "see" id.
  return function () {
    return id++;
  };
};

const nextId = idMaker(); // nextId will store a function.
console.log( nextId() );
console.log( nextId() );
console.log( nextId() );
console.log( nextId() );

// HTML tags
// const p = function (content) {
//   return '<p>' + content + '</p>';
// }
//
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// }
//
// const h2 = function (content) {
//   return '<h2>' + content + '</h2>';
// }

const tagMaker = function (tagName) {
  return function (content) {
    return `<${ tagName }>` + content + `</${ tagName }>`
  };
};

const p = tagMaker( 'p' );
const h1 = tagMaker( 'h1' );
const h2 = tagMaker( 'h2' );
console.log( h2('hello world') )

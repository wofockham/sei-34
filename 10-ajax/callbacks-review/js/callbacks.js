// Callbacks Review /////////////////////////////////////////////////

// A callback function is a function provided to another function
// which calls your function for you, at some later point in time.

// Timers: order will A, C (pause) B
console.log('A');
setTimeout(function () {
  console.log('B: inside setTimeout -- time has passed');
}, 4000);
console.log('C');

// jQuery's document ready: order will be I, III
console.log('I: before the document ready');
$(document).ready(function () {
  console.log('II: the document is now ready');
});
console.log('III: after the document is ready');

// Event handlers: Groucho, Chico AND THEN MAYBE Harpo (maybe repeatedly)
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo');
});
console.log('Chico');

// YOU ARE NOT EXPECTED TO UNDERSTAND THIS
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// for (let i = 0; i < colors.length; i++) {
//   console.log( colors[i] );
// }

// colors.each do |c|
//   puts c
// end

const each = function (someArray, callbackFunction) {
  for (let i = 0; i < someArray.length; i++) {
    callbackFunction( someArray[i] );
  }
};

each(colors, function (c) {
  console.log( c );
});

each(['Groucho', 'Harpo', 'Chico'], function (brother) {
  console.log(brother.toUpperCase());
});

each(colors, console.log);

// .forEach added is ES5
colors.forEach(function (anyDamnThing) {
  console.log( anyDamnThing );
});

// Global Scope ////////////////////////////////////////////////////////////////

const message = "Hello World";

const showMessage = function () {
  console.log( message ); // The global constant is visible/accessible within the function.
};

showMessage();


// Function Scope //////////////////////////////////////////////////////////////
const showLocalMessage = function () {
  const localMessage = "Goodbye Cruel World";
  console.log( localMessage );
};

showLocalMessage();
// console.log( localMessage ); // localMessage is out of scope.


// var inside a block //////////////////////////////////////////////////////////
if (23 === 23) {
  var hotdogs = "with BBQ sauce";
  console.log( hotdogs );
}

console.log( hotdogs ); // var is still in scope

// Block scope (a let inside a block) //////////////////////////////////////////
if (24 === 24) {
  let goldfish = true; // in block scope
  console.log( goldfish );
}

// console.log( goldfish ); // let has gone out of scope.


// Block scope (let within a loop) /////////////////////////////////////////////

const bros = ['Groucho', 'Harpo', 'Chico'];

for (let i = 0; i < bros.length; i++) {
  console.log( bros[ i ] );
}

// console.log( i ); // Out of scope

// Block scope (const has the same scope as let) ///////////////////////////////
if (25 === 25) {
  const password = 'swordfish';
  console.log( password );
}

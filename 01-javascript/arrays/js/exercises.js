// # Your top choices
//
// - Create an array to hold your top choices (colors, presidents, whatever).
// - For each choice, log to the screen a string like: "My #1 choice is blue."

const beatles = ['George Harrison', 'Paul McCartney', 'John Lennon', 'Pete Best', 'Ringo Starr'];

for (let i = 0; i < beatles.length; i++) {
  console.log(`My #${ i+1 } choice is ${ beatles[i] }`);
}

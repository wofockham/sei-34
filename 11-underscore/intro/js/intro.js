console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// .each() /////////////////////////////////////////////////////////////////////

// es5 and greater: .forEach

// _.each(nums, function (number) {
//   console.log( number );
// });

_(nums).each(function (number, index, entireArray) {
  console.log( 'number', number );
  console.log( 'index', index );
  console.log( 'entireArray', entireArray );
});

// Objects
const obj = {
  4: 'four',
  5: 'five',
  "six": 6
};

_(obj).each(function (value, key, entireObject) {
  console.log('value', value);
  console.log('key', key);
  console.log('entireObject', entireObject);
});

const groucho = {
  name: 'Groucho Marx',
  instrument: 'guitar',
  vice: 'cigars'
};

_(groucho).each(function (value, key) {
  console.log(`${ key.toUpperCase() } is ${ value }.`);
});

// .map() //////////////////////////////////////////////////////////////////////
console.log( nums );

const byFive = function (n) {
  return n * 5;
};

const multiplesOfFive = _(nums).map(byFive);
console.log( multiplesOfFive );

// Objects
const grouchoFacts = _(groucho).map(function (v, k) {
  return `${ k } is ${ v }.`;
});
console.log( grouchoFacts );

// .reduce() ///////////////////////////////////////////////////////////////////
const sum = _(nums).reduce(function (runningTotal, n) {
  console.log('runningTotal', runningTotal, 'n', n);
  return runningTotal + n;
});
console.log( sum );

// .reduce() also works with objects

// .find() /////////////////////////////////////////////////////////////////////
const firstMultipleOfFive = _(nums).find(function (n) {
  console.log('considering', n, n % 5 === 0);
  return n % 5 === 0; // return true or false
});

// .find() also works with objects and if you find a use for it, i will buy a beer.

// .filter() ///////////////////////////////////////////////////////////////////
const isEven = function (n) {
  return n % 2 === 0;
};

const evens = _(nums).select( isEven );
console.log( evens ); // The Evens are a great band from Washington DC

// .reject() ///////////////////////////////////////////////////////////////////
const odds = _(nums).reject( isEven );
console.log( odds );

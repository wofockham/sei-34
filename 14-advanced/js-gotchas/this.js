const groucho = {
  fullname: 'Groucho Julius Marx',
  greeting() {
    return 'Good evening, my name is ' + this.fullname
  }
};

console.log( groucho.greeting() );

const unboundGreeting = groucho.greeting;
console.log( unboundGreeting() );

// .bind() ///////////////////////////////////////////////////////////////////
const boundGreeting = groucho.greeting.bind( groucho );
console.log( boundGreeting() );

const differentGreeting = groucho.greeting.bind( {fullname: 'Harpo Marx'} );
console.log( differentGreeting() );

// .call() ///////////////////////////////////////////////////////////////////
console.log( unboundGreeting.call( groucho ) );
console.log( unboundGreeting.call( {fullname: 'Harpo Marx'} ) );

const numbers = [99, 88, 77. 66];
// .apply() //////////////////////////////////////////////////////////////////
Math.max.apply( null, numbers ); // es5
Math.max( ...numbers ); // es6

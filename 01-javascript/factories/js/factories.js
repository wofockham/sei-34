// Factories Mass Produce Objects

const catFactory = function (n, a, f) { // n: name, a: age, f: fur color
  return {
    name: n,
    age: a,
    furColor: f,
    meow: function () {
      console.log( this );
      console.log('Meow, my name is ' + this.name);
    }
  };
};

const cuteCats = [
		// { name: "Angel", age: 18, furColor: "grey" },
		// { name: "Evil", age: 14, furColor: "red" },
		// { name: "Meh", age: 12, "Fur Color": "white" }
    catFactory('Angel', 18, 'grey'),
    catFactory('Evil', 14, 'red'),
    catFactory('Meh', 12, 'white')
];

for (let i = 0; i < cuteCats.length; i++) {
  const cat = cuteCats[i];
  console.log(`${ cat.name } has ${ cat.furColor } fur.`);
}

// Prototypal Inheritance //////////////////////////////////////////////////////
// Historically interesting but not essential (for now/or anymore).

// Constructor
const Cat = function (n, a, f) {
  // No need to create the object: it's already there and it's called "this".
  this.name = n;
  this.age = a;
  this.furColor = f;
  this.meow = function () {
    console.log('Meow, my name is ' + this.name);
  };
  // no need to return "this" -- it gets returned automagically.
};

// Instances
const cooper = new Cat('Cooper', 2, 'grey');
const audrey = new Cat('Audrey', 2, 'grey');

// The main advantage of prototypes:
// You can extend the prototype AFTER you create your "instances".
Cat.prototype.species = 'feline';
Cat.prototype.eat = function (food) {
  console.log('Yum, I love to eat ' + food);
};

audrey.eat('gelatin');

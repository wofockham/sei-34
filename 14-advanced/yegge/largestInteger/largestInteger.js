const inputs = [1, 4, 25, 7, -12];

// const findLargest = (values) => {
//   let largest = values[0];
//
//   for (let i = 1; i < values.length; i++) {
//     if (values[i] > largest) {
//       largest = values[i];
//     }
//   }
//
//   return largest;
// };

// Everything is reduce
// const findLargest = (values) => {
//   return values.reduce((largestSoFar, current) => {
//     console.log(`largestSoFar: ${ largestSoFar }, current: ${ current }`);
//     if (current > largestSoFar) {
//       return current;
//     } else {
//       return largestSoFar;
//     }
//   });
// };

// const findLargest = (values) => values.reduce( (max, n) => n > max ? n : max );

const findLargest = (values, max=-Infinity) => {
  if (values.length === 0) { // base case
    return max;
  } else {
    return findLargest( values.slice(1), values[0] > max ? values[0] : max );
  }
};

console.log( findLargest(inputs) );

const reverse = (input) => {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    output = input[i] + output; // reverse order
  }
  return output;
};

console.log( reverse('hotdogs') );

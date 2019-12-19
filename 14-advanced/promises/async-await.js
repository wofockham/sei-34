const axios  = require('axios');

axios.get('http://numbersapi.com/666?json').then((response) => {
  console.log(response.data);
  console.log('Thank you and goodbye');
});

// 1. await only works with Promises (Thennable)
// 2. await only works inside a function AND that function must be marked as async

const getNumberFact = async function () {
  const result = await axios.get('http://numbersapi.com/666?json');
  console.log( result.data );
};

getNumberFact();

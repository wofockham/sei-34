const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const server = express(); // often called app
server.use(express.static('public'));
server.set('view-engine', ejs);

const PORT = 1337; // Define the port just once for ease of modification later.

server.get('/', (req, res) => {
  const brothers = 'Groucho Harpo Chico Zeppo'.split(' ');
  const randomBrother = _(brothers).sample();
  res.render('home.ejs', { randomBrother: randomBrother }); // Instance variables.
});

server.get('/faq', (req, res) => {
  res.send('FAQ coming soon');
});

// params[:name]
server.get('/hello/:name', (req, res) => {
  console.log( req.params );
  res.send(`Hello ${ req.params.name }`)
});

server.get('/calculator/:x/:y/:operator', (req, res) => {
  let answer;
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } else if (req.params.operator === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  }

  res.render('calculator.ejs', {result: answer});
});

server.get('/info.json', (req, res) => {
  res.json({
    name: 'Groucho',
    instrument: 'guitar',
    vice: 'cigars',
    luckyNumber: _.random(40)
  });
});

server.get('/trivia', (req, res) => {
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    res.render('trivia.ejs', { trivia: response.data })
  });
});

server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }`));

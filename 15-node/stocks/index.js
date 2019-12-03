const express = require('express');
const ejs = require('ejs');
const stockfinder = require('stockfinder');

const PORT = 1337;
const APIKEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';

const server = express();
server.set('view-engine', ejs);

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/info', (req, res) => {
  const symbol = req.query.symbol;
  stockfinder(symbol, APIKEY).then((quotes) => {
    if (quotes.length > 0) {
      res.render('info.ejs', {symbol: symbol, quotes: quotes});
    } else {
      res.redirect('/');
    }
  }).catch((err) => {
    res.redirect('/');
  });
});

server.listen(PORT, () => console.log('Listening on http://localhost:' + PORT));

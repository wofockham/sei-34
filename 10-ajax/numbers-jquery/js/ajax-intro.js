const fetchFact = function () {
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (result) {
    $('h1').after(`<p>${ result.text }</p>`);
  });
};

$(document).ready(function () {
  document.getElementById('fetch').addEventListener('click', fetchFact);
  fetchFact();
});

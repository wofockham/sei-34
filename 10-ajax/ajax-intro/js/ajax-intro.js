// create an XHR object
const xhr = new XMLHttpRequest();

// open an AJAX GET request to the desired URL
xhr.open('GET', 'http://numbersapi.com/random/trivia');

// send the request
xhr.send(); // Asynchronous

// display the result
xhr.onreadystatechange = function () {
  console.log('the ready state has changed', xhr.readyState, xhr.responseText);
  document.body.innerHTML += xhr.responseText;
};

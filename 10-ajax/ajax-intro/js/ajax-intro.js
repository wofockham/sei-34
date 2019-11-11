const fetchFact = function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');

  xhr.send(); // Asynchronous

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // It's too soon for us to see any complete data.
    }

    // Convert the JSON string into an actual JS object.
    const data = JSON.parse( xhr.responseText );

    const p = document.createElement('p');
    p.innerHTML = data.text; // data["text"]

    document.body.appendChild(p);
  };
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();

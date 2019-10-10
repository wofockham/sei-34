// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';

document.getElementById('favorites').innerHTML = 'red, green, blue';
document.getElementById('hometown').innerText = 'Sydney';

// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const listItems = document.querySelectorAll('li');

for (let i = 0; i < listItems.length; i++) {
  const listItem = listItems[ i ];
  listItem.className = 'listitem';
}

// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const bill = document.createElement('img'); // Detached DOM node.
bill.src = 'http://www.fillmurray.com/80/150';
document.body.appendChild( bill );

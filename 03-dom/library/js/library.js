const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

for (let i = 0; i < books.length; i++) {
  const book = books[ i ];
  const p = document.createElement('p'); // Detached DOM node
  p.innerText = `${ book.title } by ${ book.author }`;
  document.body.appendChild( p );
}

// - Bonus: Use a ul and li to display the books.
// - Bonus: Change the style of the book depending on whether you have read it or not.

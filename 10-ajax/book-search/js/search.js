const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Stay on this page: prevent the form submission

  const bookTitle = document.getElementById('book_title').value;
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const data = JSON.parse( xhr.responseText );
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;

    document.getElementById('cover').setAttribute('src', cover);
  }
});

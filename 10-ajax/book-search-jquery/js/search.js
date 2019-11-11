$(document).ready(function () {
  const $searchForm = $('form');

  $searchForm.on('submit', function (event) {
    event.preventDefault(); // Stay on this page: prevent the form submission

    const bookTitle = $('#book_title').val();
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;

      const data = JSON.parse( xhr.responseText );
      const cover = data.items[0].volumeInfo.imageLinks.thumbnail;

      $('#cover').attr('src', cover);
    }
  });
});

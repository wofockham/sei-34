$(document).ready(function () {
  const $searchForm = $('form');

  $searchForm.on('submit', function (event) {
    event.preventDefault(); // Stay on this page: prevent the form submission

    const bookTitle = $('#book_title').val();
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`;

    // Classic jQuery
    // $.ajax(url, {
    //   success: function (data) {
    //     const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    //     $('#cover').attr('src', cover);
    //   }
    // });

    // Deferred style:
    $.ajax(url).done(function (data) {
      const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
      $('#cover').attr('src', cover);
    }).done(function (result) {
      console.log(result);
    }).fail(function () {
      alert('Something bad happen');
    });

  });
});

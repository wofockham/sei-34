const showImages = function (results) {
  // Nested helper function
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // Change this to something to else for different sizes (see docs)
    ].join('');
  };

  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL( photo );
    const $img = $('<img>', {src: thumbnailURL}); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images');
  });
};

const searchFlickr = function (terms) {
  console.log("Searching Flickr for", terms);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
    text: terms,
    format: 'json'
  }).done(showImages).done(console.log);
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.
    $('#images').empty();
    const query = $('#query').val();
    searchFlickr( query );
  });

  // Extremely twitchy
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 650) {
      const query = $('#query').val();
      searchFlickr( query );
    }
  });
});

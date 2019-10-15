const thumbnailify = function ($link) {
  const href = $link.attr('href'); // one argument: getter
  const thumbnailURL = youtube.generateThumbnailUrl( href );

  const $image = $('<img>'); // Detached DOM node
  $image.attr('src', thumbnailURL); // two arguments: setter

  $link.prepend( $image );

  $link.on('click', function (event) {
    event.preventDefault(); // Do not follow the link.

    const embedURL = youtube.generateEmbedUrl( href );
    const embedCode = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    $('#player').hide().html( embedCode ).fadeIn(3000);
  });
};

const $links = $('li a'); // Hungarian notation for a jQuery object

for (let i = 0; i < $links.length; i++) {
  thumbnailify( $links.eq(i) ); // $( $links[i] )
}

$('h2').funText(100, 'candy');

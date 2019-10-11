const $links = $('li a'); // Hungarian notation for a jQuery object

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq( i ); // Save the ith link into its own variable.

  const href = $link.attr('href'); // one argument: getter
  const thumbnailURL = youtube.generateThumbnailUrl( href );

  const $image = $('<img>'); // Detached DOM node
  $image.attr('src', thumbnailURL); // two arguments: setter

  $link.prepend( $image );
}

// $('li a').each(function () {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl($(this).attr('href')))
//   );
// });

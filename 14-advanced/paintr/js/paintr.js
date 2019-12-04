$(document).ready(function () {
  $('#add-color').on('click', () => {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('#palette');
  });

  // Event Delegation: attach event handlers to elements that don't exist yet
  // $(parent).on(event, child, callback)
  $('#palette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected'); // Deselect everything
    $(this).addClass('selected');
  });

  $('#canvas').html( '<div class="pixel" />'.repeat(2000) );

  // Event Delegation: for efficiency
  $('#canvas').on('mouseover', '.pixel', function (event) {
    // Hold shift to enable painting.
    if (event.shiftKey === false) {
      return;
    }

    const color = $('.selected').css('background-color');
    $(this).css('background-color', color);
  });
});

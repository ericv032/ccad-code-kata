 //Menu toggle

$('#open').click(function(event) {
    event.preventDefault();

    $('.slidein-panel').toggle('slide', {
      direction: 'left'
      }, 200);
});

$('.m-close-btn').click(function() {
    $('.slidein-panel').toggle('slide', {
    direction: 'left'
  }, 200);


});
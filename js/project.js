$(document).ready( function() {
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 300,
      gutter: 50,
      isFitWidth: true
    });
  });

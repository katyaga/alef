$(document).ready( function () {

  $('.fa-bars').click(function () {
    var $side_menu = $('.side-menu');

    if (window.matchMedia("(min-width: 1024px)").matches) {

      if ($side_menu.css('display') === 'none') {
        $side_menu.toggleClass('d-lg-block');
        $side_menu.show('slide', {direction: 'up'}, 300);
      } else {
        $side_menu.toggleClass('d-lg-block');
        $side_menu.hide('slide', {direction: 'up'}, 300);
      }
    } else {
      $side_menu.toggleClass('d-none');
    }
  });

});

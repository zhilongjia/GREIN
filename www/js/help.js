// Generated by CoffeeScript 1.6.2
(function() {
  $(function() {
    $('body').chardinJs();

    $('a[data-toggle="chardinjs"]').on('click', function(e) {
//      e.preventDefault();
//      if ($('div#tutorial').is(':visible')) {
//        return ($('body').data('chardinJs')).toggle();
//      } else {
//        return $('div#tutorial').animate({
//          height: 250
//        }, 600, function() {
          $('div#tutorial').css({
              display: 'block','margin-top':150
            });
//      	$('a').css({
//            'z-index':9999997,color:'#ffffff'
//          });
          return ($('body').data('chardinJs')).toggle();
          //        });
//      }
    });
    return $('body').on('chardinJs:stop', function() {
//      $('a.btn.primary').off('click').text('See more on Github').attr('href', 'https://github.com/heelhook/chardin.js');
      return $('div#tutorial').css({
    	margin:0
     });
    });
  });

}).call(this);

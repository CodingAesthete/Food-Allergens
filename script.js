(function () {
  "use strict";

  $('#tabs > ul > li > a').click(function () {
    $('#tabs > ul > li > a').css({ background: '#79158d' });
    $(this).css({ background: '#cf34ee' });
    const id = $(this).attr('href');
    $('#tabs > div:visible').fadeOut(200, function() {
      $('#tabs > ' + id).fadeIn(200);
    });
  });

})();
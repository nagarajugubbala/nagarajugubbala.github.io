(function ($) {
  "use strict";

  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 600);
  };
  spinner();

  new WOW().init();

  if ($('.typed-text-output').length === 1) {
    var typedStrings = $('.typed-text').text();
    new Typed('.typed-text-output', {
      strings: typedStrings.split(', '),
      typeSpeed: 70,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    });
  }

  $(document).on('click', 'a[href^="#"]', function (event) {
    var target = this.getAttribute('href');
    if (target && target !== '#') {
      event.preventDefault();
      $('html, body').animate({ scrollTop: $(target).offset().top - 20 }, 700);
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 700);
    return false;
  });
})(jQuery);


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
      $('.back-to-top').stop(true, true).fadeIn(180).addClass('is-visible');
    } else {
      $('.back-to-top').stop(true, true).fadeOut(140).removeClass('is-visible');
    }

    $('.content-card, .hero-card').each(function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportBottom = $(window).scrollTop() + $(window).height() * 0.92;
      if (elementTop < viewportBottom && elementBottom > $(window).scrollTop()) {
        $(this).addClass('is-visible');
      }
    });
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 700);
    return false;
  });
})(jQuery);


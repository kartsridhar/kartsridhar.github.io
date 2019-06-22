$(window).scroll(function() {
  $('#skills').each(function() {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 400) {
        $(this).addClass("slideExpandUp");
      }
  });
});

$(window).scroll(function() {
  $('#scot1').each(function() {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 400) {
        $(this).addClass("expandOpen");
      }
  });
});

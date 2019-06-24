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

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle navigation
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }
    });

    //Burger animation
    burger.classList.toggle('toggle');
  });
}

navSlide();

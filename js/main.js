$(function () {

  $('.main__burger').click(function () {
    $('.main__burger').toggleClass('main__burger-active');
    $('.header__menu').toggleClass('header__menu-active');
    $('body').toggleClass('lock');
  });

  $('.header__content-link').click(function () {
    $('.header__menu').removeClass('header__menu-active');
    $('.main__burger').removeClass('main__burger-active');
    $('body').removeClass('lock');
  });

  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  $(".rating").rateYo({
    rating: 5,
    starWidth: "14px",
    readOnly: true,
    spacing: "1px",
    multiColor: {
      "startColor": "#C79A3F",
      "endColor": "#C79A3F"
    }
  });



  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      370: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      715: {
        slidesPerView: 3,
      },
      1160: {
        slidesPerView: 4,
        spaceBetween: 15,
      }
    }
  });

  AOS.init({
    offset: 200,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 100,
    once: true,
  });


  var mixer = mixitup('.products__items');
});
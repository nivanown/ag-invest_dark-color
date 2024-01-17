/*- animation */
$('.first-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInLeft',
    offset: 100
  });

$('.second-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInRight',
    offset: 100
  });

$('.third-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInUp',
    offset: 100
  });

$('.fourth-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInDown',
    offset: 100
  });

$('.five-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInTopLeft',
    offset: 100
  });

$('.six-animation')
  .addClass('invisible')
  .viewportChecker({
    classToAdd: 'visible animate__animated animate__fadeInTopRight',
    offset: 100
  });

/*- down scroll -*/ 
const $page = $('html, body');

$('.down-btn').click(function() {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 700);
  return false;
});

/*- counter -*/
var counted = 0;

$(window).scroll(function() {
  var oTop = $('.counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.counter__number span').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    counted = 1;
  }
});

/*- company-slider -*/
var swiper = new Swiper('.company-slider', {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    clickable: true,
    el: '.company-slider .swiper-pagination',
  },
});

/*- brans-slider -*/
var swiper = new Swiper('.brans-slider', {
	autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  speed: 1000,
  slidesPerView: 6,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 130,
    },
    680: {
      slidesPerView: 5,
  		spaceBetween: 50,
    },
    860: {
      slidesPerView: 5,
  		spaceBetween: 90,
    },
    1025: {
      slidesPerView: 5,
  		spaceBetween: 130,
    },
  }, 
});

/*- accordion -*/
$('.accordion__header').click(function() {
  $(this).next().slideToggle(200);
  $(this).toggleClass('show', 200);
});
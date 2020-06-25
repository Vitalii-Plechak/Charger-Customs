$(function(){
  var btn = $('#topBtn');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('topBtn-show');
    } else {
      btn.removeClass('topBtn-show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '500');
  });
});

$(function(){

  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    nextArrow: '<button type="button" class="slick-btn slick-next">next</button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev">prev</button>',
  });

  $('.comment__slider-inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    nextArrow: '<button type="button" class="slick-button icon-chevron-right"></button>',
    prevArrow: '<button type="button" class="slick-button icon-chevron-left"></button>',
  });

});

$(function (){

  let hamburger = document.querySelector('.menu-btn');
  let menu = document.querySelector('.header__menu');
  let link = document.querySelector('.header__menu-link');

  const toggleMenu = () => {
    menu.classList.toggle('header__menu-active');
    hamburger.classList.toggle('menu-btn_active');
    link.classList.toggle('link_active');
  }

  hamburger.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
  });

  link.addEventListener('click', e => {
    e.stopPropagation();
    
    toggleMenu();
  });

  document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == hamburger;
    let its_link = target == hamburger;
    let menu_is_active = menu.classList.contains('header__menu-active');

    if (!its_menu && !its_hamburger && !its_link && menu_is_active) {
      toggleMenu();
    }
  })

});

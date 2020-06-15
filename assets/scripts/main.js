$(document).ready(function(){
  /* ==========================
     MOBILE MENU
  ========================== */
  $('.nav__item--has-sub').on('click', function(){
    $(this).toggleClass('active');
  });
  $('.overlay').on('click', function(){
    $('body').removeClass('nav-opened');
  });

  /* ==========================
     HOME
  ========================== */
  $('.banner__slides--slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $('.home__testimonials-slider').slick({
    dots: false,
    arrows: false
  });

  /* ==========================
     CATEGORY PHOTOS
  ========================== */
  $('.category__photo-wrapper').magnificPopup({
    type: 'image',
    gallery:{
      enabled: true
    }
  });

  /* ==========================
     PROMOTIONS
  ========================== */
  $('.product-item').magnificPopup({
    type: 'inline'
  });

  /* ==========================
     CATALOGUE SEARCH
  ========================== */
  $('.category__search-form .search__input').on('keyup input', function(e){
    var inputtedValue = e.target.value.toLowerCase();
    var $titleWrapper = $('.page__title-wrapper');
    var $categoryWrapper = $('.catalogue__category-wrapper');
    if(inputtedValue.length > 0){
      $titleWrapper.hide();
    } else {
      $titleWrapper.show();
    }
    $categoryWrapper.each(function(){
      var title = $(this).attr('data-category-title');
      if(title.indexOf(inputtedValue) < 0){
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });

  /* ==========================
     SUPPLIER SEARCH
  ========================== */
  $('.supplier__search-form .search__input').on('keyup input', function(e){
    var inputtedValue = e.target.value.toLowerCase();
    var $brandWrapper = $('.supplier');
    $brandWrapper.each(function(){
      var title = $(this).attr('data-title');
      if(title.indexOf(inputtedValue) < 0){
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });

  /* ==========================
     CATEGORY PHOTOS
  ========================== */
  $('.category__photo-wrapper, .gallery__photo-wrapper').magnificPopup({
    type: 'image',
    gallery:{
      enabled: true
    }
  });


  /* ==========================
     FORM VALIDATION
  ========================== */
  $('.form-submit').on('click touchstart', function(){
    console.log('hello');
    var currentCount = 0;
    var theForm = $(this).closest('form');
    var requiredCount = theForm.find('.required').length;
    var formButton = $(this);
    theForm.find('.required').each(function(){
      var inputWrapper = $(this).closest('.input-wrapper');
      if($(this).val().length > 0){
        inputWrapper.removeClass('input-error');
        currentCount++;
      } else {
        inputWrapper.addClass('input-error');
        if(theForm.find('.input-error-message').length == 0){
          formButton.after('<p class="input-error-message">Please enter all required fields before submitting.</p>');
        }
      }
    });
    if(currentCount == requiredCount){
      theForm.submit();
    }
  });

  $('.required').on('focusin', function(){
    $(this).closest('input-error').removeClass('input-error');
  });


  /* ==========================
     RESPONSIVE MENU
  ========================== */
  // if($(window).width() > 768){
  //   $(window).resize(function(){
  //     responsiveNav();
  //   });
  //   responsiveNav();
  // } else {
  //   $('.nav__item-wrapper .nav__item').prependTo('.sub-nav__inner').removeClass('nav__item').addClass('sub-nav__item');
  // }
});

// function responsiveNav(){
//   var maxWidth = $('.nav__wrapper').outerWidth(),
//       navItemWrapper = $('.nav__item-wrapper').outerWidth(),
//       navItemButton = $('.nav__item--has-sub').outerWidth(),
//       total = navItemWrapper+navItemButton+30;
//   if(total > maxWidth){
//     $('.nav__item-wrapper .nav__item').last().prependTo('.sub-nav__inner').removeClass('nav__item').addClass('sub-nav__item');
//     responsiveNav();
//   }
// }
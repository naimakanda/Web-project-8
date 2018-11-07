$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
    
    $('body').scrollspy({ target: '#navbarSupportedContent' });
    
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        infinite: true,
        speed: 500,
        prevArrow: '.left',
        nextArrow: '.right',
        fade: true,
        dots: true,
        cssEase: 'linear'
    });
    
    new WOW().init();

    // Select all links with hashes
//$('#navigation ul li a[href*="#"]')
//  // Remove links that don't actually link to anything
//  .not('[href="#"]')
//  .not('[href="#0"]')
//  .click(function(event) {
//    // On-page links
//    if (
//      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//      && 
//      location.hostname == this.hostname
//    ) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//      if (target.length) {
//        event.preventDefault();
//        $('html, body').animate({
//          scrollTop: target.offset().top
//        }, 1000, function() {
//          var $target = $(target);
//          $target.focus();
//          if ($target.is(":focus")) { 
//            return false;
//          } else {
//            $target.attr('tabindex','-1'); 
//            $target.focus();
//          };
//        });
//      }
//    }
//  });


    //animation scroll js
	//a[href*="#"]:not([href="#"])
	var html_body = $('html, body');
    $('#navigation ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });
	
    
    
});
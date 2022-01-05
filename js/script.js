$(".panel-heading").parent('.panel').hover(
    function() {
      $(this).children('.collapse').collapse('show');
    }, function() {
      $(this).children('.collapse').collapse('hide');
    }
  );

/*
    Carousel
*/
$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 10,
            smartSpeed: 1000,
            autoplay: true,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive:{
                500:{
                    margin: 10,
                    nav: true,
                  items: 2
                },
                600:{
                    margin: 10,
                    nav: true,
                  items: 3
                },
                1000:{
                    margin: 10,
                    stagePadding: 0,
                    nav: true,
                  items: 5
                }
            }
        });            
    }

})
$(function() {

	$('#owl-hero').owlCarousel({
		items:1,
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    nav:true,
	    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    }); 


	$('#owl-hero2').owlCarousel({
		items:1,
	    loop:true,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoHeight:true,
	    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    }); 

    var $navbar = $(".my-nav"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("fix-my-nav").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("fix-my-nav").clearQueue().animate({
                top: "-50px"
            }, 0);
        }
    });
  });



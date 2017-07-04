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
  });



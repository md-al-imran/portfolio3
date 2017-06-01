
$(document).ready(function(){
    //water rippless
    $('.slide_item1, .slide_item2, .slide_item3, .slide_item4').ripples({
	resolution: 512,
	dropRadius: 24,
	perturbance: 0.01,
});
    //bnar slide
    $('.slide_contaniner').owlCarousel({
    loop:true,
    nav:true,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    autoplay:true,
    animateOut: 'fadeOut',
    animateIn: 'slideInLeft',
    smartSpeed:750,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    //this is for slider text control
    $(".owl-carousel").on('translate.owl.carousel',function(){
        $('.slide_text h1').removeClass('lightSpeedIn animated').hide();
        $('.slide_text p').removeClass('slideInDown animated').hide();
        $('.slide_text button').removeClass('slideInUp animated').hide();
   });
    
    $(".owl-carousel").on('translated.owl.carousel',function(){
        $('.owl-item.active .slide_text h1').addClass('lightSpeedIn animated').show();
        $('.owl-item.active .slide_text p').addClass('slideInDown animated').show();
        $('.owl-item.active .slide_text button').addClass('slideInUp animated').show();
    });
    //this is for header stike
    $(document).on('scroll',function(){
     if($(this).scrollTop() > 100){
         $('.main_menu').addClass('sticky');
     } 
       else{
        $('.main_menu').removeClass('sticky'); 
     }  
   });
    
//    //paralax
//    $('#nav').localScroll(800);
//	$('.slide_item1, .slide_item2, .slide_item3, .slide_item4').parallax("50%", 0.3);
    
    
      //this is for isotop
    $(".portfolio_item").isotope({
        itemSelector: '.single_item',
        layoutMode: 'fitRows',
    });
    // Add isotope click function
    $('.portfolio_filter li').click(function(){
        $(".portfolio_filter li").removeClass("active");
        $(this).addClass("active");
 
        var selector = $(this).attr('data-filter');
        $(".portfolio_item").isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
    //for testmonial
    $('.testmonial_container').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
   });
    //for skill progress
    $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
    $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
    //counter
    $('.counter').counterUp({
      delay: 20,
      time: 5000
    });
    $('.counter').addClass('animated fadeInDownBig');
    $('.cont_item h1').addClass('animated fadeIn');
    //this is for brand slide
    $('.brand_slide').owlCarousel({
    loop:true,
    nav:false,
    smartSpeed:2000,
    autoplay:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
    //slick nav
    $('#menu').slicknav();
    
});







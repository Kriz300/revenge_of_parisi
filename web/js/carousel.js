$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        //autoplay: true,
        autoplayHoverPause: true,
        lazyLoad: true,
        loop: true,
        margin: 5,
        stagePadding: 5,
        nav: true,
        dots: true,
        responsive:{
            0:{
                items: 1,
                nav: false,
                dots: false
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    $(".owl-carousel").on("mousewheel", ".owl-stage", function(e) {
        if (e.deltaY>0)
        {
            $(".owl-carousel").trigger("next.owl");
        }
        else
        {
            $(".owl-carousel").trigger("prev.owl");
        }
        e.preventDefault();
    });

    /*$(".carousel").on("mousewheel", function(e) {
        if (e.deltaY>0)
        {
            $(".carousel").carousel("next");
        }
        else
        {
            $(".carousel").carousel("prev");
        }
        e.preventDefault();
    });*/
    
});
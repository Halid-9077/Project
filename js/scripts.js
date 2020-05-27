$(document).ready(function () {
    $(".show-more").click(function () {
        $(".more").slideDown(1000, function () {
            $(".show-more").hide();
        });
    });
});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
    $( function() {
        $( "#accordion" ).accordion();
    } );
});
jQuery(document).ready(function() {
    jQuery(window).bind("load", function() {
        jQuery('a:not(.spu-clickable)[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
                location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery("html, body").animate({
                        scrollTop: target.offset().top - 10
                    }, 1500);
                    return false;
                }
            }
        });
    });
});

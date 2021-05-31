/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();

    $('.menu-btn').on('click', function () {
        $('.left-slide-nav').toggleClass('show');

        $('.close-menu').on('click', function () {
            $('.left-slide-nav').removeClass('show');
        });
    });

    if ($('#psContainer').length != 0) {
        const ps = new PerfectScrollbar('#psContainer', {
            wheelSpeed: 2,
            wheelPropagation: true,
            minScrollbarLength: 20
        });
    } 

    // $(window).on('wheel', function (e) {

    //     var delta = e.originalEvent.deltaY;

    //     if (delta > 0) {// going down
    //         $('.wheel').addClass('rotating');
    //         // alert('hgh')
    //         setTimeout(function () {
    //             $('.wheel').removeClass('rotating');
    //         }, 3000);
    //     } else { 
    //         $('.wheel').addClass('rotating-reverse');
    //         // alert('hgh')
    //         setTimeout(function () {
    //             $('.wheel').removeClass('rotating-reverse');
    //         }, 1000);
    //     } // going up rotating-reverse

    //         return false;
    // });
    
});

var makeItRain = function () {
    //clear out everything
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        //random number between 5 and 2
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
}

$('.splat-toggle.toggle').on('click', function () {
    $('body').toggleClass('splat-toggle');
    $('.splat-toggle.toggle').toggleClass('active');
    makeItRain();
});

$('.back-row-toggle.toggle').on('click', function () {
    $('body').toggleClass('back-row-toggle');
    $('.back-row-toggle.toggle').toggleClass('active');
    makeItRain();
});

$('.single-toggle.toggle').on('click', function () {
    $('body').toggleClass('single-toggle');
    $('.single-toggle.toggle').toggleClass('active');
    makeItRain();
});

$('body').addClass('splat-toggle');
$('.splat-toggle.toggle').addClass('active');

makeItRain();
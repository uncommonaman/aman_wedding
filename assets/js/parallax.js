// $(window).scroll(function(){
// 	var wScroll = $(this).scrollTop();

// 	$('.logo').css({
// 		'transform' : 'translate(0px ,'+wScroll/2 +'%)'
// 	}) 
// })
// var bg = $(".hero-nav");

// function resizeBackground() {
//     bg.height($(window).height()+60);
// }

// $(window).resize(resizeBackground);
// resizeBackground();

var heroShinker = function() {
    var hero = $('.hero-nav'),
        heroHeight = $('.hero-nav').outerHeight(true);
        $(hero).parent().css('padding-top', heroHeight);
    $(window).scroll(function() {
        var scrollOffset = $(window).scrollTop();
        if (scrollOffset < heroHeight) {
            $(hero).css('height', (heroHeight - scrollOffset));
        }
        if (scrollOffset > (heroHeight - 215)) {
            hero.addClass('fixme');
        } else {
            hero.removeClass('fixme');
        };
    });
}
heroShinker();
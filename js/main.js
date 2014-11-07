$(function() {
	setupLandingPage();
	$(".left-menu-btn").click(function(){
		handleLeftMenu()
	});

})

$(window).resize(function() {
	setupLandingPage();
})

var animate = true;

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if(scroll >= 100 && animate) {
		$(".fixed-nav .top-menu").animate({backgroundColor: jQuery.Color("rgba(48,60,73,0.6)")},350);
		animate = false;
	}
	else if (scroll < 100 && !animate) {
		$(".fixed-nav .top-menu").animate({backgroundColor: jQuery.Color("rgba(48,60,73,0)")},350);
		animate = true;
	}
})

function setupLandingPage() {
	var height = $(window).height();
	var marginTop = (height/2) - ($(".splash-text").height()/2);
	$(".landing-image-wrap").css("height",height);
	$(".splash-text").css("margin-top", marginTop).delay(100).fadeIn(500);
}

function handleLeftMenu() {
	$menu = $(".fixed-nav .left-menu");
	$logoWrap = $(".fixed-nav .logo-wrap");
	$splashText = $(".landing-image-wrap .splash-text");
	$topMenuBtn = $(".fixed-nav .top-menu .left-menu-btn");
	var width = $menu.width();
	var visible = ($menu.offset().left == -width) ? false:true;
	switch(visible) {
		case true:
			$menu.animate({"left": -width},300);
			$logoWrap.animate({"margin-left": $logoWrap.offset().left - width}, 300);
			$splashText.animate({"margin-left": 0}, 300);
			$topMenuBtn.fadeIn(300);
			break;
		case false:
			$menu.animate({"left": 0},300);
			$logoWrap.animate({"margin-left": $logoWrap.offset().left + width}, 300);
			$splashText.animate({"margin-left": width}, 300);
			$topMenuBtn.fadeOut(300);
			break;
	}
}
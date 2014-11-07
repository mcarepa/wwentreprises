$(function() {
	setupLandingPage();
	$(".brand-logo").click(function(){
		handleLeftMenu()
	});
})

$(window).resize(function() {
	setupLandingPage();
})

function setupLandingPage() {
	var height = $(window).height();
	var marginTop = (height/2) - ($(".splash-text").height()/2);
	$(".landing-image-wrap").css("height",height);
	$(".splash-text").css("margin-top", marginTop)
}

function handleLeftMenu() {
	$menu = $(".fixed-nav .left-menu");
	$logoWrap = $(".fixed-nav .logo-wrap");
	$splashText = $(".landing-image-wrap .splash-text");
	var width = $menu.width();
	var visible = ($menu.offset().left == -width) ? false:true;
	switch(visible) {
		case true:
			$menu.animate({"left": -width},300);
			$logoWrap.animate({"margin-left": $logoWrap.offset().left - width}, 300);
			$splashText.animate({"margin-left": 0}, 300);
			break;
		case false:
			$menu.animate({"left": 0},300);
			$logoWrap.animate({"margin-left": $logoWrap.offset().left + width}, 300);
			$splashText.animate({"margin-left": width}, 300);
			break;
	}
}
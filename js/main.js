$(function() {
	setupLandingPage();
})

function setupLandingPage() {
	var height = $(window).height();
	var marginTop = (height/2) - ($(".splash-text").height()/2);
	$(".landing-image-wrap").css("height",height);
	$(".splash-text").css("margin-top", marginTop)
}
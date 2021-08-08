$(function () {
	let blogImages = $(".blog");
	blogImages
		.on("mouseover", function () {
			$(this).css("opacity", 1);
		})
		.on("mouseleave", function () {
			$(this).css("opacity", 0.5);
		});
	icons = $(".icons a");

	icons.on("click", function () {
		if ($(this).attr("class").indexOf("map") > -1) {
			$(".map").toggle();
			$(".search").hide();
		} else if ($(this).attr("class").indexOf("search") > -1) {
			$(".search").toggle();
			$(".map").hide();
		}
	});
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
});

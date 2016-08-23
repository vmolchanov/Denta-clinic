$(".accordion-inner").slideUp(0);
$(function() {
	$(".accordion-triggered").on("click", function(e) {
		e.preventDefault();

		var $this = $(this);
		var item = $this.closest(".accordion-item");
		var list = $this.closest(".accordion-list");
		var items = list.find("accordion-item");
		var content = item.find(".accordion-inner");
		var otherContent = list.find(".accordion-inner");
		var slideTime = 300;

		if (!item.hasClass("active")) {
			items.removeClass("active");
			item.addClass("active");

			otherContent.stop(true, true).slideUp(slideTime);
			content.stop(true, true).slideDown(slideTime);
		} else {
			content.stop(true, true).slideUp(slideTime);
			item.stop(true, true).removeClass("active");
		}
	});
});
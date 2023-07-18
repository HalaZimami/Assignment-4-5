$( document ).ready(function() {
	$(".attributeDocumentation h3").after("<span>˃</span>");
	
	$(".attributeDocumentation h3").click(function() {
		$(this).siblings("section.details").toggleClass("hiddenContent");
		$(this).toggleClass("active");
		$(this).next("span").toggleClass("active");
		
		if( $(this).next("span").hasClass("active") ) {
			$(this).next("span").html("˅");
		} else {
			$(this).next("span").html("˃");
		}
		
	});

});

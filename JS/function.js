function slideToggle(id) {
		var id1 = "slide1";
		var id2 = "slide2";
		if(id == id1) {	
			if($("#slide1 ul.slide-up").css("display") == "none"){
				$("#slide1 ul.slide-up").slideDown();
				if($("#slide2 ul.slide-up").css("display")=="block")
					$("#slide2 ul.slide-up").slideUp();
			}else {
				$("#slide1 ul.slide-up").slideUp();
			}
		}else {
			if($("#slide2 ul.slide-up").css("display") == "none"){
				$("#slide2 ul.slide-up").slideDown();
				if($("#slide1 ul.slide-up").css("display")=="block")
						$("#slide1 ul.slide-up").slideUp();
			}else {
				$("#slide2 ul.slide-up").slideUp();
			}
		}
	}

function open() {
	window.open("http://www.csklsc.edu.hk/");
}

$(function() {
		$(window).scroll(function() {
			var a = $(window).scrollTop();
			if($("#nav-bar").offset().top < a){
				$("#nav-bar").addClass("fixed-nav-bar");
				$("#content").css("padding-top", "60px");
			}else if($("#nav-container").offset().top > a){
				$("#nav-bar").removeClass("fixed-nav-bar");
				$("#content").css("padding-top", 0);
				
			}
		});
	});
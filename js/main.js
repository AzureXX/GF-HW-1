var clickCount = 0; 

$("#skills-button").click( function () {
	clickCount += 1;
	console.log(clickCount);
	if(clickCount === 1) {
		$("#skills-list").append("<li class=\"skill\">HTML</li>");
		$("#skills-button").html("Click more to reveal more skills")
	} else if(clickCount === 2) {
		$("#skills-list").append("<li class=\"skill\">CSS</li>");
	} else if(clickCount === 3) {
		$("#skills-list").append("<li class=\"skill\">JavaScript</li>");
	} else if(clickCount === 4) {
		$("#skills-list").append("<li class=\"skill\">jQuery</li>");
	} else if(clickCount === 5) {
		$("#skills-list").append("<li class=\"skill\">ReactJS</li>");
	} else if(clickCount === 6) {
		$("#skills-list").append("<li class=\"skill\">Sass</li>");
	} else if(clickCount === 7) {
		$("#skills-list").append("<li class=\"skill\">WordPress</li>");
	} else if(clickCount === 8) {
		$("#skills-list").append("<li class=\"skill\">Bootstrap</li>");
		$("#skills-button").hide();
	}
})
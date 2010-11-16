"use strict";

onload = function () {
    var paper = new Raphael(document.body, document.width, document.height);
    
    paper.circle(50, 50, 2)
	.attr({fill: "blue", stroke: "blue"})
	.hover(function (event) {
	    this.animate({scale: "20"}, 5000);
	}, function (event) {
	    this.animate({scale: "1"}, 5000, ">");
	});
};
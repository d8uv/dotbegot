"use strict";

onload = function () {  
    Raphael.fn.growCircle = function (x, y, size) {
	this.circle(x, y, size)
	    .attr({fill: "blue", stroke: "blue"})
	    .hover(function (event) {
		this.animate({scale: "20"}, 10000);
	    }, function (event) {
		this.animate({scale: "1"}, 10000, "<");
	    });
    };

    var paper = new Raphael(document.body, document.width, document.height), 
    x, y, step = 10;

    for (x = step; x < document.width; x += step) {
	for (y = step; y < document.height; y += step) {
	    paper.growCircle(x, y, step / 4);
	}
    }
};
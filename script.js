"use strict";

onload = function () {  
    Raphael.fn.growCircle = function (x, y) {
	this.circle(x, y, 2)
	    .attr({fill: "blue", stroke: "blue"})
	    .hover(function (event) {
		this.animate({scale: "20"}, 5000);
	    }, function (event) {
		this.animate({scale: "1"}, 5000, ">");
	    });
    };

    var paper = new Raphael(document.body, document.width, document.height), 
    x = 0, y = 0;

    while (x < document.width) {
	x += 10;
	paper.growCircle(x, y);
    }
};
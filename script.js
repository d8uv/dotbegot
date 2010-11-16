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
                x, y;

    for (x = 0; x < document.width; x += 10)
    {
	for (y = 0; y < document.height; y += 10)
	{
	    paper.growCircle(x, y);
	}
    }
};
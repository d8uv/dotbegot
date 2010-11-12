"use strict";

onload = function () {
    var paper = new Raphael(document.body, document.width, document.height),
        circle = paper.circle(50, 50, 2);
    
    circle.attr({fill: "blue", stroke: "blue"});
    circle.hover(function (event) {
	this.animate({scale: "20"}, 5000);
    }, function (event) {
	this.animate({scale: "1"}, 5000, ">");
    });
};
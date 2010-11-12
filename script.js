"use strict";

onload = function () {
    var paper = new Raphael(0, 0, document.width, document.height),
        circle = paper.circle(20, 20, 5);
    
    circle.attr({fill: "blue", stroke: "blue"});

    circle.hover(function (event) {
	this.attr({fill: "red"});
    }, function (event) {
	this.attr({fill: "blue"});
    });
};
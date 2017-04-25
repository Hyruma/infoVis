
function behavior(){

var speed= 20;
var centerW = document.body.clientWidth;
var centerH = document.body.scrollHeight;

var svg= d3.select("svg");

var img = svg.append("svg:image")
    .attr("xlink:href", "images/butterfly.svg")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", centerW/2)
    .attr("y",centerH/2)
    .attr("transX", 0)
    .attr("transY", 0)

document.onkeydown = function(e){
	var img= d3.select("image")
	var y= parseInt(img.attr("transY"));
	var x= parseInt(img.attr("transX"));

	if(e.keyCode == '40')
		y+=speed;	
	else if(e.keyCode == '38')		
		y-=speed;
	else if(e.keyCode == '39')		
		x+=speed;
	else if(e.keyCode == '37')		
		x-=speed;
	img.attr("transform", "rotate(10)")
	img.transition().duration("500").attr("transform", "translate("+x+","+y+")");
	img.attr("transY", y);
	img.attr("transX", x);
	}
}

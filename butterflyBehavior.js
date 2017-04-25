
function behavior(){

var centerW = document.body.clientWidth;
var centerH = (document.body.scrollHeight * 80)/100;

var svg= d3.select("svg");

var img = svg.append("svg:image")
    .attr("xlink:href", "images/butterfly.svg")
    .attr("width", 50)
    .attr("height", 50)
    .attr("x", centerW/2)
    .attr("y",centerH/2);



document.body.onkeydown = function(e){
	if(e.keyCode == '40')
		moveDown();	
	else if(e.keyCode == '38')		
		moveUp();
	else if(e.keyCode == '39')		
		moveRight();
	else if(e.keyCode == '37')		
		moveLeft();
}

function moveDown() {

var img= d3.select("image")
			.transition()
			.duration(1000)
			.attr("transform", "translate(50,0)")
	}

}

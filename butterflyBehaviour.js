
function behaviour(){

	var speed= 40;
	var maxW = document.body.clientWidth;
	var maxH = document.body.scrollHeight;

	var svg= d3.select("svg");

	var img = svg.append("svg:image")
	    .attr("xlink:href", "images/butterfly.svg")
	    .attr("width", 105)
	    .attr("height", 105)
	    .attr("transX", maxW/2)
	    .attr("transY", maxH/2)
	    .attr("orientation", 0)
	    .attr("transform", "translate("+maxW/2+","+maxH/2+") rotate(0)" );

	document.body.onkeydown = function(e){
		var img= d3.select("image")
		if(e.keyCode == '40')
			moveDown(img);	
		else if(e.keyCode == '38')		
			moveUp(img);
		else if(e.keyCode == '39')		
			moveRight(img);
		else if(e.keyCode == '37')		
			moveLeft(img);
	}

	function moveUp(img){
		var y= parseInt(img.attr("transY"));
		var x= parseInt(img.attr("transX"));
		var z= parseInt(img.attr("orientation"));

		if (y<0){
			y = maxH -speed + y;
			img.attr("transform", "translate("+x+","+y+") rotate("+z+")");
		} else {
		if (z==0) 
			y-= speed;
		else
			z=0;
		img.transition().duration("100").attr("transform", "translate("+x+","+y+") rotate("+z+")");
		}
		img.attr("transY", y);
		img.attr("orientation", z);
	}

	function moveDown(img){
		var y= parseInt(img.attr("transY"));
		var x= parseInt(img.attr("transX"));
		var z= parseInt(img.attr("orientation"));

		if (y>maxH){
			y = speed + y -maxH;
			img.attr("transform", "translate("+x+","+y+") rotate("+z+")");
		} else {
		if (z==180) 
			y+= speed;
		else
			z=180;
		img.transition().duration("100").attr("transform", "translate("+x+","+y+") rotate("+z+")");
		}
		img.attr("transY", y);
		img.attr("orientation", z);
	}

	function moveRight(img){
		var y= parseInt(img.attr("transY"));
		var x= parseInt(img.attr("transX"));
		var z= parseInt(img.attr("orientation"));

		if (x>maxW){
			x = speed + x -maxW;
			img.attr("transform", "translate("+x+","+y+") rotate("+z+")");
		} else {
		if (z==90) 
			x+= speed;
		else
			z=90;
		img.transition().duration("100").attr("transform", "translate("+x+","+y+") rotate("+z+")");
		}
		img.attr("transX", x);
		img.attr("orientation", z);
	}

	function moveLeft(img){
		var y= parseInt(img.attr("transY"));
		var x= parseInt(img.attr("transX"));
		var z= parseInt(img.attr("orientation"));

		if (x<0){
			x = maxW + x -speed;
			img.attr("transform", "translate("+x+","+y+") rotate("+z+")");
		} else {
		if (z==270) 
			x-= speed;
		else
			z=270;
		img.transition().duration("100").attr("transform", "translate("+x+","+y+") rotate("+z+")");
		}
		img.attr("transX", x);
		img.attr("orientation", z);
	}
}

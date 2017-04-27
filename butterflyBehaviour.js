
function behaviour(){

	var speed= 40;
	var maxW = document.body.clientWidth;
	var maxH = document.body.scrollHeight;

	var svg= d3.select("svg");

	var img = svg.append("svg:image")
	    .attr("xlink:href", "images/butterfly.svg")
	    .attr("id", "butterfly")
	    .attr("width", 100)
	    .attr("height", 100)
	    .attr("transX", (maxW*90)/200)
	    .attr("transY", maxH/2)
	    .attr("orientation", 0)
	    .attr("transform", "translate("+(maxW*90)/200+","+maxH/2+") rotate(0)" );

	document.onkeydown = function(e){
		e = e || window.event;

		var img= d3.select("image")
		var y= parseInt(img.attr("transY"));
		var x= parseInt(img.attr("transX"));
		var z= parseInt(img.attr("orientation"));
		var w= parseInt(img.attr("width"))/2;
		var h= parseInt(img.attr("height"))/2;
		var done= false;

		if(e.keyCode == '40')
			moveDown();
		else if(e.keyCode == '38')
			moveUp();
		else if(e.keyCode == '39')
			moveRight();
		else if(e.keyCode == '37')
			moveLeft();

		if(!done) {
			img.transition()
			   .duration("100")
			   .attr("transform", move());
		}
	
		function moveUp(){
			if(z==0){
				if (y<0){
				y = maxH -speed + y;
				img.attr("transform", move());
				done= true;
				} else
					y-=speed;
			} else
				z=0;
			img.attr("transY", y);
			img.attr("orientation", z);
		}

		function moveDown(){
			if(z==180){
				if (y>maxH-h*2){
				y = speed + y -maxH;
				img.attr("transform", move());
				done= true;
				} else
					y+=speed;
			} else
				z=180;
			img.attr("transY", y);
			img.attr("orientation", z);
		}

		function moveRight(){
			if(z==90){
				if (x>maxW-w*2){
				x = speed + x -maxW;
				img.attr("transform", move());
				done= true;
				} else
					x+= speed;
			} else
				z=90;
			img.attr("transX", x);
			img.attr("orientation", z);
		}

		function moveLeft(){
			if(z==270){
				if (x<0){
				x = maxW + x -speed;
				img.attr("transform", move());
				done= true;
				} else
					x-= speed;
			} else
				z=270;
			img.attr("transX", x);
			img.attr("orientation", z);
		}

		function move(){
			return "translate("+x+","+y+") rotate("+z+","+w+","+h+")";
		}
	}


	document.getElementById("butterfly").onclick = function(e){
		e = e || window.event;

		var radius= maxW;
		var angle = Math.random()*360;
		var angleR= angle * (Math.PI / 180);
		var img = d3.select("image");
		var x= parseInt(img.attr("transX"))
		var y= parseInt(img.attr("transY"))
		var outX=  (radius * Math.cos(angleR));
		var outY=  (radius * Math.sin(angleR));

		//img.attr("xlink:href", "ikshi").
		img.transition().duration("2000")
		.attr("transform", "translate("+x+","+y+") rotate("+(90-angle)+",50,50)")

		var tot= 5000/30;
		var i=0;
		var vx= outX/tot;
		var vy= outY/tot;
		var flipped= false;

		var refreshIntervalId = setInterval(repeatMe,80);

		function repeatMe(){
			x= x + vx;
			y= y - vy;
			if(flipped)
				img.attr("xlink:href", "images/butterfly.svg")
			else 
				img.attr("xlink:href", "images/butterflyFlipped.svg")

			flipped= !flipped;
			img.transition().duration("10").delay(2000)
			.attr("transform", "translate("+(x+vx)+","+(y-vy)+") rotate("+(90-angle)+",50,50)")

			i++;

			if(i>tot){
				clearInterval(refreshIntervalId);
				e.target.parentNode.removeChild(e.target);
			}
		}
	}
}


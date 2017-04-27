
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
		var w= parseInt(img.attr("width"))/2;
		var h= parseInt(img.attr("height"))/2;

		if (y<0){
			y = maxH -speed + y;
			img.attr("transform", "translate("+x+","+y+") rotate("+z+")");
		} else {
		if (z==0)
			y-= speed;
		else
			z=0;
		img.transition().duration("100").attr("transform", "translate("+x+","+y+") rotate("+z+","+w+","+h+")");
		}
		img.attr("transY", y);
		img.attr("orientation", z);
	}

	function moveDown(img){
		var y= parseInt(img.attr("transY"));
		var x= parseInt(img.attr("transX"));
		var z= parseInt(img.attr("orientation"));
		var w= parseInt(img.attr("width"))/2;
		var h= parseInt(img.attr("height"))/2;

		if (y>maxH){
			y = speed + y -maxH;
			img.attr("transform", "translate("+x+","+y+") rotate("+z+")");
		} else {
		if (z==180)
			y+= speed;
		else {
			z=180;
		}
		img.transition().duration("100").attr("transform", "translate("+x+","+y+") rotate("+z+","+w+","+h+")");
		}
		img.attr("transY", y);
		img.attr("orientation", z);
	}

	function moveRight(img){
		var y= parseInt(img.attr("transY"));
		var x= parseInt(img.attr("transX"));
		var z= parseInt(img.attr("orientation"));
		var w= parseInt(img.attr("width"))/2;
		var h= parseInt(img.attr("height"))/2;

		if (x>maxW){
			x = speed + x -maxW;
			img.attr("transform", "translate("+x+","+y+") rotate("+z+")");
		} else {
		if (z==90)
			x+= speed;
		else
			z=90;
		img.transition().duration("100").attr("transform", "translate("+x+","+y+") rotate("+z+","+w+","+h+")");
		}
		img.attr("transX", x);
		img.attr("orientation", z);
	}

	function moveLeft(img){
		var y= parseInt(img.attr("transY"));
		var x= parseInt(img.attr("transX"));
		var z= parseInt(img.attr("orientation"));
		var w= parseInt(img.attr("width"))/2;
		var h= parseInt(img.attr("height"))/2;

		if (x<0){
			x = maxW + x -speed;
			img.attr("transform", "translate("+x+","+y+") rotate("+z+")");
		} else {
		if (z==270)
			x-= speed;
		else
			z=270;
		img.transition().duration("100").attr("transform", "translate("+x+","+y+") rotate("+z+","+w+","+h+")");
		}
		img.attr("transX", x);
		img.attr("orientation", z);
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
			img.attr("xlink:href", "ikshi").
			img.transition().duration("2000")
			.attr("transform", "translate("+x+","+y+") rotate("+(90-angle)+",50,50)")

			img.transition().duration("5000").delay(2000)
			.attr("transform", "translate("+(x+outX)+","+(y-outY)+") rotate("+(90-angle)+",50,50)")
			//img.attr("xlink:href" "ikshi").
			.each("end", function(){

			e.target.parentNode.removeChild(element); })
	}


	var tot= 5000/20;
	var i=0;
	var vx= outX/tot;
	var vy= ouY/tot;
	function repeatMe()
	            {
	                x = x + vx;
	                y = y - vy;

	                ball.transition()
	                    .duration(10).attr("transform",function(k){
	                    return "translate("+x+","+y+")";
	                });

	                i=i+0.2;

	                if(i>t){
	                    clearInterval(refreshIntervalId);
	                    ball.transition().delay(100)
	                        .duration(1000).attr("transform",function(k){
	                        return "translate("+cannonPosX+","+cannonPosY+")";

	                    });
	                    lock=!lock;


	                }
	            }
	            var refreshIntervalId = setInterval(repeatMe,20);
        }
}

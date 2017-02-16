	
	mainMapWrapper.onmouseover = function() {
		var coord  = mainMap.getBoundingClientRect();

		this.onmousemove = function(e) {
			var top = e.pageY-(coord.top+pageYOffset);			
			var left = e.pageX-(coord.left+pageXOffset);
			change(top,left)
		}

		function change(top,left) {
			innerImg.style.top = -top*5 +200+"px";
			innerImg.style.left = -left*5+200+"px";
		}
	}

	
		checkPanel.onclick = function() {
			if(fizicalMap.checked) {
				innerImg.src = "images\\maps\\fizMap.jpg"
			}		

			else if(ordinaryMap.checked) {
			innerImg.src = "images\\maps\\GrondObl.jpg"
			}

			else innerImg.src = "images\\maps\\map1.jpg"


		}
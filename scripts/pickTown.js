	var previousZoomImg;
	mainMapWrapper.onmouseover = function(event) {
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

	
		fizicalMap.onclick = function(event) {
			if(fizicalMap.checked) {
				previousZoomImg = innerImg.src;
				innerImg.src = "images\\maps\\fizMap.jpg";
			}				

			else innerImg.src = previousZoomImg;


		}




var listIsMade = false;
var result = document.getElementsByClassName("blockOfTowns")[0];
var inn = document.getElementsByName('city')[0];
var citys = document.getElementById("pickCity");


citys.onkeyup = function(event) {	
	if(inn.value) {
	var editedText = inn.value.toLowerCase();
	}

	else {

		if(innerImg.src.slice(-10) === "fizMap.jpg") {
			previousZoomImg ="images\\maps\\map1.jpg";
			return;
		}		
		innerImg.src = "images\\maps\\map1.jpg";
		pointer.style.display = "";
	}

	if( checkCityName(editedText) && !listIsMade ) makeListOfResults(cityBase[editedText]);

	else if (checkCityName(editedText) && listIsMade)  return;

	else clearResultField();

	
	

	function checkCityName(prop) {		
		if(cityBase[prop]) return true;
		return false;
	}


	function makeListOfResults(prop) {
		

		var ul = document.createElement("ul");
		ul.className = "listWrapper"
		var text;

		

		while(prop) {
			makeList(prop)
			prop = prop.next;
		}

		result.appendChild(ul);
		listIsMade = true;


		function makeList(prop) {			
			text = "РАЙОН: "+prop.districts.toUpperCase() +", "+prop.area.toUpperCase();
			var li = document.createElement("li");
			li.className = "listOfCities";
			li.textContent = text;
			li.dataset.top  = prop.top -24 + "px";
			li.dataset.left = prop.left- 6 + "px";
			li.dataset.img = chooseMapOfArea(prop.area);
			ul.appendChild(li);
		}
	}

		function chooseMapOfArea(area) {
			
			var img;
			switch(area.toUpperCase()) {
				case "МОГИЛЕВСКАЯ ОБЛАСТЬ":
				case "МОГИЛЕВ":
				img = "images\\maps\\areas\\MogObl.jpg";
				break;

				case "БРЕСТСКАЯ ОБЛАСТЬ":
				case "БРЕСТ":
				img = "images\\maps\\areas\\BrestObl.jpg";
				break;

				case "ВИТЕБСКАЯ ОБЛАСТЬ":
				case "ВИТЕБСК":
				img = "images\\maps\\areas\\VitebsObl.jpg";
				break;

				case "ГОМЕЛЬСКАЯ ОБЛАСТЬ":
				case "ГОМЕЛЬ":
				img = "images\\maps\\areas\\GomObl.jpg";
				break;


				case "ГРОДНЕНСКАЯ ОБЛАСТЬ":
				case "ГРОДНО":
				img = "images\\maps\\areas\\GrondObl.jpg";
				break;

				case "МИНСКАЯ ОБЛАСТЬ":
				case "МИНСК":
				img = "images\\maps\\areas\\MinskObl.jpg";
				break;

				default:
				img = "images\\maps\\map1.jpg";

			}
			
			return img;
		}

	citys.onclick = function(event) {		
		var target = event.target;
		if(target.tagName === "LI") {
			inn.select(true);
			inn.value = target.textContent;
			pointer.style.display = "block";
			pointer.style.top = target.dataset.top;
			pointer.style.left = target.dataset.left;
			
			if(innerImg.src.slice(-10) === "fizMap.jpg"){
				previousZoomImg = target.dataset.img;
			}

			else innerImg.src = target.dataset.img;

			inn.blur();
			clearResultField();			
		}
	}



		function clearResultField() {
		result.textContent = "";
		listIsMade = false;
	}
}
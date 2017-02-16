var fs = require("fs");

var city = fs.readFileSync("./city.txt","utf-8");
var districts = fs.readFileSync("./district.txt","utf-8");
var area = fs.readFileSync("./area.txt","utf-8");
var coord = fs.readFileSync("./coord.txt","utf-8");


function fastParsing(aim) {
	var resultWithWhiteSpace = aim.match(/^.+$/gm); 
	resultWithWhiteSpace[0] = resultWithWhiteSpace[0].slice(1);
	return resultWithWhiteSpace.map(item => item.replace(/\s{2,}/,"") )
}

var city = fastParsing(city);
var districts = fastParsing(districts);
var area = fastParsing(area);
var coord = fastParsing(coord);


var cityBase = {};

class Node{
	constructor(districts,area) {
		this.districts = districts;
		this.area = area;
		this.next = null;
		this.top = null;
		this.next = null;
	}
}


for(var i = 0; i < city.length; i++) {
	var node = new Node(districts[i],area[i]);

		for(var j = 0;j<coord.length;j++){
			var temp = JSON.parse(coord[j]);
			
				if(node.districts === temp.districts) {
					node.top = temp.top;
					node.left = temp.left;
					break;
				}
		}
	city[i]=city[i].toLowerCase();
	if(city[i] in cityBase) {
		
		hashing(cityBase[city[i]],node)
	} 
	else cityBase[city[i]] = node;	

}

function hashing(prop,node) {
	
    if(prop.districts === node.districts&&prop.area === node.area) return;	
	if (!prop.next){
		
		prop.next = node;
	    
		return;
	} 

	hashing(prop.next,node);


}







data ="var cityBase ="+JSON.stringify(cityBase);






fs.writeFileSync("./result.js",data,"utf-8");

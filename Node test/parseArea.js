var fs = require("fs");

var districts = fs.readFileSync("./1.txt","utf-8");


function fastParsing(aim) {
	var resultWithWhiteSpace = aim.match(/^.+$/gm); 
	resultWithWhiteSpace[0] = resultWithWhiteSpace[0].slice(1);
	return resultWithWhiteSpace.map(item => item.replace(/\s{2,}/,"") )
}


var districts = fastParsing(districts);

console.log(JSON.parse(districts[0]))


var obj = {};
var counter = 0;
for (var i = 0; i < districts.length; i++) {
	if(districts[i]==="Барановичский") counter++;
	obj[districts[i]] = districts[i];
}




fs.writeFileSync("./result.txt","var baseOfDistricts ="+JSON.stringify(obj),"utf-8");
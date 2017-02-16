var select = document.createElement("select");

for(var prop in baseOfDistricts ) {
	var option = document.createElement("option");
	option.textContent = prop;

	select.appendChild(option)
}
form.appendChild(select);
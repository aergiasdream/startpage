function getTime() {
	let date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		min = date.getMinutes(),
		hour = date.getHours();
		
	return day + "/" + month + "/" + year + "   " + 
	(hour < 10 ? ("0" + hour) : hour) + ":" + 
	(min < 10 ? ("0" + min) : min);
}

window.onload = () => {
	document.getElementById("calendar").innerHTML = getTime();
}

document.addEventListener('keydown', keyHandle);

function keyHandle(e) {
	let pageOverlay = document.getElementById("overlay-container");
	if (e.code == 'Backspace' && pageOverlay.classList.contains('hidden')) {
		pageOverlay.classList.remove('hidden');
		pageOverlay.classList.add('visible');
		document.getElementById("search-field").focus();
	} else if (e.code == 'Escape') {
		document.getElementById("clock").focus();
		pageOverlay.classList.remove('visible');
		pageOverlay.classList.add('hidden');
	}
}

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

function search(e) {
	if (e.code == 'Enter') {
		let searchEngineMenu = document.getElementById("search-engines");
		let selectedSearchEngine = searchEngineMenu.options[searchEngineMenu.selectedIndex].value;
		let searchTerm = document.getElementById("search-field").value;
		if (searchTerm !== "") {
			console.log(searchTerm);
		}
	}
}

window.onload = () => {
	document.getElementById("calendar").innerHTML = getTime();
	document.getElementById("search-field").focus();
}

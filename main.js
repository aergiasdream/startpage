document.addEventListener('keydown', keyHandle);

function keyHandle(e) {
	let pageOverlay = document.getElementById("overlay-container");
	let searchField = document.getElementById("search-field");
	if (e.code == 'Backspace') {
		if (pageOverlay.classList.contains('hidden')) {
			pageOverlay.classList.remove('hidden');
		}
		searchField.value = "";
		pageOverlay.classList.remove('hide');
		pageOverlay.classList.add('show');
		searchField.focus();
	} else if (e.code == 'Escape') {
		searchField.blur();
		pageOverlay.classList.remove('show');
		pageOverlay.classList.add('hide');
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
		let searchTerm = document.getElementById("search-field").value;
		if (searchTerm !== "") {
			window.open("https://duckduckgo.com/?q=" + searchTerm, "_blank");
			console.log(searchTerm);
			searchTerm = "";
		}
	}
}

window.onload = () => {
	document.getElementById("calendar").innerHTML = getTime();
	document.getElementById("search-field").focus();
}

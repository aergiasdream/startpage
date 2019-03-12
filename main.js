document.addEventListener('keydown', keyHandle);

function keyHandle(e) {
	if (e.code == 'Backspace') {
		modifyOverlay('show');
	} else if (e.code == 'Escape') {
		modifyOverlay('hide')
	}
}

function modifyOverlay(e) {
	let pageOverlay = document.getElementById("overlay-container");
	let searchField = document.getElementById("search-field");
	searchField.value = "";
	if (e == 'hide') {
		searchField.blur();
		pageOverlay.classList.remove('show');
		pageOverlay.classList.add('hide');
	} else if (e == 'show') {
		if (pageOverlay.classList.contains('hidden')) {
			pageOverlay.classList.remove('hidden');
		}
		searchField.focus();
		pageOverlay.classList.remove('hide');
		pageOverlay.classList.add('show');
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
			modifyOverlay('hide');
		}
	}
}

window.onload = () => {
	document.getElementById("calendar").innerHTML = getTime();
	document.getElementById("search-field").focus();
}

window.onload = function() {
	activeLi();
}

function activeLi() {
	var LIs = document.getElementsByClassName("navElements");
	for (var i = 0; i < LIs.length; i++) {
		if (LIs[i].onclick) {
			LIs[i].addClassName("active");
		}
	}
}
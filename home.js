window.onload = function() {
	activeLi();
	alert("yo");
}

function activeLi() {
	alert("yo2");
	var LIs = document.getElementsByClassName("navElements");
	for (var i = 0; i < LIs.length; i++) {
		if (LIs[i].onclick) {
			LIs[i].addClassName("active");
		}
	}
}
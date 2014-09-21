window.onload = function() {
	var navEl = document.getElementsByClassName("navElements");
	alert(0);
	for (var i = 0; i < navEl.length; i++) {
		navEl[i].onclick = changeActive;
	}
}

function changeActive() {
	this.parentNode.addClassName("active");
	var activeNav = document.getElementsByClassName("active");
	activeNav[0].removeClassName("active");
}
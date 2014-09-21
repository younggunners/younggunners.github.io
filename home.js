window.onload = function() {
	var navEl = document.getElementsByClassName("navElements");
	for (var i = 0; i < navEl.length; i++) {
		navEl[i].onclick = changeActive;
		alert(navEl[i]);
	}
}

function changeActive() {
	this.parentNode.addClassName("active");
	var activeNav = document.getElementsByClassName("active");
	activeNav[0].removeClassName("active");
}
window.onload = function() {
	var navEl = document.getElementsByClassName("navElements");
	
	for (var i = 0; i < navEl.length; i++) {
		navEl[i].onlick = changeActive;
	}
}

function changeActive() {
	this.parentNode.addClassName("active");
	var activeNav = document.getElementsByClassName("active");
	activeNav[0].removeClassName("active");
}
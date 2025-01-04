let hamburger = document.getElementById("hamburger");
let links = document.getElementById("links");



hamburger.addEventListener("click", hideLinks); // When hamburger is clicked, the links appear or disappear
hamburger.addEventListener("click", changeMenuState); // When hamburger is clicked, it changes into menu or x

// When the outer part of the hamburger menu is clicked the links disappear
main.addEventListener("click", hideLinksOnly);
main.addEventListener("click", removeActive);

// Function Components
function hideLinks() {
	if (links.classList.contains("hidden")) {
		links.classList.remove("hidden");
	} else {
		links.classList.add("hidden");
	}
}
function hideLinksOnly() {
	if (links.classList.contains("hidden") === false) {
		links.classList.add("hidden");
	}
}
function changeMenuState() {
	hamburger.classList.toggle("active");
}
function removeActive() {
	hamburger.classList.remove("active");
}
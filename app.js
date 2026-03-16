const light = document.querySelector("#light");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const span = document.querySelector("#menu-span-status");
const code = document.querySelector("#menu-code-status");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const img = document.querySelector("img");
let isClicked = false;
light.addEventListener("click", () => {
	dialog.showModal();
});
form.addEventListener("submit", () => {
	if (isClicked == false) {
		span.textContent = "OFF";
		code.textContent = "OFF";
		body.classList.add("light-on");
		body.classList.remove("light-off");
		img.setAttribute("src", "assets/glowstone-on.webp");
		isClicked = true;
	} else if (isClicked == true) {
		span.textContent = "ON";
		code.textContent = "ON";
		body.classList.add("light-off");
		body.classList.remove("light-on");
		img.setAttribute("src", "assets/glowstone-off.webp");
		isClicked = false;
	}
});

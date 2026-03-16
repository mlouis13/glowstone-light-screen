const light = document.querySelector("#light");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const span = document.querySelector("#menu-span-status");
const code = document.querySelector("#menu-code-status");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const img = document.querySelector("img");
const color = document.querySelector("#color");
let isClicked = false;
body.classList.add("idlol");
light.addEventListener("click", () => {
	dialog.showModal();
});
form.addEventListener("submit", () => {
	if (isClicked == false) {
		span.textContent = "OFF";
		code.textContent = "OFF";
		body.style.backgroundColor =
			"rgba(255, 222, 173, " + color.value / 100 + ")";
		console.log(color.value);
		img.setAttribute("src", "assets/glowstone-on.webp");
		isClicked = true;
	} else if (isClicked == true) {
		span.textContent = "ON";
		code.textContent = "ON";
		console.log(color.value);
		body.style.backgroundColor = "rgba(34, 25, 13, " + color.value / 100 + ")";
		img.setAttribute("src", "assets/glowstone-off.webp");
		isClicked = false;
	}
});

function init() {
	let today = new Date();

	let message = `Right now it is ${today.toLocaleDateString()} at ${today.getHours()}:${today.getMinutes()}`;

	let output = document.getElementById('output');
	if (output.textContent !== undefined) {
		output.textContent = message;
	} else {
		output.innerText = message;
	}
}
window.onload = init;

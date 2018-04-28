function init() {
	let today = new Date();
	hours = today.getHours();
	minutes = today.getMinutes();

	let christmas = new Date('December 25, 2018');
	let timeLeft = christmas.getTime() - today.getTime();

	msPerDay = 24 * 60 * 60 * 1000;
	//calculations for time left
	daysUntil = timeLeft / msPerDay;
	daysLeft = Math.floor(daysUntil);
	hoursLeft = (daysUntil - daysLeft) * 24;
	hrsLeft = Math.floor(hoursLeft);
	minsLeft = Math.floor((hoursLeft - hrsLeft) * 60);

	//let message = `Right now it is ${today.toLocaleDateString()} at ${today.getHours()}:${today.getMinutes()}`;
	//christmas message
	let message = `Right now it is ${today.toLocaleDateString()} at ${hours}:${minutes} \n and it is ${daysLeft} days,  ${hrsLeft} hours, and  ${minsLeft} minutes until Christmas`;

	let output = document.getElementById('output');
	if (output.textContent !== undefined) {
		output.textContent = message;
	} else {
		output.innerText = message;
	}
}
window.onload = init;

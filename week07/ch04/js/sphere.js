function calculate() {
	let volume;

	//get the reference from the form for radius
	let radius = document.querySelector('#radius').value;

	//make sure the radius is positive
	//radius = Math.abs(radius);
	//using an if statement to check for a value and it is positive
	console.log(radius);
	if (radius && radius > 0) {
		//calculate sphere volume
		volume = 4 / 3 * Math.PI * Math.pow(radius, 3);
		//fix to 4 decimal places
		volume = volume.toFixed(4);
		//display volume;
		document.querySelector('#volume').value = volume;
	} //end of the if

	return false;
}

function init() {
	document.querySelector('form').onsubmit = calculate;
}

window.onload = init;

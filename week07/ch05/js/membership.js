function calculate() {
	let cost = 0.0;
	let type = document.querySelector('#type');
	let years = document.querySelector('#years');

	//convert them to a number
	if (years && years.value) {
		years = parseInt(years.value, 10);
	}

	//check for valid data:
	if (type && type.value && years && years > 0) {
		//determine base cost:
		switch (type.value) {
			case 'basic':
				cost = 10.0;
				break;
			case 'premium':
				cost = 15.0;
				break;
			case 'gold':
				cost = 20.0;
				break;
			case 'platinum':
				cost = 25.0;
				break;
		} //end of switch

		//factor the number of years
		cost *= years;

		//add discount for multiple years

		if (years > 1) {
			cost *= 0.8; //80%
		}

		document.getElementById('cost').value = `\$${cost.toFixed(2)}`;
	} else {
		document.getElementById('cost').value = 'Please put in valid values.';
	}
	return false;
}

function init() {
	document.querySelector('form').onsubmit = calculate;
}

window.onload = init;

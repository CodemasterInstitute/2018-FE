function formatNames() {
	'use strict';

	let formattedName;

	let firstName = document.getElementById('firstName').value;
	let lastName = document.getElementById('lastName').value;

	formattedName = `${lastName}, ${firstName}`;

	document.getElementById('result').value = formattedName;

	return false;
}

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = formatNames;
}
window.onload = init;

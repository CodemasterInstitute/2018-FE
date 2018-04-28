//function is called when the form is submitted
//return false.
function limitText() {
	'use strict';

	//store the text that is limited
	let limitedText;

	const originalText = document.getElementById('comments').value;
	const lastSpace = originalText.lastIndexOf(' ', 100);

	limitedText = originalText.slice(0, lastSpace);
	//displaying the character count.
	document.getElementById('count').value = originalText.length;
	document.getElementById('result').value = limitedText;

	return false;
}

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = limitText;
}

window.onload = init;

function calculate() {
	let total;

	const qty = document.getElementById('quantity').value;
	const price = document.getElementById('price').value;
	//let tax = document.getElementById('tax').value;
	const tax = 1.1;
	const discount = document.getElementById('discount').value;

	total = qty * price;
	//tax /= 100;
	//tax += 1;
	total *= tax;
	total -= discount;

	total = total.toFixed(2);
	document.getElementById('total').value = total;
	return false;
}
function init() {
	document.getElementById('theForm').onsubmit = calculate;
}

window.onload = init;

document.querySelector('#main-action-button').onclick = function () {
	document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
};

const links = document.querySelectorAll('.menu-item > a');

for (let i = 0; i < links.length; i++) {
	links[i].onclick = function () {
		document
			.getElementById(links[i].getAttribute('data-link'))
			.scrollIntoView({ behavior: 'smooth' });
	};
}

const buttons = document.querySelectorAll('.products-item .button');

for (let i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function () {
		document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
	};
}

const prices = document.getElementsByClassName('products-item-price');

document.getElementById('change-currency').onclick = function (e) {
	const currentCurrency = e.target.innerText;

	let newCurrency = '$';
	let coefficient = 1;

	if (currentCurrency === '$') {
		newCurrency = '₽';
		coefficient = 90;
	} else if (currentCurrency === '₽') {
		newCurrency = 'BYN';
		coefficient = 3;
	} else if (currentCurrency === 'BYN') {
		newCurrency = '€';
		coefficient = 0.9;
	} else if (currentCurrency === '€') {
		newCurrency = '¥';
		coefficient = 6.9;
	}

	e.target.innerText = newCurrency;

	for (let i = 0; i < prices.length; i++) {
		prices[i].innerText =
			+(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) +
			' ' +
			newCurrency;
	}
};

const product = document.querySelector('#product');
const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
document.querySelector('#order-action').onclick = function (event) {
	event.preventDefault();
	let hasError = false;

	[product, name, phone].forEach(el => {
		if (!el.value) {
			el.style.borderColor = 'red';
			hasError = true;
		} else {
			el.style.borderColor = '';
		}
	});

	if (!hasError) {
		[product, name, phone].forEach(el => {
			el.value = '';
		});

		alert('Спасибо за заказ! Мы скоро свяжемся с вами!');
	}
};

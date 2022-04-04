//console.log('page loaded');

console.log(document);

document.querySelector('#userForm input[type="email"]').onkeyup = function() {
	console.log('updating email');
	let email = document.querySelector('#userForm input[type="email"]').value;
	document.querySelector('#summary p').innerHTML = email;
};

document.querySelector('#userForm input[type="text"]').onkeyup = function() {
	console.log('updating name');
	let text = document.querySelector('#userForm input[type="text"]').value;
	document.querySelector('#summary h1').innerHTML = text;
};

document.querySelector('#userForm input[type="password"]').onkeyup = function() {
	console.log('updating password');
	let password = document.querySelector('#userForm input[type="password"]').value;

	let paragraphs = document.querySelectorAll('#summary p');
	paragraphs[1].innerHTML = password;
};



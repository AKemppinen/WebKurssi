
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

let title = document.createElement('h1');
document.body.appendChild(title);
var list = document.createElement('table');


for (let i=0; i < books.length; i++) {
	console.log(books[i].title);

	let item1 = document.createElement('td');
	let item2 = document.createElement('td');
	let itemtr = document.createElement('tr');
	let itemheader1 = document.createElement('th');
	let itemheader2 = document.createElement('th');
	itemheader1.innerHTML = "Title";
	itemheader2.innerHTML = "Year";
	item1.innerHTML = books[i].title;
	item2.innerHTML =  books[i].year;


	itemtr.addEventListener("click", () => {
		title.innerHTML = books[i].title;
	});

	list.appendChild(itemheader1);
	list.appendChild(itemheader2);
	list.appendChild(itemtr);
	itemtr.appendChild(item1);
	itemtr.appendChild(item2);
}

document.body.appendChild(list);


const myLibrary = [];

function Book(title, author, pages){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = false;

	this.info = function() {
		return `${title} by ${author}, ${pages} pages, ` 
		+ (this.read ? "started" : "not read yet")
	}
}

const toggleRead = function(book){
	book.read = book.read ? false : true;
	console.log("toggle?")
	console.log(book.info());
}

const myBook1 = new Book("Hobbit","J.R",100)
const myBook2 = new Book("abcHobbit","J.R",100)
const myBook3 = new Book("abcHo333bbit","J.R",100)
const myBook4 = new Book("4abcHo333bbit","J.R",100)

myLibrary.push(myBook1, myBook2, myBook3, myBook4);

function addBookToLibrary(title, author, pages){
	const temp = new Book(title, author, pages)
	myLibrary.push(temp);
	return temp;
}

const addButton = document.querySelector('.add');

addButton.addEventListener('click', (e) => {
	// check title etc.
	console.log("clicked");
	const title = document.querySelector("#title").value
	const author = document.querySelector("#author").value
	const page = document.querySelector("#page").value

	if(title != "" && author != "" && page != ""){
		console.log(title);
		const book = addBookToLibrary(title, author, page);
		addBookToPage(book);
	}
	e.preventDefault()
})

const container = document.getElementsByClassName("container")

for (const book of myLibrary) {
	addBookToPage(book);	
}

function addBookToPage(book) {
	const bookDiv = document.createElement("div");
	bookDiv.classList.add("book");
	const info = document.createElement("p");
	info.textContent = book.info();
	
	const readBtn = document.createElement("button");
	readBtn.textContent = "read or not"
	readBtn.addEventListener("click", (e) => {
		toggleRead(book);
		info.textContent = book.info()
	})
	
	bookDiv.appendChild(info);
	
	const rmBt = document.createElement("button");
	rmBt.textContent = "Remove book"
	rmBt.addEventListener("click", (e) => {
		//remove book
		bookDiv.remove();

	})
	
	bookDiv.appendChild(rmBt);
	bookDiv.appendChild(readBtn);
	
	container[0].appendChild(bookDiv);
}

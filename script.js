var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');

function inputlength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = ""

	var button = document.createElement("button")
		button.appendChild(document.createTextNode("Done!"));
		li.appendChild(button);
		button.onclick=done;
	// CREATE AN ELEMENT
		var button = document.createElement("button");
	// Add Text = delete
		button.appendChild(document.createTextNode("Delete"))
	// Append Button to list
		li.appendChild(button);

		button.onclick=removeParent;
}

function removeParent() {
	event.target.parentNode.remove();
}

function addListClick() {
	if (inputlength() > 0) {
		createListElement();
	}
}

function addListKeypress(event) {
	if (inputlength() > 0 && event.key === "Enter") {
		createListElement()
	}
}

function done(event) {
	event.target.parentNode.classList.toggle("done")
}

button.addEventListener("click", addListClick);

input.addEventListener("keydown", addListKeypress);

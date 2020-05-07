// Come up with 4 ways to select the first <p> tag

var tag1 = document.querySelector("p");
var tag2 = document.getElementById("first");
var tag3 = document.getElementsByClassName("special")[0];
var tag4 = document.querySelector(".special");
var tag5 = document.querySelector("#first");
var tag6 = documnent.getElementByTagName("p")[0];
var tag7 = document.querySelector("h1 + p"); // Uneccesary way to do it. Selects the first paragraph after h1

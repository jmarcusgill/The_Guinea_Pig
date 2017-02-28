//Declaring output Element from DOM
var outputEl = document.getElementById("output-target");
var guineaPig = document.getElementById("guinea-pig");

//When any section is clicked the output target text should be
//"You clicked on the {text of the section} section"
var whereYouAre = function(event) {
  outputEl.innerHTML = `You clicked here: ${event.target.innerHTML}`
}

document.getElementById("article").addEventListener("click", whereYouAre)

//When the mouse is over the h1 tag, the output element should
//contain the text "You moved your mouse over the header".
var youClickedHeader = function(event) {
  outputEl.innerHTML = `You clicked on the ${event.target.innerHTML} section`
}
document.getElementById("page-header").addEventListener("click", youClickedHeader)

//When the mouse leaves the h1 tag, the output element should
//contain the text "You left me!!"
var whyYouLeaveMe = function(event) {
  outputEl.innerHTML = `YOU LEFT ME`;
}
document.getElementById("page-title").addEventListener("mouseleave", whyYouLeaveMe);

//When you type characters into the input field,
//the output element should mirror the text in the input field.
var currentText = function(event) {
  outputEl.innerHTML = event.target.value;
}

document.getElementById("keypress-input").addEventListener("keypress", currentText);

//When you click the "Add color" button,
//the guinea-pig element's text color should change to blue
function toggleColor() {
  guineaPig.classList.toggle("addColor");
}
document.getElementById("add-color").addEventListener("click", toggleColor);







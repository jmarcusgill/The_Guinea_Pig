//Declaring output Element from DOM
var outputEl = document.getElementById("output-target");

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
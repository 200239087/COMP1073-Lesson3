/* javascript lives here */

console.log("App Started");

// Declare or initialize variable
// variable creats a link to the H1 element
var firstHeading = document.getElementById("firstHeading");

// Do not use window.alert or document.write
console.log(firstHeading.textContent);

//Three Steps for injecting content
// Step 1 - create a reference to an element
var FirstParagraph = document.getElementById("FirstParagraph");

// Step 2 - create a variable that contains your content
var myContent = "Changed Content!";

// Step 3 - assign the variable with your content to the  textContent property of the reference variable
FirstParagraph.textContent = myContent;

var SecondParagraph = document.getElementById("SecondParagraph");

var myHTMLContent = "<h2>Second Heading</h2>"
                    +" <p>This is an inner paragraph to the Second Paragraph</p>";

SecondParagraph.innerHTML = myHTMLContent;

// create a reference to the button on the page (index.html)
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click event and call the Click function
clickMeButton.addEventListener("click", Click);

// click function - used as an event handler
function Click() {
 console.log("clicked!");
}

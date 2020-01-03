var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomButton");

//Set gradient
function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    cssContent();
}

//Display CSS details
function cssContent() {
    // textContent method adds 'text content'
    css.textContent = body.style.background + ";";
}

// Generate random hex number
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Assign random color
function assignRandomColors() {
    body.style.background = 
        "linear-gradient(to right, " 
        + getRandomColor() 
        + ", " 
        + getRandomColor() 
        + ")";
    cssContent();
}

// Change gradient on manipulating first input
color1.addEventListener("input", setGradient);

// Change gradient on manipulating second input
color2.addEventListener("input", setGradient);

// Assign two random colors on clicking button
button.addEventListener("click", assignRandomColors);

// Set gradient to default values on load
window.onload = setGradient();


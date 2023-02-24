//=============== TYPR HTML =================
var times = 0;
var dtimes = 0;

// Create a function that takes in a string and writes it to the targetElement
function typewriter(stri, loca, spee) {
times++;
// Get a reference to the element you want to write to
var targetElement = document.querySelector('#resulti');
  var str = stri;
  var loc = loca;
  var speed = spee;
  if (loc.length > 0) {
    targetElement = document.querySelector(loc);
  }
  // Get the length of the string
  var length = str.length;
  // Create a variable to keep track of the current index
  var currentIndex = 0;

  // Create a function to write one character at a time
  function type() {
    // Get the current character
    const char = str.substring(0, currentIndex);
    // Write the current character to the targetElement
    targetElement.innerText = char;
    // Increase the currentIndex
    currentIndex++;
    // If the currentIndex is less than the length of the string, call the type function again
    if (currentIndex < length + 1) {
      setTimeout(type, speed);
    }
  }
  // Call the type function
  type();

}

// Call the typewriter function
// E.G ->   typewriter('> Hello World!', "#resulti", 100);

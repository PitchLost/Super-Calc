

console.log('Hello World')

const calcForm = document.getElementById('calcForm')
// Text Box:
let textBox = document.getElementById('text-box')
let textBoxValue = textBox.value;



// Add a running total for the calculation: 
let new_calc = 0

textBoxValue = new_calc

// Flag to keep the total loop running: 

let flag = true;

// Array to keep track of prev equations: 
const prev_calcs_ar = []

//! Testing: 
let added_divs = 0
let event_click = 0


// Buttons: 
const one = document.getElementById('one');
one.value = 1;
const two = document.getElementById('two');
two.value = 2;
const three = document.getElementById('three');
three.value = 3;
const four = document.getElementById('four');
four.value = 4;
const five = document.getElementById('five');
five.value = 5;
const six = document.getElementById('six');
six.value = 6;
const seven = document.getElementById('seven');
seven.value = 7;
const eight = document.getElementById('eight');
eight.value = 8;
const nine = document.getElementById('nine');
nine.value = 9;
const zero = document.getElementById('zero')
zero.value = 0


// Operators: 

const multiply = document.getElementById('multiply')
multiply.value = '*'

const plus = document.getElementById('plus')
plus.value = '+'

const minus = document.getElementById('minus')
minus.value = '-'

const divide = document.getElementById('divide')
divide.value = '/'

const del = document.getElementById('delete')
 del.value = ' ' 

 // Prev-calcs HTML elements

const prev_calcs = document.getElementById('prev-calcs') // Get the previous calculations HTML div
const nameBox = document.getElementById('name-box')

// Add a number to the text box

// Prevent Defualt Submission
calcForm.addEventListener('submit',e => { 
    e.preventDefault()
})
function add_number(element) { 
    let new_number = element.value; // Make a local new number variable to track what number is being added
    textBox.value = textBox.value += new_number // Update the text box with the new number in it
    new_number = 0 // Reset This variable
}

// Function to calculate the equation: 

function calculate() { 

  if (textBox.value == '' || nameBox.value == '') { 
    alert('Please fill out all the boxes')
  } else { 


  let answer = eval(textBox.value) // Get the answer of the equation 
  
  // Append the answer to the previous answers: 
  //! Testing
  added_divs++;
  //!
  const new_div = document.createElement('div') // Create a new div for the previous equation
  const new_header = document.createElement('header') // Create a new header element for the name of the equation
  new_header.textContent = nameBox.value // Assign the header element with nameBox.value
  new_div.textContent = answer; // Assign the div with the value of the answer and the name of the equation
  new_div.appendChild(new_header) // Apend the header with new calcs
  prev_calcs.appendChild(new_div) // Append the new div to the previous calcs section

  // Add Event listners to all the new divs:

// Add a single event listener to the parent element
prev_calcs.addEventListener('click', function(event) {
  event_click++; // increase the counter of event listener runs (im super tired when writing this)
  if (event_click > added_divs) { 
    flag_2 = true;
    event_click = 0 // Somehow this works again im super tired idk
  }
  if (event.target.tagName === 'DIV' && flag_2 == true) { // If the item clicked on was one of the divs and the flag_2 == true
 
      combine(event.target); // Call the combine function and pass the event.target as the caller
      flag_2 = false; // Set flag to prevent further combines until needed
  }
 
});
 // Clear the boxes
 clear_all() 

}}

// Function to clear the number box: 
function clear_number() { 
  textBox.value = ' ' // Set the textBox text content to empty
}

// function to clear all boxes when done

function clear_all() { 
  textBox.value = ' '
  nameBox.value = ' '
}






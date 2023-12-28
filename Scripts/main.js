

console.log('Hello World')

const calcForm = document.getElementById('calcForm')
// Text Box:
let textBox = document.getElementById('text-box')
let textBoxValue = textBox.value;


// Add a running total for the calculation: 
let runningTotal = 0

textBoxValue = runningTotal

// Flag to keep the total loop running: 

let flag = true;


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


// Operators: 

const multiply = document.getElementById('multiply')
multiply.value = 'x'

const plus = document.getElementById('plus')
plus.value = '+'

const minus = document.getElementById('minus')
minus.value = '-'

const divide = document.getElementById('divide')
divide.value = '÷'

const del = document.getElementById('delete')
// del.value = '' //FIXME:

const clear = document.getElementById('clear')
clear.value = ''


// Add a number to the text box

// Constantly update the text box with the running total

while (flag == true) { 
    if (flag) {
        textBox.value = runningTotal;
    }

    // Perform operations that might eventually change the value of flag or runningTotal
    // For instance, setting flag to false to break out of the loop
    flag = false; // Example change to exit the loop
}



calcForm.addEventListener('submit',e => { 
    e.preventDefault()
})

function add_number(element) { 

    console.log('The add number function was called from',element) // Log the caller

    let new_number = element.value; // Make a local new number variable to track what number is being added
    console.log('The value of the number being added',new_number) // Log that number

    //TODO: Clear the text box if the value is lower than 1 (0) otherwise it will just be 01+2+5 and so on. Not super duper urgent
    // if (textBoxValue < 1) { 
    //     textBoxValue = NaN
    // }

    textBox.value = textBoxValue += new_number // Update the text box with the new number in it

    // reset the variables: 
    new_number = 0
    

}


function calculate() { 
    console.log('The total is',runningTotal)
}






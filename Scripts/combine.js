console.log('Hello World -combine.js')

let total = [0] // Array to keep track of the total

let to_add = null // We will assign the value being added to this variable. 

let final_result = 0



// ! Testing

let flag_2 = true

let combines_counter = 0

let new_total
let new_total_header




// Add items to the combine array

//! Function runs for each event listener on the divs. This needs to be fixed ASAP


function combine(caller) { 
    caller.style.backgroundColor = 'red' // Set the background color to red when selected
    caller.style.color = 'white' // Set the text color to white when selected
    console.log('The length of the total is,',total.length) // Log
    console.log('combine function (11)') // Log
to_add = caller.childNodes[0].textContent.trim() // Assign the variable with the value being added
total.push(to_add) // Add the number to the variable
to_add = null // Reset the variable for future use



console.log('The total is at:',total) // Log
return true

    }



function calc_combines() { 
    document.querySelectorAll('#prev-calcs div').forEach(divElement => {
        divElement.style.backgroundColor = 'beige'; // Set the background color to the normal beige
        divElement.style.color = 'black' // Set the text color back to black
    });
    
    
    for (let i = 0; i <total.length; i++) { 
    final_result += parseFloat(total[i]); // Get the sum of the total array
    }
 let total_name = prompt('Your total is:' + '' + final_result + 'Enter a name to save this as:') // Give a alert with the total
 console.log('Saving as',total_name)

    // Add a new div with the grand total on it: 

    new_total = document.createElement('div') // Create a div element with the total
    new_total_header = document.createElement('header') // Create a div element with a normal header
    new_total.textContent = final_result; // New element text content
    new_total_header.textContent = total_name // New header text content
    new_total.appendChild(new_total_header) // Merge the two elements
    prev_calcs.appendChild(new_total) // Append the new elements to the prev_calcs

    // Reset Variables: 
    final_result = 0
    total = [0]
    total_name = null
    console.log(final_result, total)
    }
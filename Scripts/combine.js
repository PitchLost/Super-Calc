console.log('Hello World -combine.js')

let total = [0] // Array to keep track of the total

let to_add = null // We will assign the value being added to this variable. 

let final_result = 0



// ! Testing

let flag_2 = true

let combines_counter = 0


// Add items to the combine array

//! Function runs for each event listener on the divs. This needs to be fixed ASAP


function combine(caller) { 
    console.log('The length of the total is,',total.length) // Log
    console.log('combine function (11)') // Log
to_add = caller.childNodes[0].textContent.trim() // Assign the variable with the value being added
total.push(to_add) // Add the number to the variable
to_add = null // Reset the variable for future use



console.log('The total is at:',total) // Log
return true

    }



function calc_combines() { 
    
    for (let i = 0; i <total.length; i++) { 
    final_result + total[i]
    }
    console.log('The Grand total is,',final_result)
    combine_flag = true
    }
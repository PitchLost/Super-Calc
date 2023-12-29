console.log('Hello from combine.js')

let counter = 0
let first_eq = 0
let second_eq = 0




function combine(caller) { 
    counter++; // Increase the counter
    if (counter  == 1 ) { 
    first_eq = caller.childNodes[0].textContent.trim() // Get the first node of the caller in this case that will be the number
    console.log('first_eq',first_eq) // Log
    }
    else if (counter == 2) { 
        second_eq = caller.childNodes[0].textContent.trim(); // Get the first node of the second caller
        console.log('second_eq',second_eq) // Log
       
    }
    else if (counter == 3) { 
        combineEquations(first_eq, second_eq) // Call the combine function if the counter is at 3 (this means that both the eqs have been got)
        counter = 0 // Set the counter to 0 to allow the function to run again
    }
}
function combineEquations(first_eq,second_eq ) {
    const combinedResult = parseInt(first_eq) + parseInt(second_eq) // Turn the string into a interger
    alert('The total is:' + ' ' + '$' + combinedResult) // Give a alert with the value
    first_eq = 0 // Reset the first equation variable
    second_eq = 0 // Reset the second equation variable
  

  
  }


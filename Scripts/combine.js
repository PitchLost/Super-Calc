console.log('Hello from combine.js')

let counter = 0
let first_eq = 0
let second_eq = 0




function combine(caller) { 
    counter++;
    if (counter  == 1 ) { 
    first_eq = caller.childNodes[0].textContent.trim()
    console.log('first_eq',first_eq)
    }
    else if (counter == 2) { 
        second_eq = caller.childNodes[0].textContent.trim();
        console.log('second_eq',second_eq)
       
    }
    else if (counter == 3) { 
        combineEquations(first_eq, second_eq)
        counter = 0
    }
}
function combineEquations(first_eq,second_eq ) {
    const combinedResult = parseInt(first_eq) + parseInt(second_eq)
    alert('The total is:' + ' ' + '$' + combinedResult)
  

  
  }


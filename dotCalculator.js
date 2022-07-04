function dotCalculator (equation) {
	const firstDotes = equation.indexOf(" ");
  const mathSymbol = equation[equation.indexOf(" ") + 1];
  const secondDotes = equation.length - equation.lastIndexOf(" ") - 1;



//  if (Math.floor((firstDotes + secondDotes)) <= 0  || Math.floor((firstDotes - secondDotes)) <= 0 || Math.floor((firstDotes / secondDotes)) <= 0 || Math.floor((firstDotes * secondDotes)) <= 0 ) {
//     return '""';
//   }   

 

   if (mathSymbol === "+") {
   
   return `"${"".padEnd(Math.floor((firstDotes + secondDotes)), ".")}"`; 

  }  
  else if (mathSymbol === "-") {  
    return `"${"".padEnd(Math.floor((firstDotes - secondDotes)), ".")}"`;
  }  
  else if (mathSymbol === "*") {
   return `"${"".padEnd(Math.floor((firstDotes * secondDotes)), ".")}"`;
  }  
  else if (mathSymbol === "/") {
    return `"${"".padEnd(Math.floor((firstDotes / secondDotes)), ".")}"`;
  } 
   


};

console.log(dotCalculator( "..... + ..............." )) // => "...................."
console.log(dotCalculator( "..... - ..."  )) // =>  ".."
console.log(dotCalculator( "..... - ." )) // => "...."
console.log(dotCalculator( "..... * .." )) // => ".........."
console.log(dotCalculator( "..... // .."  )) // => ".."
console.log(dotCalculator( ". // .."  )) // => ""
console.log(dotCalculator( ".. - .." )) // => ""

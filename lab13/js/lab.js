/*
   Loops!

   Author: Coralie Norenberg
   Date: November 2024
*/

// FizzBuzz function definition
function fizzBuzz() {
   // Define the upper limit of numbers to loop through (200 as per the prompt)
   const maxNumber = 200;

   // Define the factors and their associated texts
   const factors = [
       { number: 3, text: "Fizz" },
       { number: 5, text: "Buzz" },
       { number: 7, text: "Boom" },
   ];

   // Start with an empty string that we will append to
   let outputStr = "";

   // Loop through numbers 1 to maxNumber
   for (let num = 1; num <= maxNumber; num++) {
       let result = ""; // Start with an empty result string for each number

       // Check divisibility for each factor and append corresponding text to result
       factors.forEach(factor => {
           if (num % factor.number === 0) {
               result += factor.text;
           }
       });

       // If no factors are matched, just add the number itself
       if (result === "") {
           result = num;
       }

       // Append the result with a paragraph tag for each output item
       outputStr += `<p>${result}</p>`;
   }

   // After the loop ends, output the compiled string to the #output div
   $("#output").html(outputStr);
}

// Call the fizzBuzz function when the page loads
$(document).ready(function() {
   fizzBuzz();
});

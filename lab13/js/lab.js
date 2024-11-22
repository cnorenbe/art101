/*
   Loops!

   Author: Coralie Norenberg
   Date: November 2024
*/

// FizzBuzz function definition
function runFizzBuzz() {
    const maxNumber = 200; // Define the upper limit (200)

    let outputStr = ''; // String to accumulate the results

    // Loop through numbers from 1 to maxNumber
    for (let num = 1; num <= maxNumber; num++) {
        let output = ''; // Start with an empty output for each number

        // Check divisibility and append the corresponding text
        if (num % 3 === 0) output += 'Fizz';
        if (num % 5 === 0) output += 'Buzz';
        if (num % 7 === 0) output += 'Boom';

        // If no factors matched, just use the number itself
        if (output === '') {
            output = num;
        }

        // Dynamically create a class for each result (e.g., 'fizz', 'buzz', 'boom', etc.)
        const className = output.toString().toLowerCase().replace(/\s+/g, '').trim();

        // Append the result as a div (not a paragraph) with a dynamic class for styling
        outputStr += `<div class="grid-item ${className}">${output}</div>`;
    }

    // Output the result into the #output div
    document.getElementById('output').innerHTML = outputStr;
}

// Call the function to display the FizzBuzz results when the page is ready
document.addEventListener('DOMContentLoaded', runFizzBuzz);

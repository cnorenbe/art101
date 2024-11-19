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

        // Append the result as a paragraph with a dynamic class for styling
        outputStr += `<p class="${output.toLowerCase()}">${output}</p>`;
    }

    // Output the result into the #output div
    document.getElementById('output').innerHTML = outputStr;
}

// Call the function to display the FizzBuzz results when the page is ready
document.addEventListener('DOMContentLoaded', runFizzBuzz);

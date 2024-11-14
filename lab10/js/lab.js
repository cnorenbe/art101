/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Author: Coralie Norenberg
   Date: November 2024
*/

// Helper function to generate a random color in HEX format
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Click listener for the "make-color" button
  $("#make-color").click(function() {
    // Get a new random color
    const newColor = generateRandomColor();
  
    // Append a new div to the output div with a background color of the random color
    $("#output").append('<div class="color-box" style="background-color: ' + newColor + ';"></div>');
  });
  
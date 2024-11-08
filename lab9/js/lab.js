/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Coralie Norenberg
   Date: November 2024
*/

$(document).ready(function() {
  // Append a button to the Challenge section
  $('#challenge').append('<button class="section-btn">Start Challenge</button>');
  
  // Append a button to the Problems section
  $('#problems').append('<button class="section-btn">View Problems</button>');
  
  // Append a button to the Results section
  $('#results').append('<button class="section-btn">View Results</button>');
});
/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Coralie Norenberg
   Date: November 2024
*/

$(document).ready(function() {
    
  $("#button-challenge").click(function() {
      $("#challenge").toggleClass("special");
  });
  
  $("#button-problems").click(function() {
      $("#problems").toggleClass("special");
  });
  
  $("#button-results").click(function() {
      $("#results").toggleClass("special");
  });
});
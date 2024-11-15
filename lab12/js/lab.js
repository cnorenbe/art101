/*
   Hogwarts Sorting!

   Author: Coralie Norenberg
   Date: November 2024
*/

var houseGreetings = {
  "Gryffindor": " Brave, bold, and just a little reckless—always charging into danger with a daring grin and a heart of gold.",
  "Slytherin": "Ambitious, cunning, and masters of the long game. They might not always play by the rules, but they'll always win, and look good doing it." ,
  "Hufflepuff": "Loyal, hardworking, and secretly the best at everything because they're too humble to brag about it. They'll probably bake you cookies while saving the day.",
  "Ravenclaw": "Smart, witty, and never without a clever comeback. They'd rather solve a puzzle than go to a party—but they'll solve the party's seating chart just to make it more efficient.",
};
housesArray = [
 {
    title: "Gryffindor",
    text: "Gryffindor house is where you find the bravest students!"
 },
 {
    title: "Ravenclaw",
    text: "Ravenclaw house is where you find the most studious!"
 },
 {
    title: "Slytherin",
    text: "Slytherin house is where you find the best of both worlds, you get to decide what that means..."
 }, 
 {
    title: "Hufflepuff",
    text: "Hufflepuff house is where you find the kindest and most loyal!"
 }
]

function sortingHat(str) {
  len = str.length;
  mod = len % 4
  if (mod == 0) {
  return "Gryffindor";
  }
  else if (mod == 1) {
  return "Ravenclaw";
  }
  else if (mod == 2) {
  return "Slytherin";
  }
  else if (mod == 3) {
  return "Hufflepuff";
  }
  return "Hufflepuff";
}
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {  
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var greeting = houseGreetings[house];
  newText = "<p>The Sorting Hat has sorted you into " + house +"." + greeting + "</p»";
  document.getElementById ("output"). innerHTML = newText;
  });
  
// Author: Coralie Norenberg <cnorenbe@ucsc.edu>
// Date: October 24

// Define Variables
myTransport = ["car", "bicycle", "walking"];

// create an object for my main ride
myMainRide = {
    make:  "Toyota",
    model: "4Runner",
    color: "white",
    year: 1999,

    age : function () {
      return 2024 - this.year;
    }
}

// output
document.writeIn("Kinds of transportation I use: ", myTransport, "<br>");

document.writeIn("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

  
function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// Author: Coralie Norenberg <cnorenbe@ucsc.edu>
// Date: October 28


function sortUserName() {
  var userName = window.prompt("hiii! ppls tell me your name so i can fix it!")
  console.log("userName =", userName);
  //
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //
  var nameArraySort = nameArray.sort();
  console.log("nameArrraySort =", nameArraySort);
  //
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// output
document.writeIn("guess what... I FIXED YOUR NAME: ",
  sortUserName(), "</br>");

/*
   NUZ Guitars - A mock small business

   Authors:          Nate Renfro, Ulyses Parra, Zerrick Orion
   Date:             5.12.17

   Filename:         NUZStore.js
   Supporting files: none
*/

//call function on change
document.onchange = customChange;
//create function to change background of square
function customChange(){
//declare variables for body, neck, and bridge
var body = document.getElementById("bod");
var neck = document.getElementById("nck");
var bridge = document.getElementById("bridg");
var bodImage = document.getElementById("body");
var neckImage = document.getElementById("neck");
var bridgeImage = document.getElementById("bridge");
//if statements for neck
if (neck.value == 1){
  neckImage.style.backgroundImage = "url('img/WarlockN.png')";
} else if (neck.value == 2){
  neckImage.style.backgroundImage = "url('img/SgN.png')";
} else if (neck.value == 3){
  neckImage.style.backgroundImage = "url('img/SpikeN.png')";
} else if (neck.value == 4){
  neckImage.style.backgroundImage = "url('img/VN.png')";
} else if (neck.value == 5){
  neckImage.style.backgroundImage = "url('img/ExplorerN.png')";
} else if (neck.value == 6){
  neckImage.style.backgroundImage = "url('img/FancyN.png')";
} else if (neck.value == 7){
  neckImage.style.backgroundImage = "url('img/MusicN.png')";
} else if (neck.value == 8){
  neckImage.style.backgroundImage = "url('img/ClassicN.png')";
} else if (neck.value == 9){
  neckImage.style.backgroundImage = "url('img/TelecasterN.png')";
} else if (neck.value == 10){
  neckImage.style.backgroundImage = "url('img/ElectricN.png')";
} else if (neck.value == 11){
  neckImage.style.backgroundImage = "url('img/LesPaulN.png')";
} else if (neck.value == 12){
  neckImage.style.backgroundImage = "url('img/WesternN.png')";
} else if (neck.value == 13){
  neckImage.style.backgroundImage = "url('img/SilverN.png')";
} else if (neck.value == 14){
  neckImage.style.backgroundImage = "url('img/TigerN.png')";
} else if (neck.value == 15){
  neckImage.style.backgroundImage = "url('img/CemeteryN.png')";
} else if (neck.value == 0){
  neckImage.style.backgroundImage = null;
}
//if statements for body
if (body.value == 1){
  bodImage.style.backgroundImage = "url('img/WarlockB.png')";
} else if (body.value == 2){
  bodImage.style.backgroundImage = "url('img/SgBody.png')";
} else if (body.value == 3){
  bodImage.style.backgroundImage = "url('img/SpikeB.png')";
} else if (body.value == 4){
  bodImage.style.backgroundImage = "url('img/VB.png')";
}else if (body.value == 5){
  bodImage.style.backgroundImage = "url('img/ExplorerB.png')";
} else if (body.value == 6){
  bodImage.style.backgroundImage = "url('img/FancyB.png')";
}else if (body.value == 7){
  bodImage.style.backgroundImage = "url('img/MusicB.png')";
}else if (body.value == 8){
  bodImage.style.backgroundImage = "url('img/ClassicB.png')";
} else if (body.value == 9){
  bodImage.style.backgroundImage = "url('img/TelecasterB.png')";
} else if (body.value == 10){
  bodImage.style.backgroundImage = "url('img/ElectricB.png')";
} else if (body.value == 11){
  bodImage.style.backgroundImage = "url('img/LesPaulB.png')";
} else if (body.value == 12){
  bodImage.style.backgroundImage = "url('img/WesternB.png')";
} else if (body.value == 13){
  bodImage.style.backgroundImage = "url('img/SilverB.png')";
} else if (body.value == 14){
  bodImage.style.backgroundImage = "url('img/TigerB.png')";
} else if (body.value == 15){
  bodImage.style.backgroundImage = "url('img/CemeteryB.png')";
} else  if (body.value == 0){
  bodImage.style.backgroundImage = null;
}
}

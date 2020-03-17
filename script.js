//page reset on load
function setup() {
  var textInput;
  textInput = document.getElementById(getId);
  textInput.focus();
}
window.addEventListener("load", setup, false);
event.preventDefault();

//Create variables to hold customer message values
var greeting = "";
var name = "";
var message = "";
var welcome = greeting + " " + name + " " + message;

//Create variables to hold sign and tile values and eliminating html var confusion
var sign = "";
var numTiles = sign.length;
var tileCost = 0;

//Create variables to hold Cost values
var subCost = numTiles * tileCost;
var shipCost = 0;
var totalCost = subCost + shipCost;

//create a single function to get text values for all ids on page and set text
//get element by Id and replace with new personalized welcome message
function setTextContentById(getId, setText) {
  var el = document.getElementById(getId);
  el.textContent = setText;
}

//calling the function to create the sign message
setTextContentById(greeting, welcome);

//using diff notation to change paramaeter value
-setTextContentById(greeting, welcome);
+setTextContentById("greeting", welcome);

//call and reuse generic function with different parameters
setTextContentById(userSign, sign);
setTextContentById(tiles, numTiles);
setTextContentById(subTotal, subCost);
subCost.textContent = "$ " + subCost;
setTextContentById(shipping, shipCost);
shipCost.textContent = "$ " + shipCost;
setTextContentById(grandTotal, totalCost);
totalCost.textContent = "$ " + totalCost;
//$(document).ready()
function initiateVars() {
  var greeting = "Howdy";
  var name = "Dr. Cumbie";
  var message = "Is your order correct? ";
  var sign = "Beware! COVID-19 Detected Nearby!";
  var numTiles = sign.length;
  var subCost = numTiles * tileCost;
  var tileCost = 3;
  var shipCost = 15;
  var totalCost = subCost + shipCost;
  var welcome = greeting + " " + name + " " + message;
}
// call function for original variables
initiateVars();

function payClear() {
  $document.ready();
}
var el = document.getElementByClass("action");
a.onclick = payClear();
a.addEventListener("click", payClear, false);
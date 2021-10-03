var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var messageBanner = document.getElementById('messageBanner');
var lastNumber = document.getElementById('lastNumber');
var functionTextBox = document.getElementById('functionTextBox');
var numberBox = document.getElementById('numberBox');
var numberBoxSecond = document.getElementById('numberBoxSecond');


var myEq = new Equation();
var myGrid = new Grid(canvas, myEq);

document.getElementById("form").onsubmit = function(e){
  e.preventDefault();
  clicked();
  return false;
};

document.getElementById("numberBoxForm").onsubmit = function(e){
  e.preventDefault();
    calculate();
  return false;
};

document.getElementById("numberBoxSecondForm").onsubmit = function(e){
    e.preventDefault();
    find();
    return false;
};

myGrid.DrawGridLines();

function clicked() {

  myEq.setEquation(functionTextBox.value);

  //clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  //re-draw grid lines.
  myGrid.DrawGridLines();

  if (!myEq.validateEq()) {
    messageBanner.innerText = "The term must contain only real numbers";
    return;
  }
  myGrid.GraphEquation();
}

function calculate() {
     const result = evalArithmeticExp(numberBox.value);
     messageBanner.innerText = result;
}

function find() {
    const result = getLastNumber(numberBoxSecond.value);
    lastNumber.innerText = result;
}

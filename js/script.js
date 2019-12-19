let currentP = "O";
var numTimes = 0;
let gameEnd = false;

function performLogic( buttonId, tileId){
  $(buttonId).hide(tileId);
  $(tileId).append(currentP);
  changecurrentP();
  addOne();
  threetiles();
}
function changecurrentP (){

if(currentP === "O"){
      currentP = "X"
  } else{
      currentP = "O"
  }
}
function addOne(){
  numTimes = 1 + numTimes;
if(numTimes === 9)
  $("h1").text("It's A Draw!")
}
//Implement behavior that will end the game when a player wins. First write a function with 3 parameters of the tileIds, and return if the value of the each of the tileIds are equal to the current player
//3 tileids 
function threetiles( tiles1,tiles2,tiles3)
  if()


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});


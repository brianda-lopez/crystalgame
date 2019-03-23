
// 1. Create variable(s).
var randomNum = randomIntFromInterval();
var total = 0; 
var red;
var blue;
var yellow;
var white;

// 2.Run this function to start the game and the computer gives a Target number

function randomIntFromInterval(min,max){
  var min=20;
  var max=100;
return Math.floor(Math.random()*(max-min+1)+min);   
} ;

$(".start-button").on("click", function(){
    $(this).hide();
  $("#target").html(randomNum);
  red = redValue();  
  blue = blueValue(); 
  yellow= yellowValue(); 
  white= whiteValue(); 
}); 


//3. When you click on the rock, a random number will be assigned to each rock
function redValue(min,max){
  var min=1;
  var max=10;
return Math.floor(Math.random()*(max-min+1)+min);
}

$("#red-rock").on("click", function(){
  total = total + red ;
  console.log(red);
  $("#score").html(total);
  compare();
});
function blueValue(min,max){
  var min=1;
  var max=10;
return Math.floor(Math.random()*(max-min+1)+min);
}
$("#blue-rock").on("click", function(){
  total = total + blue;
  console.log(blue);
  $("#score").html(total);
  compare();
});
function yellowValue(min,max){
  var min=1;
  var max=10;
return Math.floor(Math.random()*(max-min+1)+min);
}

$("#yellow-rock").on("click", function(){
  total = total + yellow;
  console.log(yellow);
  $("#score").html(total);
  compare();
});

function whiteValue(min,max){
  var min=1;
  var max=10;
return Math.floor(Math.random()*(max-min+1)+min);
}

$("#white-rock").on("click", function(){
  total = total + white;
  console.log(white);
  $("#score").html(total);
  compare();
});

//4. Comparing the total of the values (score) with target number (randomNum)
function compare(){
  if (total === randomNum ){
    alert("You win!!");
    reset();
  }
  if (total > randomNum){
    alert ("You lost!!");
    reset();
}
};

//5. To reset the game, show the start button, clear the target number and score

function reset(){
$(".start-button").show();
$("#score").empty();
$("#target").empty();
randomNum = randomIntFromInterval();
};















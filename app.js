
// 1. Create variable(s).
var totalScore = 0;


// 2.Run this function to start the game
$(".start-button").on("click", function(){
    //$(this).hide();
    function randomIntFromInterval(min,max){
      var min=20;
      var max=100;
    return Math.floor(Math.random()*(max-min+1)+min);
      
  } ;
  
  $("#target").html(randomIntFromInterval());
}); 


//3. Computer provides a Target number
  function randomIntFromInterval(min,max){
    var min=20;
    var max=100;
  return Math.floor(Math.random()*(max-min+1)+min);
    
} ;

$("#target").html(randomIntFromInterval());

$(".start-button").on("click", function(){
  $(this).hide();
  function randomIntFromInterval(min,max){
    var min=20;
    var max=100;
  return Math.floor(Math.random()*(max-min+1)+min);
    
} ;





});





//4. When you click on the rock, a random number will be assigned to each rock
$("#red-rock").on("click", function(){
  function redValue(min,max){
    var min=1;
    var max=4;
  return Math.floor(Math.random()*(max-min+1)+min);
};
console.log(redValue());

});

$("#blue-rock").on("click", function(){
  function blueValue(min,max){
    var min=5;
    var max=8;
  return Math.floor(Math.random()*(max-min+1)+min);
  };
  console.log(blueValue());
});

$("#white-rock").on("click", function(){
  function whiteValue(min,max){
    var min=5;
    var max=8;
  return Math.floor(Math.random()*(max-min+1)+min);
  };
  console.log(whiteValue());
});

$("#yellow-rock").on("click", function(){
  function yellowValue(min,max){
    var min=5;
    var max=8;
  return Math.floor(Math.random()*(max-min+1)+min);
  };
  console.log(yellowValue());
});
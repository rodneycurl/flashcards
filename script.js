$(document).ready(function(){

var questionList = [
  {
    id: 1,
    text: 'What state is Michael Jordan from?',
    answer: 'NC'},
    {
      id: 2,
      text:'What was MJ\'s first NBA jersey number?',
      answer: '23'
    },
    {
      id: 3,
      text:'What team did MJ win 6 NBA finals with?',
      answer: 'Chicago Bulls'
    },
    {
      id: 4,
      text:'What\'s the name of the movie Michael Jordan starred in with Bugs Bunny?',
      answer: 'Space Jam'
    },
    {
      id: 5,
      text:'What MLB Baseball team did MJ play for?',
      answer: 'White Soxs'
    },
    {
      id: 6,
      text:'What college did Michael Jordan attend?',
      answer: 'UNC'
    },
    {
      id: 7,
      text:'What shoes did MJ wear in the flu game?',
      answer: 'Air Jordan 12 Black/Red'
    },
]

var currentQuestion=0;

// REMEMBER $('.message').html('<h1> You Won </h1>') //// $('.message').html()
var score = 0;
var output;

//Created a variable for the score
function beginGame() {
  var currentQuestion = 0;
  //instead of console log, this is where you would use jquery to change the text/images on DOM
  // console.log(questionList[currentQuestion].text);
  $(".questionsList").html( questionList[currentQuestion].text );
  // console.log('begin');
}

  $(".inputanswersubmit").click(function(){
    //get user input
    var userinput = $(".input4answer").val();
    //check user input against the answer
    if (userinput == questionList[currentQuestion].answer){
          output = "Correct";
          // $(this).append($("<div class='correct'></div>"))
          score++;
    } else {
      output = "Wrong";
    }
    $(".alert").css("display", "block");
    $(".answer").css("display", "block");
    $(".alert").html(output);
    $(".answer").html("THE ANSWER IS: "+questionList[currentQuestion].answer);
    $(".scoreboard").html("SCORE: "+score);
    //if right, congratulate the player
    //else, let the player know that they guessed wrong
    $(".next").css("display", "block");
  });
$(".next").click(nextQuestion);

function nextQuestion(){
  //instead of console log, this is where you would use jquery to change the text/images on DOM
  if (currentQuestion == (questionList.length-1)){
    output = "Game Over";
    $(".alert").html(output);
    $(".answer").css("display", "none");
    // $(".playagain").css("display", "block");
    $(".next").css("display", "none");

  } else {
    currentQuestion++;
    $(".questionsList").html( questionList[currentQuestion].text );
    $(".alert").css("display", "none");
    $(".answer").css("display", "none");
    $(".input4answer").val("");
  }
}

//  $(".playagain").click(beginGame);
$('.message').html('<h1> You Won </h1>')
beginGame()
});

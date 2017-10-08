var options = ["asiago", "cheddar", "mozzerella", "provolone", "munster", "gouda", "gorgonzola"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

//Counters
var wins = 0
var losses = 0
var guessesRemaining = 6

//FUNCTIONS
//-----------------------------------------------------------

function startGame(){
  selectedWord = options[Math.floor(Math.random() * options.length)];
  lettersInWord = selectedWord.split("");
  numBlanks = lettersInWord.length;

  //RESET
    guessesRemaining = 6;
    blanksAndSuccesses = [];
    wrongGuesses = [];

    //Populate blanksAndSuccesses with right number of blanks and successful guesses.
    for (var i = 0; i < numBlanks; i++){
      blanksAndSuccesses.push("_");
    } 

    //Update HTML
    document.querySelector("#wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#wrongGuesses").innerHTML = wrongGuesses;

  console.log(selectedWord);
  console.log(lettersInWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);

}

function checkLetters(letter){
  //Check if letter exists in code at all

  // alert(letter);
  var isLetterInWord = false

  for(var i=0; i<numBlanks;i++){
    if (selectedWord[i] == letter){
      isLetterInWord = true;
    //  alert("letter found");
    }
  }
  //Check where in the word the letter exists, then populate blanksAndSuccesses array.
  if(isLetterInWord){
      for(var i=0; i<numBlanks;i++){
        if(selectedWord[i]==letter){
          blanksAndSuccesses[i]=letter;
        }
      }
    }
    else{
      wrongGuesses.push(letter);
      guessesRemaining--;
    }
    //Testing
    console.log(blanksAndSuccesses);

}

function roundComplete(){
  console.log("Win Count:" + wins + "|Loss Count:" + losses + "|Guesses left:" + guessesRemaining);

  document.querySelector("#guessesRemaining").innerHTML = guessesRemaining;
  document.querySelector("#wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  document.querySelector("#wrongGuesses").innerHTML = wrongGuesses.join(" ");

  //Check if user won
  if(lettersInWord.toString() == blanksAndSuccesses.toString()){
    wins++;
    alert("You Win!");
    document.querySelector("#wins").innerHTML = wins;
    startGame();
  }
  //Check if user lost
  else if(guessesRemaining == 0){
    losses++;
    alert("Game Over");
    document.querySelector("#losses").innerHTML = losses;
    startGame();
  }
}


//Main Process
//-----------------------------------------------------------

//Initiates the code the first time
startGame();

//Register Key Clicks
document.onkeyup = function(event){
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(userGuess);
  roundComplete();
  //userGuess defines "letter" for checkLetters functions parameter.

  //Testing
  console.log(userGuess);
}
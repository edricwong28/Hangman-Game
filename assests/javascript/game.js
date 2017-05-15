


  //GLOBAL VARIABLES
  // Holds all the words
  var wordList = ["cheddar", "provolone", "mozzerella", "munster", "gorgonzola", "parmesan", "asiago"];
  //Holds chosenWord
  var chosenWord = "";
  //Hold letters in word
  var lettersInWord = [];
  // We count the number of letters in the word. (tells us the number of `numBlanks`).
  var numBlanks = 0;
  //Holds blanks and successful guesses
  var blanksAndSuccesses = [];
  //Holds wrong guesses
  var wrongLetters = [];
  //Counters
  var winCount = 0;
  var lossCount = 0; 
  var guessesLeft = 10;
  var rightGuessCounter = 0;

  startGame();

function startGame() {
  // Solution is chosen randomly from wordList. (Like RPS)  
  chosenWord = wordList[Marth.floor(Math.random() * wordList.length)]; 
  // The word is broken into individual letters. (convert string to array of letters with .split)
  lettersInWord = chosenWord.split(" ");
  // We count the number of letters in the word. (tells us the number of `numBlanks`)
  numBlanks = lettersInWord.length;
  // We print the solution in console (for testing).
  console.log(numBlanks);


  rightGuessCounter = 0;
  // reset the wrong guesses from the previous round. Array of letters (second arrays, one for fails)
  guessesLeft = 10;
  wrongLetters = [];
  // reset the guess and success array at each round. Array of letters (first array, for succesful guesses)
  blanksAndSuccesses = [];


  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  // This is based on number of letters in solution.
  for(var i = 0; i < chosenWord.length; i++){
        // make a list of `_`
    // ex dog = ['d', 'o','g'] and generate a new array like ['_', '_', '_']
      blanksAndSuccesses.push(" _ ");
      document.getElementById("currentWord").innerHTML = blanksAndSuccesses;
      console.log(blanksAndSuccesses);
}
  // update html on the page
  // set #guesses-left to numberOfGuesses
  // set #word-blanks to the blanks at the beginning of each round in the HTML
  // set #wrong-guesses to empty / clears the wrong guesses from the previous round by
  document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("guesses-left").innerHTML = guessesLeft;
  document.getElementById("wins").innerHTML = winCount;
  document.getElementById("losses").innerHTML = lossCount;
  document.getElementById("wrong-guesses").innerHTML = wrongLetters;

  //Testing / Debugging

  console.log(chosenWord);
  console.log(lettersInWord);
  console.log(numBlanks); 
  console.log(blanksAndSuccesses);

  // checkLetters() function
  // It's where we will do all of the comparisons for matches.
  // Again, it's not being called here. It's just being made for future use.

  function checkLetters(letter) {

  var letterInWord = false;
  
  for (var i = 0; i < numBlanks; i++) {
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
      letterInWord = true;
  }

   // Check if a letter exists inside the array at all. (by looping thru the word as an array)

    if(chosenWord.indexOf(userKey) > -1){
      for(var i = 0; i < numBlanks; i++){
        if(lettersInWord[i] === userKey){
          rightGuessCounter++;
          blanksAndSuccesses[i] = userKey;
          document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");

    // If `letterInWord`, then figure out exactly where (which indices).

    if(letterInWord){
      
    }

    // Loop through the word, one letter at a time
      // Populate the blanksAndSuccesses with every instance of the letter.
      // if chosenWord letter is the same as letter
        // Here we set the specific space in blanks and letter equal to the letter when there is a match.

  // If the letter doesn't exist at all...
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
}
          }
       }
      }
      else{
        wrongLetters.push(userKey);
        guessesLeft++;
        document.getElementById("num-guesses").innerHTML = guessesLeft;
        document.getElementById("wrong-guesses").innerHTML = wrongLetters;

        console.log("Wrong Letters = " + wrongLetters)
        console.log("Guesses left are  = " + guessesLeft)
      }
  }
      
    
 
  // roundComplete() function
  // Here we will have all of the code that needs to be run after each guess is made      
function roundComplete() {  

  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  console.log(winCount);
  console.log(lossCount);
  console.log(guessesLeft)

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("num-guesses").innerHTML = guessesLeft;

  // Update #word-blanks to show any correct guesses
  // Update #wrong-guesses to show the wrong guesses

  // If we have gotten all the letters to match the solution...
    // ..add to the win counter & give the user an alert.

    // Update the win counter in the HTML & restart the game.
    startGame();

  // If we've run out of guesses..
    // Add to the loss counter.
    // Give the user an alert.
    // Update the loss counter in the HTML.
    // Restart the game.
    startGame();


  //When number blanks if filled with right words then you win
  if(rightGuessCounter === numBlanks){
    winCount++;
    document.getElementById("wins").innerHTML = winCount;
    alert("You Win");
    reset();
  }
  else if(guessesLeft === 0){
    lossCount++;
    document.getElementById("losses").innerHTML = winCount;
    alert("You Lose");
    reset();
  }
}



// on initial page load Starts the Game by running the startGame() function
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  // Runs the code to check for correctness.
  checkLetters(letterGuessed);
  // Runs the code after each round is done.
  roundComplete();
};

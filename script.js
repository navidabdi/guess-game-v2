/**
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses

// Variable for store the correct random number

let randNumber = getRandomNumber();
let numberGuess;
let guesses = [];
window.onload = function () {
  document.getElementById('number-submit').addEventListener('click', playGame);
  document.getElementById('restart-game').addEventListener('click', initGame);
  document.getElementById('number-guess').addEventListener('change', (e) => {
    numberGuess = e.target.value;
  });
};

/**
 * Functionality for playing the whole game
 */
function playGame() {
  displayResult();
  displayHistory(saveGuessHistory(numberGuess));
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement
 */
function displayResult() {
  if (numberGuess > randNumber) {
    showNumberAbove();
  } else if (numberGuess < randNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
  guesses = [];
  document.getElementById('number-guess').value = '';
  randNumber = getRandomNumber();
  resetResultContent();
  displayHistory();
  //   window.location.reload();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById('result').innerHTML = '';
  document.getElementById('history').innerHTML = '';
  document.getElementById(
    'title'
  ).innerHTML = `<h1 id="title" class="banner p-3">1.2.3.</h1>`;
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

/**
 * Save guess history
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  guesses.push(guess);
  return guesses;
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li>
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory(guesses) {
  let index;
  if (guesses !== undefined) {
    index = guesses.length - 1;
  }
  let list = "<ul class='list-group'>";

  while (index >= 0) {
    list += `<li class='list-group-item'>You guessed ${guesses[index]}</li>`;
    index--;
  }
  list += '</ul>';
  document.getElementById('history').innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case 'warning':
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case 'won':
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += '</div>';
  return dialog;
}

function showTheNumOfGuess(theNumOfGuess) {
  document.getElementById(
    'title'
  ).innerHTML = `<p class="success">Your Total Guesses: ${theNumOfGuess}</p>`;
}

function showYouWon() {
  const text = 'Awesome job, you got it!';
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters
   */
  let resultDialog = getDialog('won', text);
  showTheNumOfGuess(guesses.length + 1);
  document.getElementById('result').innerHTML = resultDialog;
}

function showNumberAbove() {
  const text = 'Your guess is too high!';
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  let resultDialog = getDialog('warning', text);
  document.getElementById('result').innerHTML = resultDialog;
}

function showNumberBelow() {
  const text = 'Your guess is too low!';
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  let resultDialog = getDialog('warning', text);
  document.getElementById('result').innerHTML = resultDialog;
}

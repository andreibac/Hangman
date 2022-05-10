<script>

// variables
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // alphabet letters
var secretWord = 'wellcode'; // secret word
var lives = 10; // starting lives
var guessedLetters = 0;

// get Elements
var showLives = document.getElementById('lives');
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// ===Functions===

// Create buttons for letters
function createButtons() {
  myFrag = document.createDocumentFragment(); // create fragment object
  for (var i = 0; i < alphabet.length; ++i) {
    var myButton = document.createElement('button'); // create button object
    myButton.innerHTML = alphabet[i]; // take letters from alphabet list and add it to the button object
    myButton.id = alphabet[i]; // assign letter to button id
    myButton.setAttribute('onclick', 'searchLetter(this.id); this.disabled=true') // set button attribute
    myFrag.appendChild(myButton); // add the new button to the fragment
  }
  document.getElementById('buttons').appendChild(myFrag); // add the created fragment to the element with id 'buttons'
}

// Create a row with secret word
function createSecretWord() {
  myFrag2 = document.createDocumentFragment(); // create fragment object
  for (var i = 0; i < secretWord.length; ++i) {
    var myLetter = document.createElement('th');
    myLetter.innerHTML = '?';
    myLetter.id = 'letter' + (i+1);
    myFrag2.appendChild(myLetter);
  }
  document.getElementById('secretWord').appendChild(myFrag2);
}

function remainingLives() {
  showLives.innerHTML = lives + ' lives'; // Updates lives
}

function searchLetter(clicked) {
  var found = 0;
  for(var i = 0; i < secretWord.length; ++i) {
    if(clicked==secretWord[i]) {
      document.getElementById('letter' + (i+1)).innerHTML = clicked; // shows the guessed letter
      found = 1;
      ++guessedLetters;
    }
  }
  if(!found) {
    --lives;
    remainingLives();
    animation(lives);
  }
  if(guessedLetters == secretWord.length) {
    alert('You win');
  } else if(lives < 1) {
    alert('You lost');
  }
}

function animation(x) {
  if(x == 9) {
    ctx.moveTo(100,250);
    ctx.lineTo(250,250); // ground
  } else if(x == 8) {
    ctx.moveTo(100,250);
    ctx.lineTo(100,50); // pillar
  } else if(x == 7) {
    ctx.moveTo(100,50);
    ctx.lineTo(200,50); // support
  } else if(x == 6) {
    ctx.moveTo(200,50);
    ctx.lineTo(200,80); // rope
  } else if(x == 5) {
    ctx.beginPath();
    ctx.arc(200, 100, 20, 0, 2 * Math.PI); // head
  } else if(x == 4) {
    ctx.moveTo(200,120);
    ctx.lineTo(200,200); // body
  } else if(x == 3) {
    ctx.moveTo(200,200);
    ctx.lineTo(220,230); // right leg
  } else if(x == 2) {
    ctx.moveTo(200,200);
    ctx.lineTo(180,230); // left leg
  } else if(x == 1) {
    ctx.moveTo(200,150);
    ctx.lineTo(230,180); // right arm
  } else if(x == 0) {
    ctx.moveTo(200,150);
    ctx.lineTo(170,180); // left arm
  }
  ctx.stroke();
}

createButtons();
remainingLives();
createSecretWord();

</script>

// variables
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
let secretWord = 'wellcode';
let myLives = 10; 
let guessedLetters = 0;

// get Elements
let showLives = document.getElementById('lives');
let canvas = document.getElementById('myCanvas');
let draw = canvas.getContext('2d');

// ===Functions===

// Create buttons for letters
function createButtons() {
  myFrag = document.createDocumentFragment(); // create fragment object
  for (let i = 0; i < alphabet.length; ++i) {
    let myButton = document.createElement('button'); // create button object
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
  for (let i = 0; i < secretWord.length; ++i) {
    let myLetter = document.createElement('th');
    myLetter.innerHTML = '?';
    myLetter.id = 'letter' + (i + 1);
    myFrag2.appendChild(myLetter);
  }
  document.getElementById('secretWord').appendChild(myFrag2);
}

function remainingLives() {
  showLives.innerHTML = myLives + ' lives'; // Update lives
}

function searchLetter(clicked) {
  let found = 0;
  for(let i = 0; i < secretWord.length; ++i) {
    if(clicked == secretWord[i]) {
      document.getElementById('letter' + (i + 1)).innerHTML = clicked; // shows the guessed letter
      found = 1;
      ++guessedLetters;
    }
  }
  if(!found) {
    --myLives;
    remainingLives();
    animation(myLives);
  }
  if(guessedLetters == secretWord.length) {
    alert('You win');
  } else if(myLives < 1) {
    alert('You lost');
  }
}

function animation(x) {
  if(x == 9) {
    draw.moveTo(100,250);
    draw.lineTo(250,250); // ground
  } else if(x == 8) {
    draw.moveTo(100,250);
    draw.lineTo(100,50); // pillar
  } else if(x == 7) {
    draw.moveTo(100,50);
    draw.lineTo(200,50); // support
  } else if(x == 6) {
    draw.moveTo(200,50);
    draw.lineTo(200,80); // rope
  } else if(x == 5) {
    draw.beginPath();
    draw.arc(200, 100, 20, 0, 2 * Math.PI); // head
  } else if(x == 4) {
    draw.moveTo(200,120);
    draw.lineTo(200,200); // body
  } else if(x == 3) {
    draw.moveTo(200,200);
    draw.lineTo(220,230); // right leg
  } else if(x == 2) {
    draw.moveTo(200,200);
    draw.lineTo(180,230); // left leg
  } else if(x == 1) {
    draw.moveTo(200,150);
    draw.lineTo(230,180); // right arm
  } else if(x == 0) {
    draw.moveTo(200,150);
    draw.lineTo(170,180); // left arm
  }
  draw.stroke();
}

createButtons();
remainingLives();
createSecretWord();

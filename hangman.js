<script>

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // alphabet letters
var secretWord = 'wellcode'; // secret word

// Create button for letters
myFrag = document.createDocumentFragment(); // create fragment object

for (var i = 0; i < alphabet.length; ++i) {
  const myButton = document.createElement('button'); // create button object
  myButton.innerHTML = alphabet[i]; // take letters from alphabet list and add it to the button object
  myButton.id = alphabet[i]; // assign letter to button id
  myButton.setAttribute('onclick', 'searchLetter(this.id); this.disabled=true') // set button attribute
  myFrag.appendChild(myButton); // add the new button to the fragment
}
document.getElementById("buttons").appendChild(myFrag); // add the created fragment to the element with id 'buttons'

// Create text with the remaining lives
var lives = 10;
document.getElementById('lives').innerHTML = "You have " + lives + " lives";

// Create a paragraph with secret word
for (var i = 0; i < secretWord.length; ++i) {
  document.getElementById('secretWord').innerHTML += '_ ';
}

// search letter in the secret word
function searchLetter(clicked) {
  let letter = clicked;
  for(var i = 0; i < secretWord.length; ++i) {
    alert('letter= ' + letter + '   secretWord[' + i + ']=' + secretWord[i]);
    if(letter==secretWord[i]) {
      document.getElementById('secretWord').innerHTML[i] = letter;
    }
  }
}

</script>

class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord=this.pickWord();
    this.letters=[];
    this.guessedLetters='';
    this.errorsLeft=8;
    // ... your code goes here
  }

  pickWord() {
    const index = Math.floor(Math.random()*this.words.length);
    return this.words[index];
    // ... your code goes here

  }

  checkIfLetter(key) {
    // ... your code goes here
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    if (alphabet.indexOf(key)!==-1){
      return true;
    }
    return false;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    if (this.letters.indexOf(letter)===-1){
      this.letters.push(letter);
      return true;
    }
    return false;
    
  }

  addCorrectLetter(letter) {
    // ... your code goes here
      this.guessedLetters+=letter;
  }

  addWrongLetter(letter) {
    // ... your code goes here
    if (this.secretWord.includes(letter)===false){
      this.errorsLeft--; 
      console.log(this.errorsLeft);
      this.guessedLetters+=letter;
    }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft===0){
      console.log('you lost')
      return true;
    }
    return false;

  }

  checkWinner() {
    // ... your code goes here
//     const lettersInOrder = this.guessedLetters.split('').sort().join('');
//     const secretWordsInOrder = this.secretWord.split('').sort().join('');
//     if (lettersInOrder===secretWordsInOrder){
//       return true;
//     }
//     return false;
//   }
      let count  = 0;
      for (let i=0;i<this.secretWord.length;i++){
        if (this.guessedLetters.includes(this.secretWord[i])){
          count++;
        }
      }
      if (count===this.secretWord.length){
        console.log('you won')
        return true
      }
      return false;
  }
}
let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  hangmanCanvas.writeCorrectLetter(event.key)
  hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
  hangmanCanvas.drawHangman(hangman.errorsLeft);
  hangmanCanvas.gameOver();
  hangmanCanvas.winner();
});

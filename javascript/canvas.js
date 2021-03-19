class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = hangman.secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context = '';
    this.context.drawLines()
  }

  drawLines() {
    // ... your code goes here
    let x=450;
    let y=750;
   for (let i=0; i<this.secretWord.length;i++){
      this.context.beginPath();
      this.context.moveTo(x,y);
      this.context.lineTo(x+=20,y)
      this.context.stroke();
      this.context.closePath();
      x+=10;
    }
  }

  writeCorrectLetter(letter) {
    // ... your code goes here
    let x=455;
    let y=740;
    for (let i=0;i<this.secretWord.length;i++){
      if (this.secretWord[i]===letter){ 
        x=455+i*30;
        this.context.font='40px serif'
        this.context.fillText(letter,x,y);
      }
    }
    hangman.addCorrectLetter(letter);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let x = 700;
    let y = 500;
    hangman.addWrongLetter(letter);
    for (let i=0; i<hangman.letters.length;i++){
      if (hangman.checkClickedLetters(letter)){
        y=500+i*30
        this.context.font='40px serif';
        this.context.fillText(letter,x,y)
      }
    }
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch(hangman.errorsLeft){
      case '8':
        this.context.beginPath();
        this.context.moveTo(100,750);
        this.context.lineTo(150,700);
        this.context.lineTo(200,750);
        this.context.lineTo(100,750);
        this.context.stroke();
        this.context.closePath();
        break;
      case '7':
        this.context.beginPath();
        this.context.moveTo(100,750);
        this.context.lineTo(150,700);
        this.context.lineTo(200,750);
        this.context.lineTo(100,750);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,700);
        this.context.lineTo(150,100);   
        this.context.stroke();
        this.context.closePath();
        break;
      case '6':
        this.context.beginPath();
        this.context.moveTo(100,750);
        this.context.lineTo(150,700);
        this.context.lineTo(200,750);
        this.context.lineTo(100,750);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,700);
        this.context.lineTo(150,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,100);
        this.context.lineTo(400,100);   
        this.context.stroke();
        this.context.closePath();
        break;
      case '5':
        this.context.beginPath();
        this.context.moveTo(100,750);
        this.context.lineTo(150,700);
        this.context.lineTo(200,750);
        this.context.lineTo(100,750);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,700);
        this.context.lineTo(150,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,100);
        this.context.lineTo(400,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,100);
        this.context.lineTo(400,150);   
        this.context.stroke();
        this.context.closePath();
        break;
      case '4':
        this.context.beginPath();
        this.context.moveTo(100,750);
        this.context.lineTo(150,700);
        this.context.lineTo(200,750);
        this.context.lineTo(100,750);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,700);
        this.context.lineTo(150,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,100);
        this.context.lineTo(400,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,100);
        this.context.lineTo(400,150);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.arc(400,190,40,0,Math.PI*2);
        this.context.stroke();
        this.context.closePath();
        break;
      case '3':
        this.context.beginPath();
        this.context.moveTo(100,750);
        this.context.lineTo(150,700);
        this.context.lineTo(200,750);
        this.context.lineTo(100,750);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,700);
        this.context.lineTo(150,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,100);
        this.context.lineTo(400,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,100);
        this.context.lineTo(400,150);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.arc(400,190,40,0,Math.PI*2);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,230);
        this.context.lineTo(400,400);   
        this.context.stroke();
        this.context.closePath();
        break;
      case '2':
        this.context.beginPath();
        this.context.moveTo(100,750);
        this.context.lineTo(150,700);
        this.context.lineTo(200,750);
        this.context.lineTo(100,750);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,700);
        this.context.lineTo(150,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,100);
        this.context.lineTo(400,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,100);
        this.context.lineTo(400,150);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.arc(400,190,40,0,Math.PI*2);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,230);
        this.context.lineTo(400,400);   
        this.context.stroke();
        this.context.closePath();
        
        this.context.beginPath();
        this.context.moveTo(400,400);
        this.context.lineTo(350,450);   
        this.context.stroke();
        this.context.closePath();
        break;
      case '1':
        this.context.beginPath();
        this.context.moveTo(100,750);
        this.context.lineTo(150,700);
        this.context.lineTo(200,750);
        this.context.lineTo(100,750);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,700);
        this.context.lineTo(150,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,100);
        this.context.lineTo(400,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,100);
        this.context.lineTo(400,150);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.arc(400,190,40,0,Math.PI*2);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,230);
        this.context.lineTo(400,400);   
        this.context.stroke();
        this.context.closePath();
        
        this.context.beginPath();
        this.context.moveTo(400,400);
        this.context.lineTo(350,450);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,400);
        this.context.lineTo(450,450);   
        this.context.stroke();
        this.context.closePath(); 
        break;
      case '0':
        this.context.beginPath();
        this.context.moveTo(100,750);
        this.context.lineTo(150,700);
        this.context.lineTo(200,750);
        this.context.lineTo(100,750);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,700);
        this.context.lineTo(150,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(150,100);
        this.context.lineTo(400,100);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,100);
        this.context.lineTo(400,150);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.arc(400,190,40,0,Math.PI*2);
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,230);
        this.context.lineTo(400,400);   
        this.context.stroke();
        this.context.closePath();
        
        this.context.beginPath();
        this.context.moveTo(400,400);
        this.context.lineTo(350,450);   
        this.context.stroke();
        this.context.closePath();

        this.context.beginPath();
        this.context.moveTo(400,400);
        this.context.lineTo(450,450);   
        this.context.stroke();
        this.context.closePath();  

        this.context.beginPath();
        this.context.moveTo(350,270);
        this.context.lineTo(450,270);   
        this.context.stroke();
        this.context.closePath();
        break;
      default:
        this.context.beginPath();
        this.context.moveTo(100,750);
        this.context.lineTo(150,700);
        this.context.lineTo(200,750);
        this.context.lineTo(100,750);
        this.context.stroke();
        this.context.closePath();
    } 

  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}

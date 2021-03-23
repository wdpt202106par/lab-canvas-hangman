let wrongLetters='';
class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
    this.secretWord = hangman.secretWord;
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0,1200,800);
    this.drawLines()
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
    this.context.beginPath();
    this.context.moveTo(100,750);
    this.context.lineTo(150,700);
    this.context.lineTo(200,750);
    this.context.lineTo(100,750);
    this.context.stroke();
    this.context.closePath();
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
    errorsLeft=hangman.errorsLeft;
    let x = 800;
    let y = 300;
    // if letter is a letter and not repeated and not belong to secretword => write on the board 
    
    for (let i = 0; i< hangman.guessedLetters.length;i++){
      if (hangman.checkClickedLetters(letter) && this.secretWord.includes(letter)===false){
        wrongLetters+=' '+letter;
        console.log(wrongLetters);
          this.context.font='40px serif';
          this.context.fillText(wrongLetters,x,y);
      }
    }
      // this.context.font='40px serif';&& 
      // this.context.fillText(letter,x,y);
      hangman.addWrongLetter(letter);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch(errorsLeft){
      case 7:
        this.context.beginPath();
        this.context.moveTo(150,700);
        this.context.lineTo(150,200);   
        this.context.stroke();
        this.context.closePath();
        break;
      case 6:
        this.context.beginPath();
        this.context.moveTo(150,200);
        this.context.lineTo(400,200);   
        this.context.stroke();
        this.context.closePath();
        break;
      case 5:
        this.context.beginPath();
        this.context.moveTo(400,200);
        this.context.lineTo(400,250);   
        this.context.stroke();
        this.context.closePath();
        break;
      case 4:
        this.context.beginPath();
        this.context.arc(400,290,40,0,Math.PI*2);
        this.context.stroke();
        this.context.closePath();
        break;
      case 3:
        this.context.beginPath();
        this.context.moveTo(400,330);
        this.context.lineTo(400,500);   
        this.context.stroke();
        this.context.closePath();
        break;
      case 2:      
        this.context.beginPath();
        this.context.moveTo(400,500);
        this.context.lineTo(350,550);   
        this.context.stroke();
        this.context.closePath();
        break;
      case 1:
        this.context.beginPath();
        this.context.moveTo(400,500);
        this.context.lineTo(450,550);   
        this.context.stroke();
        this.context.closePath(); 
        break;
      case 0:
        this.context.beginPath();
        this.context.moveTo(350,370);
        this.context.lineTo(450,370);   
        this.context.stroke();
        this.context.closePath();
        break;
    } 

  }

  gameOver() {
    // ... your code goes here
    if (hangman.checkGameOver()){
      const gameOver=document.createElement('img')
      gameOver.src="images/gameover.png"
      const ratio = gameOver.naturalWidth/gameOver.naturalHeight
      this.context.drawImage(gameOver,450,300,300,300/ratio)
    }
  }

  winner() {
    // ... your code goes here
    if(hangman.checkWinner()){
      const awesome=document.createElement('img')
      awesome.src="images/awesome.png";
      const ratio = awesome.naturalWidth/awesome.naturalHeight;
      this.context.drawImage(awesome,450,300,300,300/ratio)
    }
  }
}

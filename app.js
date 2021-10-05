const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  currentGuess: null,
  prevGuesses: [],
  play: function() {       
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        console.log('secret num', this.secretNum);
       
      while (this.currentGuess != this.secretNum) { 
        this.prevGuesses.push(this.currentGuess);
        this.render(this.currentGuess); 
        this.getGuess(); 
     }  //while your guess isnt equal to the secret number it pushes the users guess to the prevGuesses array/call the render function to display if you're right or not. It'll keep going over and over as long as its true.
  getGuess: function(){
  let userResponse = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
  //This will allow the user to input their number and turn the string into a number. If they dont get it right it call the function again until they get it right. 
  if(Number.isNaN(userResponse)) {
    alert('Not a valid number!')    
    this.getGuess();
  }//this one will be alerted if the input is not a number 
  else if(userResponse < 1 || userResponse > 100){
    alert('Please guess between 1 and 100!')
    this.getGuess();
  }else{    //alert if they guess outside of the numbers prompted to guess between 
    this.currentGuess = userResponse;
    return userResponse; 
  }
  },
  render: function(number){
    console.log(number);
    let combinedGuesses = this.prevGuesses.join(",");
    if(number === this.secretNum){
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length} tries!`)      
    }else if(number > this.secretNum){      
      alert(`Your number is too high, you have guessed these numbers so far: 
      ${ combinedGuesses}`)
    }else{
      alert(`Your number is too low, you have guessed these numbers so far: 
      ${combinedGuesses}`)    
    }
  }  //the render function is returned based in the users input; if they guess the secretnum, if their guess is too high than the secretnum, and if their guess is too low than the secretnum. By using the temperal literal we are also using an alert to show the user what their previous guesses were also. 
}

game.play();


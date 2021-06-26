const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],

    play: function() {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      
      while (this.secretNum != null) {
        //Debugging
        console.log(this.prevGuesses);
        console.log(`current biggest num: ${this.biggestNum} and current smallest num: ${this.smallestNum} and secret num: ${this.secretNum}`);

        let guess = this.getGuess();
        this.prevGuesses.push(guess);

        game.render();
      }
    },
    getGuess: function() {
      let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`);
      let parsedGuess = parseInt(guess);

      if (parsedGuess > this.biggestNum) {
        alert("You can't enter a number bigger than the biggest number");
        this.getGuess();
      }
      else if (parsedGuess < this.smallestNum) {
        alert("You can't enter a number smaller than the smallest number");
        this.getGuess();
      }
      else if (parsedGuess) {
        return guess;
      }
      else {
        alert('That is not a number, please try again!');
        this.getGuess();
      }
    },
    render: function() {
      if (this.prevGuesses.length != 0) { //Make sure array is not empty
        latestGuess = this.prevGuesses[this.prevGuesses.length - 1];

        if (latestGuess > this.secretNum) {
          alert(`Your guess is too high! Previous guesses: ${this.prevGuesses.join(', ')}`);
          this.biggestNum = latestGuess;
        }
        else if (latestGuess < this.secretNum) {
          alert(`Your guess is too low! Previous guesses: ${this.prevGuesses.join(', ')}`)
          this.smallestNum = latestGuess;
        }
        else {
          //WON THE GAME
          this.secretNum = null;
          alert(`Congrats! You guessed the number in ${game.prevGuesses.length} guesses.`);
        }
      }
    }
  }


game.play();
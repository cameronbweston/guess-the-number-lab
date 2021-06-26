const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],

    play: function() {
      this.getGameRange();
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

      while (this.secretNum != null) {
        let guess = this.getGuess();
        this.prevGuesses.push(guess);

        game.render();
      }
    },
    getGameRange: function() {
        let topRange = parseInt(prompt('Enter a number to set the top range of the game:'));
        let bottomRange = parseInt(prompt('Enter a number to set the bottom range of the game:'));

        if (topRange && bottomRange) {
          this.biggestNum = topRange;
          this.bottomRange = bottomRange;
        }
        else {
          alert('One of those is not a whole number, please try again!');
          this.getGameRange();
        }
    },
    getGuess: function() {
      let guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));

      if (guess > this.biggestNum) {
        alert("You can't enter a number bigger than the biggest number");
        this.getGuess();
      }
      else if (guess < this.smallestNum) {
        alert("You can't enter a number smaller than the smallest number");
        this.getGuess();
      }
      else if (guess) {
        return guess;
      }
      else {
        alert('That is not a whole number, please try again!');
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
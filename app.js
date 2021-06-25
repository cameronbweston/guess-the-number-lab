const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: function() {
      let guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`);
      this.prevGuesses.push(guess);
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    }
  }

  //1.Allow player to continually be prompted to enter their guess until correct
  //2. If player guess incorrect, alert them with 'too high' or 'too low'
  //3. Maintain list of all previously guessed numbers
  //4. If player guesses correctly, display alert with congratulations and how many guesses it took


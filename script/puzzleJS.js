// TODO: 1, Make an array of the puzzleCards
//       2, Make each puzzleCard get a random position
//       3, Make each PuzzleCard get a random number
//       4, Make a resetButton and give it a random number
//       5, Make a visually displayed shuffle function
//       6, Make the user able to choose difficulty
//       7, Fix the BUG when turning 3 cards fast the 1st wont turn back

//Declaring my variables
const puzzleCard = document.querySelectorAll('.puzzle');
const cardSuccesBox = document.querySelector('.cardSucces');
const resetGame = document.querySelector('button');
const container = document.querySelector('.puzzleContainer');
const boxShadow = document.querySelectorAll('boxShadow');
const puzzleList = Array.from(puzzleCard);

//Random numbers given to each elements data-set-'value' befor start
for (var i = container.children.length; i >= 0; i--) {
  container.appendChild(container.children[Math.random() * i | 0]);
}



//Creating empty Arrays and a scorecounter
let puzzleArray = [];
let completed = [];
let cardSucces = 0;

// function for the callback, score counter and logic to game rules
let compare = (dataset, callback) => {
  if (puzzleArray.length == 2) {
    if (puzzleArray[0] == puzzleArray[1]) {
      completed[0].classList.add('success')
      completed[1].classList.add('success')
      puzzleArray = [];
      completed = [];
      cardSucces++;
      console.log(cardSucces);
      //IF all cards completed, display the winning box
      if (cardSucces === 8) {
        setTimeout(function() {
           cardSuccesBox.style.display = "block";
        }, 1000);
      }
    } else {
      setTimeout(function(){
          var myVar = setInterval(function(){ myTimer() }, 3000);

          function myTimer() {
              var d = new Date();
              var t = d.toLocaleTimeString();
              document.puzzleCard.innerHTML = t;
          }
        completed[1].classList.remove('turn')
        completed[1].classList.remove('turn')
        completed[0].classList.remove('turn')
        completed[0].classList.remove('turn')
        completed[1].classList.remove('turn')
        puzzleArray = [];
        completed = [];
      },1000);
    }
  }
};
//Looping through my array
Array.from(puzzleCard).forEach( (puzzleCard) => {
    puzzleCard.classList.add('boxShadow');
  // Creating a clickevent for the cards and calling the callback function
  puzzleCard.addEventListener('click', (e) => {
    puzzleCard.classList.toggle('turn');
    const dataset = e.target.dataset.puzzle;
    const puzzleTarget = puzzleArray.push(dataset);
    completed.push(puzzleCard);
    puzzleCard.classList.add('boxShadow');
    console.log(e.target.dataset.puzzle);
    return compare(e.target.dataset.puzzle);
  })
  //Resetting the game and shuffle the cards
  resetGame.addEventListener('click', () => {
    puzzleCard.classList.remove('turn');
    puzzleCard.classList.remove('success');
    puzzleCard.classList.remove('boxShadow');
    cardSuccesBox.style.display = "none";
    // cardSuccesBox.style.display = "none";
    for (var i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
    }
    puzzleArray = [];
    completed = [];
    cardSucces = 0;
    //Shuffle the cards in a random direction when clicked on button
    setTimeout(function() {
      for (cards of puzzleList) {
        let random = Math.random() * -10 * 20 + 'px';
        let random2 = Math.random() * -30 * -80 + 'px';
        let random3 = Math.random() * 20 * -100 + 'px';
        let randomDeg = Math.random() * 1500 + 'deg';
        cards.style.transition = "all 1.5s ease";
        cards.style.transform = `translateZ(${random3, random, random2})
        translateX(${random3, random2, random}) translateY(${random3, random2, random}) rotate(${randomDeg})`;
      }
    }, 100);
    //Moves the cards back to original position
    setTimeout(function(){
      for (cards of puzzleList) {
        let random2 = Math.random() * 0 + 'px';
        cards.style.transform = `translateY(${random2}) translateX(${random2})`;
        cards.removeAttribute('style');
        puzzleCard.classList.add('boxShadow');
      }
    }, 1800);
  })
})

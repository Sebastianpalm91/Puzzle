// TODO: 1, Make an array of the puzzleCards
//       2, Make each puzzleCard get a random position
//       3, Make each PuzzleCard get a random number
//       4, Make a resetButton and give it a random number
//       5, Make a visually displayed shuffle function

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
      if (cardSucces === 8) {
        setTimeout(function() {
           cardSuccesBox.style.display = "block";
        }, 1000);
      }
    } else {
      setTimeout(function(){
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
  // Creating a clickevent for the cards and calling the callback function
  puzzleCard.addEventListener('click', (e) => {
    puzzleCard.classList.toggle('turn');
    const dataset = e.target.dataset.puzzle;
    const puzzleTarget = puzzleArray.push(dataset);
    completed.push(puzzleCard);
    puzzleCard.classList.add('boxShadow');
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










// resetGame.addEventListener('click', () => {
//   // puzzleCard.classList.add('transition');
//   for (var i = 0; i < puzzleList.length; i++) {
//     Array.prototype.move = function(puzzleList, puzzleArray) {
//       var x = this[puzzleList];
//
//       this.splice(puzzleList, 1);
//       this.splice(puzzleArray,0,x);
//     }
//     const arr = [puzzleList];
//     puzzleCard.element = arr;
//     arr.move(2,1);
//     puzzleCard.element += ' ' + arr;
//   }
//   console.log(puzzleList);
// })

// Trying to add a shuffle function to the cards

//first try shuffle
// resetGame.addEventListener('click', () => {
// for (var i = 0; i < puzzleArray.length -16; i++) {
//   let currentLeft = puzzleArray[i].getBoundingClientRect().left
//   let currentTop = puzzleArray[i].getBoundingClientRect().top
//   let currentRight = puzzleArray[i].getBoundingClientRect().right
//   let currentBottom = puzzleArray[i].getBoundingClientRect().bottom
//
//   let nextLeft = puzzleArray[i + 1].getBoundingClientRect().left
//   let nextTop = puzzleArray[i + 1].getBoundingClientRect().top
//   let nextRight = puzzleArray[i + 1].getBoundingClientRect().right
//   let nextBottom = puzzleArray[i + 1].getBoundingClientRect().bottom
//
//   puzzleArray[i].style.left = nextLeft + 'px';
//   puzzleArray[i].style.top = nextTop + 'px';
//   puzzleArray[i].style.right = nextRight + 'px';
//   puzzleArray[i].style.bottom = nextBottom + 'px';
//
//   puzzleArray[i].style.left = currentLeft + 'px';
//   puzzleArray[i].style.top = currentTop + 'px';
//   puzzleArray[i].style.right = currentRight + 'px';
//   puzzleArray[i].style.bottom = currentBottom + 'px';
// }
// console.log(puzzleArray[i]);
//
// });
//second try shuffle
// Array.prototype.move = function (puzzleList, newArray) {
//     while (puzzleList < 0) {
//       puzzleList += this.length;
//     }
//     while (newArray < 0) {
//       newArray += this.length;
//     }
//     if (newArray >= this.length) {
//       var k = newArray - this.length;
//       while ((k--) + 1) {
//         this.push(undefined);
//       }
//     }
//     this.splice(newArray, 0, this.splice(puzzleList, 1)[0]);
//     return this;
//     console.log(Array.prototype.move);
//   };

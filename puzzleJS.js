// TODO: 1, Make an array of the puzzleCards
//       2, Make each puzzleCard get a random position
//       3, Make each PuzzleCard get a random number
//       4, Make a resetButton and give it a random number

const puzzleCard = document.querySelectorAll('.puzzle');
const puzzleList = Array.from(puzzleCard);
const resetGame = document.querySelector('button');
const back = document.querySelectorAll('.back');
const container = document.querySelector('.puzzleContainer');
const divs = document.querySelectorAll('div');
//Random numbers given to each elements data-set-'value' befor start
for (var i = container.children.length; i >= 0; i--) {
  container.appendChild(container.children[Math.random() * i | 0]);
}

//Creating empty Arrays
let puzzleArray = [];
let completed = [];

// function for the callback and logic to game rules
let compare = (dataset, callback) => {
  if (puzzleArray.length == 2) {
    if (puzzleArray[0] == puzzleArray[1]) {
      console.log('AYE');
      completed[0].classList.add('success')
      completed[1].classList.add('success')
      puzzleArray = [];
      completed = [];
    } else {
      setTimeout(function(){
        completed[1].classList.remove('turn')
        completed[0].classList.remove('turn')
        completed[0].classList.remove('turn')
        completed[1].classList.remove('turn')
        puzzleArray = [];
        completed = [];
        console.log('NO');
      },1000);
    }
  }
};


// TODO: Har löst så man får ut en Array av 16st. Får även in här så en transition läggs till på nedan dock när det vänder tillbaka


//Looping through my array and if clicked -> reset the game
Array.from(puzzleCard).forEach( (puzzleCard) => {
  resetGame.addEventListener('click', () => {
    puzzleCard.classList.remove('turn');
    puzzleCard.classList.remove('success');
    for (var i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
    }
    puzzleArray = [];
    completed = [];
  })
  //Shuffle the cards in a random direction and back
  resetGame.addEventListener('click', () => {
    setTimeout(function() {
      for (cards of puzzleList) {
        let random = Math.random() * -20 * 20 + 'px';
        let random2 = Math.random() * 30 * 30 + 'px';
        let random3 = Math.random() * 20 * -30 + 'px';
        let randomDeg = Math.random() * 500 + 'deg'
        cards.style.transition = "all 1s ease";
        console.log(random);
        cards.style.transform = `translateZ(${random3, random, random2}) translateX(${random3, random2, random}) translateY(${random3, random2, random}) rotate(${randomDeg})`;

      }
    }, 100);
    setTimeout(function(){
      for (cards of puzzleList) {
        let random2 = Math.random() * 0 + 'px';
        cards.style.transition = "all 1s ease";
        cards.style.transform = `translateY(${random2}) translateX(${random2})`;
        console.log(random2);
      }
    }, 1000);
  })
  // Creating a clickevent for the cards and calling the callback function
  puzzleCard.addEventListener('click', (e) => {
    puzzleCard.classList.toggle('turn');
    const dataset = e.target.dataset.puzzle;
    const puzzleTarget = puzzleArray.push(dataset);
    completed.push(puzzleCard);
    return compare(e.target.dataset.puzzle);
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

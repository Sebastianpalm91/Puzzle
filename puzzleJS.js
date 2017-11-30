// TODO: 1, Make an array of the puzzleCards
//       2, Make each puzzleCard get a random position
//       3, Make each PuzzleCard get a random number
//       4, Make a resetButton and give it a random number

const puzzleCard = document.querySelectorAll('.puzzle');
const puzzleList = Array.from(puzzleCard);
const resetGame = document.querySelector('button');
const back = document.querySelectorAll('.back');
const container = document.querySelector('.puzzleContainer');





for (var i = container.children.length; i >= 0; i--) {
  container.appendChild(container.children[Math.random() * i | 0]);
}

let puzzleArray = [];
let completed = [];
// function for the callback
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
        completed[1].classList.remove('turn')
        completed[0].classList.remove('turn')
        puzzleArray = [];
        completed = [];
        console.log('NO');
      },1500);
    }
  }
}

Array.from(puzzleCard).forEach( (puzzleCard) => {
  resetGame.addEventListener('click', () => {
    puzzleCard.classList.remove('turn');
    puzzleCard.classList.remove('success');
    for (var i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[Math.random() * i | 0]);
    }
    return true;
    puzzleArray = [];
    completed = [];


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
// for (var i = 0; i < puzzleList.length -1; i++) {
//   let currentLeft = puzzleList[i].getBoundingClientRect().left
//   let currentTop = puzzleList[i].getBoundingClientRect().top
//   let currentRight = puzzleList[i].getBoundingClientRect().right
//   let currentBottom = puzzleList[i].getBoundingClientRect().bottom
//
//   let nextLeft = puzzleList[i + 1].getBoundingClientRect().left
//   let nextTop = puzzleList[i + 1].getBoundingClientRect().top
//   let nextRight = puzzleList[i + 1].getBoundingClientRect().right
//   let nextBottom = puzzleList[i + 1].getBoundingClientRect().bottom
//
//   puzzleList[i].style.left = nextLeft + 'px';
//   puzzleList[i].style.top = nextTop + 'px';
//   puzzleList[i].style.right = nextRight + 'px';
//   puzzleList[i].style.bottom = nextBottom + 'px';
//
//   puzzleList[i].style.left = currentLeft + 'px';
//   puzzleList[i].style.top = currentTop + 'px';
//   puzzleList[i].style.right = currentRight + 'px';
//   puzzleList[i].style.bottom = currentBottom + 'px';
//   console.log();
// }
//
// });

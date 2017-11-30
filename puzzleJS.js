// TODO: 1, Make an array of the puzzleCards
//       2, Make each puzzleCard get a random position
//       3, Make each PuzzleCard get a random number

const randomNum = Math.floor(Math.random() * 10) + 1;
const puzzleCard = document.querySelectorAll('.puzzle');
const puzzleList = Array.from(puzzleCard);
// const removeCard = document.querySelectorAll('.puzzle');
// const dataSet = document.querySelectorAll('.puzzle');


const puzzleArray = [];

let compare = (dataset, callback) => {
  if (puzzleArray.length == 2) {
    if (puzzleArray[0] == puzzleArray[1]) {
      console.log('AYE');
      puzzleArray = [];
    } else {
      console.log('NO');
      puzzleArray = [];
    }
  }
}

Array.from(puzzleCard).forEach( (puzzleCard) => {
    puzzleCard.addEventListener('click', (e) => {
      puzzleCard.classList.toggle('turn');
      const dataset = e.target.dataset.puzzle;
      const puzzleTarget = puzzleArray.push(dataset);
      return compare(e.target.dataset.puzzle);

    })
})

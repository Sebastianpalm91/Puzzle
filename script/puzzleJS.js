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
const bounce = document.querySelector('.bounce');
const container = document.querySelector('.puzzleContainer');
const boxShadow = document.querySelectorAll('boxShadow');
const startTimer = document.querySelector('.startTimer')
const highScore = document.querySelector('.highScore');
const animated = document.querySelectorAll('.animated');
const shuffle = document.querySelector('.shuffle');
const scoreList = document.querySelector('li');
const puzzleList = Array.from(puzzleCard);
// Clock timer
var time = document.getElementsByTagName('h2')[0],
seconds = 0, minutes = 0,
t;


//Random numbers given to each elements data-set-'value' befor start
for (var i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
}



//Creating empty Arrays and a scorecounter
let puzzleArray = [];
let completed = [];
let cardSucces = 0;
let timerScore = [];

// function for the callback, score counter and logic to game rules
let compare = (dataset, callback) => {
    if (puzzleArray.length == 2) {
        function pause() {
            if (puzzleArray.length == 2)
            container.classList.add('pointer-stop');
            setTimeout(function () {
                container.classList.remove('pointer-stop');
            }, 1000)

        }
        pause();
        if (puzzleArray[0] == puzzleArray[1]) {
            completed[0].classList.add('success')
            completed[1].classList.add('success')
            puzzleArray = [];
            completed = [];
            cardSucces++;
            console.log(cardSucces);
            //IF all cards completed, display the winning box
            if (cardSucces === 1) {
                // console.log(stopTime);
                const stopTime = time.textContent;
                var node = document.createElement('li');
                const textnode = document.createTextNode(stopTime);
                node.appendChild(textnode);
                document.querySelector('.scoreList').appendChild(node);
                highScore.style.display = "block";
                seconds = 0; minutes = 0;
                clearTimeout(t);
                setTimeout(function() {
                    cardSuccesBox.style.display = "block";
                }, 1000);
            }
        }
        else {
            setTimeout(function(){
                completed[1].classList.remove('turn')
                completed[1].classList.remove('turn')
                completed[0].classList.remove('turn')
                completed[0].classList.remove('turn')
                puzzleArray = [];
                completed = [];
            },1000);
        }
    }
    if (puzzleArray.length == 3) {
        completed[0].classList.remove('turn')
        completed[1].classList.remove('turn')
        completed[2].classList.remove('turn')
    }
};
startTimer.addEventListener('click', () => {
    startTimer.style.display = "none";
    bounce.classList.add('bounce');
    // startTimer.classList.add('pointer-stop');
    startTimer.classList.remove('bounce');
    function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        time.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        timer();
    }
    function timer() {
        t = setTimeout(add, 1000);
    }
    timer();
    startTimer.onclick = timer;
    console.log(timer);
})
//Looping through my array
startTimer.classList.remove('bounce')
Array.from(puzzleCard).forEach( (puzzleCard) => {
    puzzleCard.classList.add('boxShadow');
    // Creating a clickevent for the cards and calling the callback function
    puzzleCard.addEventListener('click', (e) => {
        puzzleCard.classList.toggle('turn');

        // starttimer = "true";
        // 	timer();
        const dataset = e.target.dataset.puzzle;
        const puzzleTarget = puzzleArray.push(dataset);
        completed.push(puzzleCard);
        puzzleCard.classList.add('boxShadow');
        console.log(e.target.dataset.puzzle);
        return compare(e.target.dataset.puzzle);
    })
    //Resetting the game and shuffle the cards
    resetGame.addEventListener('click', () => {
        highScore.style.display = "none";
        time.textContent = "00:00";
        seconds = 0; minutes = 0;
        clearTimeout(t);
        shuffle.classList.remove('shuffle');
        bounce.classList.remove('bounce');
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
                startTimer.classList.add('bounce')
                startTimer.style.display = "block";
            }
        }, 1800);
    })
})






// var i = 0;
// var starttimer= "false";
//
//
// function timer(){
// 		if(starttimer=="true"){
// 			setTimeout(function(){
// 				i=i+0.01;
// 				$(".timer").html("<h1><center>"+ i.toFixed(2) + "</center></h1>");
// 				timer();
// 			},10);
// 		};
// };
// resetGame.addEventListener('click', resetGameCallback);

// var myVar = setInterval(function(){ myTimer() }, 3000);
//
// function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.puzzleCard.innerHTML = t;
// }

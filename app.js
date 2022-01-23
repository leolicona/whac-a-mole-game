

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let results = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;


function randomSquare() {
    console.log('Const squares Before', squares);
  squares.forEach(square => {
    square.classList.remove('mole');
  } )
    
  let randomSquare = squares [Math.floor(Math.random() * 9)];
  randomSquare.classList.add('mole')
  hitPosition = randomSquare.id;
    console.log('Random Position: ', randomSquare);
    console.log('Const squares after', squares);
    console.log('hitPosition', hitPosition);
    
  
  
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if(square.id == hitPosition){
      results++
      score.textContent = results;
      hitPosition = null;
    }
  })
});

function moveMole() {
 timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime --
    timeLeft.textContent = currentTime;
    if(currentTime == 0){
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      alert(`Game over! Your score is : ${results}`);
    }
}
let countDownTimerId = setInterval(countDown, 1000);


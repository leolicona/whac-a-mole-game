

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let results = 0;
//let hitPosition;
//let currentTime = 60;
//let timerId = null;


function randomSquare() {
    console.log('Const squares Before', squares);
  squares.forEach(square => {
    square.classList.remove('mole');
    console.log('squareId:', squares.id);
  
  } )
    
  let randomSquare = squares [Math.floor(Math.random() * 9)];
  randomSquare.classList.add('mole')


    console.log('Random Position: ', randomSquare);
    console.log('Const squares after', squares);
    console.log('squareId:', squares.id);
  
  
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    
  })
});

function moveMole() {
 let timeLeft = null;
 timerId = setInterval(randomSquare, 500)
}
moveMole()
//console.log('randomSquare(): ', randomSquare())

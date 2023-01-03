const colorChanger = document.querySelector('.change');

const container = document.querySelector('.container');

const span = document.querySelector('span');

const btnReset = document.querySelector('.btn-reset');

const nameColor = document.querySelector('.name-color');

const simple = ["green", "red", "rgba(133,122,200)", "#f15025"];

function getRandomNumber(){
    
    return Math.floor(Math.random() * simple.length)
}

const resetColor = () => {
    container.style.backgroundColor = '#f0f8ff'
    span.textContent = '#f0f8ff'
}

colorChanger.addEventListener('click', () => {
    const randomNumber = getRandomNumber();

    span.textContent = simple[randomNumber];
    container.style.backgroundColor = simple[randomNumber];
});

btnReset.addEventListener('click', resetColor)
const colorChanger = document.querySelector('.change');
console.log(colorChanger)
const container = document.querySelector('.container');

const span = document.querySelector('span');

const btnReset = document.querySelector('.btn-reset');

const userColor = document.querySelector('#user-color')

const ownColor = document.querySelector('#own-color')

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


colorChanger.addEventListener('click', () => {
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    } 
    
    span.textContent = hexColor;
    container.style.backgroundColor = hexColor;

});

function getRandomNumber(){
    
    return Math.floor(Math.random() * hex.length);
}

const resetColor = () => {
    container.style.backgroundColor = '#f0f8ff';
    span.textContent = '#f0f8ff';
}

btnReset.addEventListener('click', resetColor)

const fire = document.getElementById('fire');
const water = document.getElementById('water');

const fireSpeed = 5;
const waterSpeed = 5;

// Кнопки управления для Огня
const fireUp = document.getElementById('fireUp');
const fireDown = document.getElementById('fireDown');
const fireLeft = document.getElementById('fireLeft');
const fireRight = document.getElementById('fireRight');

// Кнопки управления для Воды
const waterUp = document.getElementById('waterUp');
const waterDown = document.getElementById('waterDown');
const waterLeft = document.getElementById('waterLeft');
const waterRight = document.getElementById('waterRight');

// Функция для перемещения Огня
function moveFire(direction) {
    let top = parseInt(fire.style.top);
    let left = parseInt(fire.style.left);
    
    switch (direction) {
        case 'up':
            fire.style.top = (top - fireSpeed) + 'px';
            break;
        case 'down':
            fire.style.top = (top + fireSpeed) + 'px';
            break;
        case 'left':
            fire.style.left = (left - fireSpeed) + 'px';
            break;
        case 'right':
            fire.style.left = (left + fireSpeed) + 'px';
            break;
    }
}

// Функция для перемещения Воды
function moveWater(direction) {
    let top = parseInt(water.style.top);
    let left = parseInt(water.style.left);
    
    switch (direction) {
        case 'up':
            water.style.top = (top - waterSpeed) + 'px';
            break;
        case 'down':
            water.style.top = (top + waterSpeed) + 'px';
            break;
        case 'left':
            water.style.left = (left - waterSpeed) + 'px';
            break;
        case 'right':
            water.style.left = (left + waterSpeed) + 'px';
            break;
    }
}

// Обработчики событий для кнопок Огня
fireUp.addEventListener('click', () => moveFire('up'));
fireDown.addEventListener('click', () => moveFire('down'));
fireLeft.addEventListener('click', () => moveFire('left'));
fireRight.addEventListener('click', () => moveFire('right'));

// Обработчики событий для кнопок Воды
waterUp.addEventListener('click', () => moveWater('up'));
waterDown.addEventListener('click', () => moveWater('down'));
waterLeft.addEventListener('click', () => moveWater('left'));
waterRight.addEventListener('click', () => moveWater('right'));

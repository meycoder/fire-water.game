const fire = document.getElementById('fire');
const water = document.getElementById('water');

const fireSpeed = 5;
const waterSpeed = 5;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        fire.style.top = (parseInt(fire.style.top) - fireSpeed) + 'px';
    } else if (e.key === 'ArrowDown') {
        fire.style.top = (parseInt(fire.style.top) + fireSpeed) + 'px';
    } else if (e.key === 'ArrowLeft') {
        fire.style.left = (parseInt(fire.style.left) - fireSpeed) + 'px';
    } else if (e.key === 'ArrowRight') {
        fire.style.left = (parseInt(fire.style.left) + fireSpeed) + 'px';
    }

    if (e.key === 'w') {
        water.style.top = (parseInt(water.style.top) - waterSpeed) + 'px';
    } else if (e.key === 's') {
        water.style.top = (parseInt(water.style.top) + waterSpeed) + 'px';
    } else if (e.key === 'a') {
        water.style.left = (parseInt(water.style.left) - waterSpeed) + 'px';
    } else if (e.key === 'd') {
        water.style.left = (parseInt(water.style.left) + waterSpeed) + 'px';
    }
});

var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
const genNew = document.getElementById('random');

function setGradient(gradient1, gradient2) {
	body.style.background = `linear-gradient(to right, ${gradient1}, ${gradient2})`;
	css.textContent = `${body.style.background};`;
	color1.value = gradient1;
	color2.value = gradient2;
}

const randomGradient = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return `#${randomColor}`;
};

setGradient(randomGradient(), randomGradient());
color1.addEventListener('input', () => setGradient(color1.value, color2.value));
color2.addEventListener('input', () => setGradient(color1.value, color2.value));
genNew.addEventListener('click', () => setGradient(randomGradient(), randomGradient()));

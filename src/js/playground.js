const box = document.getElementById('box1');
let goblinOnOff = 'box'
const goblin = () => setTimeout(() => {
	box.className = goblinOnOff;
	if (goblinOnOff === 'box') goblinOnOff = 'box goblin';
	else goblinOnOff = 'box';
	goblin();
}, 700);
goblin();

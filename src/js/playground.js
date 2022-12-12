let prevBox;
let boxId;
const goblinOn = 'box goblin';
const goblinOff = 'box'
const goblin = () => setInterval(() => {
	if (prevBox) goblinTrigger(prevBox, goblinOff);
	do {
		boxId = Math.floor(Math.random() * 16) + 1;
	} while (prevBox === boxId);
	prevBox = boxId;
	goblinTrigger(boxId, goblinOn);
}, 800);

function goblinTrigger(goblinBox, status) {
	const box = document.getElementById(`box${goblinBox}`);
	box.className = status;
}

goblin();

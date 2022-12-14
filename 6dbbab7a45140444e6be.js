import "core-js/modules/web.timers.js";
var prevBox;
var boxId;
var goblinOn = 'box goblin';
var goblinOff = 'box';
function goblinTrigger(goblinBox, status) {
  var box = document.getElementById("box".concat(goblinBox));
  box.className = status;
}
var goblin = function goblin() {
  return setInterval(function () {
    if (prevBox) goblinTrigger(prevBox, goblinOff);
    do {
      boxId = Math.floor(Math.random() * 16) + 1;
    } while (prevBox === boxId);
    prevBox = boxId;
    goblinTrigger(boxId, goblinOn);
  }, 800);
};
export { goblinTrigger, goblin };
goblin();
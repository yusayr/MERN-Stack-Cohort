"use strict";
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
function doSomething(keyPressed) {
    console.log(`key pressed in ${direction[keyPressed]} direction`);
}
console.log(direction.up);
console.log(direction.down);
console.log(direction.left);
console.log(direction.right);
doSomething(direction.up);
doSomething(direction.down);

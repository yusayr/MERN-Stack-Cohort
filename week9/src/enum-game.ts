enum direction {
    up,
    down,
    left,
    right
}

function doSomething(keyPressed : direction) {
    //do something
    console.log(`key pressed in ${direction[keyPressed]} direction`)
}
console.log(direction.up)
console.log(direction.down)
console.log(direction.left)
console.log(direction.right)
doSomething(direction.up);
doSomething(direction.down); 

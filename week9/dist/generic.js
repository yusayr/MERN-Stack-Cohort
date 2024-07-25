"use strict";
function identity(arr) {
    return arr;
}
let op1 = identity(["myString", "somestring", "yusayr", "khan"]);
let op2 = identity([23, 14, 22, 11]);
let upper = op1.map(s => s.toUpperCase());
console.log(upper);
console.log(op2);

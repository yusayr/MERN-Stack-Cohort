"use strict";
function runAfter1s(fn) {
    setTimeout(fn, 5000);
}
runAfter1s(function fn() {
    console.log("hi there");
});

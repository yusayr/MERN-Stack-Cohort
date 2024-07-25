"use strict";
function isEligible(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEligible(16));

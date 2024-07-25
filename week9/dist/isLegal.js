"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal({
    firstName: "harkirat",
    lastName: "Singh",
    age: 11
});

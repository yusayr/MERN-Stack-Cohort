var x = new Promise(function (resolve) {
    console.log("Waiting for timeout...")
    setTimeout(function () {
        resolve("Resolved");
    }, 3000)
});

// function callback(){
//     console.log(x);
// }

// console.log(x);


x.then((x) => {
    console.log(x)
});

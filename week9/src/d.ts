function runAfter1s(fn: ()=> void):void{
    setTimeout(fn, 5000)
}

runAfter1s(function fn(){
    console.log("hi there")
})
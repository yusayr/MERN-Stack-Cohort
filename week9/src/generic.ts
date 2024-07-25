function identity<T>(arr: T[]){
    return arr;
}

let op1 = identity<string>(["myString", "somestring","yusayr","khan"]) 
let op2 = identity<number>([23,14,22,11])

let upper = op1.map(s=>s.toUpperCase())
console.log(upper)
console.log(op2)
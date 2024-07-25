interface Person {
    name:string;
    age: number,
    greet(phrase: string):void //phrase is a parameter
}//we create an object and then we implenet it in the class

class Employee implements Person {
    //defined twice due to convention
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }

    greet(phrase: string):void {
        console.log(`${phrase} ${this.name}`)
    }
}

const e = new Employee("harkirat", 22)
e.greet("Hi there")
type Employee2 = { //Employee already defined in interface. hence shows error if used again.
    firstName: string,
    lastName: string
}

type Manager = {
    startDate: number,
    designation: string
}

type aggregate = Employee2 | Manager; //either employee or manager

const t: aggregate = { //aggregate is the type
    firstName: "yusayr",
    lastName: "khan",
    designation: "Associate"
}

console.log(t)
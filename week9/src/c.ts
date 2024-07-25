function isEligible(age: number) :boolean {
    if (age > 18) {
        return true
    }
    else {
        return false
    }
}

console.log(isEligible(16))
const firstName = "Ryszard"
const lastName = "Brzęczyszczykiewicz"
let age = 30

function execute() {
    logFirstAndLastName()
    logAge()
}

function logFirstAndLastName() {
    console.log(firstName + " " + lastName)
}

function logAge() {
    console.log(age)
}

function increaseAge() {
    logFirstAndLastName()
    logAge()
    age = age + 1
    logAge()
}

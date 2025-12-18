let name = "Andres"
let age = 32
let note = 1

let person = {
    name: "Andres",
    age: 32,
    note: 1,
} // lista desordenada

console.log(person)
console.log(person.name)
console.log(person['age'])

person.note = 5
console.log(person.note)

delete person.note
console.log(person)


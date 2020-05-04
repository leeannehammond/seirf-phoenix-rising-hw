////////////// Creating classes ////////////

class Hamster {
    constructor() {
        this.owner = ''
        this.name = name
        this.price = 15
    }
wheelRun() {
    console.log('squeak squeak')
}
eatFood() {
    console.log('nibble nibble')
}
getPrice() {
    return this.price
}
}

////////////// Person ///////////////////

class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
getName() {
    console.log('name: ', this.name)
}
getAge() {
    console.log('age: ', this.age)
}
getWeight() {
    console.log('weight: ', this.weight)
}
greet() {
    console.log('greetings ' + this.name)
}
eat() {
    this.weight++
    this.mood++
}
exercise() {
    this.exercise--
}
ageUp() {
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount += 10
}
buyHamster(hamster) {
    this.hamster.push(hamster)
    this.mood += 10
    this.bankAccount -= hamster.getPrice()
}
}

///////////// Create a story //////////////////

// instantiate
const timmy = new Person('Timmy')

// age up 5 years
for(let i = 0; i < 5; i++) {
    timmy.ageUp()
}
timmy.getAge()

// eat 5 times
for(let i = 0; i < 5; i++) {
    timmy.eat()
}
timmy.getWeight()

// time to exercise
for(let i = 0; i < 5; i++) {
    timmy.exercise()
}
timmy.getWeight()

// age 9 years
for(let i = 0; i  < 9; i++) {
    timmy.ageUp()
}
timmy.getAge()

// create a hamster
const gus = new Hamster('Gus')

// set owner
gus.owner = 'Timmy'
console.log(gus)

// buy  gus
timmy.buyHamster(gus)
console.log('timmy\'s hamsters: ', timmy.hamsters)

// age 15 years
for(let i = 0; i < 15; i++) {
    timmy.ageUp()
}
timmy.getAge()

// eat twice
for(let i = 0; i < 2; i++) {
    timmy.eat()
}
timmy.getWeight()

// exercise twice
for(let i = 0; i < 2; i++) {
    timmy.exercise()
}
timmy.getWeight()


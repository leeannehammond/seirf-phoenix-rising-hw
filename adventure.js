console.log('adventure.js is working')

// hero
class Hero {
    constructor(name){
        this.name = name
        this.health = 100
        this.weapons [
            { 
                name: 'sprinkle spray',
                hp: 5
            },
        {
            name: 'sugar shock',
            hp: 10
    }
        ]
        this.catchPhrases [
            'i\'m fresher than day old pizza',
            'you can\'t count my calories'
        ]
    }
    talkSass() {
        console.log(`${this.name} says`, this.catchPhrases[this.randomNumGenerator](this.catchPhrases))
    }
    announceHealth() {
        console.log(`${this.name}'s current health is at ${this.health}`)
    }
    fight() {
        console.log('I\'m ready to rumble')
    }

/////////////// our enemy ///////////////////////////
class enemy {
    constructor(name) {
        this.name = name
        this.health = 100
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        }
        this.catchPhrases = {
            ['i\'m youtube famous',
        'i\'m more  dangerous than an uncovered sewer'
        ]
    }
    talkSmack() {
        console.log(`${this.name} says`, this.catchPhrases[this.randomNumGenerator(this.catchPhrases)])
    }
    announceHealth() {
        console.log(`{this.health}'s current health is at ${this.health}`)
    }
    fight() {
        console.log('I\'m gonna flatten you  like a slice of pepperoni'')
    }
}

const pizzaRat = new enemy('Pizza Rat')

////////////// Walking down the street ////////////////
dougie.talkSass()
pizzaRat.talkSmack()
dougie.announceHealth()
pizzaRat.announceHealth()

////////////// fight ////////////////////////
dougie.fight(pizzaRat)
dougie.announceHealth()
pizzaRat.fight(dougie)
pizzaRat.announceHealth()
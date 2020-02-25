//set up server
// dependecies
const express = require('express')
const app = express()
const port = 3000

const pokemon = require('./models/pokemon.js')

//middleware
app.use(express.static('public'))

//route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

// get index
app.get('/pokemon', (req, res) => {
    for(let poke of pokemon) {
        let splitName = poke.name.split('')
        splitName[0] = splitName[0].toUpperCase()
        poke.name = splitName.join('')
    }
    //render
    res.render('index.ejs', {
        pokemon: pokemon
    })
})

// show certain pokemon
app.get('/pokemon/:indexOfPokemon', (req, res) => {
    res.render('show.ejs', {
        pokemon: pokemon[req.params.indexOfPokemon]
    })
})

//listeners
app.listen(port, () => {
    console.log(`connected to poke express! on port:${port}`)
})
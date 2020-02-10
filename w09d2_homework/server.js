////////////// Greetings //////////////////////

// make a route '/greeting' sending greeting

// Dependencies
const express = require('express');
const app = express();

// listen for when someone goes to
// localhost:2000/

const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/greeting', (req, res)=>{
  res.send('Hello Stranger!');
});

app.get('/greeting/'), (req,res) => {
  res.send('What is up, <name>')
};
});

app.listen(2000, () => {
    console.log("Wow! Hello there");
});
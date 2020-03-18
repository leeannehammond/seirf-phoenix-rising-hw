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

//////////////// Tip Calculator ////////////////

// app route of '/tip' w/2 params of total and tipPercentage
// hit route to display how much tip is w/total amt and tip amt
app.get('/ti[\p/:total/:tipPercentage', (req, res) => {
	console.log(req.params);
	res.send('/tip ' + '/ ' + req.params.total + ' /' + req.params.tipPercentage);
});
 
////////////// Magic 8 Ball ////////////////////
// route magic to expect phrase of url for 8ball
// return responses from array when asked question
// h1 of 8 ball response

const express = require('express');
const app = express();
const port = 3000;

const responseBack = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
"You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", 
"Signs point to yes", "Reply hazy try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again",
"Don't count on it", "My reply is no", "My sources say no","Outlook not so good", 
"Very doubtful"]

app.get('/magic', (req, res) => {
  res.send(`
    <h1>Magic 8 ball response</h1>
  `);
});

app.get('/:'/magic/Will%20I%20Be%20A%20Millionaire'', (req, res) => {
    res.send(magic[req.params.responseBack]);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});

///////////// Take one Down and Pass it Around ////////////////////////
// users should see 99 bottles of beer on the wall
// link to take one down, pass it around
// when number is in url, use should see number of bottles on wall and
// link to take one down
// if 0 bottles left, do not show a link-add link to start over. Direct user
// back to homepage. 

var express = require('express')
var app = express()
var port = 3001

app.get('/', (req, res) => {
  res.send(`
    <html>
    <body>
      <h1>99 bottles of beer on the wall</h1>
      <a href ="/98">take one down and pass it around</a>
    </body>
    </html>`
  )
})

app.get('/:number_of_bottles', (req, res) => {
  let bottleNum = parseInt(req.params.number_of_bottles)
  let takeOneDown = parseInt(bottleNum -1)
  if (bottleNum > 0) {
    res.send(`
    <html>
    <body>
    <h1>${bottleNum} bottles of beer on the wall</h1>
    <a href="http://localhost:3001/${takeOneDown}">take one down and pass it around</a>
    </body>
    </html>`)
  } else if (bottleNum === 0) {
    res.send(`<html>
    <body>
    <h1>${bottleNum} bottles of beer on the wall</h1>
    <a href="/">Start over</a>
    </body>
    </hmtl>`)
  }
})

app.listen(port, () => {
  console.log('app is running on port: ', port)
})
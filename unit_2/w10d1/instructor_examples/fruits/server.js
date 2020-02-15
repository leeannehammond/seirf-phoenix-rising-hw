const express = require("express");
const app = express();
const fruits = require("./models/fruits.js");

/*
Create = POST
Read = GET
Update = PUT
Delete = DELETE

request
..you might want/need to do something
..you use MIDDLEWARE to do that
response
*/

app.use((request, response, next) => {
    console.log('I run for all routes')
    // continue with your routing
    next()
})

// without this middle request.body is undefined
// with it...it add a body key and sets it to 
// whatever was sent in the body
app.use(express.urlencoded({extended:false}))


app.get("/fruits", (request, response) => {
  response.render("index.ejs", {
    fruits: fruits
  });
});

// without this route we would get
// Cannot POST /fruits
app.post('/fruits', (request,response) => {
    console.log('body', request.body)
    if(request.body.readyToEat === 'on') {
        request.body.readyToEat = true
    } else {
        request.body.readyToEat = false
    }

    let fruit = {}
    fruit.name = request.body.name
    fruit.color = request.body.color
    fruit.readyToEat = request.body.readyToEat
    fruits.push(fruit)

    console.log('fruits', fruits)
    // redirect here is used to send the user to the
    // app.get('/fruits') route
    response.redirect('/fruits')
})

// add a new get route for /fruits/new
app.get("/fruits/new", (request, response) => {
  response.render("new.ejs");
});

app.get("/fruits/:indexOfFruitsArray", (request, response) => {
  response.render("show.ejs", {
    fruit: fruits[request.params.indexOfFruitsArray]
  });
});

app.listen(3000, () => {
  console.log("I am listening on port 3000");
});

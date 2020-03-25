const express = require("express");
const app = express();
const port = 3000;

// requires
const items = require("./models/budget.js");

// body parser
app.use(express.urlencoded({extended:false})); 

// static
app.use(express.static('public'));

// routes
app.get('/budget',(req,res) => {                            // index
    res.render('index.ejs',{items});
});

app.get('/budget/new',(req,res) => {                        // new route
    res.render('new.ejs');
});

app.get('/budget/:id',(req,res) => {                        // show route
    res.render('show.ejs',{item: items[req.params.id]});
});

app.post("/budget", (req,res) => {
    console.log(req.body);
    let item = {}
    item.name = req.body.name;
    item.date = req.body.date;
    item.amount = Number(req.body.amount);
    item.tags = req.body.tags;
    items.push(item);
    res.redirect("/budget");
});






// server listen
app.listen(port, () => {
    console.log('budget server is running');
});
// start express
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//... and then farther down the file
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// new route
app.get('/logs/new', (req, res)=>{
    res.send('new');
});

//render
app.get('/fruits/new', (req, res)=>{
    res.render('new.ejs');
});

// create
app.post('/logs/', (req, res)=>{
    res.send('received');
});

// parse
app.use(express.urlencoded({extended:true}));
app.post('/logs/', (req, res)=>{
    res.send(req.body);
});

// upgrade data
app.post('/logs/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    res.send(req.body);
});

app.listen(3000, ()=>{
    console.log('listening');
});

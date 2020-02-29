// start express
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

//mongoose connect
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
mongoose.set('useFindAndModify', false);


// new route
app.get('/logs/new', (req, res)=>{
    res.send('new');
});

//render
app.get('/logs/new', (req, res)=>{
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
    if(req.body.shipIsBroken === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.shipIsBroken = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.shipIsBroken = false;
    }
    res.send(req.body);
});

// create data
const Logs = require('./models/logs.js');
//... and then farther down the file
app.post('/logs/', (req, res)=>{
    if (req.body.shipIsBroken === 'on') { //if checked, req.body.readyToEat is set to 'on'
        req.body.shipIsBroken = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.shipIsBroken = false;
    }
    Logs.create(req.body, (error, createdLogs)=>{
        res.send(createdLogs);
    });
});

app.get('/logs', (req, res)=>{
    res.send('index');
});
// render index
app.get('/logs', (req, res)=>{
    res.render('index.ejs');
});

app.get('/logs', (req, res)=>{
    Logs.find({}, (error, allLogs)=>{
        res.render('index.ejs', {
            logs: allLogs
        });
    });
});

// show route
app.get('/logs/:id', (req, res)=>{
    Logs.findById(req.params.id, (err, foundLogs)=>{
        res.send(foundLogs);
    });
});

//render show 
app.get('/logs/:id', (req, res)=>{
    Logs.findById(req.params.id, (err, foundLogs)=>{
        res.render('show.ejs', {
            logs: foundLogs
        });
    });
});




//listening on port

app.listen(3000, ()=>{
    console.log('listening');
});

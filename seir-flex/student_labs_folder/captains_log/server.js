// start express
const express = require('express');
const app = express();

app.listen(3000, ()=>{
    console.log('listening');
});

// new route
app.get('/logs/new', (req, res)=>{
    res.render('new');
});


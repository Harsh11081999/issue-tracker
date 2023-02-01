const express = require('express');
const app = express();
const expressLayout = require("express-ejs-layouts");
const db = require('./config/mongoose');
app.use(express.static('./assets'));
app.use(expressLayout);

app.use(express.urlencoded());

const port = 8000;

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use('/', require('./routes'));
app.listen(port , function(err){
    if(err){
        console.log(`Error in running our server : ${err}`);
    }
    console.log(`Server is Running algorithm!!! :${port}`);
});
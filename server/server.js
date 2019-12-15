var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const logger = require('morgan');
var cors = require('cors');
app.use(cors());
const db = require('./db/data');

var router = require('./routes/movie-router');

db.on('error',console.error.bind(console,'Mongodb Connection err'));
var port = process.env.PORT | 3300;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.get('/',(req,res) =>{
    res.send('hello body');
});
app.use('/api',router);
app.listen(port,(err)=>{
    if(err)
    return err;
    console.log("server in runnig from "+ port);
    
});
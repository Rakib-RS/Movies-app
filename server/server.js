var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const logger = require('morgan');
var cors = require('cors');
app.use(cors());
const db = require('./db/data');
const path = require('path');
var router = require('./routes/movie-router');

db.on('error',console.error.bind(console,'Mongodb Connection err'));
var port = process.env.PORT || 3300;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* /*Adds the react production build to serve react requests*/
//app.use(express.static(path.join(__dirname, "../client/build")));
/*React root
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname + "../client/build/index.html"));
});*/
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(logger('dev'));
app.get('/',(req,res) =>{
    res.send('hello body');
});
app.use('/api',router);
// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(port,(err)=>{
    if(err)
    return err;
    console.log("server in runnig from "+ port);
    
});


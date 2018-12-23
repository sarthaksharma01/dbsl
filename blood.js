var express = require('express');
var bodyparser = require('body-parser');
var app = express();
app.set('view engine','ejs');
app.listen(3000, () => {
    console.log("Listening on port 3000!")
});
app.use(express.static('public'));
app.get('/', function(req, res){
res.sendFile(__dirname + '/1b.html')
});
app.get('/signup', function(req,res){
res.sendfile(__dirname +'/signin.html')
});
app.get('/login/:email', function(req,res){
 res.send('you requested for the profile of ' + req.param.email);
});


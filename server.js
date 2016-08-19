/**
 * Created by Jeevjyot on 6/28/16.
 */

//Declaration
var express=require("express");
var http=require("https");
var favicon = require('serve-favicon');


var app=express();

//All app.set function here
app.set('port', process.env.PORT || 3000);

//All app.use function here
app.use('/',express.static(__dirname + '/views/'));     //HTML files
app.use(favicon(__dirname + '/public/images/favicon.ico')); //favicon
app.use('/public',express.static(__dirname + '/public'));       //static files


//Starting the Server
app.listen(app.get('port'), function(){
    console.log("Im listening on port 3000");
});

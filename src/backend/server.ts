/// <reference path='../../typings/tsd.d.ts' />
import path = require("path");
import express = require('express');
let app : express.Express = express();
//ejs definitely typed file is not available to import
var ejs = require('ejs');
import pathToRegexp = require('path-to-regexp');
//import favicon = require('serve-favicon');
import cookie = require('cookie');
import logger = require('./routes/routes');
import routingFile = require('./routes/indexRoutingFile');
let port: number = process.env.port || 3000;
// there are 3 different styles to listen port
// 1.
let server = app.listen(port, () => {
    var listeningPort: number = server.address().port;
    console.log('now it is in listening mode on port: ' + listeningPort);
});

//   2.
//app.listen(port, function(){
// console.log("now it is in listening mode.");
//});

// 3.
//app.listen(port, () => {
//    console.log("now it is in listening mode.");
//});

// view engine setup
    app.set('view engine',"ejs");
    app.set('views',"./src/frontend/views");

// above 2 lines of code can also be written as below or or we can direct link through index.ejs-locals by public directory by following chunks of code
/*
    app.set('view engine',"ejs-locals");

 //Express Built-in Middleware
 //app.use(express.static(path.join(__dirname , "./public")));

 //Dynamic Middleware
 //function Static(str){
 // return function staticSubFunc(){
 //   }
 // }
 // app.use(Static(path.join(__dirname , "./public")));

*/

 //Custom Middleware
//app.use(( express.Request, res: express.Response, next: Function)=>{
//    console.log("Hello From Customize Middleware");
//    next();
//})

/*
    app.set('views',"./src/backend/public");
    app.get("/home1",function(req,res){
    console.log("no. of requests hitted from browser : " + counter);
    res.render("./index");
    });
*/



let counter = 0;
//let name = 'Ridss';

//Cookie
//The serialize function takes a third parameter, an object, to set cookie options

//let setName = cookie.serialize('name', 'rida');
/*
let err : string[] = [];
app.use(function(req, res, next){
    err = [];
    next(); // pass control to the next handler
});
*/

// users in our system
/*
let users = ['/Rida' , '/Junaid', '/Zia' , '/Taha' , '/Daniyal'];
*/

//there are three different styles to write middle ware

// 1. app.use(function(req,res,next){next();}
// 2.   app.use(req,res,next)=>{next();})
// 3. app.use(myMiddleWear);function(req,res,next){next();}

                         // Middle Ware Usage
/*

 //Middleware functions are executed sequentially, therefore the order of middleware inclusion is important.

app.use(function(req, res, next){
    if(req){
        console.log("" + req.method + " Request Hit By - " + req.url);
        counter++;
    }
    else{
        err.push("Error in request");
    }
    next(); // pass control to the next handler
});

 //Error-handling middleware
 //Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware. Even if you don’t need to use the next object, you must specify it to maintain the signature, otherwise it will be interpreted as regular middleware and fail to handle errors.
 //Define error-handling middleware like other middleware, except with four arguments instead of three, specifically with the signature (err, req, res, next)):

app.use(function(err:any,req,res,next){
    console.log("Error Middleware");
    console.log(err);
    res.send(err);
});

*/


//Middleware functions are executed sequentially, therefore the order of middleware inclusion is important.

            //Middle Ware Usage Example for user Request
/*
app.use(function(req,res,next){
    console.log("user finding middleware");
    if (users.indexOf(req.url) != -1) {
        console.log(" \n \n Hello "+ users.toString());
    } else {
        // next("Error in finding User");
        err.push("Error in finding User");
    }
    next(); // pass control to the next handler
});
*/

/* below code is comment out now because that was just a browser issue

////below code is basically not for /favicon.ico request from browser , this will prevent from ( to console ( all other request error / ' * ' request )on node_server ) when page will be refresh / reload by the user.
//
//        app.get("/favicon.ico", function (req, res) {
//        res.send("Response For refreshing previous page : request");
//        console.log("no. of requests hitted from browser : " + counter);
//        });

*/


    //Another Exapmle for user = " Rida " it will render a html file and Hello To User By Express Defining userName

// respond with "index file" on the homepage

/*

app.get('/Ridss', function (req, res) {
    console.log("no. of requests hitted from browser : " + counter);
       //  var userName = req.params.name;
    //res.type('.ejs');              // => 'text/ejs'
    console.log('Time:', Date.now());
    res.render("./index", { Username: name });
});


*/


/*
app.get("/",function(req,res){
    res.send("Response For / :  request");
    console.log("no. of requests hitted from browser : " + counter);
});

*/

            //  OR another chunk of code for / request
/*



//A route can be handled using an array of callback functions:

let slash : slash = function (req, res, next) {
    console.log('Ist Response For / :  request');
    next(); // pass control to the next handler
};
// Or below (6 lines Of)comment out code  can also be written in another style (i.e in 11 lines Of uncommented Code) as below:
        |
        V
 //let slash2ndRes : slash2ndRes = function (req, res) {
 //console.log('second Response For / :  request');
 //console.log("no. of requests hitted from browser : " + counter);
 //res.send('Hello !!');
 //};
 //app.get('/', [slash,slash2ndRes]);




let slash2ndRes : slash2ndRes = function (req, res) {
    console.log('second Response For / :  request');
    next(); // pass control to the next handler
};
app.get('/', [slash,slash2ndRes], function (req, res, next) {
    console.log('3rd response: and another response will be sent by the next function ...');
    next(); // pass control to the next handler
}, function (req, res) {
    console.log("no. of requests hitted from browser : " + counter);
    res.send('Hello !!!');
});



*/
                //Another Example For setting name for Admin using Path To RegExp On ' /Admin ' Request

// Path-to-RegExp

/*

app.get('/Admin',function(req,res){


    // Path-to-RegExp
// Express uses path-to-regexp for matching the route paths
//Turn an Express-style path string such as /Admin/:name into a regular expression.

    var keys = [];
    var re = pathToRegexp('/Admin/:Rida' , keys);
    console.log(keys);
    console.log(setName);
    res.send(setName);
    res.send(keys);
});

*/

        //All Other request handled by following lines of code
/*
    app.get("*",function(req,res){
    console.log("\n Error : Sorry no entry for this request on Express Node Server");
    console.log("no. of requests hitted from browser : " + counter);
    // res.send("Error : Sorry no response found for this request and no. of request hitted : " + counter.toString());
    res.sendStatus(404);

// or Sends a JSON response. This method is identical to res.send() with an object or array as the parameter. However, you can use it to convert other values to JSON, such as null, and undefined. (although these are technically not valid JSON).

 res.status(500).json({ error: 'message' })
});

*/

//app.use(favicon (__dirname + '/public/favicon.ico'));

                // Routing

app.use('/routingPage', routingFile);

//A chunk of code for User Login with the help of middleware with postfix method
app.use(logger.logger('_Login'));

    //app.enable('trust proxy');





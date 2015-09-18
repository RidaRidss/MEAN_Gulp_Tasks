///<refrence path="./../../typings/node/node.d.ts">
///<refrence path="./../../typings/express/express.d.ts">
/// <reference path="./../../typings/tsd.d.ts" />
import path = require("path");
import express = require('express');
let app:express.Express = express();
let viewRenderingEngine = require('ejs');
let port: number = process.env.PORT || 3000;
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

    app.set('view engine',"ejs");
    app.set('views',"./src/frontend/views");

// above 2 lines of code can also be written as below or or we can direct link through index.ejs by public directory by following chunks of code
/*
    app.set('view engine',"ejs");
    app.use(express.static(path.join(__dirname, "./public")));
    app.set('views',"./src/backend/public");
    app.get("/home1",function(req,res){
    console.log("no. of requests hitted from browser : " + counter);
    res.render("./index");
    });
*/


let counter = 0;

//there are three different styles to write middle wear

// 1. app.use(function(req,res,next){next();}
// 2.   app.use(req,res,next)=>{next();})
// 3. app.use(myMiddleWear);function(req,res,next){next();}

 // Middle Wear Usage

app.use(function(req, res, next){
    console.log("" + req.method + " Request Hit By - " + req.url);
    counter++;
    next();
});

//below code is basically not for /favicon.ico request from browser , this will prevent from ( to console ( all other request error / ' * ' request )on node_server ) when page will be refresh / reload by the user.

        app.get("/favicon.ico", function (req, res) {
        res.send("Response For refreshing previous page : request");
        console.log("no. of requests hitted from browser : " + counter);
        });


app.get("/home",function(req,res){
 console.log("no. of requests hitted from browser : " + counter);
    var a = "Hello Express";
    res.render("./index", { myContent : a });
});
app.get("/",function(req,res){
    res.send("Response For / :  request");
    console.log("no. of requests hitted from browser : " + counter);
});
app.get("*",function(req,res){
    console.log("\n Error : Sorry no entry for this request on Express Node Server");
    res.send("Error : Sorry no response found for this request and no. of request hitted : " + counter.toString());
    console.log("no. of requests hitted from browser : " + counter);
});

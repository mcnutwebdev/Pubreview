/*  Set up an express app  */

//  Call the required npm packages
var express = require("express");

//  Create an instance of express
var app = express();

//  Create an index Route
app.get("/", function(req, res) {
    res.send("Testing index route");
});

//  Set up server to listen
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Pubreview server listening");
}); 
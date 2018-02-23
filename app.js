/*  Set up a second GET route and serve views  */

//  ==============================
    //  REQUIREMENTS
//  ==============================
var express = require("express");

//  ==============================
    //  DECLARATIONS
//  ==============================
var app = express();

//  Set the view-engine. This means we dont have to use the .ejs extension in our routes
app.set("view engine", "ejs");

//  ==============================
    //  ROUTES
//  ==============================

//  Create an index route to serve home.ejs
app.get("/", function(req, res) {
    res.render("home");
});

//  Create a pubs route to serve pubs.ejs
app.get("/pubs", function(req, res) {
    res.render("pubs");
});

//  ==============================
    //  SERVER
//  ==============================

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Pubreview server listening");
});

// Requring Express
const express  = require ('express');

// Initialize Express in our application (app). 
let app = express ();


// Setting up the HTTP Methods

// GET Method to retrieve the data | The method takes two parameters: (1) Location (2) Request and Response Function.
app.get('/username', (req, res) => {
    res.send ("Hello Mustafa Alani!") // Sendign a reponse "Hello Mustafa Alani!" to the client after the request.
})


// Starting the server by listening to the calls through a port. Local port is (3000).
app.listen('3000', (req,res) => {
    console.log("Server is started at Port# 3000");
})


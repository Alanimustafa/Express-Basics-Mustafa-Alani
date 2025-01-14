
// Requring Express
const express  = require ('express');

// Initialize Express in our application (app). 
let app = express ();


// Setting up the HTTP Methods

// GET Method to retrieve the data from the server | The method takes two parameters: (1) Location (2) Request and Response Function.
app.get('/username', (req, res) => {
    res.send ("Hello Mustafa Alani!") // Sendign a reponse "Hello Mustafa Alani!" to the client after the request.
})


// POST Method to send the data to the server | The method takes two parameters: (1) Location (2) Request and Response Function.
app.post('/create', (req, res) => {
    res.send ("Created!") // Sendign a reponse "Hello Mustafa Alani!" to the client after the request.
})

// PUT Method to Edit/Add the data to the server | The method takes two parameters: (1) Location (2) Request and Response Function.
app.put('/update', (req, res) => {
    res.send ("updated!") // Sendign a reponse "Hello Mustafa Alani!" to the client after the request.
})


// DELETE Method to delete data to the server | The method takes two parameters: (1) Location (2) Request and Response Function.
app.delete('/delete', (req, res) => {
    res.send ("Deleted") // Sendign a reponse "Hello Mustafa Alani!" to the client after the request.
})




// Starting the server by listening to the calls through a port. Local port is (3000).
app.listen('3000', (req,res) => {
    console.log("Server is started at Port# 3000");
})


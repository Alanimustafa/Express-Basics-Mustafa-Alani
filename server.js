// Terminal
// Express Initialization
// 1. ----> npm init
//  [this lets u manually add settings and creates app]

// 2.npm install express
// when u install dep...packLock is created

// ----------------------------------------------------------


// Server.js
// This is the MAIN place to find All info about our app and how it behaves
// ---(CEO-NUCLEUS)
// This file will contain
// 1. Imports and Require Statements
    // ---> Us IMPORTING or CALLING our dependancies inside our app
// -----------------------------------------------------------------------------
const express  =  require('express')     
//  asking for express
const app =  express()
// initializing express
// -----------------------------------------------------------------------------

// 2.MiddleWARE
    // --> {Routing}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------



// 3. REST STRUCTURE  ---> Routing System
// -----------------------------------------------------------------------------
    // a) HTTP methods are used to create a routing system
        // GET, POST, PUT, DELETE
                // ---> ??  .get('/someRouteWuthData')
    app.get('/users',(req,res)=>{})
    // ------- GET --> Get information
    app.post('/users',(req,res)=>{})
    // ------- POST --> Post information
    app.put('/user/:id',(req,res)=>{})
    // ------- PUT  --> Edit information
    app.delete('/user/:id',(req,res)=>{})
    // ------- Delete  --> Delete information
    // -------USERROUTE

    app.get('',(req,res)=>{})
    // ------- GET --> Get information
    app.post('',(req,res)=>{})
    // ------- POST --> Post information
    app.put('',(req,res)=>{})
    // ------- PUT  --> Edit information
    app.delete('',(req,res)=>{})
    // ------- Delete  --> Delete informatio

    app.get('',(req,res)=>{})
    // ------- GET --> Get information
    app.post('',(req,res)=>{})
    // ------- POST --> Post information
    app.put('',(req,res)=>{})
    // ------- PUT  --> Edit information
    app.delete('',(req,res)=>{})
    // ------- Delete  --> Delete information
// -----------------------------------------------------------------------------

// 4. Server
// -----------------------------------------------------------------------------
    // a)All thing go through the server (reqs,res')
    // b) Control what PORT our application is served on

    app.listen("3000",(req,res)=>{

    })
// -----------------------------------------------------------------------------
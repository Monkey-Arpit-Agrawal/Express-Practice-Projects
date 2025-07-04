// # Create an HTTP Server

// It should have 4 routes

// 1. http://localhost:3000/multiply?a=1&b=2
// 2. http://localhost:3000/add?a=1&b=2
// 3. http://localhost:3000/divide?a=1&b=2
// 4. http://localhost:3000/subtract?a=1&b=2

// Here instead of query parameters use Dynamic


const express = require('express') ;
const app = express() ;

app.get('/multiply/:a/:b' , function (req , res) {
    
    let a = parseInt(req.params.a) ;
    let b = parseInt(req.params.b) ;

    let result = a * b ;

    res.status(200).json({
        'Result' : result
    });
}) ;

app.get('/add/:a/:b' , function (req , res) {
    
    let a = parseInt(req.params.a) ;
    let b = parseInt(req.params.b) ;

    let result = a + b ;

    res.status(200).json({
        'Result' : result
    });
}) ;

app.get('/divide/:a/:b' , function (req , res) {
    
    let a = parseInt(req.params.a) ;
    let b = parseInt(req.params.b) ;

    let result = a / b ;

    res.status(200).json({
        'Result' : result
    });
}) ;

app.get('/subtract/:a/:b' , function (req , res) {
    
    let a = parseInt(req.params.a) ;
    let b = parseInt(req.params.b) ;

    let result = a - b ;

    res.status(200).json({
        'Result' : result
    });
}) ;

app.listen(3000 , () => {
    console.log('App is running on the Port : 3000') ;
}) ;
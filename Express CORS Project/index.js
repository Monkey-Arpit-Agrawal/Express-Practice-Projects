const express = require('express') ;
const app = express() ;
const path = require('path') ;
const cors = require('cors') ;

app.use(cors()) ;

// app.get('/',function (req,res) {
//     res.status(200).sendFile(path.join(__dirname,'public','index.html')) ;
// }) ;

app.get('/sum' , function (req,res) {

    let a = parseInt(req.query.a) ;
    let b = parseInt(req.query.b) ;

    let sum = a + b ;

    res.status(200).json({
        'Result' : sum
    }) ;
}) ;

app.listen(3000 , () => {
    console.log('App Is Running On The Port : 3000') ;
}) ;
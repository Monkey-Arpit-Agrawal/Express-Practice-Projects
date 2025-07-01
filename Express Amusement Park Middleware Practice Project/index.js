// Amusement Park Middleware Practice Project

const express = require('express') ;
const app = express() ;

function isNotAMiddlewareFunction (age) {
    if (age >= 15) {
        return true ;
    } else {
        return false ;
    }
}

function middlewareFunction (req,res,next) {

    let age = req.query.age ;

    if (age >= 15) {
        next() ;
    } else {
        res.status(404).send('You Are Not Of Age Yet , Sooooooooooooooooooooooooooooooorrrrrrrrrrrrrry ') ;
    }
}

app.use(middlewareFunction)

app.get('/ride1' , function (req , res){
    res.status(200).send('You Can Enjoy Ride 1') ;
})

app.get('/ride2' , function (req , res){

        res.status(200).send('You Can Enjoy Ride 2') ;

})

app.listen(3000 , () => {
    console.log(`Server is running on the Port : ${3000}`) ;
})
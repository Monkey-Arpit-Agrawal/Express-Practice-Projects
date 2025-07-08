const express = require('express') ;
const app = express() ;

const jwt = require('jsonwebtoken') ;

let users = [] ;

let JWT_SECRET = "iLoveShiphaliRana" ;

function auth (req,res,next) {
    
    let userSendToken = req.headers['token'] ;

    if (userSendToken) {
        jwt.verify(userSendToken,JWT_SECRET,(err,result) => {
            if (err) {
                res.status(404).send('Invalid Access') ;
            } else {
                req.user = result ;
                next() ;
            }
        })
    } else {
        res.status(404).send('Unauthorised Access') ;
    }

}

app.use(express.json()) ;

app.post('/signup' , function (req , res){

    let username = req.body.username ;
    let password = req.body.password ;

    let userExists = users.find((user) => user.username == username) ;

    if (userExists) {
        
        res.status(404).send('User Already Exists') ;

    } else {
        
        let newUser = {
            'username' : username ,
            'password' : password
        }

        users.push(newUser) ;

        res.status(200).send('Signed Up Successfully') ;

    }

}) ;

app.post('/signin' , function (req , res){

    let username = req.body.username ;
    let password = req.body.password ;

    let userExists = users.findIndex((user) => user.username == username && user.password == password) ;

    if (userExists == -1) {
        
        res.status(404).send('User Does Not Exists') ;

    } else {
        
        let token = jwt.sign({
            'username' : users[userExists].username
        } , JWT_SECRET) ;

        res.header('token',token) ;

        res.status(200).json({
            'Message' : 'Signed In Successfully' 
        }) ;
    }
}) ;

app.get('/me' ,auth, function (req,res) {

    let username = req.user.username ;

    let information = users.filter((user) => (user.username == username))[0].password ;

    res.status(200).json({
        'Information' : information
    })
}) ;

app.listen(3000 , () => {
    console.log('App is running on the Port : 3000') ;
}) ;
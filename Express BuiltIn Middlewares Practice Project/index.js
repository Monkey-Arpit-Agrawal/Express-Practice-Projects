const express = require('express') ;
const app = express() ;

app.use(express.static('public')) ;

app.get('/' , function (req,res) {
    res.status(200).send('Welcome to homepage');
}) ;

app.get('/a' , function (req,res) {
    res.status(200).send('Welcome to A Page It is a default page') ;
}) ;

app.listen(3000 , () => {
    console.log('App is running on the port : 3000'); 
});
// Task :- Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console . 
// Also , create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it .

const express = require('express') ;
const app = express() ;

const path = require('path') ;

let requestCount = 0 ;

app.use(function (req,res,next){
    requestCount++ ;
    next() ;
})

app.use(function (req,res,next){

    let method = req.method ;
    let URL = req.url ;
    let hostname = req.hostname ;
    let host = req.headers.host ;
    let timestamp = new Date().toISOString() ;

    console.table({"Method" : method , "URL / PATH / ROUTE / ENDPOINT" : URL , "HOSTNAME / WEBSITE NAME / DOMAIN NAME" : hostname , 'HOST / NAME + PORT' : host , "Timestamp" : timestamp}) ;
    next() ;

})

app.get('/' , function (req,res) {
    res.status(200).sendFile(path.join(__dirname,'./index.html')) ;
}) ;

app.get('/requestCount' , function(req,res){
    console.log(requestCount) ;
    res.status(200).json({
        'Request Count' : requestCount
    }) ;
}) ;

app.use((req,res,next) => {
    res.status(404).send('Invalid Route') ;
}) ;

app.use((err,req,res,next) => {
    res.status(500).send('Some Error Occurred At The Server') ;
}) ;


app.listen(3000 , () => {
    console.log('App is running on the Port : 3000') ;
}) ;
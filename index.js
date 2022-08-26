
const express = require('express')
var app = express
const http = require('http').Server(app)
const mongoose = require('mongoose')



var Server = http.listen(3000, ()=>{
    console.log(`Server is running on port:`, Server.address().port)
})




const express = require('express')
var app = express
const http = require('http').Server(app)
const mongoose = require('mongoose')

var dburl = 'mongodb://127.0.0.1:27017/User'


mongoose.connect(dburl, (err) => {
    console.log('db connected', err)
})

var Server = http.listen(3000, ()=>{
    console.log(`Server is running on port:`, Server.address().port)
})



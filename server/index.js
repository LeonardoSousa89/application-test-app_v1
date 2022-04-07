const express   = require('express')
const server    = express.Router()



server.route('/app/login').get((req,res)=>{
    res.sendFile(__dirname + '/views/login/index.html')
})

server.route('/app/create-account').get((req,res)=>{
    res.sendFile(__dirname + '/views/account/index.html')
})

server.route('/app/users/:id').get((req,res)=>{
    res.sendFile(__dirname + '/views/app/index.html')
})



module.exports = server
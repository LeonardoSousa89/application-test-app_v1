const _port     = 3003

const server    = require('./server/index')
const express   = require('express')
const app       = express()

app.use('/', server)

app.listen(process.env.PORT || _port,()=>{
    console.log(`localhost:${_port}`)
})
